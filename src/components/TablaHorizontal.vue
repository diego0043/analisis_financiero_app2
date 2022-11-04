<template>
  <div class="ctn">
    <div class="pagination">
      <button
        @click="prevPage"
        class="btn-up"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Ver balance"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-chevron-double-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
          />
          <path
            fill-rule="evenodd"
            d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </button>
      <div class="pag">Pag. {{ pag }} / 2</div>
      <button
        @click="nextPage"
        class="btn-down"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Ver estado de resultados"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-chevron-double-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
          <path
            fill-rule="evenodd"
            d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
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
      <button
        class="btn-help"
        @click="ayuda()"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="¿Necesitas ayuda?"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-question-circle"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
          />
        </svg>
      </button>
    </div>

    <AnalisisHorizontalDescarga
      id="element-to-convert"
      v-show="showBalance && showEstado === false"
      :balance1="balance1"
      :balance2="balance2"
      :var_rel_1="var_rel_1"
      :var_abs_1="var_abs_1"
      :estados_1="estados_1"
      :isVisible="isVisible"
    />

    <AnalisisHorizontalDescarga2
      id="element-to-convert2"
      v-show="showEstado && showBalance === false"
      :estado1="estado1"
      :estado2="estado2"
      :var_rel_2="var_rel_2"
      :var_abs_2="var_abs_2"
      :estados_2="estados_2"
      :isVisible="isVisible"
    />
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";
import AnalisisHorizontalDescarga from "./AnalisisHorizontalDescarga";
import AnalisisHorizontalDescarga2 from "./AnalisisHorizontalDescarga2";

export default {
  name: "TablaHorizontal",
  data() {
    return {
      pag: 1,
      showBalance: true,
      showEstado: false,
      ds: true,
      isVisible: true,
    };
  },
  components: {
    AnalisisHorizontalDescarga,
    AnalisisHorizontalDescarga2,
  },
  props: {
    balance1: { Object, default: {} },
    balance2: { Object, default: {} },
    estado1: { Object, default: {} },
    estado2: { Object, default: {} },
    var_rel_1: { Object, default: {} },
    var_rel_2: { Object, default: {} },
    var_abs_1: { Object, default: {} },
    var_abs_2: { Object, default: {} },
    estados_1: { Object, default: {} },
    estados_2: { Object, default: {} },
  },

  methods: {
    async exportToPDF() {
      if (this.showBalance && this.showEstado === false) {
        this.isVisible = false;
        let name =
          "Analisis-horizontal-" +
          this.balance1.anio +
          "-" +
          this.balance2.anio;
        await html2pdf(document.getElementById("element-to-convert"), {
          margin: 1,
          filename: name,
          margin: [1, 0, 1, 0], // [top, right, bottom, left]
          jsPDF: { unit: "in" },
        });

        this.isVisible = true;
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
      } else if (this.showEstado && this.showBalance === false) {
        this.isVisible = false;
        let name =
          "Analisis-horizontal-" +
          this.balance1.anio +
          "-" +
          this.balance2.anio;
        await html2pdf(document.getElementById("element-to-convert2"), {
          margin: 1,
          filename: name,
          margin: [1, 0, 1, 0], // [top, right, bottom, left]
          jsPDF: { unit: "in" },
        });

        this.isVisible = true;


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
      }
    },
    nextPage() {
      if (this.pag === 1) {
        this.showEstado = true;
        this.showBalance = false;
        this.ds = true;
        this.pag = 2;
      }
    },
    prevPage() {
      if (this.pag === 2) {
        this.showEstado = false;
        this.showBalance = true;
        this.pag = 1;
      }
    },
    ayuda() {
      this.$swal({
        icon: "info",
        title: "¿Como ver el análisis horizontal?",
        text: "Para ver el análisis horizontal dispones de 2 hojas diferentes, en una se encuentra el análisis para el balance general y en la otra para el estado de resultados. Para cambiar de hoja solo debes dar click en los botones que se encuentran a la izquierda.",
      });
    },
  },
};
</script>

<style scoped>

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-track {
  background: white;
}
::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 5px;
}

.ctn {
  background-color: #f8f8f8;
  border: none;
  box-shadow: none;
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

.btn-help {
  position: fixed;
  top: 140px;
  background-color: transparent;
  border: none;
  color: gray;
  border-radius: 0px;
  width: 55px;
  height: 50px;
}

.btn-help:hover {
  background-color: #f8f8f8;
  color: black;
}

.right-menu {
  position: fixed;
  top: 40px;
  right: 0px;
  background-color: white;
  width: 55px;
  height: 100vh;
}

.pagination {
  position: fixed;
  top: 40px;
  left: 305px;
  background-color: #f8f8f8;
  width: 70px;
  height: 100vh;
}

.btn-up {
  position: fixed;
  top: 270px;
  background-color: transparent;
  border: none;
  color: gray;
  border-radius: 0px;
  width: 55px;
  height: 50px;
  margin-left: 7px;
}

.btn-up:hover {
  background-color: #f8f8f8;
  color: black;
}

.btn-down {
  position: fixed;
  top: 340px;
  background-color: transparent;
  border: none;
  color: gray;
  border-radius: 0px;
  width: 55px;
  height: 50px;
  margin-left: 7px;
}

.btn-down:hover {
  background-color: #f8f8f8;
  color: black;
}

.pag {
  position: fixed;
  top: 323px;
  background-color: transparent;
  border: none;
  color: gray;
  border-radius: 0px;
  width: 55px;
  height: 50px;
  font-size: 12px;
  margin-left: 10px;
}
</style>
