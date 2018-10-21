import { Action } from "@ngrx/store";
import { Order } from "./order.model";

export enum OrderActionTypes {
  LOAD = "[Order] Load",
  LOAD_SUCCESS = "[Order] Load Success",
  LOAD_FAIL = "[Order] Load Fail",

  CREATE = "[Order] Create",
  CREATE_SUCCESS = "[Order] Create Success",
  CREATE_FAIL = "[Order] Create Fail",

  UPDATE = "[Order] Update",
  DELETE = "[Order] Delete",

  LOAD_LEGACY = "[Order] Load Legacy",
  LOAD_LEGACY_SUCCESS = "[Order] Load Legacy Success",
  LOAD_LEGACY_FAIL = "[Order] Load Legacy Fail"
}

export class Create implements Action {
  readonly type = OrderActionTypes.CREATE;
  constructor(public order: Order) {}
}

export class Update implements Action {
  readonly type = OrderActionTypes.UPDATE;
  constructor(public id: string, public changes: Partial<Order>) {}
}

export class Delete implements Action {
  readonly type = OrderActionTypes.DELETE;
  constructor(public id: string) {}
}

export class Load implements Action {
  readonly type = OrderActionTypes.LOAD;
  constructor() {}
}

export class LoadSuccess implements Action {
  readonly type = OrderActionTypes.LOAD_SUCCESS;
  constructor(public orders: Array<Order>) {}
}

export class LoadFail implements Action {
  readonly type = OrderActionTypes.LOAD_FAIL;
  constructor(public id: string) {}
}

export class CreateSuccess implements Action {
  readonly type = OrderActionTypes.CREATE_SUCCESS;
  constructor(public order: Order) {}
}

export class CreateFail implements Action {
  readonly type = OrderActionTypes.CREATE_FAIL;
  constructor(public id: string) {}
}

export class LoadLegacy implements Action {
  readonly type = OrderActionTypes.LOAD_LEGACY;
  constructor() {}
}

export class LoadLegacySuccess implements Action {
  readonly type = OrderActionTypes.LOAD_LEGACY_SUCCESS;
  constructor(public order: Order) {}
}

export class LoadLegacyFail implements Action {
  readonly type = OrderActionTypes.LOAD_LEGACY_FAIL;
  constructor(public id: string) {}
}

export type OrderActions =
  | Create
  | CreateSuccess
  | CreateFail
  | Update
  | Delete
  | Load
  | LoadSuccess
  | LoadFail
  | LoadLegacy
  | LoadLegacySuccess
  | LoadLegacyFail;
