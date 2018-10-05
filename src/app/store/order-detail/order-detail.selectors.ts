import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OrderDetail } from "./order-detail.model";
import * as orderDetailReducer from "./order-detail.reducer";

export import State = orderDetailReducer.State;

export const getState = createFeatureSelector<orderDetailReducer.State>(
  "orderDetail"
);

/* Selectors */

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = orderDetailReducer.orderDetailAdapter.getSelectors(getState);

/* Private functions */
