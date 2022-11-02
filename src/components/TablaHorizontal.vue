<template>
  <div class="ctn">
    <div class="pagination">
      <button
        @click="prevPage"
        class="btn-up"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Ver balance"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
  <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>
      </button>
      <div class="pag">
        Pag. {{pag}} / 2
      </div>
      <button
        @click="nextPage"
        class="btn-down"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Ver estado de resultados"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>
      </button>
    </div>
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
      class="btn-help"
      @click="ayuda()"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      title="¿Necesitas ayuda?"
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
</svg>
    </button>
    </div>
    <div id="element-to-convert" class="container mt-4 mb-3">
      <br />

      <div class="row rows-principal">BANCO DE DESAROLLO DE EL SALVADOR</div>
      <div class="row rows-principal">ANALISIS HORIZONTAL - BALANCE GENERAL</div>
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
          <div class="row text2 mt-2">
            Reportes y otras operaciones bursatiles
          </div>
          <div class="row text2 mt-2">Inversiones financieras(Neto)</div>
          <div class="row text2 mt-2">Cartera de prestamo</div>
          <div class="row text mt-4">Activos fijos</div>
          <div class="row text2 mt-3">Bienes y inmuebles</div>
          <div class="row text mt-4">Otros activos</div>
          <div class="row text2 mt-3">diversos</div>

          <div class="row text mt-4">Pasivos</div>
          <div class="row text2 mt-3">Fondos de administración</div>
          <div class="row text2 mt-2">Otros pasivos</div>
          <div class="row text2 mt-2">Pasivos de intermediación</div>
          <div class="row text2 mt-2">Prestamo a bancos</div>
          <div class="row text2 mt-2">Prestamos del banco</div>
          <div class="row text2 mt-2">Provisiones</div>
          <div class="row text2 mt-2">Titulos de emision propia</div>

          <div class="row text mt-4">patrimonio</div>
          <div class="row text2 mt-3">Aportes del estado</div>
          <div class="row text2 mt-2">Reservas del capital</div>

          <div class="row text mt-4">Total activos</div>
          <div class="row text mt-2">Total pasivos</div>
          <div class="row text mt-2">Total pasivos y patrimonio</div>
          <div class="row text mt-2">Total patrimonio</div>
        </div>
        <div class="col-7 scroll-form">
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
                <span class="text-center ml-3"> Variación relativa</span>
              </div>
              <div class="item text-header">
                <span class="text-center ml-2"> Variación absoluta</span>
              </div>
              <div class="item text-header">
                <span class="text-center "> Estado</span>
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
                  {{ var_abs_1.activos.activos_de_intermediacion }} %</span
                >
              </div>
              <div class="item">
                <span v-show="estados_1.activos.activos_de_intermediacion === 'Pesimo'"  class="text-center bad">
                  {{ estados_1.activos.activos_de_intermediacion }}</span
                >
                <span v-show="estados_1.activos.activos_de_intermediacion === 'Optimo'"  class="text-center good">
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
                  {{ var_abs_1.activos.caja_y_bancos }} %</span
                >
              </div>
              <div class="item">
                <span v-show="estados_1.activos.caja_y_bancos === 'Pesimo'"  class="text-center bad">
                  {{ estados_1.activos.caja_y_bancos }}</span
                >
                <span v-show="estados_1.activos.caja_y_bancos === 'Optimo'"  class="text-center good">
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
                  {{ var_abs_1.activos.cartera_de_prestamos }} %</span
                >
              </div>
              <div class="item">
                <span v-show="estados_1.activos.cartera_de_prestamos === 'Pesimo'"  class="text-center bad">
                  {{ estados_1.activos.cartera_de_prestamos }}</span
                >
                <span v-show="estados_1.activos.cartera_de_prestamos === 'Optimo'"  class="text-center good">
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
                  {{ var_abs_1.activos.inversiones_financieras }} %</span
                >
              </div>
              <div class="item">
                <span  v-show=" estados_1.activos.inversiones_financieras === 'Pesimo'"  class="text-center bad">
                  {{ estados_1.activos.inversiones_financieras }}</span
                >
                <span  v-show=" estados_1.activos.inversiones_financieras === 'Optimo'"  class="text-center good">
                  {{ estados_1.activos.inversiones_financieras }}</span
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
                  {{ var_abs_1.activos.operaciones_bursatiles }} </span
                > <span v-show="var_abs_1.activos.operaciones_bursatiles != '-'"> %</span>
              </div>
              <div class="item">
                <span v-show="estados_1.activos.operaciones_bursatiles === '-'" class="text-center">
                  {{ estados_1.activos.operaciones_bursatiles }}</span
                >
                <span v-show="estados_1.activos.operaciones_bursatiles === 'Pesimo'" class="text-center bad">
                  {{ estados_1.activos.operaciones_bursatiles }}</span
                >
                <span v-show="estados_1.activos.operaciones_bursatiles === 'Optimo'" class="text-center good">
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
                  {{ var_abs_1.activos_fijos.bienes_inmuebles }} %</span
                >
              </div>
              <div class="item">
                <span v-show=" estados_1.activos_fijos.bienes_inmuebles === 'Pesimo'" class="text-center bad">
                  {{ estados_1.activos_fijos.bienes_inmuebles }}</span
                >
                <span v-show=" estados_1.activos_fijos.bienes_inmuebles === 'Optimo'" class="text-center good">
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
                  {{ var_abs_1.otros_activos.diversos }} %</span
                >
              </div>
              <div class="item">
                <span v-show="estados_1.otros_activos.diversos === 'Pesimo'" class="text-center bad">
                  {{ estados_1.otros_activos.diversos }}</span
                >
                <span v-show="estados_1.otros_activos.diversos === 'Optimo'" class="text-center good">
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
                  {{ var_abs_1.pasivos.diversos }} %</span
                >
              </div>
              <div class="item">
                <span v-show="estados_1.pasivos.diversos === 'Pesimo'" class="text-center bad">
                  {{ estados_1.pasivos.diversos }}</span
                >
                <span v-show="estados_1.pasivos.diversos === 'Optimo'" class="text-center good">
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
                  {{ var_abs_1.pasivos.fondos_de_administracion }} %</span
                >
              </div>
              <div class="item">
                <span v-show="estados_1.pasivos.fondos_de_administracion === 'Pesimo'" class="text-center bad">
                  {{ estados_1.pasivos.fondos_de_administracion }}</span
                >
                <span v-show="estados_1.pasivos.fondos_de_administracion === 'Optimo'" class="text-center good">
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
                  {{ var_abs_1.pasivos.pasivos_de_intermediacion }} %</span
                >
              </div>
              <div class="item">
                <span v-show="estados_1.pasivos.pasivos_de_intermediacion === 'Pesimo'" class="text-center bad">
                  {{ estados_1.pasivos.pasivos_de_intermediacion }}</span
                >
                <span v-show="estados_1.pasivos.pasivos_de_intermediacion === 'Optimo'" class="text-center good">
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
                  {{ var_abs_1.pasivos.prestamo_bancos }} %</span
                >
              </div>
              <div class="item">
                <span v-show="estados_1.pasivos.prestamo_bancos === 'Pesimo'" class="text-center bad">
                  {{ estados_1.pasivos.prestamo_bancos }}</span
                >
                <span v-show="estados_1.pasivos.prestamo_bancos === 'Optimo'" class="text-center good">
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
                  {{ var_abs_1.pasivos.prestamos_del_banco }} %</span
                >
              </div>
              <div class="item">
                <span v-show="estados_1.pasivos.prestamos_del_banco === 'Pesimo'" class="text-center bad">
                  {{ estados_1.pasivos.prestamos_del_banco }}</span
                >
                <span v-show="estados_1.pasivos.prestamos_del_banco === 'Optimo'" class="text-center good">
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
                  {{ var_abs_1.pasivos.provisiones }} %</span
                >
              </div>
              <div class="item">
                <span v-show="estados_1.pasivos.provisiones === 'Pesimo'" class="text-center bad">
                  {{ estados_1.pasivos.provisiones }}</span
                >
                <span v-show="estados_1.pasivos.provisiones === 'Optimo'" class="text-center good">
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
                  {{ var_abs_1.pasivos.titulos_de_emision_propia }} %</span
                >
              </div>
              <div class="item">
                <span v-show="estados_1.pasivos.titulos_de_emision_propia === 'Pesimo'" class="text-center bad">
                  {{ estados_1.pasivos.titulos_de_emision_propia }}</span
                >
                <span v-show="estados_1.pasivos.titulos_de_emision_propia === 'Optimo'" class="text-center good">
                  {{ estados_1.pasivos.titulos_de_emision_propia }}</span
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
                  {{ var_abs_1.patrimonio.aportes_del_estado }} %</span
                >
              </div>
              <div class="item">
                <span v-show="estados_1.patrimonio.aportes_del_estado === 'Pesimo'" class="text-center bad">
                  {{ estados_1.patrimonio.aportes_del_estado }}</span
                >
                <span v-show="estados_1.patrimonio.aportes_del_estado === 'Optimo'" class="text-center good">
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
                  {{ var_abs_1.patrimonio.reservas_del_capital }} %</span
                >
              </div>
              <div class="item">
                <span v-show="estados_1.patrimonio.reservas_del_capital === 'Pesimo'" class="text-center bad">
                  {{ estados_1.patrimonio.reservas_del_capital }}</span
                >
                <span v-show="estados_1.patrimonio.reservas_del_capital === 'Optimo'" class="text-center good">
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
                <span class="text-center"> {{ var_abs_1.total_activos }} %</span>
              </div>
              <div class="item">
                <span v-show="estados_1.total_activos === 'Pesimo'" class="text-center bad"> {{ estados_1.total_activos }}</span>
                <span v-show="estados_1.total_activos === 'Optimo'" class="text-center good"> {{ estados_1.total_activos }}</span>

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
                <span class="text-center"> {{ var_abs_1.total_pasivos }} %</span>
              </div>
              <div class="item">
                <span v-show="estados_1.total_pasivos === 'Pesimo'" class="text-center bad"> {{ estados_1.total_pasivos }}</span>
                <span v-show="estados_1.total_pasivos === 'Optimo'" class="text-center good"> {{ estados_1.total_pasivos }}</span>

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
                  {{ var_abs_1.total_pasivos_patrimonio }} %</span
                >
              </div>
              <div class="item">
                <span v-show="estados_1.total_pasivos_patrimonio === 'Pesimo'" class="text-center bad">
                  {{ estados_1.total_pasivos_patrimonio }}</span
                >
                <span v-show="estados_1.total_pasivos_patrimonio === 'Optimo'" class="text-center good">
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
                  {{ var_abs_1.total_patrimonio }} %</span
                >
              </div>
              <div class="item">
                <span v-show="estados_1.total_patrimonio === 'Pesimo'" class="text-center bad">
                  {{ estados_1.total_patrimonio }}</span
                >
                <span v-show="estados_1.total_patrimonio === 'Optimo'" class="text-center good">
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
import html2pdf from "html2pdf.js";

