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
    analisis_horizontales_estados: [],
    analisis_verticales: [],
    analisis_verticales_estados: [],
  },
  getters: {
    BalanceGeneral: (state) => state.balance_general,
    EstadoResultados: (state) => state.estado_resultados,
    Indicadores: (state) => state.indicadores,
    AnalisisHorizontales: (state) => state.analisis_horizontales,
    AnalisisHorizontalesEstados: (state) => state.analisis_horizontales_estados,
    AnalisisVerticales: (state) => state.analisis_verticales,
    AnalisisVerticalesEstados: (state) => state.analisis_verticales_estados,
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
    setAnalisisHorizontalesEstados(state, payload) {
      state.analisis_horizontales_estados = payload;
    },
    setAnalisisVerticales(state, payload) {
      state.analisis_verticales = payload;
    },
    setAnalisisVerticalesEstados(state, payload) {
      state.analisis_verticales_estados = payload;
    }
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
    async EditBalanceGeneral({ commit }, payload) {
      try {
        const collection = await db.collection("Estados de situacion financiera").get();
        collection.forEach(doc => {
          if (doc.data().anio === payload.anio) {
            const docRef = db.collection("Estados de situacion financiera").doc(doc.id);
            docRef.set(payload);
          }
        });
        return true;
      } catch (error) {
        return false;
      }
    },
    async EditEstadoResultados({ commit }, payload) {
      try {
        const collection = await db.collection("Estados de resultados").get();
        collection.forEach(doc => {
          if (doc.data().anio === payload.anio) {
            const docRef = db.collection("Estados de resultados").doc(doc.id);
            docRef.set(payload);
          }
        });
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

    async getIndicadores({ commit, getters }) {
      let indicadores = [];
      let balances = getters.BalanceGeneral;
      let estados = getters.EstadoResultados;

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

    async getAnalisisHorizontalBalance({ commit, getters }) {
      let balances = getters.BalanceGeneral;
      let balance_uno = {};
      let balance_dos = {};
      let periodos_balance = [];
      let contador = 0;
      let doc = {
        activos: {
          activos_de_intermediacion: "",
          caja_y_bancos: "",
          cartera_de_prestamos: "",
          inversiones_financieras: "",
          operaciones_bursatiles: "",
        },
        activos_fijos: {
          bienes_inmuebles: "",
        },
        otros_activos: {
          diversos: "",
        },
        pasivos: {
          diversos: "",
          fondos_de_administracion: "",
          otros_pasivos: "",
          pasivos_de_intermediacion: "",
          prestamo_bancos: "",
          prestamos_del_banco: "",
          provisiones: "",
          titulos_de_emision_propia: "",
        },
        patrimonio: {
          aportes_del_estado: "",
          reservas_del_capital: "",
        },
        total_activos: "",
        total_pasivos: "",
        total_pasivos_patrimonio: "",
        total_patrimonio: "",
      };
      let doc2 = {
        activos: {
          activos_de_intermediacion: "",
          caja_y_bancos: "",
          cartera_de_prestamos: "",
          inversiones_financieras: "",
          operaciones_bursatiles: "",
        },
        activos_fijos: {
          bienes_inmuebles: "",
        },
        otros_activos: {
          diversos: "",
        },
        pasivos: {
          diversos: "",
          fondos_de_administracion: "",
          otros_pasivos: "",
          pasivos_de_intermediacion: "",
          prestamo_bancos: "",
          prestamos_del_banco: "",
          provisiones: "",
          titulos_de_emision_propia: "",
        },
        patrimonio: {
          aportes_del_estado: "",
          reservas_del_capital: "",
        },
        total_activos: "",
        total_pasivos: "",
        total_pasivos_patrimonio: "",
        total_patrimonio: "",
      };
      let doc3 = {
        activos: {
          activos_de_intermediacion: "",
          caja_y_bancos: "",
          cartera_de_prestamos: "",
          inversiones_financieras: "",
          operaciones_bursatiles: "",
        },
        activos_fijos: {
          bienes_inmuebles: "",
        },
        otros_activos: {
          diversos: "",
        },
        pasivos: {
          diversos: "",
          fondos_de_administracion: "",
          otros_pasivos: "",
          pasivos_de_intermediacion: "",
          prestamo_bancos: "",
          prestamos_del_banco: "",
          provisiones: "",
          titulos_de_emision_propia: "",
        },
        patrimonio: {
          aportes_del_estado: "",
          reservas_del_capital: "",
        },
        total_activos: "",
        total_pasivos: "",
        total_pasivos_patrimonio: "",
        total_patrimonio: "",
      };
      let variacion_absoluta = { ...doc };
      let variacion_relativa = { ...doc2 };
      let estado_balance = { ...doc3 };

      // Obtenemos analisis vertical para los balances

      balances.map((item) => {
        balance_uno = balances[contador];
        balance_dos = balances[contador + 1];

        //variacion absoluta
        if (balance_uno && balance_dos) {
          variacion_absoluta.activos.activos_de_intermediacion = parseFloat(
            (
              balance_uno.activos.activos_de_intermediacion -
              balance_dos.activos.activos_de_intermediacion
            ).toFixed(2)
          );
          variacion_absoluta.activos.caja_y_bancos = parseFloat(
            (
              balance_uno.activos.caja_y_bancos -
              balance_dos.activos.caja_y_bancos
            ).toFixed(2)
          );
          variacion_absoluta.activos.cartera_de_prestamos = parseFloat(
            (
              balance_uno.activos.cartera_de_prestamos -
              balance_dos.activos.cartera_de_prestamos
            ).toFixed(2)
          );
          variacion_absoluta.activos.inversiones_financieras = parseFloat(
            (
              balance_uno.activos.inversiones_financieras -
              balance_dos.activos.inversiones_financieras
            ).toFixed(2)
          );
          variacion_absoluta.activos.operaciones_bursatiles = parseFloat(
            (
              balance_uno.activos.operaciones_bursatiles -
              balance_dos.activos.operaciones_bursatiles
            ).toFixed(2)
          );
          variacion_absoluta.activos_fijos.bienes_inmuebles = parseFloat(
            (
              balance_uno.activos_fijos.bienes_inmuebles -
              balance_dos.activos_fijos.bienes_inmuebles
            ).toFixed(2)
          );
          variacion_absoluta.otros_activos.diversos = parseFloat(
            (
              balance_uno.otros_activos.diversos -
              balance_dos.otros_activos.diversos
            ).toFixed(2)
          );
          variacion_absoluta.pasivos.diversos = parseFloat(
            (
              balance_uno.pasivos.diversos - balance_dos.pasivos.diversos
            ).toFixed(2)
          );
          variacion_absoluta.pasivos.fondos_de_administracion = parseFloat(
            (
              balance_uno.pasivos.fondos_de_administracion -
              balance_dos.pasivos.fondos_de_administracion
            ).toFixed(2)
          );
          variacion_absoluta.pasivos.otros_pasivos = parseFloat(
            (
              balance_uno.pasivos.otros_pasivos -
              balance_dos.pasivos.otros_pasivos
            ).toFixed(2)
          );
          variacion_absoluta.pasivos.pasivos_de_intermediacion = parseFloat(
            (
              balance_uno.pasivos.pasivos_de_intermediacion -
              balance_dos.pasivos.pasivos_de_intermediacion
            ).toFixed(2)
          );
          variacion_absoluta.pasivos.prestamo_bancos = parseFloat(
            (
              balance_uno.pasivos.prestamo_bancos -
              balance_dos.pasivos.prestamo_bancos
            ).toFixed(2)
          );
          variacion_absoluta.pasivos.prestamos_del_banco = parseFloat(
            (
              balance_uno.pasivos.prestamos_del_banco -
              balance_dos.pasivos.prestamos_del_banco
            ).toFixed(2)
          );
          variacion_absoluta.pasivos.provisiones = parseFloat(
            (
              balance_uno.pasivos.provisiones - balance_dos.pasivos.provisiones
            ).toFixed(2)
          );
          variacion_absoluta.pasivos.titulos_de_emision_propia = parseFloat(
            (
              balance_uno.pasivos.titulos_de_emision_propia -
              balance_dos.pasivos.titulos_de_emision_propia
            ).toFixed(2)
          );
          variacion_absoluta.patrimonio.aportes_del_estado = parseFloat(
            (
              balance_uno.patrimonio.aportes_del_estado -
              balance_dos.patrimonio.aportes_del_estado
            ).toFixed(2)
          );
          variacion_absoluta.patrimonio.reservas_del_capital = parseFloat(
            (
              balance_uno.patrimonio.reservas_del_capital -
              balance_dos.patrimonio.reservas_del_capital
            ).toFixed(2)
          );
          variacion_absoluta.total_activos = parseFloat(
            (balance_uno.total_activos - balance_dos.total_activos).toFixed(2)
          );
          variacion_absoluta.total_pasivos = parseFloat(
            (balance_uno.total_pasivos - balance_dos.total_pasivos).toFixed(2)
          );
          variacion_absoluta.total_pasivos_patrimonio = parseFloat(
            (
              balance_uno.total_pasivos_patrimonio -
              balance_dos.total_pasivos_patrimonio
            ).toFixed(2)
          );
          variacion_absoluta.total_patrimonio = parseFloat(
            (
              balance_uno.total_patrimonio - balance_dos.total_patrimonio
            ).toFixed(2)
          );

          //variacion relativa
          variacion_relativa.activos.activos_de_intermediacion =
            balance_dos.activos.activos_de_intermediacion === 0
              ? "-"
              : (
                  (balance_uno.activos.activos_de_intermediacion /
                    balance_dos.activos.activos_de_intermediacion -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.activos.caja_y_bancos =
            balance_dos.activos.caja_y_bancos === 0
              ? "-"
              : (
                  (balance_uno.activos.caja_y_bancos /
                    balance_dos.activos.caja_y_bancos -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.activos.cartera_de_prestamos =
            balance_dos.activos.cartera_de_prestamos === 0
              ? "-"
              : (
                  (balance_uno.activos.cartera_de_prestamos /
                    balance_dos.activos.cartera_de_prestamos -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.activos.inversiones_financieras =
            balance_dos.activos.inversiones_financieras === 0
              ? "-"
              : (
                  (balance_uno.activos.inversiones_financieras /
                    balance_dos.activos.inversiones_financieras -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.activos.operaciones_bursatiles =
            balance_dos.activos.operaciones_bursatiles === 0
              ? "-"
              : (
                  (balance_uno.activos.operaciones_bursatiles /
                    balance_dos.activos.operaciones_bursatiles -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.activos_fijos.bienes_inmuebles =
            balance_dos.activos_fijos.bienes_inmuebles === 0
              ? "-"
              : (
                  (balance_uno.activos_fijos.bienes_inmuebles /
                    balance_dos.activos_fijos.bienes_inmuebles -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.otros_activos.diversos =
            balance_dos.otros_activos.diversos === 0
              ? "-"
              : (
                  (balance_uno.otros_activos.diversos /
                    balance_dos.otros_activos.diversos -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.pasivos.diversos =
            balance_dos.pasivos.diversos === 0
              ? "-"
              : (
                  (balance_uno.pasivos.diversos / balance_dos.pasivos.diversos -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.pasivos.fondos_de_administracion =
            balance_dos.pasivos.fondos_de_administracion === 0
              ? "-"
              : (
                  (balance_uno.pasivos.fondos_de_administracion /
                    balance_dos.pasivos.fondos_de_administracion -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.pasivos.otros_pasivos =
            balance_dos.pasivos.otros_pasivos === 0
              ? "-"
              : (
                  (balance_uno.pasivos.otros_pasivos /
                    balance_dos.pasivos.otros_pasivos -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.pasivos.pasivos_de_intermediacion =
            balance_dos.pasivos.pasivos_de_intermediacion === 0
              ? "-"
              : (
                  (balance_uno.pasivos.pasivos_de_intermediacion /
                    balance_dos.pasivos.pasivos_de_intermediacion -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.pasivos.prestamo_bancos =
            balance_dos.pasivos.prestamo_bancos === 0
              ? "-"
              : (
                  (balance_uno.pasivos.prestamo_bancos /
                    balance_dos.pasivos.prestamo_bancos -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.pasivos.prestamos_del_banco =
            balance_dos.pasivos.prestamos_del_banco === 0
              ? "-"
              : (
                  (balance_uno.pasivos.prestamos_del_banco /
                    balance_dos.pasivos.prestamos_del_banco -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.pasivos.provisiones =
            balance_dos.pasivos.provisiones === 0
              ? "-"
              : (
                  (balance_uno.pasivos.provisiones /
                    balance_dos.pasivos.provisiones -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.pasivos.titulos_de_emision_propia =
            balance_dos.pasivos.titulos_de_emision_propia === 0
              ? "-"
              : (
                  (balance_uno.pasivos.titulos_de_emision_propia /
                    balance_dos.pasivos.titulos_de_emision_propia -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.patrimonio.aportes_del_estado =
            balance_dos.patrimonio.aportes_del_estado === 0
              ? "-"
              : (
                  (balance_uno.patrimonio.aportes_del_estado /
                    balance_dos.patrimonio.aportes_del_estado -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.patrimonio.reservas_del_capital =
            balance_dos.patrimonio.reservas_del_capital === 0
              ? "-"
              : (
                  (balance_uno.patrimonio.reservas_del_capital /
                    balance_dos.patrimonio.reservas_del_capital -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.total_activos =
            balance_dos.total_activos === 0
              ? "-"
              : (
                  (balance_uno.total_activos / balance_dos.total_activos - 1) *
                  100
                ).toFixed(2);
          variacion_relativa.total_pasivos =
            balance_dos.total_pasivos === 0
              ? "-"
              : (
                  (balance_uno.total_pasivos / balance_dos.total_pasivos - 1) *
                  100
                ).toFixed(2);
          variacion_relativa.total_patrimonio =
            balance_dos.total_patrimonio === 0
              ? "-"
              : (
                  (balance_uno.total_patrimonio / balance_dos.total_patrimonio -
                    1) *
                  100
                ).toFixed(2);
          variacion_relativa.total_pasivos_patrimonio =
            balance_dos.total_pasivos_patrimonio === 0
              ? "-"
              : (
                  (balance_uno.total_pasivos_patrimonio /
                    balance_dos.total_pasivos_patrimonio -
                    1) *
                  100
                ).toFixed(2);

          estado_balance.activos.activos_de_intermediacion =
            variacion_relativa.activos.activos_de_intermediacion != "-"
              ? variacion_absoluta.activos.activos_de_intermediacion > 0 &&
                variacion_relativa.activos.activos_de_intermediacion > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_balance.activos.caja_y_bancos =
            variacion_relativa.activos.caja_y_bancos != "-"
              ? variacion_absoluta.activos.caja_y_bancos > 0 &&
                variacion_relativa.activos.caja_y_bancos > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_balance.activos.cartera_de_prestamos =
            variacion_relativa.activos.cartera_de_prestamos != "-"
              ? variacion_absoluta.activos.cartera_de_prestamos > 0 &&
                variacion_relativa.activos.cartera_de_prestamos > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_balance.activos.inversiones_financieras =
            variacion_relativa.activos.inversiones_financieras != "-"
              ? variacion_absoluta.activos.inversiones_financieras > 0 &&
                variacion_relativa.activos.inversiones_financieras > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_balance.activos.operaciones_bursatiles =
            variacion_relativa.activos.operaciones_bursatiles != "-"
              ? variacion_absoluta.activos.operaciones_bursatiles > 0 &&
                variacion_relativa.activos.operaciones_bursatiles > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_balance.activos_fijos.bienes_inmuebles =
            variacion_relativa.activos_fijos.bienes_inmuebles != "-"
              ? variacion_absoluta.activos_fijos.bienes_inmuebles > 0 &&
                variacion_relativa.activos_fijos.bienes_inmuebles > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_balance.otros_activos.diversos =
            variacion_relativa.otros_activos.diversos != "-"
              ? variacion_absoluta.otros_activos.diversos > 0 &&
                variacion_relativa.otros_activos.diversos > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_balance.pasivos.diversos =
            variacion_relativa.pasivos.diversos != "-"
              ? variacion_absoluta.pasivos.diversos > 0 &&
                variacion_relativa.pasivos.diversos > 0
                ? "Pesimo"
                : "Optimo"
              : "-";

          estado_balance.pasivos.fondos_de_administracion =
            variacion_relativa.pasivos.fondos_de_administracion != "-"
              ? variacion_absoluta.pasivos.fondos_de_administracion > 0 &&
                variacion_relativa.pasivos.fondos_de_administracion > 0
                ? "Pesimo"
                : "Optimo"
              : "-";

          estado_balance.pasivos.otros_pasivos =
            variacion_relativa.pasivos.otros_pasivos != "-"
              ? variacion_absoluta.pasivos.otros_pasivos > 0 &&
                variacion_relativa.pasivos.otros_pasivos > 0
                ? "Pesimo"
                : "Optimo"
              : "-";

          estado_balance.pasivos.pasivos_de_intermediacion =
            variacion_relativa.pasivos.pasivos_de_intermediacion != "-"
              ? variacion_absoluta.pasivos.pasivos_de_intermediacion > 0 &&
                variacion_relativa.pasivos.pasivos_de_intermediacion > 0
                ? "Pesimo"
                : "Optimo"
              : "-";

          estado_balance.pasivos.prestamo_bancos =
            variacion_relativa.pasivos.prestamo_bancos != "-"
              ? variacion_absoluta.pasivos.prestamo_bancos > 0 &&
                variacion_relativa.pasivos.prestamo_bancos > 0
                ? "Pesimo"
                : "Optimo"
              : "-";

          estado_balance.pasivos.prestamos_del_banco =
            variacion_relativa.pasivos.prestamos_del_banco != "-"
              ? variacion_absoluta.pasivos.prestamos_del_banco > 0 &&
                variacion_relativa.pasivos.prestamos_del_banco > 0
                ? "Pesimo"
                : "Optimo"
              : "-";
          estado_balance.pasivos.provisiones =
            variacion_relativa.pasivos.provisiones != "-"
              ? variacion_absoluta.pasivos.provisiones > 0 &&
                variacion_relativa.pasivos.provisiones > 0
                ? "Pesimo"
                : "Optimo"
              : "-";

          estado_balance.pasivos.titulos_de_emision_propia =
            variacion_relativa.pasivos.titulos_de_emision_propia != "-"
              ? variacion_absoluta.pasivos.titulos_de_emision_propia > 0 &&
                variacion_relativa.pasivos.titulos_de_emision_propia > 0
                ? "Pesimo"
                : "Optimo"
              : "-";

          estado_balance.patrimonio.aportes_del_estado =
            variacion_relativa.patrimonio.aportes_del_estado != "-"
              ? variacion_absoluta.patrimonio.aportes_del_estado > 0 &&
                variacion_relativa.patrimonio.aportes_del_estado > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_balance.patrimonio.reservas_del_capital =
            variacion_relativa.patrimonio.reservas_del_capital != "-"
              ? variacion_absoluta.patrimonio.reservas_del_capital > 0 &&
                variacion_relativa.patrimonio.reservas_del_capital > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_balance.total_activos =
            variacion_relativa.total_activos != "-"
              ? variacion_absoluta.total_activos > 0 &&
                variacion_relativa.total_activos > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_balance.total_pasivos =
            variacion_relativa.total_pasivos != "-"
              ? variacion_absoluta.total_pasivos > 0 &&
                variacion_relativa.total_pasivos > 0
                ? "Pesimo"
                : "Optimo"
              : "-";

          estado_balance.total_patrimonio =
            variacion_relativa.total_patrimonio != "-"
              ? variacion_absoluta.total_patrimonio > 0 &&
                variacion_relativa.total_patrimonio > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_balance.total_pasivos_patrimonio =
            variacion_relativa.total_pasivos_patrimonio != "-"
              ? variacion_absoluta.total_pasivos_patrimonio > 0 &&
                variacion_relativa.total_pasivos_patrimonio > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          let clone_bl1 = structuredClone(balance_uno);
          let clone_bl2 = structuredClone(balance_dos);
          let clone_bl3 = structuredClone(variacion_absoluta);
          let clone_bl4 = structuredClone(variacion_relativa);
          let clone_bl5 = structuredClone(estado_balance);
          periodos_balance.push([
            clone_bl1,
            clone_bl2,
            clone_bl3,
            clone_bl4,
            clone_bl5,
          ]);
        } else {
        }
        contador = contador + 1;
      });
      //falta hacer las operaciones para sacar los porcentajes
      commit("setAnalisisHorizontales", periodos_balance);
    },

    async getAnalisisHorizontalEstado({ commit, getters }) {
      let estados = getters.EstadoResultados;
      let estado_uno = {};
      let estado_dos = {};
      let periodos_estados = [];
      let contador = 0;
      let doc = {
        anio: "",
        ingreso_de_operaciones: {
          interes_prestamos: "",
          comisiones_y_otros_ingresos: "",
          intereses_inversiones: "",
          intereses_depositos: "",
          total_ingresos_operacion: "",
        },
        costos_operacion: {
          intereses_sobre_prestamos: "",
          comisiones_sobre_titulos: "",
          comisiones_y_otros: "",
          total_costos_operacion: "",
          reservas_de_saneamiento: "",
          utilidad_antes_gastos: "",
        },
        gastos_operacion: {
          funcionarios_y_empleados: "",
          generales: "",
          depresiaciones_y_amortizaciones: "",
          total_gastos_operacion: "",
          utilidad_operacional: "",
          dividendos: "",
        },
        otros_ingreso_y_gastos: {
          otros_ingresos: "",
          otros_gastos: "",
          total_otros_ingresos_y_gastos: "",
        },
        utilidad_antes_impuestos: {
          utilidad_antes_impuestos: "",
          impuesto_sobre_la_renta: "",
          contribucion_especial_plan_de_seguridad_ciudada: "",
        },
        utilidad_neta: "",
        impuesto_sobre_la_renta: "",
        efecto_fiscal: {
          gastos_no_deducibles: "",
          ingresos_no_gravables: "",
          impuesto_sobre_la_renta: "",
        },
      };
      let doc2 = {
        anio: "",
        ingreso_de_operaciones: {
          interes_prestamos: "",
          comisiones_y_otros_ingresos: "",
          intereses_inversiones: "",
          intereses_depositos: "",
          total_ingresos_operacion: "",
        },
        costos_operacion: {
          intereses_sobre_prestamos: "",
          comisiones_sobre_titulos: "",
          comisiones_y_otros: "",
          total_costos_operacion: "",
          reservas_de_saneamiento: "",
          utilidad_antes_gastos: "",
        },
        gastos_operacion: {
          funcionarios_y_empleados: "",
          generales: "",
          depresiaciones_y_amortizaciones: "",
          total_gastos_operacion: "",
          utilidad_operacional: "",
          dividendos: "",
        },
        otros_ingreso_y_gastos: {
          otros_ingresos: "",
          otros_gastos: "",
          total_otros_ingresos_y_gastos: "",
        },
        utilidad_antes_impuestos: {
          utilidad_antes_impuestos: "",
          impuesto_sobre_la_renta: "",
          contribucion_especial_plan_de_seguridad_ciudada: "",
        },
        utilidad_neta: "",
        impuesto_sobre_la_renta: "",
        efecto_fiscal: {
          gastos_no_deducibles: "",
          ingresos_no_gravables: "",
          impuesto_sobre_la_renta: "",
        },
      };
      let doc3 = {
        anio: "",
        ingreso_de_operaciones: {
          interes_prestamos: "",
          comisiones_y_otros_ingresos: "",
          intereses_inversiones: "",
          intereses_depositos: "",
          total_ingresos_operacion: "",
        },
        costos_operacion: {
          intereses_sobre_prestamos: "",
          comisiones_sobre_titulos: "",
          comisiones_y_otros: "",
          total_costos_operacion: "",
          reservas_de_saneamiento: "",
          utilidad_antes_gastos: "",
        },
        gastos_operacion: {
          funcionarios_y_empleados: "",
          generales: "",
          depresiaciones_y_amortizaciones: "",
          total_gastos_operacion: "",
          utilidad_operacional: "",
          dividendos: "",
        },
        otros_ingreso_y_gastos: {
          otros_ingresos: "",
          otros_gastos: "",
          total_otros_ingresos_y_gastos: "",
        },
        utilidad_antes_impuestos: {
          utilidad_antes_impuestos: "",
          impuesto_sobre_la_renta: "",
          contribucion_especial_plan_de_seguridad_ciudada: "",
        },
        utilidad_neta: "",
        impuesto_sobre_la_renta: "",
        efecto_fiscal: {
          gastos_no_deducibles: "",
          ingresos_no_gravables: "",
          impuesto_sobre_la_renta: "",
        },
      };

      let variacion_absoluta = { ...doc };
      let variacion_relativa = { ...doc2 };
      let estado_estado = { ...doc3 };

      estados.map((item) => {
        estado_uno = estados[contador];
        estado_dos = estados[contador + 1];

        if (estado_uno && estado_dos) {
          variacion_absoluta.ingreso_de_operaciones.interes_prestamos =
            parseFloat(
              (
                estado_uno.ingreso_de_operaciones.interes_prestamos -
                estado_dos.ingreso_de_operaciones.interes_prestamos
              ).toFixed(2)
            );
          variacion_absoluta.ingreso_de_operaciones.comisiones_y_otros_ingresos =
            parseFloat(
              (
                estado_uno.ingreso_de_operaciones.comisiones_y_otros_ingresos -
                estado_dos.ingreso_de_operaciones.comisiones_y_otros_ingresos
              ).toFixed(2)
            );
          variacion_absoluta.ingreso_de_operaciones.intereses_inversiones =
            parseFloat(
              (
                estado_uno.ingreso_de_operaciones.intereses_inversiones -
                estado_dos.ingreso_de_operaciones.intereses_inversiones
              ).toFixed(2)
            );
          variacion_absoluta.ingreso_de_operaciones.intereses_depositos =
            parseFloat(
              (
                estado_uno.ingreso_de_operaciones.intereses_depositos -
                estado_dos.ingreso_de_operaciones.intereses_depositos
              ).toFixed(2)
            );
          variacion_absoluta.ingreso_de_operaciones.total_ingresos_operacion =
            parseFloat(
              (
                estado_uno.ingreso_de_operaciones.total_ingresos_operacion -
                estado_dos.ingreso_de_operaciones.total_ingresos_operacion
              ).toFixed(2)
            );
          variacion_absoluta.costos_operacion.intereses_sobre_prestamos =
            parseFloat(
              (
                estado_uno.costos_operacion.intereses_sobre_prestamos -
                estado_dos.costos_operacion.intereses_sobre_prestamos
              ).toFixed(2)
            );
          variacion_absoluta.costos_operacion.comisiones_sobre_titulos =
            parseFloat(
              (
                estado_uno.costos_operacion.comisiones_sobre_titulos -
                estado_dos.costos_operacion.comisiones_sobre_titulos
              ).toFixed(2)
            );
          variacion_absoluta.costos_operacion.comisiones_y_otros = parseFloat(
            (
              estado_uno.costos_operacion.comisiones_y_otros -
              estado_dos.costos_operacion.comisiones_y_otros
            ).toFixed(2)
          );
          variacion_absoluta.costos_operacion.total_costos_operacion =
            parseFloat(
              (
                estado_uno.costos_operacion.total_costos_operacion -
                estado_dos.costos_operacion.total_costos_operacion
              ).toFixed(2)
            );
          variacion_absoluta.costos_operacion.reservas_de_saneamiento =
            parseFloat(
              (
                estado_uno.costos_operacion.reservas_de_saneamiento -
                estado_dos.costos_operacion.reservas_de_saneamiento
              ).toFixed(2)
            );
          variacion_absoluta.costos_operacion.utilidad_antes_gastos =
            parseFloat(
              (
                estado_uno.costos_operacion.utilidad_antes_gastos -
                estado_dos.costos_operacion.utilidad_antes_gastos
              ).toFixed(2)
            );
          variacion_absoluta.gastos_operacion.funcionarios_y_empleados =
            parseFloat(
              (
                estado_uno.gastos_operacion.funcionarios_y_empleados -
                estado_dos.gastos_operacion.funcionarios_y_empleados
              ).toFixed(2)
            );
          variacion_absoluta.gastos_operacion.generales = parseFloat(
            (
              estado_uno.gastos_operacion.generales -
              estado_dos.gastos_operacion.generales
            ).toFixed(2)
          );
          variacion_absoluta.gastos_operacion.depresiaciones_y_amortizaciones =
            parseFloat(
              (
                estado_uno.gastos_operacion.depresiaciones_y_amortizaciones -
                estado_dos.gastos_operacion.depresiaciones_y_amortizaciones
              ).toFixed(2)
            );
          variacion_absoluta.gastos_operacion.total_gastos_operacion =
            parseFloat(
              (
                estado_uno.gastos_operacion.total_gastos_operacion -
                estado_dos.gastos_operacion.total_gastos_operacion
              ).toFixed(2)
            );
          variacion_absoluta.gastos_operacion.utilidad_operacional = parseFloat(
            (
              estado_uno.gastos_operacion.utilidad_operacional -
              estado_dos.gastos_operacion.utilidad_operacional
            ).toFixed(2)
          );
          variacion_absoluta.gastos_operacion.dividendos = parseFloat(
            (
              estado_uno.gastos_operacion.dividendos -
              estado_dos.gastos_operacion.dividendos
            ).toFixed(2)
          );
          variacion_absoluta.otros_ingreso_y_gastos.otros_ingresos = parseFloat(
            (
              estado_uno.otros_ingreso_y_gastos.otros_ingresos -
              estado_dos.otros_ingreso_y_gastos.otros_ingresos
            ).toFixed(2)
          );
          variacion_absoluta.otros_ingreso_y_gastos.otros_gastos = parseFloat(
            (
              estado_uno.otros_ingreso_y_gastos.otros_gastos -
              estado_dos.otros_ingreso_y_gastos.otros_gastos
            ).toFixed(2)
          );
          variacion_absoluta.otros_ingreso_y_gastos.total_otros_ingresos_y_gastos =
            parseFloat(
              (
                estado_uno.otros_ingreso_y_gastos
                  .total_otros_ingresos_y_gastos -
                estado_dos.otros_ingreso_y_gastos.total_otros_ingresos_y_gastos
              ).toFixed(2)
            );
          variacion_absoluta.utilidad_antes_impuestos.utilidad_antes_impuestos =
            parseFloat(
              (
                estado_uno.utilidad_antes_impuestos.utilidad_antes_impuestos -
                estado_dos.utilidad_antes_impuestos.utilidad_antes_impuestos
              ).toFixed(2)
            );
          variacion_absoluta.utilidad_antes_impuestos.impuesto_sobre_la_renta =
            parseFloat(
              (
                estado_uno.utilidad_antes_impuestos.impuesto_sobre_la_renta -
                estado_dos.utilidad_antes_impuestos.impuesto_sobre_la_renta
              ).toFixed(2)
            );

          variacion_absoluta.utilidad_antes_impuestos.contribucion_especial_plan_de_seguridad_ciudada =
            parseFloat(
              (
                estado_uno.utilidad_antes_impuestos
                  .contribucion_especial_plan_de_seguridad_ciudada -
                estado_dos.utilidad_antes_impuestos
                  .contribucion_especial_plan_de_seguridad_ciudada
              ).toFixed(2)
            );
          variacion_absoluta.impuesto_sobre_la_renta = parseFloat(
            (
              estado_uno.impuesto_sobre_la_renta -
              estado_dos.utilidad_antes_impuestos
                .contribucion_especial_plan_de_seguridad_ciudada
            ).toFixed(2)
          );
          variacion_absoluta.utilidad_neta = parseFloat(
            (estado_uno.utilidad_neta - estado_dos.utilidad_neta).toFixed(2)
          );
          variacion_absoluta.impuesto_sobre_la_renta = parseFloat(
            (
              estado_uno.impuesto_sobre_la_renta -
              estado_dos.impuesto_sobre_la_renta
            ).toFixed(2)
          );
          variacion_absoluta.efecto_fiscal.gastos_no_deducibles = parseFloat(
            (
              estado_uno.efecto_fiscal.gastos_no_deducibles -
              estado_dos.efecto_fiscal.gastos_no_deducibles
            ).toFixed(2)
          );
          variacion_absoluta.efecto_fiscal.ingresos_no_gravables = parseFloat(
            (
              estado_uno.efecto_fiscal.ingresos_no_gravables -
              estado_dos.efecto_fiscal.ingresos_no_gravables
            ).toFixed(2)
          );
          variacion_absoluta.efecto_fiscal.impuesto_sobre_la_renta = parseFloat(
            (
              estado_uno.efecto_fiscal.impuesto_sobre_la_renta -
              estado_dos.efecto_fiscal.impuesto_sobre_la_renta
            ).toFixed(2)
          );

          //variacion relativa
          variacion_relativa.ingreso_de_operaciones.interes_prestamos =
            estado_dos.ingreso_de_operaciones.interes_prestamos === 0
              ? "-"
              : (
                  (estado_uno.ingreso_de_operaciones.interes_prestamos /
                    estado_dos.ingreso_de_operaciones.interes_prestamos -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.ingreso_de_operaciones.comisiones_y_otros_ingresos =
            estado_dos.ingreso_de_operaciones.comisiones_y_otros_ingresos === 0
              ? "-"
              : (
                  (estado_uno.ingreso_de_operaciones
                    .comisiones_y_otros_ingresos /
                    estado_dos.ingreso_de_operaciones
                      .comisiones_y_otros_ingresos -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.ingreso_de_operaciones.intereses_inversiones =
            estado_dos.ingreso_de_operaciones.intereses_inversiones === 0
              ? "-"
              : (
                  (estado_uno.ingreso_de_operaciones.intereses_inversiones /
                    estado_dos.ingreso_de_operaciones.intereses_inversiones -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.ingreso_de_operaciones.intereses_depositos =
            estado_dos.ingreso_de_operaciones.intereses_depositos === 0
              ? "-"
              : (
                  (estado_uno.ingreso_de_operaciones.intereses_depositos /
                    estado_dos.ingreso_de_operaciones.intereses_depositos -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.ingreso_de_operaciones.total_ingresos_operacion =
            estado_dos.ingreso_de_operaciones.total_ingresos_operacion === 0
              ? "-"
              : (
                  (estado_uno.ingreso_de_operaciones.total_ingresos_operacion /
                    estado_dos.ingreso_de_operaciones.total_ingresos_operacion -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.costos_operacion.intereses_sobre_prestamos =
            estado_dos.costos_operacion.intereses_sobre_prestamos === 0
              ? "-"
              : (
                  (estado_uno.costos_operacion.intereses_sobre_prestamos /
                    estado_dos.costos_operacion.intereses_sobre_prestamos -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.costos_operacion.comisiones_sobre_titulos =
            estado_dos.costos_operacion.comisiones_sobre_titulos === 0
              ? "-"
              : (
                  (estado_uno.costos_operacion.comisiones_sobre_titulos /
                    estado_dos.costos_operacion.comisiones_sobre_titulos -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.costos_operacion.comisiones_y_otros =
            estado_dos.costos_operacion.comisiones_y_otros === 0
              ? "-"
              : (
                  (estado_uno.costos_operacion.comisiones_y_otros /
                    estado_dos.costos_operacion.comisiones_y_otros -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.costos_operacion.total_costos_operacion =
            estado_dos.costos_operacion.total_costos_operacion === 0
              ? "-"
              : (
                  (estado_uno.costos_operacion.total_costos_operacion /
                    estado_dos.costos_operacion.total_costos_operacion -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.costos_operacion.reservas_de_saneamiento =
            estado_dos.costos_operacion.reservas_de_saneamiento === 0
              ? "-"
              : (
                  (estado_uno.costos_operacion.reservas_de_saneamiento /
                    estado_dos.costos_operacion.reservas_de_saneamiento -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.costos_operacion.utilidad_antes_gastos =
            estado_dos.costos_operacion.utilidad_antes_gastos === 0
              ? "-"
              : (
                  (estado_uno.costos_operacion.utilidad_antes_gastos /
                    estado_dos.costos_operacion.utilidad_antes_gastos -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.gastos_operacion.funcionarios_y_empleados =
            estado_dos.gastos_operacion.funcionarios_y_empleados === 0
              ? "-"
              : (
                  (estado_uno.gastos_operacion.funcionarios_y_empleados /
                    estado_dos.gastos_operacion.funcionarios_y_empleados -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.gastos_operacion.generales =
            estado_dos.gastos_operacion.generales === 0
              ? "-"
              : (
                  (estado_uno.gastos_operacion.generales /
                    estado_dos.gastos_operacion.generales -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.gastos_operacion.depresiaciones_y_amortizaciones =
            estado_dos.gastos_operacion.depresiaciones_y_amortizaciones === 0
              ? "-"
              : (
                  (estado_uno.gastos_operacion.depresiaciones_y_amortizaciones /
                    estado_dos.gastos_operacion
                      .depresiaciones_y_amortizaciones -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.gastos_operacion.total_gastos_operacion =
            estado_dos.gastos_operacion.total_gastos_operacion === 0
              ? "-"
              : (
                  (estado_uno.gastos_operacion.total_gastos_operacion /
                    estado_dos.gastos_operacion.total_gastos_operacion -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.gastos_operacion.utilidad_operacional = parseFloat(
            estado_dos.gastos_operacion.utilidad_operacional === 0
              ? "-"
              : (
                  (estado_uno.gastos_operacion.utilidad_operacional /
                    estado_dos.gastos_operacion.utilidad_operacional -
                    1) *
                  100
                ).toFixed(2)
          );

          variacion_relativa.gastos_operacion.dividendos =
            estado_dos.gastos_operacion.dividendos === 0
              ? "-"
              : (
                  (estado_uno.gastos_operacion.dividendos /
                    estado_dos.gastos_operacion.dividendos -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.otros_ingreso_y_gastos.otros_ingresos =
            estado_dos.otros_ingreso_y_gastos.otros_ingresos === 0
              ? "-"
              : (
                  (estado_uno.otros_ingreso_y_gastos.otros_ingresos /
                    estado_dos.otros_ingreso_y_gastos.otros_ingresos -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.otros_ingreso_y_gastos.otros_gastos =
            estado_dos.otros_ingreso_y_gastos.otros_gastos === 0
              ? "-"
              : (
                  (estado_uno.otros_ingreso_y_gastos.otros_gastos /
                    estado_dos.otros_ingreso_y_gastos.otros_gastos -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.otros_ingreso_y_gastos.total_otros_ingresos_y_gastos =
            estado_dos.otros_ingreso_y_gastos.total_otros_ingresos_y_gastos ===
            0
              ? "-"
              : (
                  (estado_uno.otros_ingreso_y_gastos
                    .total_otros_ingresos_y_gastos /
                    estado_dos.otros_ingreso_y_gastos
                      .total_otros_ingresos_y_gastos -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.utilidad_antes_impuestos.utilidad_antes_impuestos =
            estado_dos.utilidad_antes_impuestos.utilidad_antes_impuestos === 0
              ? "-"
              : (
                  (estado_uno.utilidad_antes_impuestos
                    .utilidad_antes_impuestos /
                    estado_dos.utilidad_antes_impuestos
                      .utilidad_antes_impuestos -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.utilidad_antes_impuestos.impuesto_sobre_la_renta =
            estado_dos.utilidad_antes_impuestos.impuesto_sobre_la_renta === 0
              ? "-"
              : (
                  (estado_uno.utilidad_antes_impuestos.impuesto_sobre_la_renta /
                    estado_dos.utilidad_antes_impuestos
                      .impuesto_sobre_la_renta -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.utilidad_antes_impuestos.contribucion_especial_plan_de_seguridad_ciudada =
            estado_dos.utilidad_antes_impuestos.impuesto_sobre_la_renta === 0
              ? "-"
              : (
                  (estado_uno.utilidad_antes_impuestos
                    .contribucion_especial_plan_de_seguridad_ciudada /
                    estado_dos.utilidad_antes_impuestos
                      .contribucion_especial_plan_de_seguridad_ciudada -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.efecto_fiscal.gastos_no_deducibles =
            estado_dos.efecto_fiscal.gastos_no_deducibles === 0
              ? "-"
              : (
                  (estado_uno.efecto_fiscal.gastos_no_deducibles /
                    estado_dos.efecto_fiscal.gastos_no_deducibles -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.efecto_fiscal.ingresos_no_gravables =
            estado_dos.efecto_fiscal.ingresos_no_gravables === 0
              ? "-"
              : (
                  (estado_uno.efecto_fiscal.ingresos_no_gravables /
                    estado_dos.efecto_fiscal.ingresos_no_gravables -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.efecto_fiscal.impuesto_sobre_la_renta =
            estado_dos.efecto_fiscal.impuesto_sobre_la_renta === 0
              ? "-"
              : (
                  (estado_uno.efecto_fiscal.impuesto_sobre_la_renta /
                    estado_dos.efecto_fiscal.impuesto_sobre_la_renta -
                    1) *
                  100
                ).toFixed(2);

          variacion_relativa.utilidad_neta =
            estado_dos.utilidad_neta === 0
              ? "-"
              : (
                  (estado_uno.utilidad_neta / estado_dos.utilidad_neta - 1) *
                  100
                ).toFixed(2);
          variacion_relativa.impuesto_sobre_la_renta =
            estado_dos.impuesto_sobre_la_renta === 0
              ? "-"
              : (
                  (estado_uno.impuesto_sobre_la_renta /
                    estado_dos.impuesto_sobre_la_renta -
                    1) *
                  100
                ).toFixed(2);

          estado_estado.ingreso_de_operaciones.interes_prestamos =
            variacion_relativa.ingreso_de_operaciones.interes_prestamos != "-"
              ? variacion_absoluta.ingreso_de_operaciones.interes_prestamos >
                  0 &&
                variacion_relativa.ingreso_de_operaciones.interes_prestamos > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.ingreso_de_operaciones.comisiones_y_otros_ingresos =
            variacion_relativa.ingreso_de_operaciones
              .comisiones_y_otros_ingresos != "-"
              ? variacion_absoluta.ingreso_de_operaciones
                  .comisiones_y_otros_ingresos > 0 &&
                variacion_relativa.ingreso_de_operaciones
                  .comisiones_y_otros_ingresos > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.ingreso_de_operaciones.intereses_inversiones =
            variacion_relativa.ingreso_de_operaciones.intereses_inversiones !=
            "-"
              ? variacion_absoluta.ingreso_de_operaciones
                  .intereses_inversiones > 0 &&
                variacion_relativa.ingreso_de_operaciones
                  .intereses_inversiones > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.ingreso_de_operaciones.intereses_depositos =
            variacion_relativa.ingreso_de_operaciones.intereses_depositos != "-"
              ? variacion_absoluta.ingreso_de_operaciones.intereses_depositos >
                  0 &&
                variacion_relativa.ingreso_de_operaciones.intereses_depositos >
                  0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.ingreso_de_operaciones.total_ingresos_operacion =
            variacion_relativa.ingreso_de_operaciones
              .total_ingresos_operacion != "-"
              ? variacion_absoluta.ingreso_de_operaciones
                  .total_ingresos_operacion > 0 &&
                variacion_relativa.ingreso_de_operaciones
                  .total_ingresos_operacion > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.costos_operacion.intereses_sobre_prestamos =
            variacion_relativa.costos_operacion.intereses_sobre_prestamos != "-"
              ? variacion_absoluta.costos_operacion.intereses_sobre_prestamos >
                  0 &&
                variacion_relativa.costos_operacion.intereses_sobre_prestamos >
                  0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.costos_operacion.comisiones_sobre_titulos =
            variacion_relativa.costos_operacion.comisiones_sobre_titulos != "-"
              ? variacion_absoluta.costos_operacion.comisiones_sobre_titulos >
                  0 &&
                variacion_relativa.costos_operacion.comisiones_sobre_titulos > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.costos_operacion.comisiones_y_otros =
            variacion_relativa.costos_operacion.comisiones_y_otros != "-"
              ? variacion_absoluta.costos_operacion.comisiones_y_otros > 0 &&
                variacion_relativa.costos_operacion.comisiones_y_otros > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.costos_operacion.total_costos_operacion =
            variacion_relativa.costos_operacion.total_costos_operacion != "-"
              ? variacion_absoluta.costos_operacion.total_costos_operacion >
                  0 &&
                variacion_relativa.costos_operacion.total_costos_operacion > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.costos_operacion.reservas_de_saneamiento =
            variacion_relativa.costos_operacion.reservas_de_saneamiento != "-"
              ? variacion_absoluta.costos_operacion.reservas_de_saneamiento >
                  0 &&
                variacion_relativa.costos_operacion.reservas_de_saneamiento > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.costos_operacion.utilidad_antes_gastos =
            variacion_relativa.costos_operacion.utilidad_antes_gastos != "-"
              ? variacion_absoluta.costos_operacion.utilidad_antes_gastos > 0 &&
                variacion_relativa.costos_operacion.utilidad_antes_gastos > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.gastos_operacion.funcionarios_y_empleados =
            variacion_relativa.gastos_operacion.funcionarios_y_empleados != "-"
              ? variacion_absoluta.gastos_operacion.funcionarios_y_empleados >
                  0 &&
                variacion_relativa.gastos_operacion.funcionarios_y_empleados > 0
                ? "Pesimo"
                : "Optimo"
              : "-";

          estado_estado.gastos_operacion.generales =
            variacion_relativa.gastos_operacion.generales != "-"
              ? variacion_absoluta.gastos_operacion.generales > 0 &&
                variacion_relativa.gastos_operacion.generales > 0
                ? "Pesimo"
                : "Optimo"
              : "-";

          estado_estado.gastos_operacion.depresiaciones_y_amortizaciones =
            variacion_relativa.gastos_operacion
              .depresiaciones_y_amortizaciones != "-"
              ? variacion_absoluta.gastos_operacion
                  .depresiaciones_y_amortizaciones > 0 &&
                variacion_relativa.gastos_operacion
                  .depresiaciones_y_amortizaciones > 0
                ? "Pesimo"
                : "Optimo"
              : "-";

          estado_estado.gastos_operacion.total_gastos_operacion =
            variacion_relativa.gastos_operacion.total_gastos_operacion != "-"
              ? variacion_absoluta.gastos_operacion.total_gastos_operacion >
                  0 &&
                variacion_relativa.gastos_operacion.total_gastos_operacion > 0
                ? "Pesimo"
                : "Optimo"
              : "-";

          estado_estado.gastos_operacion.utilidad_operacional =
            variacion_relativa.gastos_operacion.utilidad_operacional != "-"
              ? variacion_absoluta.gastos_operacion.utilidad_operacional > 0 &&
                variacion_relativa.gastos_operacion.utilidad_operacional > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.gastos_operacion.dividendos =
            variacion_relativa.gastos_operacion.dividendos != "-"
              ? variacion_absoluta.gastos_operacion.dividendos > 0 &&
                variacion_relativa.gastos_operacion.dividendos > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.otros_ingreso_y_gastos.otros_ingresos =
            variacion_relativa.otros_ingreso_y_gastos.otros_ingresos != "-"
              ? variacion_absoluta.otros_ingreso_y_gastos.otros_ingresos > 0 &&
                variacion_relativa.otros_ingreso_y_gastos.otros_ingresos > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.otros_ingreso_y_gastos.otros_gastos =
            variacion_relativa.otros_ingreso_y_gastos.otros_gastos != "-"
              ? variacion_absoluta.otros_ingreso_y_gastos.otros_gastos > 0 &&
                variacion_relativa.otros_ingreso_y_gastos.otros_gastos > 0
                ? "Pesimo"
                : "Optimo"
              : "-";

          estado_estado.otros_ingreso_y_gastos.total_otros_ingresos_y_gastos =
            variacion_relativa.otros_ingreso_y_gastos
              .total_otros_ingresos_y_gastos != "-"
              ? variacion_absoluta.otros_ingreso_y_gastos
                  .total_otros_ingresos_y_gastos > 0 &&
                variacion_relativa.otros_ingreso_y_gastos
                  .total_otros_ingresos_y_gastos > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.utilidad_antes_impuestos.utilidad_antes_impuestos =
            variacion_relativa.utilidad_antes_impuestos
              .utilidad_antes_impuestos != "-"
              ? variacion_absoluta.utilidad_antes_impuestos
                  .utilidad_antes_impuestos > 0 &&
                variacion_relativa.utilidad_antes_impuestos
                  .utilidad_antes_impuestos > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.utilidad_antes_impuestos.impuesto_sobre_la_renta =
            variacion_relativa.utilidad_antes_impuestos
              .impuesto_sobre_la_renta != "-"
              ? variacion_absoluta.utilidad_antes_impuestos
                  .impuesto_sobre_la_renta > 0 &&
                variacion_relativa.utilidad_antes_impuestos
                  .impuesto_sobre_la_renta > 0
                ? "Pesimo"
                : "Optimo"
              : "-";

          estado_estado.utilidad_antes_impuestos.contribucion_especial_plan_de_seguridad_ciudada =
            variacion_relativa.utilidad_antes_impuestos
              .contribucion_especial_plan_de_seguridad_ciudada != "-"
              ? variacion_absoluta.utilidad_antes_impuestos
                  .contribucion_especial_plan_de_seguridad_ciudada > 0 &&
                variacion_relativa.utilidad_antes_impuestos
                  .contribucion_especial_plan_de_seguridad_ciudada > 0
                ? "Pesimo"
                : "Optimo"
              : "-";

          estado_estado.efecto_fiscal.gastos_no_deducibles =
            variacion_relativa.efecto_fiscal.gastos_no_deducibles != "-"
              ? variacion_absoluta.efecto_fiscal.gastos_no_deducibles > 0 &&
                variacion_relativa.efecto_fiscal.gastos_no_deducibles > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.efecto_fiscal.ingresos_no_gravables =
            variacion_relativa.efecto_fiscal.ingresos_no_gravables != "-"
              ? variacion_absoluta.efecto_fiscal.ingresos_no_gravables > 0 &&
                variacion_relativa.efecto_fiscal.ingresos_no_gravables > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.efecto_fiscal.impuesto_sobre_la_renta =
            variacion_relativa.efecto_fiscal.impuesto_sobre_la_renta != "-"
              ? variacion_absoluta.efecto_fiscal.impuesto_sobre_la_renta > 0 &&
                variacion_relativa.efecto_fiscal.impuesto_sobre_la_renta > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.utilidad_neta =
            variacion_relativa.utilidad_neta != "-"
              ? variacion_absoluta.utilidad_neta > 0 &&
                variacion_relativa.utilidad_neta > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          estado_estado.impuesto_sobre_la_renta =
            variacion_relativa.impuesto_sobre_la_renta != "-"
              ? variacion_absoluta.impuesto_sobre_la_renta > 0 &&
                variacion_relativa.impuesto_sobre_la_renta > 0
                ? "Optimo"
                : "Pesimo"
              : "-";

          let clone_bl1 = structuredClone(estado_uno);
          let clone_bl2 = structuredClone(estado_dos);
          let clone_bl3 = structuredClone(variacion_absoluta);
          let clone_bl4 = structuredClone(variacion_relativa);
          let clone_bl5 = structuredClone(estado_estado);
          periodos_estados.push([
            clone_bl1,
            clone_bl2,
            clone_bl3,
            clone_bl4,
            clone_bl5,
          ]);

          contador++;
        } else {
        }
      });

      commit("setAnalisisHorizontalesEstados", periodos_estados);
    },

    async getAnalisisVerticalBalance({ commit, getters }) {
      let balances = getters.BalanceGeneral;
      let balance_uno = {};
      let balance_dos = {};
      let contador = 0;
      let periodos_balance = [];
      let doc = {
        activos: {
          activos_de_intermediacion: "",
          caja_y_bancos: "",
          cartera_de_prestamos: "",
          inversiones_financieras: "",
          operaciones_bursatiles: "",
        },
        activos_fijos: {
          bienes_inmuebles: "",
        },
        otros_activos: {
          diversos: "",
        },
        pasivos: {
          diversos: "",
          fondos_de_administracion: "",
          otros_pasivos: "",
          pasivos_de_intermediacion: "",
          prestamo_bancos: "",
          prestamos_del_banco: "",
          provisiones: "",
          titulos_de_emision_propia: "",
        },
        patrimonio: {
          aportes_del_estado: "",
          reservas_del_capital: "",
        },
        total_activos: "",
        total_pasivos: "",
        total_pasivos_patrimonio: "",
        total_patrimonio: "",
      };
      let doc2 = {
        activos: {
          activos_de_intermediacion: "",
          caja_y_bancos: "",
          cartera_de_prestamos: "",
          inversiones_financieras: "",
          operaciones_bursatiles: "",
        },
        activos_fijos: {
          bienes_inmuebles: "",
        },
        otros_activos: {
          diversos: "",
        },
        pasivos: {
          diversos: "",
          fondos_de_administracion: "",
          otros_pasivos: "",
          pasivos_de_intermediacion: "",
          prestamo_bancos: "",
          prestamos_del_banco: "",
          provisiones: "",
          titulos_de_emision_propia: "",
        },
        patrimonio: {
          aportes_del_estado: "",
          reservas_del_capital: "",
        },
        total_activos: "",
        total_pasivos: "",
        total_pasivos_patrimonio: "",
        total_patrimonio: "",
      };
      let variacion1 = { ...doc };
      let variacion2 = { ...doc2 };
      let total_activo = 0;
      let total_activo2 = 0;
      let total_pasivo = 0;
      let total_pasivo2 = 0;
      let total_patrimonio = 0;
      let total_patrimonio2 = 0;


      balances.map((item) => {
        balance_uno = balances[contador];
        balance_dos = balances[contador + 1];
        
        if (balance_dos && balance_dos) {

          total_activo = balance_uno.total_activos;
          total_activo2 = balance_dos.total_activos;
          total_pasivo = balance_uno.total_pasivos; 
          total_pasivo2 = balance_dos.total_pasivos;
          total_patrimonio = balance_uno.total_pasivos_patrimonio;
          total_patrimonio2 = balance_dos.total_pasivos_patrimonio;
          
          // *TODO iteramos activos
          for (const pro in balance_uno.activos) {
            variacion1.activos[pro] =  parseFloat(((balance_uno.activos[pro]/total_activo)*100).toFixed(2));
            variacion2.activos[pro] =  parseFloat(((balance_dos.activos[pro]/total_activo2)*100).toFixed(2));
          }

           // *TODO iteramos activos fijos
           for (const pro in balance_uno.activos_fijos) {
            variacion1.activos_fijos[pro] =  parseFloat(((balance_uno.activos_fijos[pro]/total_activo)*100).toFixed(2));
            variacion2.activos_fijos[pro] =  parseFloat(((balance_dos.activos_fijos[pro]/total_activo2)*100).toFixed(2));
          }

          // *TODO iteramos otros activos 
          for (const pro in balance_uno.otros_activos) {
            variacion1.otros_activos[pro] =  parseFloat(((balance_uno.otros_activos[pro]/total_activo)*100).toFixed(2));
            variacion2.otros_activos[pro] =  parseFloat(((balance_dos.otros_activos[pro]/total_activo2)*100).toFixed(2));
          }

          // *TODO iteramos pasivos
          for (const pro in balance_uno.pasivos) {
            variacion1.pasivos[pro] =  parseFloat(((balance_uno.pasivos[pro]/total_patrimonio)*100).toFixed(2));
            variacion2.pasivos[pro] =  parseFloat(((balance_dos.pasivos[pro]/total_patrimonio2)*100).toFixed(2));
          }

          // *TODO iteramos patrimonio
          for (const pro in balance_uno.patrimonio) {
            variacion1.patrimonio[pro] =  parseFloat(((balance_uno.patrimonio[pro]/total_patrimonio)*100).toFixed(2));
            variacion2.patrimonio[pro] =  parseFloat(((balance_dos.patrimonio[pro]/total_patrimonio2)*100).toFixed(2));
          }

          variacion1.total_activos =  parseFloat(((balance_uno.total_activos/total_activo)*100).toFixed(2));
          variacion2.total_activos =  parseFloat(((balance_dos.total_activos/total_activo2)*100).toFixed(2));

          variacion1.total_pasivos =  parseFloat(((balance_uno.total_pasivos/total_pasivo)*100).toFixed(2));
          variacion2.total_pasivos =  parseFloat(((balance_dos.total_pasivos/total_pasivo2)*100).toFixed(2));

          variacion1.total_pasivos_patrimonio =  parseFloat(((balance_uno.total_pasivos_patrimonio/total_patrimonio)*100).toFixed(2));
          variacion2.total_pasivos_patrimonio =  parseFloat(((balance_dos.total_pasivos_patrimonio/total_patrimonio2)*100).toFixed(2));

          variacion1.total_patrimonio =  parseFloat(((balance_uno.total_patrimonio/total_patrimonio)*100).toFixed(2));
          variacion2.total_patrimonio =  parseFloat(((balance_dos.total_patrimonio/total_patrimonio2)*100).toFixed(2));

          let var1 = structuredClone(variacion1);
          let var2 = structuredClone(variacion2);

          periodos_balance.push([balance_uno, balance_dos, var1, var2]);
        }
        
        contador = contador + 1;
      
      });

      /*  // *TODO  BUCLE PARA RECORRER LOS OBJETOS DE LOS BALANCES
      for (const pro in obj) {
        console.log(obj[pro]);
      }
      setAnalisisVerticales
      */

      commit("setAnalisisVerticales", periodos_balance);

    },

    async getAnalisisVerticalEstado({ commit, getters }) {
      let estados = getters.EstadoResultados;
      let estado_uno = {};
      let estado_dos = {};
      let contador = 0;
      let periodos_estados = [];
      let doc = {
        anio: "",
        ingreso_de_operaciones: {
          interes_prestamos: "",
          comisiones_y_otros_ingresos: "",
          intereses_inversiones: "",
          intereses_depositos: "",
          total_ingresos_operacion: "",
        },
        costos_operacion: {
          intereses_sobre_prestamos: "",
          comisiones_sobre_titulos: "",
          comisiones_y_otros: "",
          total_costos_operacion: "",
          reservas_de_saneamiento: "",
          utilidad_antes_gastos: "",
        },
        gastos_operacion: {
          funcionarios_y_empleados: "",
          generales: "",
          depresiaciones_y_amortizaciones: "",
          total_gastos_operacion: "",
          utilidad_operacional: "",
          dividendos: "",
        },
        otros_ingreso_y_gastos: {
          otros_ingresos: "",
          otros_gastos: "",
          total_otros_ingresos_y_gastos: "",
        },
        utilidad_antes_impuestos: {
          utilidad_antes_impuestos: "",
          impuesto_sobre_la_renta: "",
          contribucion_especial_plan_de_seguridad_ciudada: "",
        },
        utilidad_neta: "",
        impuesto_sobre_la_renta: "",
        efecto_fiscal: {
          gastos_no_deducibles: "",
          ingresos_no_gravables: "",
          impuesto_sobre_la_renta: "",
        },
      };
      let doc2 = {
        anio: "",
        ingreso_de_operaciones: {
          interes_prestamos: "",
          comisiones_y_otros_ingresos: "",
          intereses_inversiones: "",
          intereses_depositos: "",
          total_ingresos_operacion: "",
        },
        costos_operacion: {
          intereses_sobre_prestamos: "",
          comisiones_sobre_titulos: "",
          comisiones_y_otros: "",
          total_costos_operacion: "",
          reservas_de_saneamiento: "",
          utilidad_antes_gastos: "",
        },
        gastos_operacion: {
          funcionarios_y_empleados: "",
          generales: "",
          depresiaciones_y_amortizaciones: "",
          total_gastos_operacion: "",
          utilidad_operacional: "",
          dividendos: "",
        },
        otros_ingreso_y_gastos: {
          otros_ingresos: "",
          otros_gastos: "",
          total_otros_ingresos_y_gastos: "",
        },
        utilidad_antes_impuestos: {
          utilidad_antes_impuestos: "",
          impuesto_sobre_la_renta: "",
          contribucion_especial_plan_de_seguridad_ciudada: "",
        },
        utilidad_neta: "",
        impuesto_sobre_la_renta: "",
        efecto_fiscal: {
          gastos_no_deducibles: "",
          ingresos_no_gravables: "",
          impuesto_sobre_la_renta: "",
        },
      };

      let variacion1 = { ...doc };
      let variacion2 = { ...doc2 };
      let total = 0;
      let total2 = 0;


      estados.map((item) => {
        estado_uno = estados[contador];
        estado_dos = estados[contador + 1];
        
        if (estado_uno && estado_dos) {

          total = estado_uno.ingreso_de_operaciones.total_ingresos_operacion;
          total2 = estado_dos.ingreso_de_operaciones.total_ingresos_operacion;
          
          
          // *TODO iteramos ingreso operaciones
          for (const pro in estado_uno.ingreso_de_operaciones) {
            variacion1.ingreso_de_operaciones[pro] =  parseFloat(((estado_uno.ingreso_de_operaciones[pro]/total)*100).toFixed(2));
            variacion2.ingreso_de_operaciones[pro] =  parseFloat(((estado_dos.ingreso_de_operaciones[pro]/total2)*100).toFixed(2));
          }

          // *TODO iteramos costos operacion
          for (const pro in estado_uno.costos_operacion) {
            variacion1.costos_operacion[pro] =  parseFloat(((estado_uno.costos_operacion[pro]/total)*100).toFixed(2));
            variacion2.costos_operacion[pro] =  parseFloat(((estado_dos.costos_operacion[pro]/total2)*100).toFixed(2));
          }

          // *TODO iteramos gastos operacion
          for (const pro in estado_uno.gastos_operacion) {
            variacion1.gastos_operacion[pro] =  parseFloat(((estado_uno.gastos_operacion[pro]/total)*100).toFixed(2));
            variacion2.gastos_operacion[pro] =  parseFloat(((estado_dos.gastos_operacion[pro]/total2)*100).toFixed(2));
          }

          // *TODO iteramos otros ingresos y gastos
          for (const pro in estado_uno.otros_ingreso_y_gastos) {
            variacion1.otros_ingreso_y_gastos[pro] =  parseFloat(((estado_uno.otros_ingreso_y_gastos[pro]/total)*100).toFixed(2));
            variacion2.otros_ingreso_y_gastos[pro] =  parseFloat(((estado_dos.otros_ingreso_y_gastos[pro]/total2)*100).toFixed(2));
          }

          // *TODO iteramos utilidad antes impuestos
          for (const pro in estado_uno.utilidad_antes_impuestos) {
            variacion1.utilidad_antes_impuestos[pro] =  parseFloat(((estado_uno.utilidad_antes_impuestos[pro]/total)*100).toFixed(2));
            variacion2.utilidad_antes_impuestos[pro] =  parseFloat(((estado_dos.utilidad_antes_impuestos[pro]/total2)*100).toFixed(2));
          }

          // *TODO iteramos efecto fiscal
          for (const pro in estado_uno.efecto_fiscal) {
            variacion1.efecto_fiscal[pro] =  parseFloat(((estado_uno.efecto_fiscal[pro]/total)*100).toFixed(2));
            variacion2.efecto_fiscal[pro] =  parseFloat(((estado_dos.efecto_fiscal[pro]/total2)*100).toFixed(2));
          }

          variacion1.utilidad_neta =  parseFloat(((estado_uno.utilidad_neta/total)*100).toFixed(2));
          variacion2.utilidad_neta =  parseFloat(((estado_dos.utilidad_neta/total2)*100).toFixed(2));

          variacion1.impuesto_sobre_la_renta =  parseFloat(((estado_uno.impuesto_sobre_la_renta/total)*100).toFixed(2));
          variacion2.impuesto_sobre_la_renta =  parseFloat(((estado_dos.impuesto_sobre_la_renta/total2)*100).toFixed(2));

          let var1 = structuredClone(variacion1);
          let var2 = structuredClone(variacion2);

          periodos_estados.push([estado_uno, estado_dos, var1, var2]);
        }
        
        contador = contador + 1;
      
      });

      /*  // *TODO  BUCLE PARA RECORRER LOS OBJETOS DE LOS BALANCES
      for (const pro in obj) {
        console.log(obj[pro]);
      }
      setAnalisisVerticales
      */

      commit("setAnalisisVerticalesEstados", periodos_estados);

    },
  },
  modules: {},
});
