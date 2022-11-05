<template>
  <div>
    <div id="element-to-convert" class="container mt-4 mb-3">
      <br />

      <div class="row rows-principal">BANCO DE DESAROLLO DE EL SALVADOR</div>
      <div class="row rows-principal">ANALISIS VERTICAL - BALANCE GENERAL</div>
      <div class="row rows-principal">En dolares americanos</div>
      <div class="row rows-principal">
        {{ balance1.anio }} - {{ balance2.anio }}
      </div>
      <div class="row mt-4"></div>
      <div class="row mt-4"></div>
      <!-- Encabezado -->
      <div class="row p-1">
        <div class="col-5">
          <!-- encabezado -->
          <div class="row text-header text-center">Cuentas</div>

          <!-- nombres -->
          <div class="row text mt-4">Activos</div>
          <div class="row text2 mt-3">Activos de intermediación</div>
          <div class="row text2 mt-2">Caja y bancos</div>
          <div class="row text2 mt-2">Cartera de prestamo</div>

          <div class="row text2 mt-2">Inversiones financieras(Neto)</div>
          <div v-show="isVisible" class="row text2 mt-2">
            Reportes y otras operaciones bursatiles
          </div>
          <div v-show="isVisible === false" class="row text2 mt-2">
            Operaciones bursatiles
          </div>
          <div class="row text mt-4">Activos fijos</div>
          <div class="row text2 mt-3">Bienes y inmuebles</div>
          <div class="row text mt-4">Otros activos</div>
          <div class="row text2 mt-3">diversos</div>
          <div class="row text mt-4">Total activos</div>


          <div class="row text mt-4">Pasivos</div>
          <div class="row text2 mt-3">Diversos</div>
          <div class="row text2 mt-2">Fondos de administración</div>
          <div class="row text2 mt-2">Pasivos de intermediación</div>
          <div class="row text2 mt-2">Prestamo a bancos</div>
          <div class="row text2 mt-2">Prestamos del banco</div>
          <div class="row text2 mt-2">Provisiones</div>
          <div class="row text2 mt-2">Titulos de emision propia</div>
          <div class="row text2 mt-2">Otros pasivos</div>


          <div class="row text mt-4">Total pasivos</div>

          <div class="row text mt-4">patrimonio</div>
          <div class="row text2 mt-3">Aportes del estado</div>
          <div class="row text2 mt-2">Reservas del capital</div>

          <div class="row text mt-4">Total patrimonio</div>

          <div class="row text mt-4">Total pasivos y patrimonio</div>
        </div>
        <div class="col-7">
          <div class="row-table">
            <!-- encabezado -->
            <div class="row">
              <div class="item text-header">
                <span class="text-center"> {{ balance1.anio }}</span>
              </div>
              <div class="item text-header">
                <span class="text-center ml-3">%</span>
              </div>
              <div class="item text-header">
                <span class="text-center"> {{ balance2.anio }}</span>
              </div>
              
              <div class="item text-header">
                <span class="text-center ml-2">%</span>
              </div>

            </div>
            <!-- items -->
            <div class="row mt-4"></div>
            <div class="row mt-4"></div>
            <div class="row mt-3">
              <div class="item">
                <span class="text-center">
                  {{ balance1.activos.activos_de_intermediacion }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.activos.activos_de_intermediacion }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.activos.activos_de_intermediacion }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.activos.activos_de_intermediacion }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.activos.caja_y_bancos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.activos.caja_y_bancos }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.activos.caja_y_bancos }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.activos.caja_y_bancos }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.activos.cartera_de_prestamos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.activos.cartera_de_prestamos }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.activos.cartera_de_prestamos }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.activos.cartera_de_prestamos }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.activos.inversiones_financieras }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.activos.inversiones_financieras }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.activos.inversiones_financieras }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.activos.inversiones_financieras }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.activos.operaciones_bursatiles }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.activos.operaciones_bursatiles }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.activos.operaciones_bursatiles }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.activos.operaciones_bursatiles }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-4 item"></div>
            <div class="row mt-4 item"></div>
            <div class="row mt-3">
              <div class="item">
                <span class="text-center">
                  {{ balance1.activos_fijos.bienes_inmuebles }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.activos_fijos.bienes_inmuebles }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.activos_fijos.bienes_inmuebles }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.activos_fijos.bienes_inmuebles }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-4 item"></div>
            <div class="row mt-4 item"></div>
            <div class="row mt-3">
              <div class="item">
                <span class="text-center">
                  {{ balance1.otros_activos.diversos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.otros_activos.diversos }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.otros_activos.diversos }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.otros_activos.diversos }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-4">
              <div class="item">
                <span class="text-center"> {{ balance1.total_activos }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ var_rel_1.total_activos }} %</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ balance2.total_activos }}</span>
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.total_activos }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-4 item"></div>
            <div class="row mt-4 item"></div>
            <div class="row mt-3">
              <div class="item">
                <span class="text-center">
                  {{ balance1.pasivos.diversos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.diversos }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.pasivos.diversos }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.pasivos.diversos }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.pasivos.fondos_de_administracion }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.fondos_de_administracion }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.pasivos.fondos_de_administracion }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.pasivos.fondos_de_administracion }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.pasivos.pasivos_de_intermediacion }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.pasivos_de_intermediacion }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.pasivos.pasivos_de_intermediacion }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.pasivos.pasivos_de_intermediacion }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.pasivos.prestamo_bancos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.prestamo_bancos }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.pasivos.prestamo_bancos }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.pasivos.prestamo_bancos }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.pasivos.prestamos_del_banco }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.prestamos_del_banco }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.pasivos.prestamos_del_banco }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.pasivos.prestamos_del_banco }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.pasivos.provisiones }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.provisiones }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.pasivos.provisiones }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.pasivos.provisiones }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.pasivos.titulos_de_emision_propia }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.titulos_de_emision_propia }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.pasivos.titulos_de_emision_propia }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.pasivos.titulos_de_emision_propia }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.pasivos.otros_pasivos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.otros_pasivos }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.pasivos.otros_pasivos }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.pasivos.otros_pasivos }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-3 item"></div>
            <div class="row mt-2">
              <div class="item">
                <span class="text-center"> {{ balance1.total_pasivos }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ var_rel_1.total_pasivos }} %</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ balance2.total_pasivos }}</span>
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.total_pasivos }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-4 item"></div>
            <div class="row mt-4 item"></div>
            <div class="row mt-3">
              <div class="item">
                <span class="text-center">
                  {{ balance1.patrimonio.aportes_del_estado }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.patrimonio.aportes_del_estado }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.patrimonio.aportes_del_estado }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.patrimonio.aportes_del_estado }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.patrimonio.reservas_del_capital }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.patrimonio.reservas_del_capital }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.patrimonio.reservas_del_capital }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.patrimonio.reservas_del_capital }}
                  %</span
                >
              </div>
            </div>

            <div class="row mt-3"></div>
            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.total_patrimonio }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.total_patrimonio }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.total_patrimonio }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.total_patrimonio }}
                  %</span
                >
              </div>
            </div>
            

        
            <div class="row mt-3"></div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.total_pasivos_patrimonio }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.total_pasivos_patrimonio }} %</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.total_pasivos_patrimonio }}</span
                >
              </div>
              
              <div class="item">
                <span class="text-center">
                  {{ var_rel_2.total_pasivos_patrimonio }}
                  %</span
                >
              </div>
            </div>

            
            <div class="row mt-4"></div>
            <div class="row mt-4"></div>
          </div>
        </div>
      </div>

      <!-- Cuentas Balance-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    balance1: { Object, default: {} },
    balance2: { Object, default: {} },
    var_rel_1: { Object, default: {} },
    var_rel_2: { Object, default: {} },
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
