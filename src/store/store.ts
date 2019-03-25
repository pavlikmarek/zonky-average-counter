import Vue from "vue";
import Vuex from "vuex";
import average from "./models/average";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    average
  }
});
