<template>
  <div class="container-bl">
    <NavBar />
    <BalanceGeneral class="bl" />
  </div>
</template>

<script>
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
  background-color: #f8f8f8;
}

.bl {
  background-color: #f8f8f8;
}
</style>
