<template>
  <div class="tabla">
    <div class="row title-table">
      {{ title }}
    </div>

    <div class="row body-table">
      <div class="col-5 text-sub-title-table">
        <div class="row">
          {{ labels[0] }}
        </div>
        <div class="row">{{ labels[1] }}</div>
        <div class="row">Resultado</div>
      </div>
      <div class="col-2 value-table">
        <div class="row">
          {{ results[0] }}
        </div>
        <div class="row ">
          {{ results[1] }}
        </div>
        <div class="row">
          <span v-if="results[2] > conditions[0] && tipe === 0" class="good">{{ results[2] }}</span>
          <span v-if="results[2] > conditions[0] && tipe === 1" class="danger">{{ results[2] }}</span>
        </div>
        <div class="row">
          <span v-if="results[2] <= conditions[1] && tipe === 0" class="danger">{{ results[2] }}</span>
          <span v-if="results[2] <= conditions[1] && tipe === 1" class="good">{{ results[2] }}</span>

        </div>
      </div>
      <div class="col-5">
        <div class="row">
          <p class="msg-table" v-if="results[2] > conditions[0] && tipe === 0">
            {{ interpretation[0] }}
          </p>
          <p class="msg-table" v-if="results[2] > conditions[0] && tipe === 1">
            {{ interpretation[0] }}
          </p>
          <p class="msg-table" v-if="results[2] < conditions[1]  && tipe === 0">
            {{ interpretation[1] }}
          </p>
          <p class="msg-table" v-if="results[2] < conditions[1] && tipe === 1">
            {{ interpretation[1] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TablaIndividualIndicador",
  props: {
    title: String,
    labels: Array,
    results: Array,
    anio: Number,
    interpretation: Array,
    conditions: Array,
    tipe: {Number, default: 0}
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.tabla {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  border: 1px solid gray;
  padding: 10px;
  margin-bottom: 40px;
}

.title-table {
  display: block;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  border: none;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
}

.body-table {
  display: flex;
  font-size: 15px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  border: none;
  align-items: center;
  justify-content: center;
}

.msg-table {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  text-align: left;
}
.good {
  color: #00b300;
  font-weight: bold;
}

.danger {
  color: #ff0000;
  font-weight: bold;
}

.text-sub-title-table {
  text-align: left;
}
</style>
