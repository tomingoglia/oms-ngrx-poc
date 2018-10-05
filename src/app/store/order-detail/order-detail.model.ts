export interface OrderDetail {
  id: string;
  productId: string;
  product: any;
  quantity: number;
  updating: boolean;
  fail: boolean;
}
