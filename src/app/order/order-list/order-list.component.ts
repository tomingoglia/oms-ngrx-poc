import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Order, orderActions, orderSelectors } from "../../store/order";
import { productSelectors } from "../../store/product";
import { orderDetailActions } from "../../store/order-detail";

@Component({
  selector: "order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.scss"]
})
export class OrderListComponent implements OnInit {
  orders$: Observable<any>;
  products$: Observable<any>;

  constructor(private store: Store<orderSelectors.State>) {}

  ngOnInit() {
    this.orders$ = this.store.select(orderSelectors.selectFullOrderList);
    this.store.dispatch(new orderActions.LoadLegacy());
    this.store.dispatch(new orderDetailActions.LoadDetailLegacy());
    //this.orders$.subscribe(orders => console.log("orders", orders));
  }

  createOrder() {
    const order: Order = {
      id: null,
      name: "Zac's",
      lineItems: [
        {
          lid: "li1",
          pid: "p1",
          qtyEach: 3
        },
        {
          lid: "li3",
          pid: "p3",
          qtyCase: 1
        }
      ]
    };

    this.store.dispatch(new orderActions.Create(order));
  }

  changeQuantity(id, value) {
    this.store.dispatch(new orderDetailActions.ChangeQuantity(id, value));
  }

  deleteOrder(id, name) {
    this.store.dispatch(new orderActions.Delete(id));
  }

  trackByFnOrder(index, item) {
    return index; //item.id;
  }

  trackByFnOrderDetail(index, item) {
    return item.id;
  }
}
