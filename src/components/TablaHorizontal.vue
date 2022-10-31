<template>
  <div class="ctn">
    <div class="right-menu shadow-sm">
      <button
        class="btn-export"
        @click="exportToPDF()"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Exportar como PDF"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-download icon-export"
          viewBox="0 0 16 16"
        >
          <path
            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
          />
          <path
            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
          />
        </svg>
      </button>
    </div>
    <div id="element-to-convert" class="container mt-4 mb-3">
      <br />
      <div class="row rows-principal">BANCO DE DESAROLLO DE EL SALVADOR</div>
      <div class="row rows-principal">
        ANÁLISIS HORIZONTAL - BALANCE GENERAL
      </div>
      <div class="row rows-principal">
        {{ balance1.anio }} - {{ balance2.anio }}
      </div>

      <!-- Encabezado -->
      <div class="row sub-title rows-subtitulo">
        <div class="col-5">Cuentas:</div>
        <div class="row">
          <div class="col-2">
            {{ balance1.anio }}
          </div>
          <div class="col-2">
            {{ balance2.anio }}
          </div>
          <div class="col-3"><span class="absoluta">Absoluta</span></div>
          <div class="col-3"><span class="relativa">Relativa </span></div>
          <div class="col-2"><span class="state">Estado</span></div>
        </div>
      </div>

      <!-- Cuentas Balance-->
      <div class="row sub-title rows-subtitulo">
        <div class="col-5">Activos de intermediación</div>
        <div class="row">
          <div class="col-2">
            <span class="anio1">{{
              balance1.activos.activos_de_intermediacion
            }}</span>
          </div>
          <div class="col-2">
            <span class="anio2">
              {{ balance2.activos.activos_de_intermediacion }}
            </span>
          </div>
          <div class="col-3">
            <span class="abs">
              {{ var_abs_1.activos.activos_de_intermediacion }}
            </span>
          </div>
          <div class="col-3">
            <span class="rel">
              {{ var_rel_1.activos.activos_de_intermediacion }}
            </span>
          </div>
          <div class="col-2">
            <span class="estado">
              {{ estados_1.activos.activos_de_intermediacion }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TablaHorizontal",
  data() {
    return {};
  },
  props: {
    balance1: { Object, default: {} },
    balance2: { Object, default: {} },
    estado1: { Object, default: {} },
    estado2: { Object, default: {} },
    var_rel_1: { Object, default: {} },
    var_rel_2: { Object, default: {} },
    var_abs_1: { Object, default: {} },
    var_abs_2: { Object, default: {} },
    estados_1: { Object, default: {} },
    estados_2: { Object, default: {} },
  },

  methods: {},
};
</script>

<style scoped>
.container {
  width: 90%;
  background-color: white;
  margin-left: 40px;
}

.rows-principal {
  display: block;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.ctn {
  background-color: #f8f8f8;
  border: none;
  box-shadow: none;
}

.btn-export {
  position: fixed;
  top: 90px;
  background-color: transparent;
  border: none;
  color: gray;
  border-radius: 0px;
  width: 55px;
  height: 50px;
}

.btn-export:hover {
  background-color: #f8f8f8;
  color: black;
}

.icon-export {
  margin-top: -9px;
}

.right-menu {
  position: fixed;
  top: 40px;
  right: 0px;
  background-color: white;
  width: 55px;
  height: 100vh;
}

.sub-title {
  margin-left: 2px;
  margin-top: 40px;
}

.state {
  display: block;
  margin-left: 35px;
}

.relativa {
  display: block;
  margin-left: 20px;
}

.absoluta {
  display: block;
  margin-left: 10px;
}

.anio1 {
  display: block;
  margin-left: -15px;
}

.anio2 {
  display: block;
  margin-left: -5px;
}

.abs {
  display: block;
  margin-left: 20px;
}

.rel {
  display: block;
  margin-left: 8px;
}

.estado {
  display: block;
  margin-left: 27px;
}
</style>
