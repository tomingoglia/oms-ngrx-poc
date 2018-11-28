import * as actions from "./order-detail.actions";
import { EntityState, createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { OrderDetail } from "./order-detail.model";

export const orderDetailAdapter = createEntityAdapter<OrderDetail>();

export const initialState: State = orderDetailAdapter.getInitialState(null);

export interface State extends EntityState<OrderDetail> {}

export function orderDetailReducer(
  state: State = initialState,
  action: actions.OrderDetailActions
) {
  switch (action.type) {
    case actions.OrderDetailActionTypes.LOAD_DETAIL_LEGACY_SUCCESS:
      return {
        ...orderDetailAdapter.addMany(action.orderDetails, state),
        loading: false,
        loaded: true
      };

    case actions.OrderDetailActionTypes.LOAD_DETAIL_LEGACY_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };

    case actions.OrderDetailActionTypes.CHANGE_QUANTITY:
      return changeQuanity(state, orderDetailAdapter, action);

    case actions.OrderDetailActionTypes.CHANGE_QUANTITY_SUCCESS:
      console.log("CHANGE_QUANTITY_SUCCESS", action);
      if (action.tempId) {
        const newState = action.tempId
          ? {
              ...orderDetailAdapter.removeOne(action.tempId, state)
            }
          : undefined;
        action.orderDetail.updating = false;

        return {
          ...orderDetailAdapter.addOne(action.orderDetail, newState),
          loading: false,
          loaded: true
        };
      } else {
        //console.log("CHANGE_QUANTITY_SUCCESS", action);
        return {
          ...orderDetailAdapter.updateOne(
            {
              id: action.orderDetail.id,
              changes: {
                quantity: action.orderDetail.quantity,
                updating: false
              } //could just spread the return object
            },
            state
          ),
          loading: false,
          loaded: true
        };
      }

    case actions.OrderDetailActionTypes.CHANGE_QUANTITY_FAIL:
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

function changeQuanity(
  state: State,
  orderDetailAdapter: EntityAdapter<OrderDetail>,
  action: any
): State | { loading: boolean; loaded: boolean } {
  if (action.quantity === 0) {
    return {
      ...orderDetailAdapter.updateOne(
        {
          id: action.id,
          changes: { quantity: action.value, deleting: true, updating: true }
        },
        state
      ),
      loading: true,
      loaded: false
    };
  } else {
    if (action.data.id) {
      return {
        ...orderDetailAdapter.updateOne(
          {
            id: action.data.id,
            changes: { quantity: action.data.quantity, updating: true }
          },
          state
        ),
        loading: true,
        loaded: false
      };
    } else {
      return {
        ...orderDetailAdapter.addOne(createOrderDetail(action), state),
        loading: true,
        loaded: false
      };
    }
  }

  function createOrderDetail(action: any): OrderDetail {
    action.data.tempId = `temp:${action.data.product.id}:${
      action.data.brokenCase
    }`;
    return {
      id: action.data.tempId,
      productId: action.data.product.id,
      product: action.data.product,
      quantity: action.data.quantity,
      brokenCase: action.data.brokenCase,
      updating: true,
      fail: false
    };
  }
}
