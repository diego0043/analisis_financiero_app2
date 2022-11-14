<!-- eslint-disable prettier/prettier -->
<template>
  <div class="row bl container-fluid">
    <div class="col-3 bl">
      <div class="scroll-menu">
        <br />
        <div
          class="card-style"
          v-for="(item, index) in Indicadores"
          :key="index"
        >
          <div class="row">
            <div class="col-8 mt-2 ml-3">BANDESAL</div>
            <div class="col-3 mt-2">{{ item[0].anio }}</div>
          </div>
          <div class="row mt-3">
            <div class="col-5">
              <img
                src="../assets/undraw_data_report_re_p4so.svg"
                class="img-fluid"
                alt="Responsive image"
              />
            </div>
            <div class="col mt-3">
              <button @click="mostrarIndicadores(item)" class="btn-view mt-2">
                Ver indicadores
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path
                    d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div class="row">
            <button class="btn-view-all shadow-sm mt-4 mb-1">
              Ver todos los indicadores
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-9 contenedor-principal">
      <div v-show="report === false">
        <div class="row">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets7.lottiefiles.com/private_files/lf30_ghysqmiq.json"
            style="width: 400px"
            class="img mt-3"
          >
          </lottie-player>
        </div>
        <div class="row text-inicial">
          Seleccione una cuenta para ver sus indicadores
        </div>
      </div>
      <div class="bl" v-if="report === true">
        <TablaIndicadores
          :report="indicadores"
          :datos_liquidez="datos_liquidez"
          :datos_rentabilidad="datos_rentabilidad"
          :datos_endeudamiento="datos_endeudamiento"
          :datos_actividad="datos_actividad"
          :datos_dupong="datos_dupong"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TablaIndicadores from "./TablaIndicadores.vue";
