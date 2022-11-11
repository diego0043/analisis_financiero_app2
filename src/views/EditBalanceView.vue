<template>
    <div class="container-bl">
      <NavBar />
      <EditBalance />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from "../components/NavBar.vue";
import EditBalance from "../components/EditBalance.vue";
  
  export default {
    name: "EditBalanceView",
    components: {
    NavBar,
    EditBalance
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
  