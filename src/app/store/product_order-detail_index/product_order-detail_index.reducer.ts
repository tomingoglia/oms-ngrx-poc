import * as actions from "./product_order-detail_index.actions";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { PODIndex } from "./product_order-detail_index.model";

export const ODPIndexAdapter = createEntityAdapter<PODIndex>();

export const initialState: State = ODPIndexAdapter.getInitialState(null);

export interface State extends EntityState<PODIndex> {}

export function productOrderDetailIndexReducer(
  state: State = initialState,
  action: actions.ProductOrderDetailIndexActions
) {
  switch (action.type) {
    case actions.ADD_MANY:
      return {
        ...ODPIndexAdapter.addMany(action.productOrderDetailIndex, state),
        loading: false,
        loaded: true
      };

    default:
      return state;
  }
}
