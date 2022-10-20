<template>
    <div class="container-bl">
      <NavBar />
      <AddBalance />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from "../components/NavBar.vue";
import AddBalance from "../components/AddBalance.vue";
  
  export default {
    name: "BalanceView",
    components: {
    NavBar,
    AddBalance
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
  