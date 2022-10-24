import Vue from "vue";
import Vuex from "vuex";
import { db } from "../db";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    balance_general: [],
    estado_resultados: [],
    indicadores: [],
    analisis_horizontales: [],
  },
  getters: {
    BalanceGeneral: (state) => state.balance_general,
    EstadoResultados: (state) => state.estado_resultados,
    Indicadores: (state) => state.indicadores,
    AnalisisHorizontales: (state) => state.analisis_horizontales,
  },
  mutations: {
    setBalanceGeneral(state, payload) {
      state.balance_general = payload;
    },
    setEstadoResultados(state, payload) {
      state.estado_resultados = payload;
    },
    setIndicadores(state, payload) {
      state.indicadores = payload;
    },
    setAnalisisHorizontales(state, payload) {
      state.analisis_horizontales = payload;
    },
  },
  actions: {
    async getBalanceGeneral({ commit }) {
      let balances = [];
      const doc = await db.collection("Estados de situacion financiera").get();
      doc.forEach((balance) => {
        balances.push(balance.data());
      });
      commit("setBalanceGeneral", balances);
    },

    async getEstadoResultados({ commit }) {
      let estados = [];
      const doc = await db.collection("Estados de resultados").get();
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
    },

    async getIndicadores({ commit }) {
      let indicadores = [];
      let balances = [];
      let estados = [];

      const doc_bl = await db
        .collection("Estados de situacion financiera")
        .get();
      doc_bl.forEach((balance) => {
        balances.push(balance.data());
      });

      const doc_er = await db.collection("Estados de resultados").get();
      doc_er.forEach((estado) => {
        estados.push(estado.data());
      });

      const largo = balances.length;
      for (let i = 0; i < largo; i++) {
        let balance = balances[i];
        let estado = estados[i];

        if (balance.anio === estado.anio) {
          indicadores.push([
            {
              anio: balance.anio,
              indicadores_liquidez: {
                razon_corriente: (
                  balance.activos.activos_de_intermediacion /
                  balance.pasivos.pasivos_de_intermediacion
                ).toFixed(2),
                prueba_acida: (
                  (balance.activos.activos_de_intermediacion -
                    balance.activos.inversiones_financieras) /
                  balance.pasivos.pasivos_de_intermediacion
                ).toFixed(2),
                capital_trabajo: (
                  balance.activos.activos_de_intermediacion -
                  balance.pasivos.pasivos_de_intermediacion
                ).toFixed(2),
              },
              indicadores_de_actividad: {
                generadores_de_ingresos_financieros: (
                  (balance.activos.activos_de_intermediacion /
                    4 /
                    balance.total_activos) *
                  100
                ).toFixed(2),
              },
              indicadores_de_endeudamiento: {
                indice_de_endeudamiento: (
                  (balance.total_pasivos / balance.total_activos) *
                  100
                ).toFixed(2),
              },
              indicadores_de_rentabilidad: {
                roa: (
                  (estado.utilidad_neta / balance.total_activos) *
                  100
                ).toFixed(2),
                roe: (
                  (estado.utilidad_neta / balance.total_patrimonio) *
                  100
                ).toFixed(2),
              },
              analisis_dupong: {
                margen_utilidad_neta: (
                  estado.utilidad_neta /
                  estado.ingreso_de_operaciones.total_ingresos_operacion
                ).toFixed(2),
                rotacion_activos_totales: (
                  estado.ingreso_de_operaciones.total_ingresos_operacion /
                  balance.total_activos
                ).toFixed(2),
                rendimientos_sobre_los_activos_totales: (
                  estado.utilidad_neta / balance.total_activos
                ).toFixed(2),
                multiplicador_de_apalancamiento_financiero: (
                  balance.total_activos / balance.total_patrimonio
                ).toFixed(2),
              },
            },
            balance,
            estado,
          ]);
        }
      }
      commit("setIndicadores", indicadores);
    },

    async getAnalisisHorizontal({ commit }) {
      let balances = [];
      let periodos = [];
      let contador = 0;
      const doc = await db.collection("Estados de situacion financiera").get();
      doc.forEach((balance) => {
        balances.push(balance.data());
      });

      
      balances.map((balance) => {
        if (balances[contador] && balances[contador + 1]) {
          console.log("si")
          periodos.push([{
            activos_de_intermediacion: {
              anio_uno: balances[contador].anio,
              anion_dos: balances[contador + 1].anio,
              variacion_relativa: balances[contador].activos.activos_de_intermediacion - balances[contador + 1].activos.activos_de_intermediacion,
            }
          }, balances[contador], balances[contador + 1]]);
          contador++;
        } else {
          console.log("No es posible");
        }
      });
      commit("setAnalisisHorizontales", periodos);
    },
  },
  modules: {},
});
