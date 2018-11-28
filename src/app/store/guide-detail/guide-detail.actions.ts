import { Action } from "@ngrx/store";
import { GuideDetail } from "./guide-detail.model";

export enum GuideDetailActionTypes {
  LOAD_DETAIL_LEGACY = "[Guide Detail] Load Detail Legacy",
  LOAD_DETAIL_LEGACY_SUCCESS = "[Guide Detail] Load Detail Legacy Success",
  LOAD_DETAIL_LEGACY_FAIL = "[Guide Detail] Load Detail Legacy Fail",
  CHANGE_QUANTITY = "[Guide Detail] Change Quantity",
  CHANGE_QUANTITY_SUCCESS = "[Guide Detail] Change Quantity Success",
  CHANGE_QUANTITY_FAIL = "[Guide Detail] Change Quantity Fail"
}

export class ChangeQuantity implements Action {
  readonly type = GuideDetailActionTypes.CHANGE_QUANTITY;
  constructor(public id: string, public value: number) {}
}

export class ChangeQuantitySuccess implements Action {
  readonly type = GuideDetailActionTypes.CHANGE_QUANTITY_SUCCESS;
  constructor(public guideDetail: GuideDetail) {}
}
export class ChangeQuantityFail implements Action {
  readonly type = GuideDetailActionTypes.CHANGE_QUANTITY_FAIL;
  constructor(public guideDetail: GuideDetail) {}
}

export class LoadDetailLegacy implements Action {
  readonly type = GuideDetailActionTypes.LOAD_DETAIL_LEGACY;
  constructor() {}
}

export class LoadDetailLegacySuccess implements Action {
  readonly type = GuideDetailActionTypes.LOAD_DETAIL_LEGACY_SUCCESS;
  constructor(public guideDetail: Array<GuideDetail>) {}
}

export class LoadDetailLegacyFail implements Action {
  readonly type = GuideDetailActionTypes.LOAD_DETAIL_LEGACY_FAIL;
  constructor(public id: string) {}
}

export type GuideDetailActions =
  | LoadDetailLegacy
  | LoadDetailLegacySuccess
  | LoadDetailLegacyFail
  | ChangeQuantity
  | ChangeQuantitySuccess
  | ChangeQuantityFail;
