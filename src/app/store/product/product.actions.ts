import { Action } from "@ngrx/store";
import { Product } from "./product.model";

export const CREATE = "[Product] Create";
export const UPDATE = "[Product] Update";
export const DELETE = "[Product] Delete";
export const ADD_MANY = "[Product] Add Many";

export class Create implements Action {
  readonly type = CREATE;
  constructor(public product: Product) {}
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public id: string, public changes: Partial<Product>) {}
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public id: string) {}
}

export class AddMany implements Action {
  readonly type = ADD_MANY;
  constructor(public products: Array<Product>) {}
}
export type ProductActions = Create | Update | Delete | AddMany;
