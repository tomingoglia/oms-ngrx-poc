
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { Order } from "./order.model";
import { OrderDetail } from "../order-detail/order-detail.model";

@Injectable()
export class OrderService {
  constructor(private http$: HttpClient) {}

  getOrders(): Observable<Array<Order>> {
    return this.http$
      .get<Array<Order>>(`/orders`)
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }

  addOrder(order: Order): Observable<Order> {
    return this.http$
      .post<Order>(`/orders/add`, order)
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }

  getOrderLegacy(): Observable<Order> {
    return this.http$
      .get<Order>(`/orders-legacy`)
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }

  getOrderDetailLegacy(): Observable<Array<OrderDetail>> {
    return this.http$
      .get<Array<OrderDetail>>(`/orders-detail-legacy`)
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }

  changeQuantity(orderDetail: any): Observable<OrderDetail> {
    return this.http$
      .post<OrderDetail>(`/order-detail/update`, orderDetail)
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }
}
