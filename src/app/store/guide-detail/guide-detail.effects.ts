import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as GuideDetailActions from "./guide-detail.actions";
import { of, from } from "rxjs";
import {
  catchError,
  switchMap,
  map,
  tap,
  mergeMap,
  flatMap
} from "rxjs/operators";
import { GuideService } from "../guide/guide.service";
import * as ProductActions from "../product/product.actions";
import { GuideDetail } from "./guide-detail.model";
import { Product } from "../product";

@Injectable()
export class GuideDetailEffects {
  constructor(private actions$: Actions, private guideService: GuideService) {}

  // get legacy order details
  @Effect()
  loadLegacyGuideDetail$ = this.actions$
    .ofType<GuideDetailActions.LoadDetailLegacy>(
      GuideDetailActions.GuideDetailActionTypes.LOAD_DETAIL_LEGACY
    )
    .pipe(
      switchMap(() => {
        return this.guideService.getGuideDetailLegacy().pipe(
          switchMap(guideDetails => [
            new ProductActions.AddMany(processProducts(guideDetails)),
            new GuideDetailActions.LoadDetailLegacySuccess(guideDetails)
          ]),
          catchError(error =>
            of(new GuideDetailActions.LoadDetailLegacyFail(error))
          )
        );
      })
    );

  // get legacy guide details
  @Effect()
  changeQuantity$ = this.actions$.pipe(
    ofType<GuideDetailActions.ChangeQuantity>(
      GuideDetailActions.GuideDetailActionTypes.CHANGE_QUANTITY
    ),
    map((action: GuideDetailActions.ChangeQuantity) => action),
    mergeMap(action =>
      this.guideService
        .changeQuantity({ id: action.id, quantity: action.value })
        .pipe(
          map(
            guideDetail =>
              new GuideDetailActions.ChangeQuantitySuccess(guideDetail)
          ),
          catchError(error =>
            of(new GuideDetailActions.ChangeQuantityFail(error))
          )
        )
    )
  );
}

function processProducts(guideDetail: Array<GuideDetail>): Array<Product> {
  return guideDetail.map(guideDetail => {
    //Clone product
    let product = { ...guideDetail.product };

    //Delete product from the order details
    delete guideDetail.product;

    //Still need the productId reference
    guideDetail.productId = product.id;

    return product;
  });
}
