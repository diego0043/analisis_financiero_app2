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
      let anios = [];
      let aniosOrden = [];
      let dataFiltrada = [];
      const doc = await db.collection("Estados de situacion financiera").get();
      /*doc.forEach((item) => {
        console.log(item.id)
      });
      */

      doc.forEach((balance) => {
        balances.push(balance.data());
      });



      balances.map((item) => {
        anios.push(item.anio);
      });

      aniosOrden = anios.sort((a, b) => a - b).reverse();

      aniosOrden.map((item) => {
        balances.map((balance) => {
          if (balance.anio === item) {
            dataFiltrada.push(balance);
          }
        });
      });

      commit("setBalanceGeneral", dataFiltrada);
    },

    async getEstadoResultados({ commit }) {
      let estados = [];
      let anios = [];
      let aniosOrden = [];
      let dataFiltrada = [];

      const doc = await db.collection("Estados de resultados").get();
      doc.forEach((estado) => {
        estados.push(estado.data());
      });

      estados.map((item) => {
        anios.push(item.anio);
      });

      aniosOrden = anios.sort((a, b) => a - b).reverse();

      aniosOrden.map((item) => {
        estados.map((estado) => {
          if (estado.anio === item) {
            dataFiltrada.push(estado);
          }
        });
      });

      commit("setEstadoResultados", dataFiltrada);
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
      let anios = [];
      let aniosOrden = [];
      let dataFiltradaBalance = [];
      let dataFiltradaEstado = [];

      const doc_bl = await db
        .collection("Estados de situacion financiera")
        .get();
      doc_bl.forEach((balance) => {
        balances.push(balance.data());
      });

      balances.map((item) => {
        anios.push(item.anio);
      });

      aniosOrden = anios.sort((a, b) => a - b).reverse();

      aniosOrden.map((item) => {
        balances.map((balance) => {
          if (balance.anio === item) {
            dataFiltradaBalance.push(balance);
          }
        });
      });

      anios = [];
      aniosOrden = [];

      const doc_er = await db.collection("Estados de resultados").get();
      doc_er.forEach((estado) => {
        estados.push(estado.data());
      });

      estados.map((item) => {
        anios.push(item.anio);
      });

      aniosOrden = anios.sort((a, b) => a - b).reverse();

      aniosOrden.map((item) => {
        estados.map((estado) => {
          if (estado.anio === item) {
            dataFiltradaEstado.push(estado);
          }
        });
      });

      const largo = balances.length;
      for (let i = 0; i < largo; i++) {
        let balance = dataFiltradaBalance[i];
        let estado = dataFiltradaEstado[i];

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
      let anios = [];
      let aniosOrden = [];
      let dataFiltrada = [];
      let contador = 0;
      let periodos = [];
      const doc = await db.collection("Estados de situacion financiera").get();
     
      doc.forEach((balance) => {
        balances.push(balance.data());
      });

      balances.map((item) => {
        anios.push(item.anio);
      });

      aniosOrden = anios.sort((a, b) => a - b).reverse();

      aniosOrden.map((item) => {
        balances.map((balance) => {
          if (balance.anio === item) {
            dataFiltrada.push(balance);
          }
        });
      });



      dataFiltrada.map((balance) => {
        if (dataFiltrada[contador] && dataFiltrada[contador + 1]) {
          console.log("si");
          periodos.push([
            {
              activos_de_intermediacion: {
                anio_uno: dataFiltrada[contador].anio,
                anion_dos: dataFiltrada[contador + 1].anio,
                variacion_relativa:
                  balances[contador].activos.activos_de_intermediacion -
                  balances[contador + 1].activos.activos_de_intermediacion,
              },
            },
            dataFiltrada[contador],
            dataFiltrada[contador + 1],
          ]);
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
