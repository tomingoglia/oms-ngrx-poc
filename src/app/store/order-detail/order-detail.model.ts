export interface OrderDetail {
  id: string;
  productId: string;
  product: any;
  quantity: number;
  brokenCase: boolean;
  updating: boolean;
  fail: boolean;
}
