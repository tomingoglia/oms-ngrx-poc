/* Reducers */
import { ActionReducerMap } from "@ngrx/store";
import { orderReducer } from "./order/order.reducer";
import { productReducer } from "./product/product.reducer";
import { orderDetailReducer } from "./order-detail/order-detail.reducer";
import { productOrderDetailIndexReducer } from "./product_order-detail_index/product_order-detail_index.reducer";
import { guideReducer } from "./guide/guide.reducer";
import { guideDetailReducer } from "./guide-detail/guide-detail.reducer";

export const reducers: ActionReducerMap<any> = {
  order: orderReducer,
  orderDetail: orderDetailReducer,
  product: productReducer,
  orderDetailProductIndex: productOrderDetailIndexReducer,
  guide: guideReducer,
  guideDetail: guideDetailReducer
};

/* Effects */
import { OrderEffects } from "./order/order.effects";
import { OrderDetailEffects } from "./order-detail/order-detail.effects";
import { GuideEffects } from "./guide/guide.effects";
import { GuideDetailEffects } from "./guide-detail/guide-detail.effects";

export const effects: Array<any> = [
  OrderEffects,
  OrderDetailEffects,
  GuideEffects,
  GuideDetailEffects
];
export * from "./order/order.effects";
export * from "./order-detail/order-detail.effects";
export * from "./guide/guide.effects";
export * from "./guide-detail/guide-detail.effects";
