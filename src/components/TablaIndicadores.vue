<template>
  <div class="ctn">
    <div class="right-menu">
      <button
      class="btn-export"
      @click="exportToPDF()"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      title="Exportar como PDF"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-download icon-export"
        viewBox="0 0 16 16"
      >
        <path
          d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
        />
        <path
          d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
        />
      </svg>
    </button>
    </div>
    <div id="element-to-convert" class="container mt-4 mb-3">
      <br />
      <div class="row rows-principal">BANCO DE DESAROLLO DE EL SALVADOR</div>
      <div class="row rows-principal">INDICADORES FINANCIEROS</div>
      <div class="row rows-principal">
        AÑO CORRESPONDIENTE: {{ report.anio }}
      </div>
      <div class="row sub-title rows-subtitulo mt-4 mb-4">
        Indicadores de liquidez:
      </div>
      <TablaIndividualIndicador
        v-for="(item, index) in datos_liquidez"
        :key="index"
        :title="item.title"
        :labels="item.labels"
        :results="item.results"
        :anio="item.anio"
        :interpretation="item.interpretation"
        :conditions="item.conditions"
      />
      <div class="row sub-title rows-subtitulo mt-4 mb-4">
        Indicadores de actividad:
      </div>
      <TablaIndividualIndicador
        v-for="(item, index) in datos_actividad"
        :key="index + 10"
        :title="item.title"
        :labels="item.labels"
        :results="item.results"
        :anio="item.anio"
        :interpretation="item.interpretation"
        :conditions="item.conditions"
      />
      <div class="row sub-title rows-subtitulo mt-4 mb-4">
        Indicadores de endeudamiento:
      </div>
      <TablaIndividualIndicador
        v-for="(item, index) in datos_endeudamiento"
        :key="index + 30"
        :title="item.title"
        :labels="item.labels"
        :results="item.results"
        :anio="item.anio"
        :interpretation="item.interpretation"
        :conditions="item.conditions"
        :tipe="item.tipe"
      />
      <div class="row sub-title rows-subtitulo mt-4 mb-4">
        Indicadores de rentabilidad:
      </div>
      <TablaIndividualIndicador
        v-for="(item, index) in datos_rentabilidad"
        :key="index + 40"
        :title="item.title"
        :labels="item.labels"
        :results="item.results"
        :anio="item.anio"
        :interpretation="item.interpretation"
        :conditions="item.conditions"
      />
      <div class="row sub-title rows-subtitulo mt-4 mb-4">
        Otros indicadores:
      </div>
      <TablaIndividualIndicador
        v-for="(item, index) in datos_dupong"
        :key="index + 80"
        :title="item.title"
        :labels="item.labels"
        :results="item.results"
        :anio="item.anio"
        :interpretation="item.interpretation"
        :conditions="item.conditions"
        
      />
      <div class="row mt-4"></div>
    </div>
  </div>
</template>
<script>
import html2pdf from "html2pdf.js";
import TablaIndividualIndicador from "./TablaIndividualIndicador.vue";

