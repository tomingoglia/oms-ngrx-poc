import { Action } from "@ngrx/store";
import { Guide } from "./guide.model";

export enum GuideActionTypes {
  LOAD = "[Guide] Load",
  LOAD_SUCCESS = "[Guide] Load Success",
  LOAD_FAIL = "[Guide] Load Fail",

  CREATE = "[Guide] Create",
  CREATE_SUCCESS = "[Guide] Create Success",
  CREATE_FAIL = "[Guide] Create Fail",

  UPDATE = "[Guide] Update",
  DELETE = "[Guide] Delete",

  LOAD_LEGACY = "[Guide] Load Legacy",
  LOAD_LEGACY_SUCCESS = "[Guide] Load Legacy Success",
  LOAD_LEGACY_FAIL = "[Guide] Load Legacy Fail"
}

export class Create implements Action {
  readonly type = GuideActionTypes.CREATE;
  constructor(public guide: Guide) {}
}

export class Update implements Action {
  readonly type = GuideActionTypes.UPDATE;
  constructor(public id: string, public changes: Partial<Guide>) {}
}

export class Delete implements Action {
  readonly type = GuideActionTypes.DELETE;
  constructor(public id: string) {}
}

export class Load implements Action {
  readonly type = GuideActionTypes.LOAD;
  constructor() {}
}

export class LoadSuccess implements Action {
  readonly type = GuideActionTypes.LOAD_SUCCESS;
  constructor(public guide: Array<Guide>) {}
}

export class LoadFail implements Action {
  readonly type = GuideActionTypes.LOAD_FAIL;
  constructor(public id: string) {}
}

export class CreateSuccess implements Action {
  readonly type = GuideActionTypes.CREATE_SUCCESS;
  constructor(public guide: Guide) {}
}

export class CreateFail implements Action {
  readonly type = GuideActionTypes.CREATE_FAIL;
  constructor(public id: string) {}
}

export class LoadLegacy implements Action {
  readonly type = GuideActionTypes.LOAD_LEGACY;
  constructor() {}
}

export class LoadLegacySuccess implements Action {
  readonly type = GuideActionTypes.LOAD_LEGACY_SUCCESS;
  constructor(public guide: Guide) {}
}

export class LoadLegacyFail implements Action {
  readonly type = GuideActionTypes.LOAD_LEGACY_FAIL;
  constructor(public id: string) {}
}

export type GuideActions =
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
