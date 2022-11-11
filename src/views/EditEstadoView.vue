<template>
    <div class="container-bl">
      <NavBar />
      <EditEstado />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from "../components/NavBar.vue";
import EditEstado from "../components/EditEstado.vue";
  
  export default {
    name: "EditEstadoView",
    components: {
    NavBar,
    EditEstado
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
  