import * as actions from "./product.actions";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createFeatureSelector } from "@ngrx/store";
import { Product } from "./product.model";

export const productAdapter = createEntityAdapter<Product>();
export interface State extends EntityState<Product> {}

// const defaultProduct = {
//   ids: ["p1", "p2", "p3", "p4"],
//   entities: {
//     p1: {
//       id: "p1",
//       name: "Tom's Product 1"
//     },
//     p2: {
//       id: "p2",
//       name: "Stephanie's Product 1"
//     },
//     p3: {
//       id: "p3",
//       name: "Tom's Product 2"
//     },
//     p4: {
//       id: "p4",
//       name: "Stephanie's Product 2"
//     }
//   }
// };

export const initialState: State = productAdapter.getInitialState(null);

export function productReducer(
  state: State = initialState,
  action: actions.ProductActions
) {
  switch (action.type) {
    case actions.CREATE:
      return productAdapter.addOne(action.product, state);

    case actions.UPDATE:
      console.log(action.changes);
      return productAdapter.updateOne(
        { id: action.id, changes: action.changes },
        state
      );

    case actions.DELETE:
      return productAdapter.removeOne(action.id, state);

    case actions.ADD_MANY:
      return productAdapter.addMany(action.products, state);

    default:
      return state;
  }
}

export const getProductState = createFeatureSelector<State>("product");

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = productAdapter.getSelectors(getProductState);
