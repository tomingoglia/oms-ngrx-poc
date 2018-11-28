import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as productReducer from "./product.reducer";
import * as fromOrderDetailSelector from "../order-detail/order-detail.selectors";
import * as fromOrderDetailReducer from "../order-detail/order-detail.reducer";
import * as podIndexSelector from "../product_order-detail_index/product_order-detail_index.selectors";
import * as podIndexReducer from "../product_order-detail_index/product_order-detail_index.reducer";

export import State = productReducer.State;
export const getProductState = createFeatureSelector<productReducer.State>(
  "product"
);

export const getState = createFeatureSelector<productReducer.State>("product");

/* Selectors */

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = productReducer.productAdapter.getSelectors(getState);

//Selectors to be used below
const selectProductsWithhOrderDetailsSelectors = {
  productEntities: productReducer.productAdapter.getSelectors(getProductState)
    .selectAll,
  podIndex: podIndexReducer.ODPIndexAdapter.getSelectors(
    podIndexSelector.getState
  ).selectEntities,
  orderDetailEntities: fromOrderDetailReducer.orderDetailAdapter.getSelectors(
    fromOrderDetailSelector.getState
  ).selectEntities
};

export const selectProductsWithOrderDetails = createSelector(
  //Product Entity
  selectProductsWithhOrderDetailsSelectors.productEntities,

  //Get pod Index
  selectProductsWithhOrderDetailsSelectors.podIndex,

  //Get Order Details
  selectProductsWithhOrderDetailsSelectors.orderDetailEntities,

  (products, podIndex, orderDetails) => {
    //Add the order details to the products if we have them.
    return products.map(product => {
      return {
        ...product,
        ...processOrderDetails({ orderDetails, podIndex, product })
      };
    });
  }
);

/* Private functions */
function processOrderDetails(selectors): any {
  //Need to check to make sure that we have an item in the pod index before we join it.
  //Not sure if we can be out of sync with the Order Details...may need to do some more checks here.
  return selectors.podIndex[selectors.product.id]
    ? {
        orderDetails:
          selectors.orderDetails[
            selectors.podIndex[selectors.product.id].orderDetailId
          ]
      }
    : {};
}