export default {
  name: "TablaHorizontal",
  data() {
    return {
      pag: 1,
    };
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

  methods: {
    async exportToPDF() {
      let name = "Analisis-horizontal-" + this.balance1.anio +"-"+ this.balance2.anio;
      html2pdf(document.getElementById("element-to-convert"), {
        margin: 1,
        filename: name,
        margin: [1, 0, 1, 0], // [top, right, bottom, left]
        jsPDF: { unit: "in" },
      });

      await this.$swal.fire({
        icon: "success",
        title: "Se ha exportado el balance general a PDF",
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
    nextPage() {
      if(this.pag === 1){
        this.pag = 2;
      }
    },
    prevPage() {
      if(this.pag === 2){
        this.pag = 1;
      }
    },
    ayuda(){
      this.$swal({
        icon: "info",
        title: "¿Como ver el análisis horizontal?",
        text: "Para ver el análisis horizontal correctamente debes hacer scroll horizontalmente en la tabla.",
      });
    }
  },
};
</script>

<style scoped>
.container {
  width: 86%;
  background-color: white;
  margin-left: 40px;
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



.row-table {
  width: 790px;
}
.item {
  width: 160px;
}

.good {
  color: #9CFF2E;
}

.bad {
  color: red;

}

.text-header {
  font-weight: bold;
  font-size: 17px;
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
  background: white;
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

.btn-help {
  position: fixed;
  top: 140px;
  background-color: transparent;
  border: none;
  color: gray;
  border-radius: 0px;
  width: 55px;
  height: 50px;
}

.btn-help:hover {
  background-color: #f8f8f8;
  color: black;
}

.right-menu {
  position: fixed;
  top: 40px;
  right: 0px;
  background-color: white;
  width: 55px;
  height: 100vh;
}

.pagination{
  position: fixed;
  top: 40px;
  left: 305px;
  background-color: #f8f8f8;
  width: 70px;
  height: 100vh;
}

.text-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.btn-up {
  position: fixed;
  top: 270px;
  background-color: transparent;
  border: none;
  color: gray;
  border-radius: 0px;
  width: 55px;
  height: 50px;
  margin-left: 7px;
}

.btn-up:hover {
  background-color: #f8f8f8;
  color: black;
}

.btn-down {
  position: fixed;
  top: 340px;
  background-color: transparent;
  border: none;
  color: gray;
  border-radius: 0px;
  width: 55px;
  height: 50px;
  margin-left: 7px;
}

.btn-down:hover {
  background-color: #f8f8f8;
  color: black;
}

.pag{
  position: fixed;
  top: 323px;
  background-color: transparent;
  border: none;
  color: gray;
  border-radius: 0px;
  width: 55px;
  height: 50px;
  font-size: 12px;
  margin-left: 10px;
}
</style>
