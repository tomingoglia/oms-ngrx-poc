import * as actions from "./guide-detail.actions";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { GuideDetail } from "./guide-detail.model";

export const guideDetailAdapter = createEntityAdapter<GuideDetail>({
  selectId: Guide => Guide.lineNumber
});

export const initialState: State = guideDetailAdapter.getInitialState(null);

export interface State extends EntityState<GuideDetail> {}

export function guideDetailReducer(
  state: State = initialState,
  action: actions.GuideDetailActions
) {
  switch (action.type) {
    case actions.GuideDetailActionTypes.LOAD_DETAIL_LEGACY_SUCCESS:
      return {
        ...guideDetailAdapter.addMany(action.guideDetail, state),
        loading: false,
        loaded: true
      };

    case actions.GuideDetailActionTypes.LOAD_DETAIL_LEGACY_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };

    case actions.GuideDetailActionTypes.CHANGE_QUANTITY:
      return {
        ...guideDetailAdapter.updateOne(
          {
            id: action.id,
            changes: { quantity: action.value, updating: true }
          },
          state
        ),
        loading: true,
        loaded: false
      };

    case actions.GuideDetailActionTypes.CHANGE_QUANTITY_SUCCESS:
      return {
        ...guideDetailAdapter.updateOne(
          {
            id: action.guideDetail.lineNumber,
            changes: { quantity: action.guideDetail.quantity, updating: false } //could just spread the return object
          },
          state
        ),
        loading: false,
        loaded: true
      };

    case actions.GuideDetailActionTypes.CHANGE_QUANTITY_FAIL:
      return {
        ...guideDetailAdapter.updateOne(
          {
            id: action.guideDetail.lineNumber,
            changes: {
              quantity: action.guideDetail.quantity,
              updating: false,
              fail: true
            }
          },
          state
        ),
        loading: true,
        loaded: false
      };

    default:
      return state;
  }
}
