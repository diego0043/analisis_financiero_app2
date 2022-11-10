<template>
    <div class="container-bl">
      <NavBar />
      <AnalisisDupont class="bl" />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from "../components/NavBar.vue";
  import AnalisisDupont from "../components/AnalisisDupont.vue";
  
  export default {
    name: "DupontView",
    components: {
      NavBar,
      AnalisisDupont,
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
  