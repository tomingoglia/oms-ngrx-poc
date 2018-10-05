import { Action } from "@ngrx/store";
import { Order } from "./order.model";

export const LOAD = "[Order] Load";
export const LOAD_SUCCESS = "[Order] Load Success";
export const LOAD_FAIL = "[Order] Load Fail";

export const CREATE = "[Order] Create";
export const CREATE_SUCCESS = "[Order] Create Success";
export const CREATE_FAIL = "[Order] Create Fail";

export const UPDATE = "[Order] Update";
export const DELETE = "[Order] Delete";

export const LOAD_LEGACY = "[Order] Load Legacy";
export const LOAD_LEGACY_SUCCESS = "[Order] Load Legacy Success";
export const LOAD_LEGACY_FAIL = "[Order] Load Legacy Fail";

export class Create implements Action {
  readonly type = CREATE;
  constructor(public order: Order) {}
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public id: string, public changes: Partial<Order>) {}
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public id: string) {}
}

export class Load implements Action {
  readonly type = LOAD;
  constructor() {}
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public orders: Array<Order>) {}
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;
  constructor(public id: string) {}
}

export class CreateSuccess implements Action {
  readonly type = CREATE_SUCCESS;
  constructor(public order: Order) {}
}

export class CreateFail implements Action {
  readonly type = CREATE_FAIL;
  constructor(public id: string) {}
}

export class LoadLegacy implements Action {
  readonly type = LOAD_LEGACY;
  constructor() {}
}

export class LoadLegacySuccess implements Action {
  readonly type = LOAD_LEGACY_SUCCESS;
  constructor(public order: Order) {}
}

export class LoadLegacyFail implements Action {
  readonly type = LOAD_LEGACY_FAIL;
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
