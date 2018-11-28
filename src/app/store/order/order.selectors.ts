import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Order } from "./order.model";
import * as orderReducer from "./order.reducer";
import * as fromOrderDetailSelector from "../order-detail";
import * as fromOrderDetailReducer from "../order-detail/order-detail.reducer";
import * as fromProductSelector from "../product";
import * as fromProductReducer from "../product/product.reducer";

export import State = orderReducer.State;
export const getOrderState = createFeatureSelector<orderReducer.State>("order");

/* Selectors */
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = orderReducer.orderAdapter.getSelectors(getOrderState);

//Selectors to be used below.
const SelectFullOrderListSelectors = {
  orderIds: orderReducer.orderAdapter.getSelectors(getOrderState).selectIds,
  orderEntities: orderReducer.orderAdapter.getSelectors(getOrderState)
    .selectEntities,
  orderDetailIds: fromOrderDetailReducer.orderDetailAdapter.getSelectors(
    fromOrderDetailSelector.getState
  ).selectIds,
  orderDetailEntities: fromOrderDetailReducer.orderDetailAdapter.getSelectors(
    fromOrderDetailSelector.getState
  ).selectEntities,
  productEntities: fromProductReducer.productAdapter.getSelectors(
    fromProductSelector.getState
  ).selectEntities
};

//selectFullOrderList
export const selectFullOrderList = createSelector(
  //Order Ids
  SelectFullOrderListSelectors.orderIds,

  //Orders Entity
  SelectFullOrderListSelectors.orderEntities,

  //Order Detail Ids
  SelectFullOrderListSelectors.orderDetailIds,

  //Order Detail Entity
  SelectFullOrderListSelectors.orderDetailEntities,

  //Product Entity
  SelectFullOrderListSelectors.productEntities,

  //Create the selector
  (
    orderIds: Array<string>,
    orderEntities,
    orderDetailIds: Array<string>,
    orderDetailEntities,
    productEntities
  ) =>
    CreateFullOrderListSelector({
      orderIds,
      orderEntities,
      orderDetailIds,
      orderDetailEntities,
      productEntities
    })
);

/* Private functions */

function CreateFullOrderListSelector(selectors): Array<Order> {
  //Use the ids here. This way we can control the order. We can't just by using keys on the dictionary.

  return selectors.orderIds.map(key => {
    //get the current order entity. Keep it immutable.
    let orderEntity = { ...selectors.orderEntities[key] };

    orderEntity.orderDetails = getOrderDetailAndProductForOrderEntity(
      orderEntity,
      selectors
    );

    return orderEntity;
  });
}

function getOrderDetailAndProductForOrderEntity(
  orderEntity: any,
  selectors
): Array<any> {
  return selectors.orderDetailIds.map(orderDetailId => {
    return {
      ...orderEntity,
      ...getProductForOrderDetailEntity(orderDetailId, selectors)
    };
  });
}

function getProductForOrderDetailEntity(orderDetailId: string, selectors) {
  return {
    ...selectors.orderDetailEntities[orderDetailId],
    ...{
      product: {
        ...selectors.productEntities[
          selectors.orderDetailEntities[orderDetailId].productId
        ]
      }
    }
  };
}
