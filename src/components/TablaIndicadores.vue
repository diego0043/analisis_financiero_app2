<template>
  <div class="ctn">
    <div class="right-menu shadow-sm">
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
  }),
  props: {
    report: Object,
    datos_liquidez: [],
    datos_actividad: [],
    datos_endeudamiento: [],
    datos_rentabilidad: [],
    datos_dupong: [],
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
