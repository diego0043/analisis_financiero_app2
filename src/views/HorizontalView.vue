<template>
  <div class="container-bl">
    <NavBar />
    <AnalisisHorizontal class="bl" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import AnalisisHorizontal from "../components/AnalisisHorizontal.vue";

export default {
  name: "HorizontalView",
  components: {
    NavBar,
    AnalisisHorizontal,
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
