<template>
  <div>
    <div id="element-to-convert-2" class="container mt-4 mb-3">
      <br />

      <div class="row rows-principal">BANCO DE DESAROLLO DE EL SALVADOR</div>
      <div class="row rows-principal">
        ANALISIS VERTICAL - ESTADO DE RESULTADOS
      </div>
      <div class="row rows-principal">En dolares americanos</div>
      <div class="row rows-principal">
        {{ estado1.anio }} - {{ estado2.anio }}
      </div>
      <div class="row mt-4"></div>
      <div class="row mt-4"></div>

      <div class="row p-1">
        <div class="col-5">
          <!-- encabezado -->
          <div class="row text-header text-center">Cuentas</div>

          <!-- ingreso de operacion -->
          <div class="row text mt-4">Ingreso de operación</div>
          <div class="row text2 mt-3">Intereses de préstamos</div>
          <div v-show="isVisible" class="row text2 mt-2">
            Comisiones y otros ingresos financieros
          </div>
          <div v-show="isVisible === false" class="row text2 mt-2">
            Comisiones y otros ingresos
          </div>
          <div class="row text2 mt-2">Intereses de inversiones</div>
          <div class="row text2 mt-2">Intereses sobre depósitos</div>
          <div class="row text2 mt-2">Total ingresos de operacón</div>

          <!-- costos de operacion -->
          <div class="row text mt-4">Costos de operación</div>
          <div class="row text2 mt-3">Intereses sobre préstamos</div>
          <div v-show="isVisible" class="row text2 mt-2">
            Intereses sobre titulos de emisión propia
          </div>
          <div v-show="isVisible === false" class="row text2 mt-2">
            Titulos de emisión propia
          </div>
          <div class="row text2 mt-2">Comisiones y otros</div>
          <div class="row text2 mt-2">Total costos de operación</div>
          <div class="row text2 mt-2">Reservas de saneamiento</div>

          <!-- Utilidad antes de gastos -->
          <div class="row text mt-4">Utilidad antes de gastos</div>
          <div class="row text mt-4">Gastos de operación</div>
          <div class="row text2 mt-3">De funcionarios y empleados</div>
          <div class="row text2 mt-2">Generales</div>
          <div class="row text2 mt-2">Depreciaciones y amortizaciones</div>
          <div class="row text2 mt-2">Total gastos de operaciones</div>

          <!-- Utilidad de operación -->
          <div class="row text mt-4">Utilidad de operación</div>
          <div class="row text2 mt-2">Dividendos</div>

          <!-- Otros ingresos y otros gastos -->
          <div class="row text mt-4">Otros ingresos y gastos</div>
          <div class="row text2 mt-3">Otros ingresos</div>
          <div class="row text2 mt-2">Otros gastos</div>
          <div class="row text2 mt-2">Total otros ingresos y gastos</div>

          <!-- Utilidad antes de impuesto -->
          <div class="row text mt-4">
            Utilidad antes de impuesto sobre la renta
          </div>
          <div class="row text2 mt-3">impuesto sobre la renta</div>
          <div v-show="isVisible" class="row text2 mt-2">
            Contribución especial plan de seguridad ciudadana
          </div>
          <div v-show="isVisible === false" class="row text2 mt-2">
            Plan de seguridad ciudadana
          </div>

          <!-- Utilidad neta-->
          <div class="row text mt-4">Utilidad neta</div>
        </div>

        <!-- Columna de resultados -->
        <div class="col-7 scroll-form">
          <div class="row-table">
            <!-- encabezado -->
            <div class="row">
              <div class="item text-header">
                <span class="text-center"> {{ estado1.anio }}</span>
              </div>
              <div class="item text-header">
                <span class="text-center ml-3">%</span>
              </div>
              <div class="item text-header">
                <span class="text-center"> {{ estado2.anio }}</span>
              </div>
              
              <div class="item text-header">
                <span class="text-center ml-2">%</span>
              </div>
            </div>
            <!-- items -->
            <div class="row mt-4"></div>
            <div class="row mt-4">
              <div class="item mt-3">
                <span class="text-center">
                  {{ estado1.ingreso_de_operaciones.interes_prestamos }}</span
                >
              </div>
              
              <div class="item mt-3">
                <span class="text-center">
                  {{ var_rel_2.ingreso_de_operaciones.interes_prestamos }} %</span
                >
              </div>
              <div class="item mt-3">
                <span class="text-center">
                  {{ estado2.ingreso_de_operaciones.interes_prestamos }}</span
                >
              </div>
              <div class="item mt-3">
                <span class="text-center">
                  {{ var_abs_2.ingreso_de_operaciones.interes_prestamos }} %
                  </span
                >
              </div>
            </div>

            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    estado1.ingreso_de_operaciones.comisiones_y_otros_ingresos
                  }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.ingreso_de_operaciones.comisiones_y_otros_ingresos
                  }} %</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    estado2.ingreso_de_operaciones.comisiones_y_otros_ingresos
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_abs_2.ingreso_de_operaciones.comisiones_y_otros_ingresos
                  }} %
                  </span
                >
              </div>
            </div>

            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    estado1.ingreso_de_operaciones.intereses_inversiones
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.ingreso_de_operaciones.intereses_inversiones
                  }}%</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    estado2.ingreso_de_operaciones.intereses_inversiones
                  }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.ingreso_de_operaciones.intereses_inversiones }}
                  %</span
                >
              </div>
            </div>

            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado1.ingreso_de_operaciones.intereses_depositos }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.ingreso_de_operaciones.intereses_depositos
                  }} %</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado2.ingreso_de_operaciones.intereses_depositos }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.ingreso_de_operaciones.intereses_depositos }}
                  %</span
                >
              </div>
            </div>

            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    estado1.ingreso_de_operaciones.total_ingresos_operacion
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.ingreso_de_operaciones.total_ingresos_operacion
                  }} %</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    estado2.ingreso_de_operaciones.total_ingresos_operacion
                  }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_abs_2.ingreso_de_operaciones.total_ingresos_operacion
                  }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-4"></div>
            <div class="row mt-4">
              <div class="item mt-3">
                <span class="text-center">
                  {{ estado1.costos_operacion.intereses_sobre_prestamos }}</span
                >
              </div>
              <div class="item mt-3">
                <span class="text-center">
                  {{
                    var_rel_2.costos_operacion.intereses_sobre_prestamos
                  }} %</span
                >
              </div>
              <div class="item mt-3">
                <span class="text-center">
                  {{ estado2.costos_operacion.intereses_sobre_prestamos }}</span
                >
              </div>
              
              <div class="item mt-3">
                <span class="text-center">
                  {{ var_abs_2.costos_operacion.intereses_sobre_prestamos }}
                  %</span
                >
              </div>
            </div>

            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado1.costos_operacion.comisiones_sobre_titulos }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.costos_operacion.comisiones_sobre_titulos
                  }} %</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado2.costos_operacion.comisiones_sobre_titulos }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.costos_operacion.comisiones_sobre_titulos }}
                  %</span
                >
              </div>
            </div>

            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado1.costos_operacion.comisiones_y_otros }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.costos_operacion.comisiones_y_otros }} %</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado2.costos_operacion.comisiones_y_otros }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.costos_operacion.comisiones_y_otros }}
                  %</span
                >
              </div>
            </div>

            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado1.costos_operacion.total_costos_operacion }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.costos_operacion.total_costos_operacion }} %</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado2.costos_operacion.total_costos_operacion }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.costos_operacion.total_costos_operacion }}
                  %</span
                >
              </div>
            </div>

            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado1.costos_operacion.reservas_de_saneamiento }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.costos_operacion.reservas_de_saneamiento }} %</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado2.costos_operacion.reservas_de_saneamiento }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.costos_operacion.reservas_de_saneamiento }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-3"></div>
            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado1.costos_operacion.utilidad_antes_gastos }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.costos_operacion.utilidad_antes_gastos }} %</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado2.costos_operacion.utilidad_antes_gastos }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.costos_operacion.utilidad_antes_gastos }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-4"></div>
            <div class="row mt-4">
              <div class="item mt-3">
                <span class="text-center">
                  {{ estado1.gastos_operacion.funcionarios_y_empleados }}</span
                >
              </div>

              <div class="item mt-3">
                <span class="text-center">
                  {{
                    var_rel_2.gastos_operacion.funcionarios_y_empleados
                  }} %</span
                >
              </div>
              <div class="item mt-3">
                <span class="text-center">
                  {{ estado2.gastos_operacion.funcionarios_y_empleados }}</span
                >
              </div>

              

              <div class="item mt-3">
                <span class="text-center">
                  {{ var_abs_2.gastos_operacion.funcionarios_y_empleados }}
                  %</span
                >
              </div>
            </div>

            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado1.gastos_operacion.generales }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.gastos_operacion.generales }} %</span
                >
              </div> 
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado2.gastos_operacion.generales }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.gastos_operacion.generales }}
                  %</span
                >
              </div>
            </div>

            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    estado1.gastos_operacion.depresiaciones_y_amortizaciones
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.gastos_operacion.depresiaciones_y_amortizaciones
                  }} %</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    estado2.gastos_operacion.depresiaciones_y_amortizaciones
                  }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_abs_2.gastos_operacion.depresiaciones_y_amortizaciones
                  }}
                  %</span
                >
              </div>
            </div>

            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado1.gastos_operacion.total_gastos_operacion }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.gastos_operacion.total_gastos_operacion }} %</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado2.gastos_operacion.total_gastos_operacion }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.gastos_operacion.total_gastos_operacion }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item mt-3">
                <span class="text-center">
                  {{ estado1.gastos_operacion.utilidad_operacional }}</span
                >
              </div>
              <div class="item mt-3">
                <span class="text-center">
                  {{ var_rel_2.gastos_operacion.utilidad_operacional }} %</span
                >
              </div>

              <div class="item mt-3">
                <span class="text-center">
                  {{ estado2.gastos_operacion.utilidad_operacional }}</span
                >
              </div>

              

              <div class="item mt-3">
                <span class="text-center">
                  {{ var_abs_2.gastos_operacion.utilidad_operacional }}
                  %</span
                >
              </div>
            </div>

            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado1.gastos_operacion.dividendos }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.gastos_operacion.dividendos }} %</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado2.gastos_operacion.dividendos }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.gastos_operacion.dividendos }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-4"></div>
            <div class="row mt-4">
              <div class="item mt-3">
                <span class="text-center">
                  {{ estado1.otros_ingreso_y_gastos.otros_ingresos }}</span
                >
              </div>

              <div class="item mt-3">
                <span class="text-center">
                  {{ var_rel_2.otros_ingreso_y_gastos.otros_ingresos }} %</span
                >
              </div>

              <div class="item mt-3">
                <span class="text-center">
                  {{ estado2.otros_ingreso_y_gastos.otros_ingresos }}</span
                >
              </div>

             
              <div class="item mt-3">
                <span class="text-center">
                  {{ var_abs_2.otros_ingreso_y_gastos.otros_ingresos }}
                  %</span
                >
              </div>
            </div>

            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado1.otros_ingreso_y_gastos.otros_gastos }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.otros_ingreso_y_gastos.otros_gastos }} %</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ estado2.otros_ingreso_y_gastos.otros_gastos }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.otros_ingreso_y_gastos.otros_gastos }}
                  %</span
                >
              </div>
            </div>

            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    estado1.otros_ingreso_y_gastos.total_otros_ingresos_y_gastos
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.otros_ingreso_y_gastos
                      .total_otros_ingresos_y_gastos
                  }} %</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    estado2.otros_ingreso_y_gastos.total_otros_ingresos_y_gastos
                  }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_abs_2.otros_ingreso_y_gastos
                      .total_otros_ingresos_y_gastos
                  }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-3">
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    estado1.utilidad_antes_impuestos.utilidad_antes_impuestos
                  }}</span
                >
              </div>

              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.utilidad_antes_impuestos.utilidad_antes_impuestos
                  }} %</span
                >
              </div>

              <div class="item mt-2">
                <span class="text-center">
                  {{
                    estado2.utilidad_antes_impuestos.utilidad_antes_impuestos
                  }}</span
                >
              </div>

              

              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_abs_2.utilidad_antes_impuestos.utilidad_antes_impuestos
                  }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-4">
              <div class="item mt-3">
                <span class="text-center">
                  {{
                    estado1.utilidad_antes_impuestos.impuesto_sobre_la_renta
                  }}</span
                >
              </div>

              <div class="item mt-3">
                <span class="text-center">
                  {{
                    var_rel_2.utilidad_antes_impuestos.impuesto_sobre_la_renta
                  }} %</span
                >
              </div>

              <div class="item mt-3">
                <span class="text-center">
                  {{
                    estado2.utilidad_antes_impuestos.impuesto_sobre_la_renta
                  }}</span
                >
              </div>

              

              <div class="item mt-3">
                <span class="text-center">
                  {{
                    var_abs_2.utilidad_antes_impuestos.impuesto_sobre_la_renta
                  }}
                  %</span
                >
              </div>
            </div>

            <div class="row">
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    estado1.utilidad_antes_impuestos
                      .contribucion_especial_plan_de_seguridad_ciudada
                  }}</span
                >
              </div>

              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.utilidad_antes_impuestos
                      .contribucion_especial_plan_de_seguridad_ciudada
                  }} %</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    estado2.utilidad_antes_impuestos
                      .contribucion_especial_plan_de_seguridad_ciudada
                  }}</span
                >
              </div>
              
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_abs_2.utilidad_antes_impuestos
                      .contribucion_especial_plan_de_seguridad_ciudada
                  }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-4">
              <div class="item mt-4">
                <span class="text-center"> {{ estado1.utilidad_neta }}</span>
              </div>

              <div class="item mt-4">
                <span class="text-center"> {{ var_rel_2.utilidad_neta }} %</span>
              </div>
              <div class="item mt-4">
                <span class="text-center"> {{ estado2.utilidad_neta }}</span>
              </div>

              

              <div class="item mt-4">
                <span class="text-center">
                  {{ var_abs_2.utilidad_neta }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-4"></div>
            <div class="row mt-4"></div>
          </div>
        </div>
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
    estado1: { Object, default: {} },
    estado2: { Object, default: {} },
    var_rel_2: { Object, default: {} },
    var_abs_2: { Object, default: {} },
    isVisible: { Boolean, default: true },
  },
};
</script>

<style scoped>
.container {
  width: 86%;
  background-color: white;
  margin-left: 40px;
}

.rows-principal {
  display: block;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.text-header {
  font-weight: bold;
}

.text-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.text {
  width: 300px;
  margin-left: 10px;
  font-weight: bold;
}

.text2 {
  width: 300px;
  margin-left: 25px;
}

.item {
  width: 90px;
}

.good {
  color: #9cff2e;
}

.bad {
  color: red;
}
</style>
