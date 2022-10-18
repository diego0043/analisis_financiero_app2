import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    balance_general: [
      {
        id: 1,
        anio: 2018,
        activos: {
          activos_de_intermediacion: 0,
          caja_y_bancos: 0,
          operaciones_bursatiles: 0,
          inversiones_financieras: 0,
          cartera_de_prestamos: 0,
        },
        otros_activos: {
          diversos: 0,
        },
        activo_fijo: {
          bienes_inmuebles: 0,
        },
        total_activos: 0,
        pasivos: {
          pasivos_de_intermediacion: 0,
          prestamos_del_banco: 0,
          titulos_de_emision_propia: 0,
          otros_pasivos: 0,
          fondos_de_administracion: 0,
          provisiones: 0,
          diversos: 0,
        },
        total_pasivos: 0,
        patrimonio: {
          aportes_del_estado: 0,
          reservas_del_capital: 0,
        },
        total_patrimonio: 0,
        total_pasivo_patrimonio: 0,
      },
      {
        id: 2,
        anio: 2017,
        activos: {
          activos_de_intermediacion: 0,
          caja_y_bancos: 0,
          operaciones_bursatiles: 0,
          inversiones_financieras: 0,
          cartera_de_prestamos: 0,
        },
        otros_activos: {
          diversos: 0,
        },
        activo_fijo: {
          bienes_inmuebles: 0,
        },
        total_activos: 0,
        pasivos: {
          pasivos_de_intermediacion: 0,
          prestamos_del_banco: 0,
          titulos_de_emision_propia: 0,
          otros_pasivos: 0,
          fondos_de_administracion: 0,
          provisiones: 0,
          diversos: 0,
        },
        total_pasivos: 0,
        patrimonio: {
          aportes_del_estado: 0,
          reservas_del_capital: 0,
        },
        total_patrimonio: 0,
        total_pasivo_patrimonio: 0,
      },
      {
        id: 3,
        anio: 2016,
        activos: {
          activos_de_intermediacion: 0,
          caja_y_bancos: 0,
          operaciones_bursatiles: 0,
          inversiones_financieras: 0,
          cartera_de_prestamos: 0,
        },
        otros_activos: {
          diversos: 0,
        },
        activo_fijo: {
          bienes_inmuebles: 0,
        },
        total_activos: 0,
        pasivos: {
          pasivos_de_intermediacion: 0,
          prestamos_del_banco: 0,
          titulos_de_emision_propia: 0,
          otros_pasivos: 0,
          fondos_de_administracion: 0,
          provisiones: 0,
          diversos: 0,
        },
        total_pasivos: 0,
        patrimonio: {
          aportes_del_estado: 0,
          reservas_del_capital: 0,
        },
        total_patrimonio: 0,
        total_pasivo_patrimonio: 0,
      },
      {
        id: 4,
        anio: 2015,
      },
      {
        id: 5,
        anio: 2014,
      }
    ],
  },
  getters: {
    getBalanceGeneral: (state) => state.balance_general,
  },
  mutations: {
    setBalanceGeneral(state, payload) {
      state.balance_general = payload;
    }
  },
  actions: { 
    setBalanceGeneral({ commit }, payload) {
      let new_balance_general = payload;
      commit("setBalanceGeneral", payload);
    }
  },
  modules: {},
});
