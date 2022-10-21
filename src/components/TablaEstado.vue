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
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Comisiones y otros ingresos financieros</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Intereses de inversones</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Intereses sobre sibre depósitos</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row mb-2">
      <div class="col cuenta">Total ingresos de operación</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row sub-title rows-subtitulo">Costos de operación:</div>
    <div class="row mt-2">
      <div class="col cuenta">Intereses sobre préstamos</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Intereses sobre titulos de emisión propia</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Comisiones y otros</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Total costos de operación</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row mt-3">
      <div class="col cuenta">Reservas de saneamiento</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Utilidad antes de gastos</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row sub-title rows-subtitulo mt-2">Gastos de operación:</div>
    <div class="row mt-2">
      <div class="col cuenta">De funcionarios y empleados</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Otros pasivos:</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Generales</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Depresiaciones y amortizaciones</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Total gastos de operaciones</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Utilidad de operación</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Dididendos</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row mt-2 sub-title rows-subtitulo">Otros ingresos y gastos:</div>
    <div class="row mt-2">
      <div class="col cuenta">Otros ingresos</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Otros gastos</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Total otros ingresos y otros gastos</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Utilidad antes de impuesto sobre la renta</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Impuesto sobre la renta</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">
        contribucion especial plan de seguridad ciudada
      </div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Utilidad neta</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col-8 cuenta">
        Impuesto sobre la venta ( si > 150 = 30%) sino 25%
      </div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row mt-2 sub-title rows-subtitulo">Efecto fiscal de:</div>
    <div class="row mt-2">
      <div class="col cuenta">Gastos no deducibles</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Ingresos no gravables</div>
      <div class="col numeros">
        {{}}
      </div>
    </div>
    <div class="row">
      <div class="col cuenta">Impuesto sobre la venta</div>
      <div class="col numeros">
        {{}}
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
  created() {},
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
