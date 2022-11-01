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
    <div id="element-to-convert" class="container mt-4 mb-3 shadow-sm">
      <br />
      <!-- Encabezado -->
      <div class="row">
        <div class="col-5">
          <!-- encabezado -->
          <div class="row text text-center">Cuentas</div>

          <!-- nombres -->
          <div class="row text mt-4">Activos de intermediación</div>
          <div class="row text mt-2">Caja y bancos</div>
          <div class="row text mt-2">Reportes y otras operaciones bursatiles</div>
          <div class="row text mt-2">Inversiones financieras(Neto)</div>
          <div class="row text mt-2">Cartera de prestamo</div>

        </div>
        <div class="col-7 scroll-form">
          <div class="row-table">

            <!-- encabezado -->
            <div class="row">
              <div class="item">
                <span class="text-center"> {{ balance1.anio }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ balance2.anio }}</span>
              </div>
              <div class="item">
                <span class="text-center"> Variación relativa</span>
              </div>
              <div class="item">
                <span class="text-center"> Variación absoluta</span>
              </div>
              <div class="item">
                <span class="text-center"> Estado</span>
              </div>
            </div>

            <!-- items -->
            <div class="row mt-4">
              <div class="item">
                <span class="text-center"> {{ balance1.activos.activos_de_intermediacion }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ balance2.activos.activos_de_intermediacion }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ var_rel_1.activos.activos_de_intermediacion }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ var_abs_1.activos.activos_de_intermediacion }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ estados_1.activos.activos_de_intermediacion }}</span>
              </div>
            </div>
            <div class="row mt-2">
              <div class="item">
                <span class="text-center"> {{ balance1.activos.caja_y_bancos }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ balance2.activos.caja_y_bancos }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ var_rel_1.activos.caja_y_bancos }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ var_abs_1.activos.caja_y_bancos }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ estados_1.activos.caja_y_bancos }}</span>
              </div>
            </div>
            <div class="row mt-2">
              <div class="item">
                <span class="text-center"> {{ balance1.activos.cartera_de_prestamos }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ balance2.activos.cartera_de_prestamos }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ var_rel_1.activos.cartera_de_prestamos }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ var_abs_1.activos.cartera_de_prestamos }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ estados_1.activos.cartera_de_prestamos }}</span>
              </div>
            </div>
            <div class="row mt-2">
              <div class="item">
                <span class="text-center"> {{ balance1.activos.inversiones_financieras }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ balance2.activos.inversiones_financieras }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ var_rel_1.activos.inversiones_financieras }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ var_abs_1.activos.inversiones_financieras }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ estados_1.activos.inversiones_financieras }}</span>
              </div>
            </div>
            <div class="row mt-2">
              <div class="item">
                <span class="text-center"> {{ balance1.activos.operaciones_bursatiles }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ balance2.activos.operaciones_bursatiles }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ var_rel_1.activos.operaciones_bursatiles }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ var_abs_1.activos.operaciones_bursatiles }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ estados_1.activos.operaciones_bursatiles }}</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <!-- Cuentas Balance-->
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

.text {
  width: 350px;
  margin-left: 40px;
}

.row-table {
  width: 750px;
}
.item {
  width: 150px;
}

.scroll-form {
  overflow-x: scroll;
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-track {
  background: white;
}
::-webkit-scrollbar-thumb {
  background: rgb(230, 227, 227);
  border-radius: 5px;
}
.anio-title {
  margin-left: 10px;
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

.state-w {
  display: relative;
  width: 100px;
}

.relativa {
  display: block;
  margin-left: 20px;
}

.relativa-text {
  display: block;
  margin-left: 15px;
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

.text-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
