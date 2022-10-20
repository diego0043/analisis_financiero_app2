<template>
  <div class="container-bl">
    <NavBar />
    <BalanceGeneral class="bl" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import BalanceGeneral from "../components/BalanceGeneral.vue";

export default {
  name: "BalanceView",
  components: {
    NavBar,
    BalanceGeneral,
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
