<template>
    <div class="container-bl">
      <NavBar />
      <IndicadorComponent class="bl"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from "../components/NavBar.vue";
  import IndicadorComponent from "../components/IndicadorComponent.vue";
  
  export default {
    name: "IndicadoresView",
    components: {
      NavBar,
      IndicadorComponent,
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
  