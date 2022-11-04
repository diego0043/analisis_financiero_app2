<template>
  <div>
    <div id="element-to-convert" class="container mt-4 mb-3">
      <br />

      <div class="row rows-principal">BANCO DE DESAROLLO DE EL SALVADOR</div>
      <div class="row rows-principal">
        ANALISIS HORIZONTAL - BALANCE GENERAL
      </div>
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

          <div class="row text mt-4">Pasivos</div>
          <div class="row text2 mt-3">Diversos</div>
          <div class="row text2 mt-2">Fondos de administración</div>
          <div class="row text2 mt-2">Pasivos de intermediación</div>
          <div class="row text2 mt-2">Prestamo a bancos</div>
          <div class="row text2 mt-2">Prestamos del banco</div>
          <div class="row text2 mt-2">Provisiones</div>
          <div class="row text2 mt-2">Titulos de emision propia</div>
          <div class="row text2 mt-2">Otros pasivos</div>


          <div class="row text mt-4">patrimonio</div>
          <div class="row text2 mt-3">Aportes del estado</div>
          <div class="row text2 mt-2">Reservas del capital</div>

          <div class="row text mt-4">Total activos</div>
          <div class="row text mt-2">Total pasivos</div>
          <div class="row text mt-2">Total pasivos y patrimonio</div>
          <div class="row text mt-2">Total patrimonio</div>
        </div>
        <div class="col-7">
          <div class="row-table">
            <!-- encabezado -->
            <div class="row">
              <div class="item text-header">
                <span class="text-center"> {{ balance1.anio }}</span>
              </div>
              <div class="item text-header">
                <span class="text-center"> {{ balance2.anio }}</span>
              </div>
              <div class="item text-header">
                <span class="text-center ml-3">Relativa</span>
              </div>
              <div class="item text-header">
                <span class="text-center ml-2">Absoluta</span>
              </div>
              <div v-show="isVisible"  class="item text-header">
                <span class="text-center"> Estado</span>
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
                  {{ balance2.activos.activos_de_intermediacion }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.activos.activos_de_intermediacion }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.activos.activos_de_intermediacion }}
                  <span
                    v-show="var_abs_1.activos.activos_de_intermediacion != '-'"
                  >
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="
                    estados_1.activos.activos_de_intermediacion === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_1.activos.activos_de_intermediacion }}</span
                >
                <span
                  v-show="
                    estados_1.activos.activos_de_intermediacion === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_1.activos.activos_de_intermediacion }}</span
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
                  {{ balance2.activos.caja_y_bancos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.activos.caja_y_bancos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.activos.caja_y_bancos }}
                  <span v-show="var_abs_1.activos.caja_y_bancos != '-'">
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="estados_1.activos.caja_y_bancos === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_1.activos.caja_y_bancos }}</span
                >
                <span
                  v-show="estados_1.activos.caja_y_bancos === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_1.activos.caja_y_bancos }}</span
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
                  {{ balance2.activos.cartera_de_prestamos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.activos.cartera_de_prestamos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.activos.cartera_de_prestamos }}
                  <span v-show="var_abs_1.activos.cartera_de_prestamos != '-'">
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="estados_1.activos.cartera_de_prestamos === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_1.activos.cartera_de_prestamos }}</span
                >
                <span
                  v-show="estados_1.activos.cartera_de_prestamos === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_1.activos.cartera_de_prestamos }}</span
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
                  {{ balance2.activos.inversiones_financieras }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.activos.inversiones_financieras }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.activos.inversiones_financieras }}
                  <span
                    v-show="var_abs_1.activos.inversiones_financieras != '-'"
                  >
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="
                    estados_1.activos.inversiones_financieras === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_1.activos.inversiones_financieras }}</span
                >
                <span
                  v-show="
                    estados_1.activos.inversiones_financieras === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_1.activos.inversiones_financieras }}</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span  class="text-center">
                  {{ balance1.activos.operaciones_bursatiles }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.activos.operaciones_bursatiles }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.activos.operaciones_bursatiles }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.activos.operaciones_bursatiles }}
                  <span
                    v-show="var_abs_1.activos.operaciones_bursatiles != '-'"
                  >
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="estados_1.activos.operaciones_bursatiles === '-'"
                  class="text-center"
                >
                  {{ estados_1.activos.operaciones_bursatiles }}</span
                >
                <span
                  v-show="estados_1.activos.operaciones_bursatiles === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_1.activos.operaciones_bursatiles }}</span
                >
                <span
                  v-show="estados_1.activos.operaciones_bursatiles === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_1.activos.operaciones_bursatiles }}</span
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
                  {{ balance2.activos_fijos.bienes_inmuebles }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.activos_fijos.bienes_inmuebles }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.activos_fijos.bienes_inmuebles }}
                  <span
                    v-show="var_abs_1.activos_fijos.bienes_inmuebles != '-'"
                  >
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="estados_1.activos_fijos.bienes_inmuebles === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_1.activos_fijos.bienes_inmuebles }}</span
                >
                <span
                  v-show="estados_1.activos_fijos.bienes_inmuebles === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_1.activos_fijos.bienes_inmuebles }}</span
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
                  {{ balance2.otros_activos.diversos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.otros_activos.diversos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.otros_activos.diversos }}
                  <span v-show="var_abs_1.otros_activos.diversos != '-'">
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="estados_1.otros_activos.diversos === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_1.otros_activos.diversos }}</span
                >
                <span
                  v-show="estados_1.otros_activos.diversos === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_1.otros_activos.diversos }}</span
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
                  {{ balance2.pasivos.diversos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.diversos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.pasivos.diversos }}
                  <span v-show="var_abs_1.pasivos.diversos != '-'">
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="estados_1.pasivos.diversos === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_1.pasivos.diversos }}</span
                >
                <span
                  v-show="estados_1.pasivos.diversos === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_1.pasivos.diversos }}</span
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
                  {{ balance2.pasivos.fondos_de_administracion }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.fondos_de_administracion }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.pasivos.fondos_de_administracion }}
                  <span
                    v-show="var_abs_1.pasivos.fondos_de_administracion != '-'"
                  >
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="
                    estados_1.pasivos.fondos_de_administracion === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_1.pasivos.fondos_de_administracion }}</span
                >
                <span
                  v-show="
                    estados_1.pasivos.fondos_de_administracion === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_1.pasivos.fondos_de_administracion }}</span
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
                  {{ balance2.pasivos.pasivos_de_intermediacion }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.pasivos_de_intermediacion }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.pasivos.pasivos_de_intermediacion }}
                  <span
                    v-show="var_abs_1.pasivos.pasivos_de_intermediacion != '-'"
                  >
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="
                    estados_1.pasivos.pasivos_de_intermediacion === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_1.pasivos.pasivos_de_intermediacion }}</span
                >
                <span
                  v-show="
                    estados_1.pasivos.pasivos_de_intermediacion === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_1.pasivos.pasivos_de_intermediacion }}</span
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
                  {{ balance2.pasivos.prestamo_bancos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.prestamo_bancos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.pasivos.prestamo_bancos }}
                  <span v-show="var_abs_1.pasivos.prestamo_bancos != '-'">
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="estados_1.pasivos.prestamo_bancos === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_1.pasivos.prestamo_bancos }}</span
                >
                <span
                  v-show="estados_1.pasivos.prestamo_bancos === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_1.pasivos.prestamo_bancos }}</span
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
                  {{ balance2.pasivos.prestamos_del_banco }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.prestamos_del_banco }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.pasivos.prestamos_del_banco }}
                  <span v-show="var_abs_1.pasivos.prestamos_del_banco != '-'">
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="estados_1.pasivos.prestamos_del_banco === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_1.pasivos.prestamos_del_banco }}</span
                >
                <span
                  v-show="estados_1.pasivos.prestamos_del_banco === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_1.pasivos.prestamos_del_banco }}</span
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
                  {{ balance2.pasivos.provisiones }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.provisiones }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.pasivos.provisiones }}
                  <span v-show="var_abs_1.pasivos.provisiones != '-'">
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="estados_1.pasivos.provisiones === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_1.pasivos.provisiones }}</span
                >
                <span
                  v-show="estados_1.pasivos.provisiones === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_1.pasivos.provisiones }}</span
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
                  {{ balance2.pasivos.titulos_de_emision_propia }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.titulos_de_emision_propia }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.pasivos.titulos_de_emision_propia }}
                  <span
                    v-show="var_abs_1.pasivos.titulos_de_emision_propia != '-'"
                  >
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="
                    estados_1.pasivos.titulos_de_emision_propia === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_1.pasivos.titulos_de_emision_propia }}</span
                >
                <span
                  v-show="
                    estados_1.pasivos.titulos_de_emision_propia === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_1.pasivos.titulos_de_emision_propia }}</span
                >
                <span
                class="text-center"
                  v-show="estados_1.pasivos.titulos_de_emision_propia === '-'"
                >
                  {{ estados_1.pasivos.titulos_de_emision_propia }}</span
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
                  {{ balance2.pasivos.otros_pasivos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.pasivos.otros_pasivos }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.pasivos.otros_pasivos }}
                  <span
                    v-show="var_abs_1.pasivos.otros_pasivos != '-'"
                  >
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="
                    estados_1.pasivos.otros_pasivos === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_1.pasivos.otros_pasivos }}</span
                >
                <span
                  v-show="
                    estados_1.pasivos.otros_pasivos === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_1.pasivos.otros_pasivos }}</span
                >
                <span
                class="text-center"
                  v-show="estados_1.pasivos.otros_pasivos === '-'"
                >
                  {{ estados_1.pasivos.otros_pasivos }}</span
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
                  {{ balance2.patrimonio.aportes_del_estado }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.patrimonio.aportes_del_estado }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.patrimonio.aportes_del_estado }}
                  <span v-show="var_abs_1.patrimonio.aportes_del_estado != '-'">
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="estados_1.patrimonio.aportes_del_estado === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_1.patrimonio.aportes_del_estado }}</span
                >
                <span
                  v-show="estados_1.patrimonio.aportes_del_estado === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_1.patrimonio.aportes_del_estado }}</span
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
                  {{ balance2.patrimonio.reservas_del_capital }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.patrimonio.reservas_del_capital }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.patrimonio.reservas_del_capital }}
                  <span
                    v-show="var_abs_1.patrimonio.reservas_del_capital != '-'"
                  >
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="
                    estados_1.patrimonio.reservas_del_capital === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_1.patrimonio.reservas_del_capital }}</span
                >
                <span
                  v-show="
                    estados_1.patrimonio.reservas_del_capital === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_1.patrimonio.reservas_del_capital }}</span
                >
              </div>
            </div>

            <div class="row mt-4">
              <div class="item">
                <span class="text-center"> {{ balance1.total_activos }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ balance2.total_activos }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ var_rel_1.total_activos }}</span>
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.total_activos }}
                  <span v-show="var_abs_1.total_activos != '-'"> %</span></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="estados_1.total_activos === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_1.total_activos }}</span
                >
                <span
                  v-show="estados_1.total_activos === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_1.total_activos }}</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center"> {{ balance1.total_pasivos }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ balance2.total_pasivos }}</span>
              </div>
              <div class="item">
                <span class="text-center"> {{ var_rel_1.total_pasivos }}</span>
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.total_pasivos }}
                  <span v-show="var_abs_1.total_pasivos != '-'"> %</span></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="estados_1.total_pasivos === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_1.total_pasivos }}</span
                >
                <span
                  v-show="estados_1.total_pasivos === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_1.total_pasivos }}</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.total_pasivos_patrimonio }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.total_pasivos_patrimonio }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.total_pasivos_patrimonio }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.total_pasivos_patrimonio }}
                  <span v-show="var_abs_1.total_pasivos_patrimonio != '-'">
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="estados_1.total_pasivos_patrimonio === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_1.total_pasivos_patrimonio }}</span
                >
                <span
                  v-show="estados_1.total_pasivos_patrimonio === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_1.total_pasivos_patrimonio }}</span
                >
              </div>
            </div>

            <div class="row mt-2">
              <div class="item">
                <span class="text-center">
                  {{ balance1.total_patrimonio }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ balance2.total_patrimonio }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_rel_1.total_patrimonio }}</span
                >
              </div>
              <div class="item">
                <span class="text-center">
                  {{ var_abs_1.total_patrimonio }}
                  <span v-show="var_abs_1.total_patrimonio != '-'">
                    %</span
                  ></span
                >
              </div>
              <div v-show="isVisible" class="item">
                <span
                  v-show="estados_1.total_patrimonio === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_1.total_patrimonio }}</span
                >
                <span
                  v-show="estados_1.total_patrimonio === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_1.total_patrimonio }}</span
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
    var_abs_1: { Object, default: {} },
    estados_1: { Object, default: {} },
    isVisible: {Boolean, default: true}
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
