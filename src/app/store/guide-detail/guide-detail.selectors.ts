import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GuideDetail } from "./guide-detail.model";
import * as guideDetailReducer from "./guide-detail.reducer";

export import State = guideDetailReducer.State;

export const getState = createFeatureSelector<guideDetailReducer.State>(
  "guideDetail"
);

/* Selectors */

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = guideDetailReducer.guideDetailAdapter.getSelectors(getState);

/* Private functions */
