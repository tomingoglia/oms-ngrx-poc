import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Location } from "@angular/common";
import { OrderEffects } from "./order.effects";
import { LoadLegacySuccess, LoadLegacy, LoadLegacyFail } from "./order.actions";
import { cold, hot } from "jasmine-marbles";
import { RouterTestingModule } from "@angular/router/testing";
import { OrderService } from "./order.service";
import { empty, Observable } from "rxjs";
import { Actions } from "@ngrx/effects";
import { Order } from "./order.model";

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

class MockOrderService {
  getOrders = jasmine.createSpy("getOrders");
  addOrder = jasmine.createSpy("addOrder");
  getOrderLegacy = jasmine.createSpy("getOrderLegacy");
  getOrderDetailLegacy = jasmine.createSpy("getOrderDetailLegacy");
  changeQuantity = jasmine.createSpy("changeQuantity");
}

describe("Order Effects", () => {
  let actions$: TestActions;
  let effects: OrderEffects;
  let orderService: MockOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrderEffects,
        provideMockActions(() => actions$),
        { provide: OrderService, useClass: MockOrderService },
        { provide: Actions, useFactory: getActions }
      ],
      imports: [RouterTestingModule]
    });
    effects = TestBed.get(OrderEffects);
    orderService = TestBed.get(OrderService);
    actions$ = TestBed.get(Actions);
    location = TestBed.get(Location);
  });

  describe("loadLegacyOrders$", () => {
    it("should return a LoadLegacySuccess, with order, on success", () => {
      //Mock order
      const order = { id: "1", name: "test", lineItems: null } as Order;
      const orderResponse = { id: "1", name: "test", lineItems: null } as Order;

      //start action and completion action
      const action = new LoadLegacy();
      const completion = new LoadLegacySuccess(orderResponse);

      //setup the Effect
      actions$.stream = hot("-a", { a: action });
      const response = cold("-b|", { b: order });
      const expected = cold("--c", { c: completion });

      //Call the service
      orderService.getOrderLegacy.and.returnValue(response);

      //check the result
      expect(effects.loadLegacyOrders$).toBeObservable(expected);
    });

    it("should return a LoadLegacyFail if there is a failure", () => {
      //Mock order error
      const error = "Failed to load order";

      //start action and completion action
      const action = new LoadLegacy();
      const completion = new LoadLegacyFail(error);

      //setup the Effect
      actions$.stream = hot("-a", { a: action });
      const response = cold("-#|", {}, error);
      const expected = cold("--b", { b: completion });

      //Call the service
      orderService.getOrderLegacy.and.returnValue(response);

      //check the result
      expect(effects.loadLegacyOrders$).toBeObservable(expected);
    });
  });
});
