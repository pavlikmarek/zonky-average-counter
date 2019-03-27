import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Counter from "../../src/components/Counter/Counter";
import averageStore from "../../src/store/models/average";
import vSelect from "vue-select";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("UI - Counter.ts", () => {
  let actions: any;
  let state: any;
  let store: any;

  beforeEach(() => {
    state = {
      loans: [],
      rating: "",
      error: ""
    };

    actions = {
      setAverageByRating: jest.fn()
    };

    store = new Vuex.Store({
      modules: {
        average: {
          namespaced: true,
          state,
          actions,
          getters: averageStore.getters
        }
      }
    });
  });

  it("renders with vSelect component", () => {
    const wrapper = mount(Counter, { store, localVue });

    expect(wrapper.find(vSelect).exists()).toBe(true);
  });

  it("calls store action setAverageByRating when rating is selected", () => {
    const wrapper = mount(Counter, { store, localVue });
    const input = wrapper.find("input");
    input.setValue("AAAAA");
    input.trigger("keydown.enter");
    expect(actions.setAverageByRating).toHaveBeenCalled();
  });
});

describe("Errors - Counter.ts", () => {
  let actions: any;
  let state: any;
  let store: any;

  it("render error msg when some error appears", () => {
    state = {
      loans: [],
      rating: "",
      error: "Error"
    };

    actions = {
      setAverageByRating: jest.fn()
    };

    store = new Vuex.Store({
      modules: {
        average: {
          namespaced: true,
          state,
          actions,
          getters: averageStore.getters
        }
      }
    });
    const wrapper = mount(Counter, { store, localVue });
    expect(wrapper.find(".error").exists()).toBe(true);
  });
});
