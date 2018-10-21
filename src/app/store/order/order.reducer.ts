import * as actions from "./order.actions";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Order } from "./order.model";

export const orderAdapter = createEntityAdapter<Order>();

export const initialState: State = orderAdapter.getInitialState(null);

export interface State extends EntityState<Order> {}

export function orderReducer(
  state: State = initialState,
  action: actions.OrderActions
) {
  switch (action.type) {
    case actions.OrderActionTypes.LOAD:
      return {
        ...state,
        loading: true
      };

    case actions.OrderActionTypes.LOAD_SUCCESS:
      return {
        ...orderAdapter.addMany(action.orders, state),
        loading: false,
        loaded: true
      };

    case actions.OrderActionTypes.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };

    case actions.OrderActionTypes.CREATE:
      return {
        ...state,
        loading: true
      };

    case actions.OrderActionTypes.CREATE_SUCCESS:
      return {
        ...orderAdapter.addOne(action.order, state),
        loading: false,
        loaded: true
      };

    case actions.OrderActionTypes.CREATE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };

    case actions.OrderActionTypes.UPDATE:
      return orderAdapter.updateOne(
        { id: action.id, changes: action.changes },
        state
      );

    case actions.OrderActionTypes.DELETE:
      return orderAdapter.removeOne(action.id, state);

    case actions.OrderActionTypes.LOAD_LEGACY:
      return {
        ...state,
        loading: true
      };

    case actions.OrderActionTypes.LOAD_LEGACY_SUCCESS:
      return {
        ...orderAdapter.addOne(TransformLegacyOrder(action.order), state),
        loading: false,
        loaded: true
      };

    case actions.OrderActionTypes.LOAD_LEGACY_FAIL:
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
function TransformLegacyOrder(order: any): Order {
  return { ...order };
}
