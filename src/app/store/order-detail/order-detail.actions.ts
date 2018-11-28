import { Action } from "@ngrx/store";
import { OrderDetail } from "./order-detail.model";

export enum OrderDetailActionTypes {
  LOAD_DETAIL_LEGACY = "[Order Detail] Load Detail Legacy",
  LOAD_DETAIL_LEGACY_SUCCESS = "[Order Detail] Load Detail Legacy Success",
  LOAD_DETAIL_LEGACY_FAIL = "[Order Detail] Load Detail Legacy Fail",
  CHANGE_QUANTITY = "[Order Detail] Change Quantity",
  CHANGE_QUANTITY_SUCCESS = "[Order Detail] Change Quantity Success",
  CHANGE_QUANTITY_FAIL = "[Order Detail] Change Quantity Fail"
}

export class ChangeQuantity implements Action {
  readonly type = OrderDetailActionTypes.CHANGE_QUANTITY;
  constructor(public data: any) {}
}

export class ChangeQuantitySuccess implements Action {
  readonly type = OrderDetailActionTypes.CHANGE_QUANTITY_SUCCESS;
  constructor(public orderDetail: OrderDetail, public tempId: string) {}
}
export class ChangeQuantityFail implements Action {
  readonly type = OrderDetailActionTypes.CHANGE_QUANTITY_FAIL;
  constructor(public orderDetail: OrderDetail) {}
}

export class LoadDetailLegacy implements Action {
  readonly type = OrderDetailActionTypes.LOAD_DETAIL_LEGACY;
  constructor() {}
}

export class LoadDetailLegacySuccess implements Action {
  readonly type = OrderDetailActionTypes.LOAD_DETAIL_LEGACY_SUCCESS;
  constructor(public orderDetails: Array<OrderDetail>) {}
}

export class LoadDetailLegacyFail implements Action {
  readonly type = OrderDetailActionTypes.LOAD_DETAIL_LEGACY_FAIL;
  constructor(public id: string) {}
}

export type OrderDetailActions =
  | LoadDetailLegacy
  | LoadDetailLegacySuccess
  | LoadDetailLegacyFail
  | ChangeQuantity
  | ChangeQuantitySuccess
  | ChangeQuantityFail;
