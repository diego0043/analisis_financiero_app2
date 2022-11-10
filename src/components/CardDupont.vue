<template>
  <div>
    <div class="title-principal">
        <span>{{msg}}</span>
    </div>
    <div class="card-dp shadow-sm">
      <div class="title">
        {{ titulo }}
      </div>
      <div>
        <span v-show="dolar">$</span> <span class="payload">{{ valor }}</span>
        <span v-show="porcentaje">%</span>
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
  height: 100px;
  border: 1px solid white;
  border-radius: 10px;
}

.title {
  display: block;
  width: 100%;
  margin-top: 20%;
  text-align: center;
}

.payload {
  display: block;
  width: 100%;
  text-align: center;
}

.title-principal{
    width: 150px;
    text-align: center;
    margin-bottom: 10px;
}
</style>
