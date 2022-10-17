<template>
  <div class="home">
    <NavBar />
    <ComponentHome />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import ComponentHome from "../components/ComponentHome.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    ComponentHome,
  },
};
</script>
