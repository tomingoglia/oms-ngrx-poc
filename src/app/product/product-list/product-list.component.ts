import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { productSelectors } from "../../store/product";
import { orderSelectors } from "../../store/order";
import { orderDetailActions } from "../../store/order-detail";

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
      productSelectors.selectProductsWithQuantityInTruck
    );
    //this.products$.subscribe(products => console.log("products", products));
  }

  changeQuantity(id, value) {
    this.store.dispatch(new orderDetailActions.ChangeQuantity(id, value));
  }

  trackByFnProduct(index, item) {
    return item.id;
  }
}
