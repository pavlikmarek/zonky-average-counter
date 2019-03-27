import { GetterTree, MutationTree, ActionTree, ActionContext } from "vuex";
import axios from "axios";
import * as Sentry from "@sentry/browser";

export class State {
  loans: LoansModel[] = [];
  rating: string = "";
  error: string = "";
}
export type LoansModel = {
  rating: string;
  amount: number;
};

export const getters = {
  average(state: State): number | null {
    let num = 0;
    if (state.loans && state.loans.length) {
      state.loans.forEach((x: LoansModel) => {
        num = num + x.amount;
      });
      return num / state.loans.length;
    } else {
      return null;
    }
  },
  error(state: State) {
    return state.error;
  }
};

export const mutations = <MutationTree<State>>{
  set(state: State, val: { data: LoansModel[]; rating: string }) {
    state.error = "";
    if (val.data && val.data.length) {
      val.data.forEach((item: LoansModel) => {
        if (item.rating !== val.rating) {
          state.error = "Obdrželi jsem špatné data z API";
          Sentry.captureException(new Error(state.error));
        }
      });
    }
    if (state.error === "") {
      state.loans = val.data;
      state.rating = val.rating;
    }
  },
  setError(state: State, val: string) {
    state.error = val;
  }
};

export const actions = <ActionTree<State, any>>{
  setAverageByRating(store: ActionContext<State, any>, rating: string | null) {
    if (rating) {
      return axios
        .get("/api/loans/marketplace", {
          params: {
            rating__eq: rating
          }
        })
        .then(response => {
          store.commit("set", { data: response.data, rating });
        })
        .catch(error => {
          Sentry.captureException(error);
          store.commit("setError", "Nedostupné API");
        });
    } else {
      store.commit("set", []);
    }
  }
};

export default {
  namespaced: true,
  getters,
  state: new State(),
  mutations: mutations,
  actions: actions
};
