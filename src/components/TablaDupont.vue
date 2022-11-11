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

    <div id="element-to-convert" class="container mb-3 mt-4">
      <br />
      <div class="row rows-principal">ANALISIS DUPONT</div>

      <div class="u1">

      </div>

      <div class="col1 ">
        <CardDupont class="card-dp" :titulo="'Balance General'" :valor="''" :porcentaje="true"/>

        <span class="msg"> </span>

        <CardDupont class="card-dp" :titulo="'Estado de Resultados'" :valor="''" :porcentaje="true" />
      </div>

      <div class="col2">
        <CardDupont class="card-dp" :titulo="'Margen de utilidad neta'" :valor="col1.margen_neta" />
        <span class="msg">*</span>
        <CardDupont class="card-dp" :titulo="'Rotación de activos totales'" :valor="col1.rotacion_activos" />
        <span class="msg"> </span>
        <CardDupont class="card-dp act-tot" :titulo="'Activos totales'" :valor="col1.activos_totales" />
        <span class="msg">/</span>
        <CardDupont class="card-dp" :titulo="'Capital de acciones comunes'" :valor="col1.capital_acciones_comunes" />
      </div>

      <div class="col3">
        <CardDupont class="card-dp" :titulo="'ROA'" :valor="col2.roa"/>
        <span class="msg">*</span>
        <CardDupont class="card-dp" :titulo="'MFA'" :valor="col2.mfa" />
      </div>

      <div class="col4">
        <CardDupont class="card-dp" :titulo="'ROE'" :valor="col3.roe" />
      </div>
    </div>
  </div>
</template>
<script>
import html2pdf from "html2pdf.js";
import CardDupont from "./CardDupont.vue";

export default {
  name: "TablaDupont",
  data: () => ({}),
  components: {
    CardDupont,
  },
  props: {
    col1: {
      type: Object,
      default: {},
    },
    col2: {
      type: Object,
      default: {},
    },
    col3: {
      type: Object,
      default: {},
    },
  },

  methods: {
    async exportToPDF() {
      let name = "Analisis-dupont";
      html2pdf(document.getElementById("element-to-convert"), {
        margin: 1,
        filename: name,
        margin: [1, 0, 1, 0], // [top, right, bottom, left]
        jsPDF: { unit: "in" },
      });

      await this.$swal.fire({
        icon: "success",
        title: "Se ha exportado el balance general a PDF",
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
};
</script>

<style scoped>
.rows-principal {
  display: block;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.container {
  width: 90%;
  background-color: white;
  margin-left: 35px;
  height: 800px;
}

.ctn {
  background-color: #f8f8f8;
  border: none;
  box-shadow: none;
}

.sub-title {
  margin-left: 20px;
}

.cuenta {
  margin-left: 50px;
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

.icon-export {
  margin-top: -9px;
}

.btn-edit {
  position: fixed;
  top: 140px;
  background-color: transparent;
  border: none;
  color: gray;
  border-radius: 0px;
  width: 55px;
  height: 50px;
}

.btn-edit:hover {
  color: black;
  background-color: #f8f8f8;
}

.icon-edit {
  margin-top: -3px;
}


.right-menu {
  position: fixed;
  top: 40px;
  right: 0px;
  background-color: white;
  width: 55px;
  height: 100vh;
}

.col1{
  display: inline-block;
  position: absolute;
  top: 305px;
  left: 8%;
}
.col2 {
  display: inline-block;
  position: absolute;
  top: 120px;
  left: 31%;
}

.col3 {
  display: inline-block;
  position: absolute;
  top: 305px;
  left: 53%;
}

.col4 {
  display: inline-block;
  position: absolute;
  top: 400px;
  left: 74%;
}

.card-dp {
  margin-bottom: 30px;
}

.msg{
  display: block;
  font-size: 25px;
  font-weight: bold;
  color: gray;
  width: 152px;
  text-align: center;
  margin-top: -5px;
  height: 40px;
}
</style>
