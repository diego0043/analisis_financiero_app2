<template>
  <div class="ctn">
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
        class="bi bi-download"
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
    <div id="element-to-convert" class="container mb-3 mt-4">
      <br />
      <div class="row rows-principal">BANCO DE DESAROLLO DE EL SALVADOR</div>
      <div class="row rows-principal">BALANCE GENERAL</div>
      <div class="row rows-principal">En dolares americanos</div>
      <div class="row rows-principal">
        Del 01 de enero al 31 de Diciembre de {{ report.anio }}
      </div>
      <div class="row sub-title rows-subtitulo mt-4">Activos</div>
      <div class="row">
        <div class="col cuenta">Activos de intermediación</div>
        <div class="col numeros">
          {{ report.activos.activos_de_intermediacion }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Caja y Bancos</div>
        <div class="col numeros">
          {{ report.activos.caja_y_bancos }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Inversiones financieras</div>
        <div class="col numeros">
          {{ report.activos.inversiones_financieras }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Cartera de prestamos</div>
        <div class="col numeros">
          {{ report.activos.cartera_de_prestamos }}
        </div>
      </div>
      <div class="row mb-2">
        <div class="col cuenta">Operaciones bursatiles</div>
        <div class="col numeros">
          {{ report.activos.operaciones_bursatiles }}
        </div>
      </div>
      <div class="row sub-title rows-subtitulo">Otros activos</div>
      <div class="row mb-2">
        <div class="col cuenta">Diversos(Neto)</div>
        <div class="col numeros">
          {{ report.otros_activos.diversos }}
        </div>
      </div>
      <div class="row sub-title rows-subtitulo">Activo fijo</div>
      <div class="row">
        <div class="col cuenta">Bienes inmuebles y otros (Neto)</div>
        <div class="col numeros">
          {{ report.activos_fijos.bienes_inmuebles }}
        </div>
      </div>
      <div class="row mb-2">
        <div class="col cuenta">Total activos</div>
        <div class="col numeros">
          {{ report.total_activos }}
        </div>
      </div>
      <div class="row sub-title rows-subtitulo">Pasivo y patrimonio</div>
      <div class="row">
        <div class="col cuenta">Pasivos de intermediacion</div>
        <div class="col numeros">
          {{ report.pasivos.pasivos_de_intermediacion }}
        </div>
      </div>
      <div class="row">
        <div class="col-8 cuenta">
          Prestamos del Banco Central de Reserva de El Salvador
        </div>
        <div class="col numeros">
          {{ report.pasivos.prestamos_del_banco }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Prestamos de otros bancos</div>
        <div class="col numeros">
          {{ report.pasivos.prestamo_bancos }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Titulos de emision propia</div>
        <div class="col numeros">
          {{ report.pasivos.titulos_de_emision_propia }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Otros pasivos:</div>
        <div class="col numeros">
          {{ report.pasivos.otros_pasivos }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Fondos en administracion</div>
        <div class="col numeros">
          {{ report.pasivos.fondos_de_administracion }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Provisiones</div>
        <div class="col numeros">
          {{ report.pasivos.provisiones }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Diversos</div>
        <div class="col numeros">
          {{ report.pasivos.diversos }}
        </div>
      </div>
      <div class="row mb-2">
        <div class="col cuenta">Total pasivos</div>
        <div class="col numeros">
          {{ report.total_pasivos }}
        </div>
      </div>
      <div class="row sub-title rows-subtitulo">Patrimonio</div>
      <div class="row">
        <div class="col cuenta">Aportes del estado</div>
        <div class="col numeros">
          {{ report.patrimonio.aportes_del_estado }}
        </div>
      </div>
      <div class="row">
        <div class="col-8 cuenta">
          Reservas de capital, resultados acumulados y patrimonio ganado
        </div>
        <div class="col numeros">
          {{ report.patrimonio.reservas_del_capital }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Total Patrimonio</div>
        <div class="col numeros">
          {{ report.total_patrimonio }}
        </div>
      </div>
      <div class="row">
        <div class="col cuenta">Total Pasivos y Patrimonio</div>
        <div class="col numeros">
          {{ report.total_pasivos_patrimonio }}
        </div>
      </div>
      <div class="row mt-4"></div>
    </div>
  </div>
</template>
<script>
import html2pdf from "html2pdf.js";

export default {
  name: "TablaBalance",
  data: () => ({}),
  props: {
    report: Object,
  },
  methods: {
    async exportToPDF() {
      let name = "Balance-general-" + this.report.anio;
      html2pdf(document.getElementById("element-to-convert"), {
        filename: name,
        margin: 1,
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
  position: absolute;
  top: 30px;
  right: 10px;
  background-color: #f8f8f8;
  border: none;
  color: gray;
}

.btn-export:hover {
  color: black;
}
</style>
