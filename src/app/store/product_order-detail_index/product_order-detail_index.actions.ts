import { Action } from "@ngrx/store";
import { PODIndex } from "./product_order-detail_index.model";

export const CREATE = "[Product - Order Detail - Index] Create";
export const UPDATE = "[Product - Order Detail - Index] Update";
export const DELETE = "[Product - Order Detail - Index] Delete";
export const ADD_MANY = "[Product - Order Detail - Index] Add Many";

export class Create implements Action {
  readonly type = CREATE;
  constructor(public productOrderDetailIndex: PODIndex) {}
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public id: string, public changes: Partial<PODIndex>) {}
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public id: string) {}
}

export class AddMany implements Action {
  readonly type = ADD_MANY;
  constructor(public productOrderDetailIndex: Array<PODIndex>) {}
}
export type ProductOrderDetailIndexActions = Create | Update | Delete | AddMany;
