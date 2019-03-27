import { mutations, getters } from "../../src/store/models/average";

describe("MUTATIONS", () => {
  it("should not set loans but set error", () => {
    const loans = [{ rating: "AA", amount: 500 }, { rating: "B", amount: 400 }];
    const state = {
      loans: [],
      rating: "",
      error: ""
    };

    mutations.set(state, {
      data: loans,
      rating: "AA"
    });

    expect(state).toEqual({
      loans: [],
      rating: "",
      error: "Obdrželi jsem špatné data z API"
    });
  });

  it("should set error", () => {
    const state = {
      loans: [],
      rating: "",
      error: ""
    };

    mutations.setError(state, "ERROR");

    expect(state).toEqual({
      loans: [],
      rating: "",
      error: "ERROR"
    });
  });
});

describe("GETTERS", () => {
  it("Should return average value", () => {
    const state = {
      loans: [{ rating: "AA", amount: 100 }, { rating: "AA", amount: 200 }],
      rating: "",
      error: ""
    };

    const averageGetter = getters.average;
    const average = averageGetter(state);

    expect(average).toEqual(150);
  });
});