export default {
  name: "IndicadorComponent",
  data() {
    return {
      indicadores: {},
      report: false,
      balance: {},
      estado: {},
      datos_liquidez: [],
      datos_actividad: [],
      datos_endeudamiento: [],
      datos_rentabilidad: [],
      datos_dupong: [],
    };
  },

  computed: {
    ...mapGetters(["Indicadores"]),
  },
  methods: {
    ...mapActions([
      "getIndicadores",
      "getBalanceGeneral",
      "getEstadoResultados",
    ]),
    mostrarIndicadores(indicador) {
      this.indicadores = { ...indicador[0] };
      this.balance = { ...indicador[1] };
      this.estado = { ...indicador[2] };

      const volcadoData1 = [
        {
          title:
            "Razon corriente = Activo intermediación / Pasivo intermediación",
          labels: ["Activo intermediación", "Pasivo intermediación"],
          results: [
            this.balance.activos.activos_de_intermediacion.toFixed(2),
            this.balance.pasivos.pasivos_de_intermediacion.toFixed(2),
            this.indicadores.indicadores_liquidez.razon_corriente,
          ],
          anio: this.report.anio,
          interpretation: [
            "El resultado nos indica qué la proporción de deudas de corto plazo fueron cubiertas por el activo",
            "El resultado nos indica qué la proporción de deudas de corto plazo no fueron cubiertas por el activo",
          ],
          conditions: [1, 1],
        },
        {
          title:
            "Prueba acida = (Activo intermediación - inversiones financieras) / Pasivo intermediación",
          labels: [
            "Act intermediación - inv. financieras",
            "Pasivo intermediación",
          ],
          results: [
            (
              this.balance.activos.activos_de_intermediacion -
              this.balance.activos.inversiones_financieras
            ).toFixed(2),
            this.balance.pasivos.pasivos_de_intermediacion.toFixed(2),
            this.indicadores.indicadores_liquidez.prueba_acida,
          ],
          anio: this.indicadores.anio,
          interpretation: [
            "El resultado nos indica qué la esta empresa pudo atender todas sus obligaciones por lo menos un año con los activos más líquidos del activo corriente ",
            "El resultado nos indica qué la esta empresa no pudo atender todas sus obligaciones por lo menos un año con los activos más líquidos del activo corriente ",
          ],
          conditions: [1, 1],
        },
        {
          title:
            "Capital de trabajo = Activo intermediación - Pasivo intermediación",
          labels: ["Activo intermediación", "Pasivo intermediación"],
          results: [
            this.balance.activos.activos_de_intermediacion.toFixed(2),
            this.balance.pasivos.pasivos_de_intermediacion.toFixed(2),
            this.indicadores.indicadores_liquidez.capital_trabajo,
          ],
          anio: this.indicadores.anio,
          interpretation: [
            "El resultado nos indica que la empresa puede hacer frente a sus deudas y está en condiciones de facilitar el crecimiento",
            "El resultado nos indica que la empresa no puede hacer frente a sus deudas y no está en condiciones de facilitar el crecimiento",
          ],
          conditions: [0, 0],
        },
      ];

      const volcadoData2 = [
        {
          title:
            "Generadores de ingresos financieros = Activo promedio intermediación / Activos totales",
          labels: ["Activo promedio intermediación", "Activos totales"],
          results: [
            (this.balance.activos.activos_de_intermediacion / 4).toFixed(2),
            (parseFloat(this.balance.total_activos)).toFixed(2),
            this.indicadores.indicadores_de_actividad
              .generadores_de_ingresos_financieros,
          ],
          anio: this.indicadores.anio,
          interpretation: [
            "El resultado nos indica qué la empresa tiene una buena eficiencia en la utilización de sus activos",
            "El resultado nos indica qué la empresa no tiene una buena eficiencia en la utilización de sus activos",
          ],
          conditions: [1, 1],
        },
      ];

      const volcadoData3 = [
        {
          title: "Indice de endeudamiento = Total pasivos / Total activos",
          labels: ["Total pasivos", "Total activos"],
          results: [
            (this.balance.total_pasivos).toFixed(2),
            (parseFloat(this.balance.total_activos)).toFixed(2),
            this.indicadores.indicadores_de_endeudamiento
              .indice_de_endeudamiento,
          ],
          anio: this.indicadores.anio,
          interpretation: [
            "La empresa ha asumido una gran cantidad de riesgo, la mayoría de sus activos se han financiado mediante deuda",
            "El resultado muestra que la mayoría de sus activos son de propiedad total.",
          ],
          conditions: [50, 50],
          tipe: 1,
        },
      ];

      const volcadoData4 = [
        {
          title: "ROA = Utilidad neta / Total activos",
          labels: ["Utilidad neta", "Total activos"],
          results: [
            (parseFloat(this.estado.utilidad_neta)).toFixed(2),
            (parseFloat(this.balance.total_activos)).toFixed(2),
            this.indicadores.indicadores_de_rentabilidad.roa,
          ],
          anio: this.indicadores.anio,
          interpretation: [
            "El resultado nos indica qué la empresa es rentable",
            "El resultado nos indica qué la empresa no es rentable",
          ],
          conditions: [5, 5],
        },
        {
          title: "ROE = Utilidad neta / Total patrimonio",
          labels: ["Utilidad neta", "Total patrimonio"],
          results: [
          (parseFloat(this.estado.utilidad_neta)).toFixed(2),
            (this.balance.total_patrimonio).toFixed(2),
            this.indicadores.indicadores_de_rentabilidad.roe,
          ],
          anio: this.indicadores.anio,
          interpretation: [
            "El resultado nos indica que el valor es superior a la rentabilidad esperada",
            "El resultado nos indica que el valor es inferior a la rentabilidad esperada",
          ],
          conditions: [5, 5],
        },
      ];

      const volcadoData5 = [
        {
          title:
            "Margen utilidad neta = Utilidad neta / Total ingreso de operación",
          labels: ["Utilidad neta", "Total ingreso de operación"],
          results: [
          (parseFloat(this.estado.utilidad_neta)).toFixed(2),
            (this.estado.ingreso_de_operaciones.total_ingresos_operacion).toFixed(2),
            this.indicadores.analisis_dupong.margen_utilidad_neta,
          ],
          anio: this.indicadores.anio,
          interpretation: [
            "El resultado nos indica qué la empresa tiene una buena eficiencia en la utilización de sus activos",
            "El resultado nos indica qué la empresa no tiene una buena eficiencia en la utilización de sus activos",
          ],
          conditions: [0, 0],
        },
        {
          title:
            "Rotación activos totales = Total ingresos de operación / Total activos",
          labels: ["Total ingresos de operación", "Total activos"],
          results: [
            (this.estado.ingreso_de_operaciones.total_ingresos_operacion).toFixed(2),
            (parseFloat(this.balance.total_activos)).toFixed(2),
            this.indicadores.analisis_dupong.rotacion_activos_totales,
          ],
          anio: this.indicadores.anio,
          interpretation: [
            "El resultado nos indica que la forma en que se ha utilizado los activos es eficiente",
            "El resultado nos indica que la forma en que se ha utilizado los activos no es eficiente",
          ],
          conditions: [10, 10],
        },
        {
          title:
            "Rendimiento sobre activos totales = Utilidad neta / Total activos",
          labels: ["Total ingresos de operación", "Total activos"],
          results: [
          (parseFloat(this.estado.utilidad_neta)).toFixed(2),
          (parseFloat(this.balance.total_activos)).toFixed(2),
            this.indicadores.analisis_dupong
              .rendimientos_sobre_los_activos_totales,
          ],
          anio: this.indicadores.anio,
          interpretation: [
            "El resultado nos indica qué la empresa esta ganando más de 10 centavos por cada dólar invertido",
            "El resultado nos indica qué la empresa esta ganando menos de 10 centavos por cada dólar invertido",
          ],
          conditions: [0.001, 0.001],
        },
      ];

      this.datos_liquidez = volcadoData1;
      this.datos_actividad = volcadoData2;
      this.datos_endeudamiento = volcadoData3;
      this.datos_rentabilidad = volcadoData4;
      this.datos_dupong = volcadoData5;

      this.report = true;
    },
  },
  async created() {
    await this.getBalanceGeneral();
    await this.getEstadoResultados();
    await this.getIndicadores();
  },
  components: { TablaIndicadores },
};
</script>

