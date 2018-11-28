import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ProductCardComponent implements OnInit {
  constructor() {}

  @Input()
  quantity: any;

  @Input()
  updating: any;

  @Input()
  id: any;

  @Input()
  product: any;

  @Input()
  lineNumber: any;

  @Output("changeQuantity")
  quantityChangeEmitter = new EventEmitter<any>();

  changeQuantity(data: any) {
    this.quantityChangeEmitter.emit(data);
  }

  ngOnInit() {}
}
