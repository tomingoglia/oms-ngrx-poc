import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Guide } from "./guide.model";
import * as guideReducer from "./guide.reducer";
import * as fromGuideDetailSelector from "../guide-detail";
import * as fromGuideDetailReducer from "../guide-detail/guide-detail.reducer";
import * as fromProductSelector from "../product";
import * as fromProductReducer from "../product/product.reducer";
import * as fromOrderDetailSelector from "../order-detail/order-detail.selectors";
import * as fromOrderDetailReducer from "../order-detail/order-detail.reducer";
import * as podIndexSelector from "../product_order-detail_index/product_order-detail_index.selectors";
import * as podIndexReducer from "../product_order-detail_index/product_order-detail_index.reducer";

export import State = guideReducer.State;
export const getGuideState = createFeatureSelector<guideReducer.State>("guide");

/* Selectors */
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = guideReducer.guideAdapter.getSelectors(getGuideState);

//Selectors to be used below.
const SelectFullGuideListSelectors = {
  guideIds: guideReducer.guideAdapter.getSelectors(getGuideState).selectIds,
  guideEntities: guideReducer.guideAdapter.getSelectors(getGuideState)
    .selectEntities,
  guideDetailIds: fromGuideDetailReducer.guideDetailAdapter.getSelectors(
    fromGuideDetailSelector.getState
  ).selectIds,
  guideDetailEntities: fromGuideDetailReducer.guideDetailAdapter.getSelectors(
    fromGuideDetailSelector.getState
  ).selectEntities,
  podIndex: podIndexReducer.ODPIndexAdapter.getSelectors(
    podIndexSelector.getState
  ).selectEntities,
  orderDetailEntities: fromOrderDetailReducer.orderDetailAdapter.getSelectors(
    fromOrderDetailSelector.getState
  ).selectEntities,
  productEntities: fromProductReducer.productAdapter.getSelectors(
    fromProductSelector.getState
  ).selectEntities
};

//selectFullGuideList
export const selectFullGuideList = createSelector(
  //Guide Ids
  SelectFullGuideListSelectors.guideIds,

  //Guides Entity
  SelectFullGuideListSelectors.guideEntities,

  //Guide Detail Ids
  SelectFullGuideListSelectors.guideDetailIds,

  //Guide Detail Entity
  SelectFullGuideListSelectors.guideDetailEntities,

  //Get pod Index
  SelectFullGuideListSelectors.podIndex,

  //Get Order Details
  SelectFullGuideListSelectors.orderDetailEntities,

  //Product Entity
  SelectFullGuideListSelectors.productEntities,

  //Create the selector
  (
    guideIds: Array<string>,
    guideEntities,
    guideDetailIds: Array<string>,
    guideDetailEntities,
    podIndex,
    orderDetails,
    productEntities
  ) =>
    CreateFullGuideListSelector({
      guideIds,
      guideEntities,
      guideDetailIds,
      guideDetailEntities,
      podIndex,
      orderDetails,
      productEntities
    })
);

/* Private functions */

function CreateFullGuideListSelector(selectors): Array<Guide> {
  //Use the ids here. This way we can control the guide. We can't just by using keys on the dictionary.
  return selectors.guideIds.map(key => {
    //get the current guide entity. Keep it immutable?
    let guideEntity = { ...selectors.guideEntities[key] };

    guideEntity.guideDetails = getGuideDetailAndProductForGuideEntity(
      guideEntity,
      selectors
    );

    return guideEntity;
  });
}

function getGuideDetailAndProductForGuideEntity(
  guideEntity: any,
  selectors
): Array<any> {
  return selectors.guideDetailIds.map(guideDetailId => {
    return {
      ...guideEntity,
      ...getProductForGuideDetailEntity(guideDetailId, selectors)
    };
  });
}

function getProductForGuideDetailEntity(guideDetailId: string, selectors) {
  return {
    ...selectors.guideDetailEntities[guideDetailId],
    ...{
      product: {
        ...selectors.productEntities[
          selectors.guideDetailEntities[guideDetailId].productId
        ],
        ...processOrderDetails(
          selectors.guideDetailEntities[guideDetailId].productId,
          selectors
        )
      }
    }
  };
}

function processOrderDetails(productId: string, selectors): any {
  //Need to check to make sure that we have an item in the pod index before we join it.
  //Not sure if we can be out of sync with the Order Details...may need to do some more checks here.
  return selectors.podIndex[productId]
    ? {
        orderDetails:
          selectors.orderDetails[selectors.podIndex[productId].orderDetailId]
      }
    : {};
}
