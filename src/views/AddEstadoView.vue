<template>
    <div class="container-bl">
      <NavBar />
      <AddEstado />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from "../components/NavBar.vue";
import AddEstado from "../components/AddEstado.vue";
  
  export default {
    name: "BalanceView",
    components: {
    NavBar,
    AddEstado
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
  