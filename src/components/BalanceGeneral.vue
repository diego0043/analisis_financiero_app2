<!-- eslint-disable prettier/prettier -->
<template>
  <div class="row container-fluid">
    <div class="col-3">
      <div class="scroll-menu">
        <div>
          <p>Opciones disponibles:</p>
            <button>Agregar nuevo</button>
        </div>
        <div class="card-style shadow" v-for="(item,index) in getBalanceGeneral" :key="index">
            <div class="row">
              <div class="col-8 mt-2 ml-3">BANDESAL</div>
              <div class="col-3 mt-2">{{item.anio}}</div>
            </div>
            <div class="row mt-3">
              <div class="col">
                <img src="../assets/img_balance.svg" class="img-fluid" alt="Responsive image"/>
              </div>
              <div class="col mt-3">
                Ver balance
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="col-9 contenedor-principal">
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
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
export default {
  name: "BalanceGeneral",
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters(["getBalanceGeneral"]),
  },
};
</script>

<style scoped>
.scroll-menu {
  top: 80px;
  height: 80vh;
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

.text-inicial{
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: gray;
}

.card-style{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 120px;
  margin-top: 20px;
  border-radius: 10px;
}

</style>
