import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Guide, guideActions, guideSelectors } from "@app/store/guide";
import { guideDetailActions } from "@app/store/guide-detail";
import { orderDetailActions } from "@app/store/order-detail";

@Component({
  selector: "guide-list",
  templateUrl: "./guide-list.component.html",
  styleUrls: ["./guide-list.component.scss"]
})
export class GuideListComponent implements OnInit {
  guides$: Observable<any>;
  products$: Observable<any>;

  constructor(private store: Store<guideSelectors.State>) {}

  ngOnInit() {
    //console.log("go");
    this.guides$ = this.store.select(guideSelectors.selectFullGuideList);
    this.store.dispatch(new guideActions.LoadLegacy());
    this.store.dispatch(new guideDetailActions.LoadDetailLegacy());

    //this.guides$.subscribe(guides => console.log("guides", guides));
  }

  deleteGuide(id, name) {
    this.store.dispatch(new guideActions.Delete(id));
  }

  trackByFnGuide(index, item) {
    return index; //item.id;
  }

  trackByFnGuideDetail(index, item) {
    return item.id;
  }

  changeQuantity(data: any) {
    this.store.dispatch(new orderDetailActions.ChangeQuantity(data));
  }
}
