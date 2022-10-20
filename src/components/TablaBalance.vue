<template>
  <div class="container mb-3 mt-4">
    <br>
    <div class="row rows-principal">BANCO DE DESAROLLO DE EL SALVADOR</div>
    <div class="row rows-principal">BALANCE GENERAL</div>
    <div class="row rows-principal">En dolares americanos</div>
    <div class="row rows-principal">
      Del 01 de enero al 31 de Diciembre de {{ report.anio }}
    </div>
    <div class="row sub-title rows-subtitulo mt-3">Activos</div>
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
        {{ report.activo_fijo.bienes_inmuebles }}
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
      <div class="col cuenta">
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
      <div class="col cuenta">Reservas de capital, resultados acumulados y patrimonio ganado</div>
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
  margin-right: 20px;
}

.container{
  width: 85%;
  background-color: white;
}

.sub-title{
  margin-left: 20px;
}

.cuenta{
  margin-left: 50px;
}
</style>
