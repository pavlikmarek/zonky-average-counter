import { GetterTree, MutationTree, ActionTree, ActionContext } from "vuex";
import axios from "axios";

export class State {
  loans: [] = [];
}

const getters = <GetterTree<State, any>>{
  average(state: State): number | null {
    let num = 0;
    state.loans.forEach((x: any) => {
      num = num + x.amount;
    });
    return num / state.loans.length;
  }
};

const mutations = <MutationTree<State>>{
  set(state: State, val: State["loans"]) {
    state.loans = val;
  }
};

const actions = <ActionTree<State, any>>{
  setAverageByRating(store: ActionContext<State, any>, rating: string | null) {
    if (rating) {
      return axios
        .get("/api/loans/marketplace", {
          params: {
            rating__eq: rating
          }
        })
        .then(response => {
          store.commit("set", response.data);
        })
        .catch(error => {
          throw error;
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
