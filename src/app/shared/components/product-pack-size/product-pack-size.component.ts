import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "product-pack-size",
  templateUrl: "./product-pack-size.component.html",
  styleUrls: ["./product-pack-size.component.scss"]
})
export class ProductPackSizeComponent implements OnInit {
  constructor() {}

  @Input()
  packSize: any;

  ngOnInit() {}
}
