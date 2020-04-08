import Vuex from "vuex";
import Vue from "vue";
import herois from "./modules/herois";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    herois,
  }
});
