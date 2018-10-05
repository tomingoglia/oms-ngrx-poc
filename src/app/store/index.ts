/* Reducers */
import { ActionReducerMap } from "@ngrx/store";
import { orderReducer } from "./order/order.reducer";
import { productReducer } from "./product/product.reducer";
import { orderDetailReducer } from "./order-detail/order-detail.reducer";
import { productOrderDetailIndexReducer } from "./product_order-detail_index/product_order-detail_index.reducer";

export const reducers: ActionReducerMap<any> = {
  order: orderReducer,
  orderDetail: orderDetailReducer,
  product: productReducer,
  orderDetailProductIndex: productOrderDetailIndexReducer
};

/* Effects */
import { OrderEffects } from "./order/order.effects";
import { OrderDetailEffects } from "./order-detail/order-detail.effects";

export const effects: Array<any> = [OrderEffects, OrderDetailEffects];
export * from "./order/order.effects";
export * from "./order-detail/order-detail.effects";