<style scoped>
.scroll-menu {
  top: 80px;
  height: 95vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: fixed;
  width: 300px;
  background-color: white;
  margin-left: -14px;
  margin-top: -14px;
}

::-webkit-scrollbar {
  width: 5px;
  height: 40px;
}
::-webkit-scrollbar-track {
  background: #f8f8f8;
}
::-webkit-scrollbar-thumb {
  background: #f8f8f8;
  border-radius: 20px;
}

.container-fluid {
  widows: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
}

.bl {
  background-color: #f8f8f8;
}

.contenedor-principal {
  margin-top: 60px;
  width: 100%;
  height: 89vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.text-inicial {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: gray;
}

.card-style {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 120px;
  margin-top: 20px;
  transform: scale(1);
  transition: 0.2s linear;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.12);
}

.card-style:hover {
  transform: scale(1.02);
  transition: 0.2s linear;
}

.btn-view {
  background-color: white;
  color: gray;
  font-weight: 400;
  border: none;
  margin-left: -10px;
}

.btn-view:hover {
  color: black;
}

.btn-view:active {
  background-color: white;
  color: #d4b499;
  border: none;
}

.btn-view-all {
  display: block;
  background-color: #f8f8f8;
  color: gray;
  font-weight: 500;
  width: 82%;
  height: 40px;
  border: 1px solid #d8d7d7;
  border-radius: 10px;
  margin-right: auto;
  margin-left: auto;
}

.btn-view-all:hover {
  background-color: #d8d7d7;
}

.img-fluid {
  width: 100px;
  margin-left: 15px;
  margin-top: -4px;
}
</style>
