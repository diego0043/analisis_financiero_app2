<!-- eslint-disable prettier/prettier -->
<template>
  <div class="row container-fluid">
    <div class="col-3">
      <div class="scroll-menu">
        <div
          class="card-style shadow-sm"
          v-for="(item, index) in BalanceGeneral"
          :key="index"
        >
          <div class="row">
            <div class="col-8 mt-2 ml-3">BANDESAL</div>
            <div class="col-3 mt-2">{{ item.anio }}</div>
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
              <button @click="mostrarBalance(item)" class="btn-view mt-2">
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
          <div class="row text-center container">
            <div class="col">
            <button class="btn-add shadow-sm mt-4 mb-1">Agregar</button>
          </div>
          <div class="col">
            <button class="btn-add-2 shadow-sm mt-4 mb-1">Ver todos</button>
          </div>
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
          Seleccione una cuenta para ver su balance general
        </div>
      </div>
      <div v-if="report === true">
        <TablaBalance :report="balanceGeneral" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TablaBalance from "./TablaBalance.vue";
export default {
  name: "BalanceGeneral",
  data() {
    return {
      balanceGeneral: {},
      report: false,
    };
  },

  computed: {
    ...mapGetters(["BalanceGeneral"]),
  },
  methods: {
    ...mapActions(["getBalanceGeneral"]),
    mostrarBalance(balance) {
      this.balanceGeneral = balance;
      this.report = true;
    },
  },
  async created() {
    await this.getBalanceGeneral();
    setTimeout(() => {}, 1000);
  },
  components: { TablaBalance },
};
</script>

<style scoped>
.scroll-menu {
  top: 70px;
  height: 87vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: fixed;
  width: 300px;
}

::-webkit-scrollbar {
  width: 5px;
  height: 40px;
}
::-webkit-scrollbar-track {
  background: #f6f6f6;
}
::-webkit-scrollbar-thumb {
  background: #d4b499;
  border-radius: 20px;
}

.contenedor-principal {
  height: 85vh;
  margin-top: 60px;
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
  border-radius: 10px;
}

.btn-add {
  background-color: #d4b499;
  color: white;
  border-radius: 10px;
  border: 1px solid #d4b499;
  width: 100%;
  height: 40px;
}

.btn-view {
  background-color: white;
  color: #d4b499;
  border: none;
}

.btn-view:active {
  background-color: white;
  color: #d4b499;
  border: none;
}

.btn-add-2 {
  background-color: #d4b499;
  color: white;
  border-radius: 10px;
  border: 1px solid #d4b499;
  width: 100%;
  height: 40px;
}
</style>
