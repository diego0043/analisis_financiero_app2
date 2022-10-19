<template>
  <div>
    <NavBar />
    <BalanceGeneral />
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
