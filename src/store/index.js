import Vue from "vue";
import Vuex from "vuex";
import { db } from "../db";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    balance_general: [],
    estado_resultados: [],
  },
  getters: {
    BalanceGeneral: (state) => state.balance_general,
    EstadoResultados: (state) => state.estado_resultados,
  },
  mutations: {
    setBalanceGeneral(state, payload) {
      state.balance_general = payload;
    },
    setEstadoResultados(state, payload) {
      state.estado_resultados = payload;
    }
  },
  actions: {
    async getBalanceGeneral({ commit }) {
      let balances = [];
      const doc = await await db
        .collection("Estados de situacion financiera")
        .get();
      doc.forEach((balance) => {
        balances.push(balance.data());
      });
      commit("setBalanceGeneral", balances);
    },

    async getEstadoResultados({ commit }) {
      let estados = [];
      const doc = await await db
        .collection("Estados de resultados")
        .get();
      doc.forEach((estado) => {
        estados.push(estado.data());
      });
      commit("setEstadoResultados", estados);
    },

    async setBalanceGeneral({ commit }, payload) {
      try {
        await db.collection("Estados de situacion financiera").add(payload);
        return true;
      } catch (error) {
        return false;
      }
    },

    async setEstadoResultados({ commit }, payload) {
      try {
        await db.collection("Estados de resultados").add(payload);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  },
  modules: {},
});
