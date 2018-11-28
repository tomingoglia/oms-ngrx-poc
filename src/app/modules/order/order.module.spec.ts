import { OrderModule } from "./order.module";

describe("OrderModule", () => {
  let orderModule: OrderModule;

  beforeEach(() => {
    orderModule = new OrderModule();
  });

  it("should create an instance", () => {
    expect(orderModule).toBeTruthy();
  });

  // it("should return a list of orders", () => {
  //   const outcome = ""

  // });
});
