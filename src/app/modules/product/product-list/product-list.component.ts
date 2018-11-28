import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { productSelectors } from "@app/store/product";
import { orderSelectors } from "@app/store/order";
import { orderDetailActions } from "@app/store/order-detail";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products$: Observable<any>;
  constructor(private store: Store<orderSelectors.State>) {}

  ngOnInit() {
    this.products$ = this.store.select(
      productSelectors.selectProductsWithOrderDetails
    );
    //this.products$.subscribe(products => console.log("products", products));
  }

  changeQuantity(data) {
    this.store.dispatch(new orderDetailActions.ChangeQuantity(data));
  }

  trackByFnProduct(index, item) {
    return item.id;
  }
}
