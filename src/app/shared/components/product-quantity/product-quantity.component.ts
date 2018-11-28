import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "product-quantity",
  templateUrl: "./product-quantity.component.html",
  styleUrls: ["./product-quantity.component.scss"]
})
export class ProductQuantityComponent implements OnInit {
  constructor() {}

  @Input()
  product: any;

  @Input()
  orderDetails: any;

  @Input()
  quantity: any;

  @Input()
  updating: any;

  @Output("changeQuantity")
  quantityChangeEmitter = new EventEmitter<any>();

  changeQuantity(id: any, product: any, brokenCase: any, quantity: any) {
    this.quantityChangeEmitter.emit({ id, product, brokenCase, quantity });
  }

  ngOnInit() {}
}
