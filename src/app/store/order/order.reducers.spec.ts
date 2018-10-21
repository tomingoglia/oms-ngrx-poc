import * as store from ".";

const actions = store.orderActions;
const effects = store.orderEffects;
const reducers = store.orderReducers;
const selectors = store.orderSelectors;

describe("Order Reducer", () => {
  describe("Unknown Action", () => {
    it("should return the intial state", () => {
      const action = {} as any;
      const result = reducers.orderReducer(reducers.initialState, action);

      expect(result).toBe(reducers.initialState);
    });
  });

  describe("LoadLegacy", () => {
    it("should return the initalState", () => {
      const order: store.Order = {
        id: "a1",
        name: "test",
        lineItems: null
      };

      const action = new actions.LoadLegacy();
      const result: any = reducers.orderReducer(reducers.initialState, action);

      expect(result.loading).toEqual(true);
      expect(result.loaded).toEqual(undefined);
      expect(result.entities).toMatchSnapshot();
    });
  });

  describe("LoadLegacySuccess", () => {
    it("should return the updated order entities", () => {
      const order: store.Order = {
        id: "a1",
        name: "test",
        lineItems: null
      };

      const action = new actions.LoadLegacySuccess(order);
      const result: any = reducers.orderReducer(reducers.initialState, action);

      expect(result.loading).toEqual(false);
      expect(result.loaded).toEqual(true);
      expect(result.entities).toMatchSnapshot();
    });
  });
});
