<template>
  <div class="container-bl">
    <NavBar />
    <EstadoResultados class="bl" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import EstadoResultados from "../components/EstadoResultados.vue";

export default {
  name: "BalanceView",
  components: {
    NavBar,
    EstadoResultados
},
};
</script>
<style scoped>
.container-bl {
  background-color: #F8F8F8;
}

.bl{
  background-color: #F8F8F8;
}
</style>
