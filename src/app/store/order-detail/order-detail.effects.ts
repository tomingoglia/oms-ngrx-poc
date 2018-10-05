import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import * as OrderDetailActions from "./order-detail.actions";
import { of, from } from "rxjs";
import { catchError, switchMap, map, tap } from "rxjs/operators";
import { OrderService } from "../order/order.service";
import * as ProductActions from "../product/product.actions";
import * as ODPIndexActions from "../product_order-detail_index/product_order-detail_index.actions";
import { OrderDetail } from "./order-detail.model";
import { PODIndex } from "../product_order-detail_index/product_order-detail_index.model";
import { Product } from "../product";

@Injectable()
export class OrderDetailEffects {
  constructor(private actions$: Actions, private orderService: OrderService) {}

  // get legacy order details
  @Effect()
  loadLegacyOrderDetail$ = this.actions$
    .ofType<OrderDetailActions.LoadDetailLegacy>(
      OrderDetailActions.LOAD_DETAIL_LEGACY
    )
    .pipe(
      switchMap(() => {
        return this.orderService.getOrderDetailLegacy().pipe(
          switchMap(orderDetails => [
            new ODPIndexActions.AddMany(processODPIndex(orderDetails)),
            new ProductActions.AddMany(processProducts(orderDetails)),
            new OrderDetailActions.LoadDetailLegacySuccess(orderDetails)
          ]),
          catchError(error =>
            of(new OrderDetailActions.LoadDetailLegacyFail(error))
          )
        );
      })
    );

  // get legacy order details
  @Effect()
  changeQuantity$ = this.actions$
    .ofType<OrderDetailActions.ChangeQuantity>(
      OrderDetailActions.CHANGE_QUANTITY
    )
    .pipe(
      switchMap(action => {
        return this.orderService
          .changeQuantity({ id: action.id, quantity: action.value })
          .pipe(
            map(orderDetail => {
              return new OrderDetailActions.ChangeQuantitySuccess(orderDetail);
            }),
            catchError(error =>
              of(new OrderDetailActions.ChangeQuantityFail(error))
            )
          );
      })
    );
}

function processODPIndex(orderDetails: Array<OrderDetail>): Array<PODIndex> {
  return orderDetails.map(orderDetail => {
    return { id: orderDetail.product.id, orderDetailId: orderDetail.id };
  });
}
function processProducts(orderDetails: Array<OrderDetail>): Array<Product> {
  return orderDetails.map(orderDetail => {
    //Clone product
    let product = { ...orderDetail.product };

    //Delete product from the order details
    delete orderDetail.product;

    //Still need the productId reference
    orderDetail.productId = product.id;

    return product;
  });
}
