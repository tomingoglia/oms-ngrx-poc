import { Action } from "@ngrx/store";
import { OrderDetail } from "./order-detail.model";

export const LOAD_DETAIL_LEGACY = "[Order Detail] Load Detail Legacy";
export const LOAD_DETAIL_LEGACY_SUCCESS =
  "[Order Detail] Load Detail Legacy Success";
export const LOAD_DETAIL_LEGACY_FAIL = "[Order Detail] Load Detail Legacy Fail";
export const CHANGE_QUANTITY = "[Order Detail] Change Quantity";
export const CHANGE_QUANTITY_SUCCESS = "[Order Detail] Change Quantity Success";
export const CHANGE_QUANTITY_FAIL = "[Order Detail] Change Quantity Fail";

export class ChangeQuantity implements Action {
  readonly type = CHANGE_QUANTITY;
  constructor(public id: string, public value: number) {}
}

export class ChangeQuantitySuccess implements Action {
  readonly type = CHANGE_QUANTITY_SUCCESS;
  constructor(public orderDetail: OrderDetail) {}
}
export class ChangeQuantityFail implements Action {
  readonly type = CHANGE_QUANTITY_FAIL;
  constructor(public orderDetail: OrderDetail) {}
}

export class LoadDetailLegacy implements Action {
  readonly type = LOAD_DETAIL_LEGACY;
  constructor() {}
}

export class LoadDetailLegacySuccess implements Action {
  readonly type = LOAD_DETAIL_LEGACY_SUCCESS;
  constructor(public orderDetails: Array<OrderDetail>) {}
}

export class LoadDetailLegacyFail implements Action {
  readonly type = LOAD_DETAIL_LEGACY_FAIL;
  constructor(public id: string) {}
}

export type OrderDetailActions =
  | LoadDetailLegacy
  | LoadDetailLegacySuccess
  | LoadDetailLegacyFail
  | ChangeQuantity
  | ChangeQuantitySuccess
  | ChangeQuantityFail;
