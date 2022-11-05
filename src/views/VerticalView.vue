<template>
    <div class="container-bl">
      <NavBar />
      <AnalisisVertical class="bl" />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from "../components/NavBar.vue";
  import AnalisisVertical from "../components/AnalisisVertical.vue";
  
  export default {
    name: "VerticalView",
    components: {
      NavBar,
      AnalisisVertical,
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
  