<template>
  <div class="container mb-3 mt-4">
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
        {{report.ingreso_de_operaciones.interes_prestamos}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Comisiones y otros ingresos financieros</div>
      <div class="col numeros">
        {{report.ingreso_de_operaciones.comisiones_y_otros_ingresos}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Intereses de inversones</div>
      <div class="col numeros">
        {{report.ingreso_de_operaciones.intereses_inversiones}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Intereses sobre depósitos</div>
      <div class="col numeros">
        {{report.ingreso_de_operaciones.intereses_depositos}}
      </div>
    </div>
    <div class="row mb-2">
      <div class="col cuenta">Total ingresos de operación</div>
      <div class="col numeros">
        {{report.ingreso_de_operaciones.total_ingresos_operacion}}
      </div>
    </div>
    <div class="row sub-title rows-subtitulo">Costos de operación:</div>
    <div class="row mt-2">
      <div class="col cuenta">Intereses sobre préstamos</div>
      <div class="col numeros">
        {{report.costos_operacion.intereses_sobre_prestamos}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Comisiones sobre titulos de emisión propia</div>
      <div class="col numeros">
        {{report.costos_operacion.comisiones_sobre_titulos}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Comisiones y otros</div>
      <div class="col numeros">
        {{report.costos_operacion.comisiones_y_otros}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Total costos de operación</div>
      <div class="col numeros">
        {{report.costos_operacion.total_costos_operacion}}
      </div>
    </div>
    <div class="row mt-3">
      <div class="col cuenta">Reservas de saneamiento</div>
      <div class="col numeros">
        {{report.costos_operacion.reservas_de_saneamiento}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Utilidad antes de gastos</div>
      <div class="col numeros">
        {{report.costos_operacion.utilidad_antes_gastos}}
      </div>
    </div>
    <div class="row sub-title rows-subtitulo mt-2">Gastos de operación:</div>
    <div class="row mt-2">
      <div class="col cuenta">De funcionarios y empleados</div>
      <div class="col numeros">
        {{report.gastos_operacion.funcionarios_y_empleados}}  
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Generales</div>
      <div class="col numeros">
        {{report.gastos_operacion.generales}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Depresiaciones y amortizaciones</div>
      <div class="col numeros">
        {{report.gastos_operacion.depresiaciones_y_amortizaciones}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Total gastos de operaciones</div>
      <div class="col numeros">
        {{report.gastos_operacion.total_gastos_operacion}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Utilidad de operación</div>
      <div class="col numeros">
        {{report.gastos_operacion.utilidad_operacional}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Dididendos</div>
      <div class="col numeros">
        {{report.gastos_operacion.dividendos}}
      </div>
    </div>
    <div class="row mt-2 sub-title rows-subtitulo">Otros ingresos y gastos:</div>
    <div class="row mt-2">
      <div class="col cuenta">Otros ingresos</div>
      <div class="col numeros">
        {{report.otros_ingreso_y_gastos.otros_ingresos}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Otros gastos</div>
      <div class="col numeros">
        {{report.otros_ingreso_y_gastos.otros_gastos}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Total otros ingresos y otros gastos</div>
      <div class="col numeros">
        {{report.otros_ingreso_y_gastos.total_otros_ingresos_y_gastos}}
      </div>
    </div>
    <div class="row sub-title rows-subtitulo mt-2">Utilidad antes de impuesto:</div>
    <div class="row">
      <div class="col cuenta">Utilidad antes de impuesto</div>
      <div class="col numeros">
        {{report.utilidad_antes_impuestos.utilidad_antes_impuestos}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Impuesto sobre la renta</div>
      <div class="col numeros">
        {{report.utilidad_antes_impuestos.impuesto_sobre_la_renta}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">
        contribucion especial plan de seguridad ciudada
      </div>
      <div class="col numeros">
        {{report.utilidad_antes_impuestos.contribucion_especial_plan_de_seguridad_ciudada}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Utilidad neta</div>
      <div class="col numeros">
        {{report.utilidad_neta}}
      </div>
    </div>
    <div class="row">
      <div class="col-8 cuenta">
        Impuesto sobre la renta ( si > 150 = 30%) sino 25%
      </div>
      <div class="col numeros">
        {{report.impuesto_sobre_la_renta}}
      </div>
    </div>
    <div class="row mt-2 sub-title rows-subtitulo">Efecto fiscal de:</div>
    <div class="row mt-2">
      <div class="col cuenta">Gastos no deducibles</div>
      <div class="col numeros">
        {{report.efecto_fiscal.gastos_no_deducibles}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Ingresos no gravables</div>
      <div class="col numeros">
        {{report.efecto_fiscal.ingresos_no_gravables}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Impuesto sobre la renta</div>
      <div class="col numeros">
        {{report.efecto_fiscal.impuesto_sobre_la_renta}}
      </div>
    </div>
    <div class="row mt-4"></div>
  </div>
</template>
<script>
export default {
  name: "TablaBalance",
  data: () => ({}),
  props: {
    report: Object,
  },
  created() {
    console.log(this.report);
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

.sub-title {
  margin-left: 20px;
}

.cuenta {
  margin-left: 50px;
}
</style>
