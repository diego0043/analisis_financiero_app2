<!-- eslint-disable prettier/prettier -->
<template>
  <div class="row bl container-fluid">
    <div class="col-3 bl">
      <div class="scroll-menu">
        <br />
        <div
          class="card-style"
          v-for="(item, index) in AnalisisVerticales"
          :key="index"
        >
          <div class="row">
            <div class="col mt-2 ml-3">BANDESAL</div>
            <div class="col mt-2 ml-2">
              {{ item[0].anio }} - {{ item[1].anio }}
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <img
                src="../assets/img_balance.svg"
                class="img-fluid"
                alt="Responsive image"
              />
            </div>
            <div class="col mt-3">
              <button @click="mostrarAnalisis(index)" class="btn-view mt-2">
                Ver detalle
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
            <button @click="info()" class="btn-add shadow-sm mt-4 mb-3">
              ¿Que es un analisis vertical?
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
          Seleccione un periodo para ver su analisis vertical
        </div>
      </div>
      <div class="bl" v-if="report === true">
        <TablaVertical
          :balance1="balance1"
          :balance2="balance2"
          :var_rel_1="var_rel_1"
          :var_rel_2="var_rel_2"
          :estado1="estado1"
          :estado2="estado2"
          :var_abs_1="var_abs_1"
          :var_abs_2="var_abs_2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TablaVertical from "./TablaVertical.vue";
export default {
  name: "AnalisVertical",
  data() {
    return {
      report: false,
      balance1: {},
      balance2: {},
      estado1: {},
      estado2: {},
      var_rel_1: {},
      var_rel_2: {},
      var_abs_1: {},
      var_abs_2: {},
    };
  },

  computed: {
    ...mapGetters(["AnalisisVerticales", "AnalisisVerticalesEstados"]),
  },
  methods: {
    ...mapActions([
      "getBalanceGeneral",
      "getEstadoResultados",
      "getAnalisisVerticalBalance",
      "getAnalisisVerticalEstado",
    ]),
    mostrarAnalisis(posicion) {
      let analisis = this.AnalisisVerticales[posicion];
      let estados = this.AnalisisVerticalesEstados[posicion];

      //asignamos valores del balance

      this.balance1 = analisis[0];
      this.balance2 = analisis[1];
      this.var_rel_1 = analisis[2];
      this.var_rel_2 = analisis[3];

      //asignamos valores del estado de resultados
      this.estado1 = estados[0];
      this.estado2 = estados[1];
      this.var_abs_1 = estados[2];
      this.var_abs_2 = estados[3];

      //mos
      this.report = true;
    },
    info() {
      this.$swal({
        icon: "info",
        title: "¿Que es un analisis vertical?",
        text: "El análisis vertical es una técnica del análisis financiero que permite conocer el peso porcentual de cada partida de los estados financieros de una empresa en un período de tiempo determinado.",
      });
    },
  },
  async created() {
    await this.getBalanceGeneral();
    await this.getEstadoResultados();
    await this.getAnalisisVerticalBalance();
    await this.getAnalisisVerticalEstado();

    setTimeout(() => {}, 1000);
  },
  components: { TablaVertical },
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

.btn-add {
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

.btn-add:hover {
  background-color: #d8d7d7;
}

.btn-view {
  background-color: white;
  color: gray;
  font-weight: 400;
  border: none;
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
</style>
