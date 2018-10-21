import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import * as OrderActions from "./order.actions";
import { of } from "rxjs";
import { catchError, switchMap, map, tap } from "rxjs/operators";
import { OrderService } from "./order.service";

@Injectable()
export class OrderEffects {
  constructor(private actions$: Actions, private orderService: OrderService) {}

  // Get Orders
  @Effect()
  loadOrders$ = this.actions$
    .ofType<OrderActions.Load>(OrderActions.OrderActionTypes.LOAD)
    .pipe(
      switchMap(() => {
        return this.orderService.getOrders().pipe(
          map(orders => {
            return new OrderActions.LoadSuccess(orders);
          }),
          catchError(error => of(new OrderActions.LoadFail(error)))
        );
      })
    );

  // Add Order
  @Effect()
  createOrder$ = this.actions$
    .ofType<OrderActions.Create>(OrderActions.OrderActionTypes.CREATE)
    .pipe(
      switchMap(action => {
        return this.orderService.addOrder(action.order).pipe(
          map(order => {
            return new OrderActions.CreateSuccess(order);
          }),
          catchError(error => of(new OrderActions.CreateFail(error)))
        );
      })
    );

  // get legacy order
  @Effect()
  loadLegacyOrders$ = this.actions$
    .ofType<OrderActions.LoadLegacy>(OrderActions.OrderActionTypes.LOAD_LEGACY)
    .pipe(
      switchMap(() => {
        return this.orderService.getOrderLegacy().pipe(
          map(order => {
            return new OrderActions.LoadLegacySuccess(order);
          }),
          catchError(error => of(new OrderActions.LoadLegacyFail(error)))
        );
      })
    );
}
