import * as actions from "./order-detail.actions";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { OrderDetail } from "./order-detail.model";

export const orderDetailAdapter = createEntityAdapter<OrderDetail>();

export const initialState: State = orderDetailAdapter.getInitialState(null);

export interface State extends EntityState<OrderDetail> {}

export function orderDetailReducer(
  state: State = initialState,
  action: actions.OrderDetailActions
) {
  switch (action.type) {
    case actions.LOAD_DETAIL_LEGACY_SUCCESS:
      return {
        ...orderDetailAdapter.addMany(action.orderDetails, state),
        loading: false,
        loaded: true
      };

    case actions.LOAD_DETAIL_LEGACY_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };

    case actions.CHANGE_QUANTITY:
      return {
        ...orderDetailAdapter.updateOne(
          {
            id: action.id,
            changes: { quantity: action.value, updating: true }
          },
          state
        ),
        loading: true,
        loaded: false
      };

    case actions.CHANGE_QUANTITY_SUCCESS:
      return {
        ...orderDetailAdapter.updateOne(
          {
            id: action.orderDetail.id,
            changes: { quantity: action.orderDetail.quantity, updating: false } //could just spread the return object
          },
          state
        ),
        loading: false,
        loaded: true
      };

    case actions.CHANGE_QUANTITY_FAIL:
      return {
        ...orderDetailAdapter.updateOne(
          {
            id: action.orderDetail.id,
            changes: {
              quantity: action.orderDetail.quantity,
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