export default {
  name: "TablaEstado",
  data: () => ({
    datos_liquidez: [],
    datos_actividad: [],
    datos_endeudamiento: [],
    datos_rentabilidad: [],
    datos_dupong: [],
  }),
  props: {
    report: Object,
    balance: Object,
    estado: Object,
  },
  methods: {
    async exportToPDF() {
      let name = "Indicadores-" + this.report.anio;
      html2pdf(document.getElementById("element-to-convert"), {
        margin: 1,
        filename: name,
        margin: [1, 0, 1, 0],
        jsPDF: { unit: "in" },
      });
      await this.$swal.fire({
        icon: "success",
        title: "Se han exportado los indicadores a PDF",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    },
  },
  created() {
    const volcadoData1 = [
      {
        title:
          "Razon corriente = Activo intermediación / Pasivo intermediación",
        labels: ["Activo intermediación", "Pasivo intermediación"],
        results: [
          this.balance.activos.activos_de_intermediacion,
          this.balance.pasivos.pasivos_de_intermediacion,
          this.report.indicadores_liquidez.razon_corriente,
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
          this.balance.activos.activos_de_intermediacion -
            this.balance.activos.inversiones_financieras,
          this.balance.pasivos.pasivos_de_intermediacion,
          this.report.indicadores_liquidez.prueba_acida,
        ],
        anio: this.report.anio,
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
          this.balance.activos.activos_de_intermediacion,
          this.balance.pasivos.pasivos_de_intermediacion,
          this.report.indicadores_liquidez.capital_trabajo,
        ],
        anio: this.report.anio,
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
          this.balance.activos.activos_de_intermediacion / 4,
          this.balance.total_activos,
          this.report.indicadores_de_actividad
            .generadores_de_ingresos_financieros,
        ],
        anio: this.report.anio,
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
          this.balance.total_pasivos,
          this.balance.total_activos,
          this.report.indicadores_de_endeudamiento.indice_de_endeudamiento,
        ],
        anio: this.report.anio,
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
          this.estado.utilidad_neta,
          this.balance.total_activos,
          this.report.indicadores_de_rentabilidad.roa,
        ],
        anio: this.report.anio,
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
          this.estado.utilidad_neta,
          this.balance.total_patrimonio,
          this.report.indicadores_de_rentabilidad.roe,
        ],
        anio: this.report.anio,
        interpretation: [
          "El resultado nos indica que el valor es superior a la rentabilidad esperada",
          "El resultado nos indica que el valor es inferior a la rentabilidad esperada",
        ],
        conditions: [5, 5],
      },
    ];

    const volcadoData5 = [
      {
        title: "Margen utilidad neta = Utilidad neta / Total ingreso de operación",
        labels: ["Utilidad neta", "Total ingreso de operación"],
        results: [
          this.estado.utilidad_neta,
          this.estado.ingreso_de_operaciones.total_ingresos_operacion,
          this.report.analisis_dupong.margen_utilidad_neta,
        ],
        anio: this.report.anio,
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
          this.estado.ingreso_de_operaciones.total_ingresos_operacion,
          this.balance.total_activos,
          this.report.analisis_dupong.rotacion_activos_totales,
        ],
        anio: this.report.anio,
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
          this.estado.utilidad_neta,
          this.balance.total_activos,
          this.report.analisis_dupong.rendimientos_sobre_los_activos_totales,
        ],
        anio: this.report.anio,
        interpretation: [
          "El resultado nos indica qué la empresa esta ganando más de 10 centavos por cada dólar invertido",
          "El resultado nos indica qué la empresa esta ganando menos de 10 centavos por cada dólar invertido",
        ],
        conditions: [0.001, 0.001],
      },
      {
        title:
          "Multiplicador de apalancamiento financiero = Total activos / Total patriomonio",
        labels: ["Total activos", "Total patriomonio"],
        results: [
          this.balance.total_activos,
          this.balance.total_patrimonio,
          this.report.analisis_dupong.multiplicador_de_apalancamiento_financiero,
        ],
        anio: this.report.anio,
        interpretation: [
          "Aca no se que poner",
          "Aca no se que poner",
        ],
        conditions: [5, 5 ],
        
      },
    ];

    this.datos_liquidez = volcadoData1;
    this.datos_actividad = volcadoData2;
    this.datos_endeudamiento = volcadoData3;
    this.datos_rentabilidad = volcadoData4;
    this.datos_dupong = volcadoData5;
  },
  components: { TablaIndividualIndicador },
};
</script>

<style scoped>
.rows-principal {
  display: block;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.rows-subtitulo {
  display: block;
  font-size: 17px;
  font-weight: bold;
  text-align: left;
}

.container {
  width: 85%;
  background-color: white;
}

.ctn {
  background-color: #f8f8f8;
  border: none;
  box-shadow: none;
}

.sub-title {
  margin-left: 20px;
}

.btn-export {
  position: fixed;
  top: 90px;
  background-color: transparent;
  border: none;
  color: gray;
  border-radius: 0px;
  width: 55px;
  height: 50px;
}

.btn-export:hover {
  background-color: #f8f8f8;
  color: black;
}

.icon-export{
 margin-top: -9px;
}

.right-menu{
  position: fixed;
  top: 40px;
  right: 0px;
  background-color: white;
  width: 55px;
  height: 100vh;
}
</style>
