import * as actions from "./guide.actions";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Guide } from "./guide.model";

export const guideAdapter = createEntityAdapter<Guide>();

export const initialState: State = guideAdapter.getInitialState(null);

export interface State extends EntityState<Guide> {}

export function guideReducer(
  state: State = initialState,
  action: actions.GuideActions
) {
  switch (action.type) {
    case actions.GuideActionTypes.LOAD:
      return {
        ...state,
        loading: true
      };

    case actions.GuideActionTypes.LOAD_SUCCESS:
      return {
        ...guideAdapter.addMany(action.guide, state),
        loading: false,
        loaded: true
      };

    case actions.GuideActionTypes.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };

    case actions.GuideActionTypes.CREATE:
      return {
        ...state,
        loading: true
      };

    case actions.GuideActionTypes.CREATE_SUCCESS:
      return {
        ...guideAdapter.addOne(action.guide, state),
        loading: false,
        loaded: true
      };

    case actions.GuideActionTypes.CREATE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };

    case actions.GuideActionTypes.UPDATE:
      return guideAdapter.updateOne(
        { id: action.id, changes: action.changes },
        state
      );

    case actions.GuideActionTypes.DELETE:
      return guideAdapter.removeOne(action.id, state);

    case actions.GuideActionTypes.LOAD_LEGACY:
      return {
        ...state,
        loading: true
      };

    case actions.GuideActionTypes.LOAD_LEGACY_SUCCESS:
      return {
        ...guideAdapter.addMany(TransformLegacyGuide(action.guide), state),
        loading: false,
        loaded: true
      };

    case actions.GuideActionTypes.LOAD_LEGACY_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };

    default:
      return state;
  }
}

/* Private functions */
function TransformLegacyGuide(guides: any): Array<Guide> {
  return guides;
}
