<!-- eslint-disable prettier/prettier -->
<template>
  <div class="row bl container-fluid">
    <div class="col-3 bl">
      <div class="scroll-menu">
        <br />
        <div
          class="card-style"
          v-for="(item, index) in BalanceGeneral"
          :key="index"
        >
          <div class="row">
            <div class="col-8 mt-2 ml-3">BANDESAL</div>
            <div class="col-3 mt-2 ml-2">
              {{ item.anio }}
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <img
                src="../assets/undraw_mind_map_re_nlb6.svg"
                class="img-fluid image"
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
              ¿Que es un analisis dupont?
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
        <TablaDupont 
        :col1="col1"
        :col2="col2"
        :col3="col3"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TablaDupont from "./TablaDupont.vue";
export default {
  name: "AnalisVertical",
  data() {
    return {
      report: false,
      col1: {
        margen_neta: 0,
        rotacion_activos: 0,
        activos_totales: 0,
        capital_acciones_comunes: 0,
      },
      col2: {
        roa: 0,
        mfa: 0,
      },
      col3: {
        roe: 0,
      },
    };
  },

  computed: {
    ...mapGetters(["BalanceGeneral", "EstadoResultados", "Indicadores"]),
  },
  methods: {
    ...mapActions(["getBalanceGeneral", "getEstadoResultados", "getIndicadores"]),
    mostrarAnalisis(posicion) {
      
      let indicadores = this.Indicadores[posicion];

      console.log(indicadores);
      this.col1.margen_neta = indicadores[0].analisis_dupong.margen_utilidad_neta ;
      this.col1.rotacion_activos = indicadores[0].analisis_dupong.rotacion_activos_totales;
      this.col1.activos_totales = "$ " + indicadores[1].total_activos;
      this.col1.capital_acciones_comunes = "$ " + indicadores[1].total_patrimonio;

      this.col2.roa = indicadores[0].indicadores_de_rentabilidad.roa + "%";
      this.col2.mfa = indicadores[0].analisis_dupong.multiplicador_de_apalancamiento_financiero + "%";

      this.col3.roe = indicadores[0].indicadores_de_rentabilidad.roe + "%";
      this.report = true;
    },
    info() {
      this.$swal({
        icon: "info",
        title: "¿Que es un analisis dupont?",
        text: "El análisis Dupont es una herramienta de análisis financiero que permite determinar la eficiencia de la empresa en la utilización de sus recursos. El análisis Dupont se basa en la relación entre la rentabilidad y la utilización de los recursos de la empresa. El análisis Dupont se compone de tres factores: rotación de activos, rotación de capital y margen de utilidad.",
      });
    },
  },
  async created() {
    await this.getBalanceGeneral();
    await this.getEstadoResultados();
    await this.getIndicadores(),

    setTimeout(() => {}, 1000);
  },
  components: { TablaDupont },
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

.image {
  margin-top: -5px;
  margin-left: 18px;
}
</style>
