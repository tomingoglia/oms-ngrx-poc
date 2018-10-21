import { Action } from "@ngrx/store";
import { Product } from "./product.model";
export enum ProductActionTypes {
  CREATE = "[Product] Create",
  UPDATE = "[Product] Update",
  DELETE = "[Product] Delete",
  ADD_MANY = "[Product] Add Many"
}
export class Create implements Action {
  readonly type = ProductActionTypes.CREATE;
  constructor(public product: Product) {}
}

export class Update implements Action {
  readonly type = ProductActionTypes.UPDATE;
  constructor(public id: string, public changes: Partial<Product>) {}
}

export class Delete implements Action {
  readonly type = ProductActionTypes.DELETE;
  constructor(public id: string) {}
}

export class AddMany implements Action {
  readonly type = ProductActionTypes.ADD_MANY;
  constructor(public products: Array<Product>) {}
}
export type ProductActions = Create | Update | Delete | AddMany;
