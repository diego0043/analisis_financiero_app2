import Vue from "vue";
import Vuex from "vuex";
import { db } from "../db";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    balance_general: [],
  },
  getters: {
    BalanceGeneral: (state) => state.balance_general,
  },
  mutations: {
    setBalanceGeneral(state, payload) {
      state.balance_general = payload;
    },
  },
  actions: {
    async getBalanceGeneral({ commit }) {
      let balances = [];
      const doc = await db.collection("balances").get();
      doc.forEach((balance) => {
       balances.push(balance.data());
      });
      commit("setBalanceGeneral", balances);
    },
  },
  modules: {},
});
