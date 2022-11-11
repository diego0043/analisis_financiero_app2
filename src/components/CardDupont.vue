<template>
  <div>
    <div class="title-principal">
      <span>{{ msg }}</span>
    </div>
    <div class="card-dp shadow">
      <div v-show="porcentaje === false" class="title">
        {{ titulo }}
      </div>
      <div v-show="porcentaje" class="title mt-5">
        {{ titulo }}
      </div>
      <div>
          <span class="payload mt-2">{{ valor }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    titulo: {
      type: String,
      default: "Titulo",
    },
    valor: {
      type: String,
      default: "",
    },
    dolar: {
      type: Boolean,
      default: false,
    },
    porcentaje: {
      type: Boolean,
      default: false,
    },
    msg: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.card-dp {
  width: 150px;
  height: 120px;
  border: 1px solid white;
  border-radius: 10px;
  color: gray;
}



.title {
  display: block;
  width: 100%;
  margin-top: 20%;
  text-align: center;
  font-size: 13px;
}

.payload {
  display: block;
  width: 100%;
  text-align: center;
}

.title-principal {
  width: 150px;
  text-align: center;
  margin-bottom: 2px;
  font-size: 25px;
  font-weight: bold;
  color: gray;
}


</style>
