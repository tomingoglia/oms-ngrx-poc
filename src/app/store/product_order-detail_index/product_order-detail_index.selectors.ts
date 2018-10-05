import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as indexReducer from "./product_order-detail_index.reducer";

export import State = indexReducer.State;

export const getState = createFeatureSelector<indexReducer.State>(
  "orderDetailProductIndex"
);

/* Selectors */

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = indexReducer.ODPIndexAdapter.getSelectors(getState);

/* Private functions */
