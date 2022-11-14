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
    <button
      class="btn-edit"
      @click="editEstado()"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      title="Editar documento"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-pencil-square icon-edit"
        viewBox="0 0 16 16"
      >
        <path
          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
        />
        <path
          fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
        />
      </svg>
    </button>
    <!--
    <button
      class="btn-del"
      @click="edit()"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      title="Eliminar documento"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="currentColor"
        class="bi bi-trash icon-del"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
        />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
    </button>
      
    -->
    </div>
    
    <div id="element-to-convert" class="container mb-3 mt-4">
      <br />
      <div class="row rows-principal">BANCO DE DESAROLLO DE EL SALVADOR</div>
      <div class="row rows-principal">ESTADO DE RESULTADOS</div>
      <div class="row rows-principal">En dolares americanos</div>
      <div class="row rows-principal">
        Del 01 de enero al 31 de Diciembre de {{ report.anio }}
      </div>
      <div class="row sub-title rows-subtitulo mt-4">Ingreso de operación:</div>
      <div class="row">
        <div class="col cuenta mt-2">Intereses de préstamos</div>
        <div class="col numeros">
          {{ report.ingreso_de_operaciones.interes_prestamos }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Comisiones y otros ingresos financieros</div>
        <div class="col numeros">
          {{ report.ingreso_de_operaciones.comisiones_y_otros_ingresos }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Intereses de inversones</div>
        <div class="col numeros">
          {{ report.ingreso_de_operaciones.intereses_inversiones }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Intereses sobre depósitos</div>
        <div class="col numeros">
          {{ report.ingreso_de_operaciones.intereses_depositos }}
        </div>
      </div>
      <div class="row mb-2">
        <div class="col cuenta">Total ingresos de operación</div>
        <div class="col numeros">
          {{ report.ingreso_de_operaciones.total_ingresos_operacion }}
        </div>
      </div>
      <div class="row sub-title rows-subtitulo">Costos de operación:</div>
      <div class="row mt-2">
        <div class="col cuenta">Intereses sobre préstamos</div>
        <div class="col numeros">
          {{ report.costos_operacion.intereses_sobre_prestamos }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Comisiones sobre titulos de emisión propia</div>
        <div class="col numeros">
          {{ report.costos_operacion.comisiones_sobre_titulos }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Comisiones y otros</div>
        <div class="col numeros">
          {{ report.costos_operacion.comisiones_y_otros }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Total costos de operación</div>
        <div class="col numeros">
          {{ report.costos_operacion.total_costos_operacion }}
        </div>
      </div>
      <div class="row mt-3">
        <div class="col cuenta">Reservas de saneamiento</div>
        <div class="col numeros">
          {{ report.costos_operacion.reservas_de_saneamiento }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Utilidad antes de gastos</div>
        <div class="col numeros">
          {{ report.costos_operacion.utilidad_antes_gastos }}
        </div>
      </div>
      <div class="row sub-title rows-subtitulo mt-2">Gastos de operación:</div>
      <div class="row mt-2">
        <div class="col cuenta">De funcionarios y empleados</div>
        <div class="col numeros">
          {{ report.gastos_operacion.funcionarios_y_empleados }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Generales</div>
        <div class="col numeros">
          {{ report.gastos_operacion.generales }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Depresiaciones y amortizaciones</div>
        <div class="col numeros">
          {{ report.gastos_operacion.depresiaciones_y_amortizaciones }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Total gastos de operaciones</div>
        <div class="col numeros">
          {{ report.gastos_operacion.total_gastos_operacion }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Utilidad de operación</div>
        <div class="col numeros">
          {{ report.gastos_operacion.utilidad_operacional }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Dididendos</div>
        <div class="col numeros">
          {{ report.gastos_operacion.dividendos }}
        </div>
      </div>
      <div class="row mt-2 sub-title rows-subtitulo">
        Otros ingresos y gastos:
      </div>
      <div class="row mt-2">
        <div class="col cuenta">Otros ingresos</div>
        <div class="col numeros">
          {{ report.otros_ingreso_y_gastos.otros_ingresos }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Otros gastos</div>
        <div class="col numeros">
          {{ report.otros_ingreso_y_gastos.otros_gastos }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Total otros ingresos y otros gastos</div>
        <div class="col numeros">
          {{ report.otros_ingreso_y_gastos.total_otros_ingresos_y_gastos }}
        </div>
      </div>
      <div class="row sub-title rows-subtitulo mt-2">
        Utilidad antes de impuesto:
      </div>
      <div class="row mt-3">
        <div class="col cuenta">Utilidad antes de impuesto</div>
        <div class="col numeros">
          {{ report.utilidad_antes_impuestos.utilidad_antes_impuestos }}
        </div>
      </div>
      <div class="row salto">
        <div class="col cuenta">Impuesto sobre la renta</div>
        <div class="col numeros">
          {{ report.utilidad_antes_impuestos.impuesto_sobre_la_renta }}
        </div>
      </div>
      <div class="row continuacion ">
        <div class="col cuenta">
          contribucion especial plan de seguridad ciudada
        </div>
        <div class="col numeros">
          {{
            report.utilidad_antes_impuestos
              .contribucion_especial_plan_de_seguridad_ciudada
          }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Utilidad neta</div>
        <div class="col numeros">
          {{ report.utilidad_neta }}
        </div>
      </div>

      <div class="row mt-2 sub-title rows-subtitulo">Efecto fiscal de:</div>
      <div class="row mt-2">
        <div class="col cuenta">Gastos no deducibles</div>
        <div class="col numeros">
          {{ report.efecto_fiscal.gastos_no_deducibles }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Ingresos no gravables</div>
        <div class="col numeros">
          {{ report.efecto_fiscal.ingresos_no_gravables }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Impuesto sobre la renta</div>
        <div class="col numeros">
          {{ report.efecto_fiscal.impuesto_sobre_la_renta }}
        </div>
      </div>
      <div class="row mt-4"></div>
    </div>
  </div>
</template>
<script>
import html2pdf from "html2pdf.js";

export default {
  name: "TablaEstado",
  data: () => ({}),
  props: {
    report: Object,
  },
  methods: {
    async exportToPDF() {
      let name = "Estado-resultados-" + this.report.anio;
      html2pdf(document.getElementById("element-to-convert"), {
        margin: 1,
        filename: name,
        margin: [1, 0, 1, 0], // [top, right, bottom, left]
        jsPDF: { unit: "in" },
      });

      await this.$swal.fire({
        icon: "success",
        title: 'Se ha exportado el balance general a PDF',
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    },
    editEstado() {
      const anioEdit = this.report.anio;
      this.$router.push({
        path: "editar_estado",
        query: {anio:anioEdit}
      });
    },
  },
};
</script>

<style scoped>
.rows-principal {
  display: block;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.rows-subtitulo {
  display: block;
  font-size: 17px;
  font-weight: bold;
  text-align: left;
}

.numeros {
  display: block;
  text-align: right;
  font-size: 17px;
  margin-right: 20px;
}

.container {
  width: 85%;
  background-color: white;
  margin-left: 35px;
}

.ctn {
  background-color: #f8f8f8;
  border: none;
  box-shadow: none;
}

.sub-title {
  margin-left: 20px;
}

.cuenta {
  margin-left: 50px;
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

.icon-export{
 margin-top: -9px;
}


.btn-edit {
  position: fixed;
  top: 140px;
  background-color: transparent;
  border: none;
  color: gray;
  border-radius: 0px;
  width: 55px;
  height: 50px;
}

.btn-edit:hover {
  color: black;
  background-color: #f8f8f8;
}

.icon-edit{
 margin-top: -3px;
}


.btn-del {
  position: fixed;
  top: 195px;
  background-color: transparent;
  border: none;
  color: gray;
  border-radius: 0px;
  width: 55px;
  height: 50px;
}

.btn-del:hover {
  background-color: #f8f8f8;
  color: black;
}
.icon-del{
 margin-top: -3px;
}

.right-menu{
  position: fixed;
  top: 40px;
  right: 0px;
  background-color: white;
  width: 55px;
  height: 100vh;
}
</style>
