<!-- eslint-disable prettier/prettier -->
<template>
  <div class="row bl container-fluid">
    <div class="col-3 bl">
      <div class="scroll-menu ">
        <br />
        <div
          class="card-style"
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
              <button @click="newBalance()" class="btn-view-all shadow-sm">Agregar nuevo balance</button>
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
      <div class="bl" v-if="report === true">
        <TablaBalance  :report="balanceGeneral" />
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
    newBalance() {
      this.$router.push({
        name: "n_balance",
      });
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
  height: 20px !important;
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
  width: 85%;
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
  margin-bottom: 20px;
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
  margin-bottom: 60px;
}

.btn-view-all:hover {
  background-color: #d8d7d7;
}

</style>
