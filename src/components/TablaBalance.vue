<template>
  <div class="container mb-3">
    <div class="row rows-principal mt-3">BANCO DE DESAROLLO DE EL SALVADOR</div>
    <div class="row rows-principal">BALANCE GENERAL</div>
    <div class="row rows-principal">En dolares americanos</div>
    <div class="row rows-principal">
      Del 01 de enero al 31 de Diciembre de {{ report.anio }}
    </div>
    <div class="row rows-subtitulo mt-3">Activos</div>
    <div class="row">
      <div class="col">Activos de intermediación</div>
      <div class="col numeros">
        {{ report.activos.activos_de_intermediacion }}
      </div>
    </div>
    <div class="row">
      <div class="col">Caja y Bancos</div>
      <div class="col numeros">
        {{ report.activos.caja_y_bancos }}
      </div>
    </div>
    <div class="row">
      <div class="col">Inversiones financieras</div>
      <div class="col numeros">
        {{ report.activos.inversiones_financieras }}
      </div>
    </div>
    <div class="row">
      <div class="col">Cartera de prestamos</div>
      <div class="col numeros">
        {{ report.activos.cartera_de_prestamos }}
      </div>
    </div>
    <div class="row">
      <div class="col">Operaciones bursatiles</div>
      <div class="col numeros">
        {{ report.activos.operaciones_bursatiles }}
      </div>
    </div>
    <div class="row rows-subtitulo">Otros activos</div>
    <div class="row">
      <div class="col">Diversos(Neto)</div>
      <div class="col numeros">
        {{ report.otros_activos.diversos }}
      </div>
    </div>
    <div class="row rows-subtitulo">Activo fijo</div>
    <div class="row">
      <div class="col">Bienes inmuebles y otros (Neto)</div>
      <div class="col numeros">
        {{ report.activo_fijo.bienes_inmuebles }}
      </div>
    </div>
    <div class="row">
      <div class="col">Total activos</div>
      <div class="col numeros">
        {{ report.total_activos }}
      </div>
    </div>
    <div class="row rows-subtitulo">Pasivo y patrimonio</div>
    <div class="row">
      <div class="col">Pasivos de intermediacion</div>
      <div class="col numeros">
        {{ report.pasivos.pasivos_de_intermediacion }}
      </div>
    </div>
    <div class="row">
      <div class="col">
        Prestamos del Banco Central de Reserva de El Salvador
      </div>
      <div class="col numeros">
        {{ report.pasivos.prestamos_del_banco }}
      </div>
    </div>
    <div class="row">
      <div class="col">Prestamos de otros bancos</div>
      <div class="col numeros">
        {{ report.pasivos.prestamo_bancos }}
      </div>
    </div>
    <div class="row">
      <div class="col">Titulos de emision propia</div>
      <div class="col numeros">
        {{ report.pasivos.titulos_de_emision_propia }}
      </div>
    </div>
    <div class="row">
      <div class="col">Otros pasivos:</div>
      <div class="col numeros">
        {{ report.pasivos.otros_pasivos }}
      </div>
    </div>
    <div class="row">
      <div class="col">Fondos en administracion</div>
      <div class="col numeros">
        {{ report.pasivos.fondos_de_administracion }}
      </div>
    </div>
    <div class="row">
      <div class="col">Provisiones</div>
      <div class="col numeros">
        {{ report.pasivos.provisiones }}
      </div>
    </div>
    <div class="row">
      <div class="col">Diversos</div>
      <div class="col numeros">
        {{ report.pasivos.diversos }}
      </div>
    </div>
    <div class="row">
      <div class="col">Total pasivos</div>
      <div class="col numeros">
        {{ report.total_pasivos }}
      </div>
    </div>
    <div class="row rows-subtitulo">Patrimonio</div>
    <div class="row">
      <div class="col">Aportes del estado</div>
      <div class="col numeros">
        {{ report.patrimonio.aportes_del_estado }}
      </div>
    </div>
    <div class="row">
      <div class="col">Reservas de capital, resultados acumulados y patrimonio ganado</div>
      <div class="col numeros">
        {{ report.patrimonio.reservas_del_capital }}
      </div>
    </div>
    <div class="row">
      <div class="col">Total Patrimonio</div>
      <div class="col numeros">
        {{ report.total_patrimonio }}
      </div>
    </div>
    <div class="row">
      <div class="col">Total Pasivos y Patrimonio</div>
      <div class="col numeros">
        {{ report.total_pasivos_patrimonio }}
      </div>
    </div>
    <div class="row mt-3">
      <button>Exportar como PDF</button>
    </div>
    <div class="row mt-4">
    </div>
  </div>
</template>
<script>
export default {
  name: "TablaBalance",
  data: () => ({}),
  props: {
    report: Object,
  },
  created() {},
};
</script>

<style scoped>
.rows-principal{
  display: block;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.rows-subtitulo{
  display: block;
  font-size: 17px;
  font-weight: bold;
  text-align: left;
}

.numeros{
  display: block;
  text-align: right;
  font-size: 17px;
  font-weight: bold;
}

.container{
  width: 80%;
}
</style>
