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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-chevron-double-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
          />
          <path
            fill-rule="evenodd"
            d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </button>
      <div class="pag">Pag. {{ pag }} / 2</div>
      <button
        @click="nextPage"
        class="btn-down"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Ver estado de resultados"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-chevron-double-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
          <path
            fill-rule="evenodd"
            d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-question-circle"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
          />
        </svg>
      </button>
    </div>

    <div
      id="element-to-convert-2"
      v-show="showEstado && showBalance === false"
      class="container mt-4 mb-3"
    >
      <br />

      <div class="row rows-principal">BANCO DE DESAROLLO DE EL SALVADOR</div>
      <div class="row rows-principal">
        ANALISIS HORIZONTAL - ESTADO DE RESULTADOS
      </div>
      <div class="row rows-principal">En dolares americanos</div>
      <div class="row rows-principal">
        {{ balance1.anio }} - {{ balance2.anio }}
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
          <div class="row text2 mt-2">
            Comisiones y otros ingresos financieros
          </div>
          <div class="row text2 mt-2">Intereses de inversiones</div>
          <div class="row text2 mt-2">Intereses sobre depósitos</div>
          <div class="row text2 mt-2">Total ingresos de operacón</div>

          <!-- costos de operacion -->
          <div class="row text mt-4">Costos de operación</div>
          <div class="row text2 mt-3">Intereses sobre préstamos</div>
          <div class="row text2 mt-2">
            Intereses sobre titulos de emisión propia
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
          <div class="row text2 mt-2">
            Contribución especial plan de seguridad ciudadana
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
                <span class="text-center"> Estado</span>
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
                  {{ estado2.ingreso_de_operaciones.interes_prestamos }}</span
                >
              </div>
              <div class="item mt-3">
                <span class="text-center">
                  {{ var_rel_2.ingreso_de_operaciones.interes_prestamos }}</span
                >
              </div>
              <div class="item mt-3">
                <span class="text-center">
                  {{ var_abs_2.ingreso_de_operaciones.interes_prestamos }}
                  <span
                    v-show="
                      var_abs_2.ingreso_de_operaciones.interes_prestamos != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-3">
                <span
                  v-show="
                    estados_2.ingreso_de_operaciones.interes_prestamos ===
                    'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_2.ingreso_de_operaciones.interes_prestamos }}</span
                >
                <span
                  v-show="
                    estados_2.ingreso_de_operaciones.interes_prestamos ===
                    'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_2.ingreso_de_operaciones.interes_prestamos }}</span
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
                    estado2.ingreso_de_operaciones.comisiones_y_otros_ingresos
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.ingreso_de_operaciones.comisiones_y_otros_ingresos
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_abs_2.ingreso_de_operaciones.comisiones_y_otros_ingresos
                  }}
                  <span
                    v-show="
                      var_abs_2.ingreso_de_operaciones
                        .comisiones_y_otros_ingresos != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="
                    estados_2.ingreso_de_operaciones
                      .comisiones_y_otros_ingresos === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{
                    estados_2.ingreso_de_operaciones.comisiones_y_otros_ingresos
                  }}</span
                >
                <span
                  v-show="
                    estados_2.ingreso_de_operaciones
                      .comisiones_y_otros_ingresos === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{
                    estados_2.ingreso_de_operaciones.comisiones_y_otros_ingresos
                  }}</span
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
                    estado2.ingreso_de_operaciones.comisiones_y_otros_ingresos
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.ingreso_de_operaciones.comisiones_y_otros_ingresos
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.ingreso_de_operaciones.intereses_inversiones }}
                  <span
                    v-show="
                      var_abs_2.ingreso_de_operaciones.intereses_inversiones !=
                      '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="
                    estados_2.ingreso_de_operaciones.intereses_inversiones ===
                    'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{
                    estados_2.ingreso_de_operaciones.intereses_inversiones
                  }}</span
                >
                <span
                  v-show="
                    estados_2.ingreso_de_operaciones.intereses_inversiones ===
                    'Optimo'
                  "
                  class="text-center good"
                >
                  {{
                    estados_2.ingreso_de_operaciones.intereses_inversiones
                  }}</span
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
                  {{ estado2.ingreso_de_operaciones.intereses_depositos }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.ingreso_de_operaciones.intereses_depositos
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.ingreso_de_operaciones.intereses_depositos }}
                  <span
                    v-show="
                      var_abs_2.ingreso_de_operaciones.intereses_depositos !=
                      '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="
                    estados_2.ingreso_de_operaciones.intereses_depositos ===
                    'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{
                    estados_2.ingreso_de_operaciones.intereses_depositos
                  }}</span
                >
                <span
                  v-show="
                    estados_2.ingreso_de_operaciones.intereses_depositos ===
                    'Optimo'
                  "
                  class="text-center good"
                >
                  {{
                    estados_2.ingreso_de_operaciones.intereses_depositos
                  }}</span
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
                    estado2.ingreso_de_operaciones.total_ingresos_operacion
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.ingreso_de_operaciones.total_ingresos_operacion
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_abs_2.ingreso_de_operaciones.total_ingresos_operacion
                  }}
                  <span
                    v-show="
                      var_abs_2.ingreso_de_operaciones
                        .total_ingresos_operacion != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="
                    estados_2.ingreso_de_operaciones
                      .total_ingresos_operacion === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{
                    estados_2.ingreso_de_operaciones.total_ingresos_operacion
                  }}</span
                >
                <span
                  v-show="
                    estados_2.ingreso_de_operaciones
                      .total_ingresos_operacion === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{
                    estados_2.ingreso_de_operaciones.total_ingresos_operacion
                  }}</span
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
                  {{ estado2.costos_operacion.intereses_sobre_prestamos }}</span
                >
              </div>
              <div class="item mt-3">
                <span class="text-center">
                  {{
                    var_rel_2.costos_operacion.intereses_sobre_prestamos
                  }}</span
                >
              </div>
              <div class="item mt-3">
                <span class="text-center">
                  {{ var_abs_2.costos_operacion.intereses_sobre_prestamos }}
                  <span
                    v-show="
                      var_abs_2.costos_operacion.intereses_sobre_prestamos !=
                      '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-3">
                <span
                  v-show="
                    estados_2.costos_operacion.intereses_sobre_prestamos ===
                    'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{
                    estados_2.costos_operacion.intereses_sobre_prestamos
                  }}</span
                >
                <span
                  v-show="
                    estados_2.costos_operacion.intereses_sobre_prestamos ===
                    'Optimo'
                  "
                  class="text-center good"
                >
                  {{
                    estados_2.costos_operacion.intereses_sobre_prestamos
                  }}</span
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
                  {{ estado2.costos_operacion.comisiones_sobre_titulos }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.costos_operacion.comisiones_sobre_titulos
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.costos_operacion.comisiones_sobre_titulos }}
                  <span
                    v-show="
                      var_abs_2.costos_operacion.comisiones_sobre_titulos != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="
                    estados_2.costos_operacion.comisiones_sobre_titulos ===
                    'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{
                    estados_2.costos_operacion.comisiones_sobre_titulos
                  }}</span
                >
                <span
                  v-show="
                    estados_2.costos_operacion.comisiones_sobre_titulos ===
                    'Optimo'
                  "
                  class="text-center good"
                >
                  {{
                    estados_2.costos_operacion.comisiones_sobre_titulos
                  }}</span
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
                  {{ estado2.costos_operacion.comisiones_y_otros }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.costos_operacion.comisiones_y_otros }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.costos_operacion.comisiones_y_otros }}
                  <span
                    v-show="
                      var_abs_2.costos_operacion.comisiones_y_otros != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="
                    estados_2.costos_operacion.comisiones_y_otros === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_2.costos_operacion.comisiones_y_otros }}</span
                >
                <span
                  v-show="
                    estados_2.costos_operacion.comisiones_y_otros === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_2.costos_operacion.comisiones_y_otros }}</span
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
                  {{ estado2.costos_operacion.total_costos_operacion }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.costos_operacion.total_costos_operacion }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.costos_operacion.total_costos_operacion }}
                  <span
                    v-show="
                      var_abs_2.costos_operacion.total_costos_operacion != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="
                    estados_2.costos_operacion.total_costos_operacion ===
                    'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_2.costos_operacion.total_costos_operacion }}</span
                >
                <span
                  v-show="
                    estados_2.costos_operacion.total_costos_operacion ===
                    'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_2.costos_operacion.total_costos_operacion }}</span
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
                  {{ estado2.costos_operacion.reservas_de_saneamiento }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.costos_operacion.reservas_de_saneamiento }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.costos_operacion.reservas_de_saneamiento }}
                  <span
                    v-show="
                      var_abs_2.costos_operacion.reservas_de_saneamiento != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="
                    estados_2.costos_operacion.reservas_de_saneamiento ===
                    'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_2.costos_operacion.reservas_de_saneamiento }}</span
                >
                <span
                  v-show="
                    estados_2.costos_operacion.reservas_de_saneamiento ===
                    'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_2.costos_operacion.reservas_de_saneamiento }}</span
                >
                <span
                  v-show="
                    estados_2.costos_operacion.reservas_de_saneamiento === '-'
                  "
                  class="text-center"
                >
                  {{ estados_2.costos_operacion.reservas_de_saneamiento }}</span
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
                  {{ estado2.costos_operacion.utilidad_antes_gastos }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.costos_operacion.utilidad_antes_gastos }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.costos_operacion.utilidad_antes_gastos }}
                  <span
                    v-show="
                      var_abs_2.costos_operacion.utilidad_antes_gastos != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="
                    estados_2.costos_operacion.utilidad_antes_gastos ===
                    'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_2.costos_operacion.utilidad_antes_gastos }}</span
                >
                <span
                  v-show="
                    estados_2.costos_operacion.utilidad_antes_gastos ===
                    'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_2.costos_operacion.utilidad_antes_gastos }}</span
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
                  {{ estado2.gastos_operacion.funcionarios_y_empleados }}</span
                >
              </div>

              <div class="item mt-3">
                <span class="text-center">
                  {{
                    var_rel_2.gastos_operacion.funcionarios_y_empleados
                  }}</span
                >
              </div>

              <div class="item mt-3">
                <span class="text-center">
                  {{ var_abs_2.gastos_operacion.funcionarios_y_empleados }}
                  <span
                    v-show="
                      var_abs_2.gastos_operacion.funcionarios_y_empleados != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-3">
                <span
                  v-show="
                    estados_2.gastos_operacion.funcionarios_y_empleados ===
                    'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{
                    estados_2.gastos_operacion.funcionarios_y_empleados
                  }}</span
                >
                <span
                  v-show="
                    estados_2.gastos_operacion.funcionarios_y_empleados ===
                    'Optimo'
                  "
                  class="text-center good"
                >
                  {{
                    estados_2.gastos_operacion.funcionarios_y_empleados
                  }}</span
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
                  {{ estado2.gastos_operacion.generales }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.gastos_operacion.generales }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.gastos_operacion.generales }}
                  <span v-show="var_abs_2.gastos_operacion.generales != '-'">
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="estados_2.gastos_operacion.generales === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_2.gastos_operacion.generales }}</span
                >
                <span
                  v-show="estados_2.gastos_operacion.generales === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_2.gastos_operacion.generales }}</span
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
                    estado2.gastos_operacion.depresiaciones_y_amortizaciones
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.gastos_operacion.depresiaciones_y_amortizaciones
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_abs_2.gastos_operacion.depresiaciones_y_amortizaciones
                  }}
                  <span
                    v-show="
                      var_abs_2.gastos_operacion
                        .depresiaciones_y_amortizaciones != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="
                    estados_2.gastos_operacion
                      .depresiaciones_y_amortizaciones === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{
                    estados_2.gastos_operacion.depresiaciones_y_amortizaciones
                  }}</span
                >
                <span
                  v-show="
                    estados_2.gastos_operacion
                      .depresiaciones_y_amortizaciones === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{
                    estados_2.gastos_operacion.depresiaciones_y_amortizaciones
                  }}</span
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
                  {{ estado2.gastos_operacion.total_gastos_operacion }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.gastos_operacion.total_gastos_operacion }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.gastos_operacion.total_gastos_operacion }}
                  <span
                    v-show="
                      var_abs_2.gastos_operacion.total_gastos_operacion != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="
                    estados_2.gastos_operacion.total_gastos_operacion ===
                    'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_2.gastos_operacion.total_gastos_operacion }}</span
                >
                <span
                  v-show="
                    estados_2.gastos_operacion.total_gastos_operacion ===
                    'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_2.gastos_operacion.total_gastos_operacion }}</span
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
                  {{ estado2.gastos_operacion.utilidad_operacional }}</span
                >
              </div>

              <div class="item mt-3">
                <span class="text-center">
                  {{ var_rel_2.gastos_operacion.utilidad_operacional }}</span
                >
              </div>

              <div class="item mt-3">
                <span class="text-center">
                  {{ var_abs_2.gastos_operacion.utilidad_operacional }}
                  <span
                    v-show="
                      var_abs_2.gastos_operacion.utilidad_operacional != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-3">
                <span
                  v-show="
                    estados_2.gastos_operacion.utilidad_operacional === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_2.gastos_operacion.utilidad_operacional }}</span
                >
                <span
                  v-show="
                    estados_2.gastos_operacion.utilidad_operacional === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_2.gastos_operacion.utilidad_operacional }}</span
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
                  {{ estado2.gastos_operacion.dividendos }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.gastos_operacion.dividendos }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.gastos_operacion.dividendos }}
                  <span v-show="var_abs_2.gastos_operacion.dividendos != '-'">
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="estados_2.gastos_operacion.dividendos === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_2.gastos_operacion.dividendos }}</span
                >
                <span
                  v-show="estados_2.gastos_operacion.dividendos === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_2.gastos_operacion.dividendos }}</span
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
                  {{ estado2.otros_ingreso_y_gastos.otros_ingresos }}</span
                >
              </div>

              <div class="item mt-3">
                <span class="text-center">
                  {{ var_rel_2.otros_ingreso_y_gastos.otros_ingresos }}</span
                >
              </div>

              <div class="item mt-3">
                <span class="text-center">
                  {{ var_abs_2.otros_ingreso_y_gastos.otros_ingresos }}
                  <span
                    v-show="
                      var_abs_2.otros_ingreso_y_gastos.otros_ingresos != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-3">
                <span
                  v-show="
                    estados_2.otros_ingreso_y_gastos.otros_ingresos === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_2.otros_ingreso_y_gastos.otros_ingresos }}</span
                >
                <span
                  v-show="
                    estados_2.otros_ingreso_y_gastos.otros_ingresos === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_2.otros_ingreso_y_gastos.otros_ingresos }}</span
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
                  {{ estado2.otros_ingreso_y_gastos.otros_gastos }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_rel_2.otros_ingreso_y_gastos.otros_gastos }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{ var_abs_2.otros_ingreso_y_gastos.otros_gastos }}
                  <span
                    v-show="
                      var_abs_2.otros_ingreso_y_gastos.otros_gastos != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="
                    estados_2.otros_ingreso_y_gastos.otros_gastos === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{ estados_2.otros_ingreso_y_gastos.otros_gastos }}</span
                >
                <span
                  v-show="
                    estados_2.otros_ingreso_y_gastos.otros_gastos === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{ estados_2.otros_ingreso_y_gastos.otros_gastos }}</span
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
                    estado2.otros_ingreso_y_gastos.total_otros_ingresos_y_gastos
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.otros_ingreso_y_gastos
                      .total_otros_ingresos_y_gastos
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_abs_2.otros_ingreso_y_gastos
                      .total_otros_ingresos_y_gastos
                  }}
                  <span
                    v-show="
                      var_abs_2.otros_ingreso_y_gastos
                        .total_otros_ingresos_y_gastos != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="
                    estados_2.otros_ingreso_y_gastos
                      .total_otros_ingresos_y_gastos === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{
                    estados_2.otros_ingreso_y_gastos
                      .total_otros_ingresos_y_gastos
                  }}</span
                >
                <span
                  v-show="
                    estados_2.otros_ingreso_y_gastos
                      .total_otros_ingresos_y_gastos === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{
                    estados_2.otros_ingreso_y_gastos
                      .total_otros_ingresos_y_gastos
                  }}</span
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
                    estado2.utilidad_antes_impuestos.utilidad_antes_impuestos
                  }}</span
                >
              </div>

              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.utilidad_antes_impuestos.utilidad_antes_impuestos
                  }}</span
                >
              </div>

              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_abs_2.utilidad_antes_impuestos.utilidad_antes_impuestos
                  }}
                  <span
                    v-show="
                      var_abs_2.utilidad_antes_impuestos
                        .utilidad_antes_impuestos != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="
                    estados_2.utilidad_antes_impuestos
                      .utilidad_antes_impuestos === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{
                    estados_2.utilidad_antes_impuestos.utilidad_antes_impuestos
                  }}</span
                >
                <span
                  v-show="
                    estados_2.utilidad_antes_impuestos
                      .utilidad_antes_impuestos === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{
                    estados_2.utilidad_antes_impuestos.utilidad_antes_impuestos
                  }}</span
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
                    estado2.utilidad_antes_impuestos.impuesto_sobre_la_renta
                  }}</span
                >
              </div>

              <div class="item mt-3">
                <span class="text-center">
                  {{
                    var_rel_2.utilidad_antes_impuestos.impuesto_sobre_la_renta
                  }}</span
                >
              </div>

              <div class="item mt-3">
                <span class="text-center">
                  {{
                    var_abs_2.utilidad_antes_impuestos.impuesto_sobre_la_renta
                  }}
                  <span
                    v-show="
                      var_abs_2.utilidad_antes_impuestos
                        .impuesto_sobre_la_renta != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-3">
                <span
                  v-show="
                    estados_2.utilidad_antes_impuestos
                      .impuesto_sobre_la_renta === 'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{
                    estados_2.utilidad_antes_impuestos.impuesto_sobre_la_renta
                  }}</span
                >
                <span
                  v-show="
                    estados_2.utilidad_antes_impuestos
                      .impuesto_sobre_la_renta === 'Optimo'
                  "
                  class="text-center good"
                >
                  {{
                    estados_2.utilidad_antes_impuestos.impuesto_sobre_la_renta
                  }}</span
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
                    estado2.utilidad_antes_impuestos
                      .contribucion_especial_plan_de_seguridad_ciudada
                  }}</span
                >
              </div>
              <div class="item mt-2">
                <span class="text-center">
                  {{
                    var_rel_2.utilidad_antes_impuestos
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
                  <span
                    v-show="
                      var_abs_2.utilidad_antes_impuestos
                        .contribucion_especial_plan_de_seguridad_ciudada != '-'
                    "
                  >
                    %</span
                  ></span
                >
              </div>
              <div class="item mt-2">
                <span
                  v-show="
                    estados_2.utilidad_antes_impuestos
                      .contribucion_especial_plan_de_seguridad_ciudada ===
                    'Pesimo'
                  "
                  class="text-center bad"
                >
                  {{
                    estados_2.utilidad_antes_impuestos
                      .contribucion_especial_plan_de_seguridad_ciudada
                  }}</span
                >
                <span
                  v-show="
                    estados_2.utilidad_antes_impuestos
                      .contribucion_especial_plan_de_seguridad_ciudada ===
                    'Optimo'
                  "
                  class="text-center good"
                >
                  {{
                    estados_2.utilidad_antes_impuestos
                      .contribucion_especial_plan_de_seguridad_ciudada
                  }}</span
                >
              </div>
            </div>

            <div class="row mt-4">
              <div class="item mt-4">
                <span class="text-center"> {{ estado1.utilidad_neta }}</span>
              </div>

              <div class="item mt-4">
                <span class="text-center"> {{ estado2.utilidad_neta }}</span>
              </div>

              <div class="item mt-4">
                <span class="text-center"> {{ var_rel_2.utilidad_neta }}</span>
              </div>

              <div class="item mt-4">
                <span class="text-center">
                  {{ var_abs_2.utilidad_neta }}
                  <span v-show="var_abs_2.utilidad_neta != '-'"> %</span></span
                >
              </div>
              <div class="item mt-3">
                <span
                  v-show="estados_2.utilidad_neta === 'Pesimo'"
                  class="text-center bad"
                >
                  {{ estados_2.utilidad_neta }}</span
                >
                <span
                  v-show="estados_2.utilidad_neta === 'Optimo'"
                  class="text-center good"
                >
                  {{ estados_2.utilidad_neta }}</span
                >
              </div>
            </div>

            <div class="row mt-4"></div>
            <div class="row mt-4"></div>
          </div>
        </div>
      </div>
    </div>

    <AnalisisHorizontalDescarga
      id="element-to-convert"
      v-show="showBalance && showEstado === false"
      :balance1="balance1"
      :balance2="balance2"
      :var_rel_1="var_rel_1"
      :var_abs_1="var_abs_1"
      :estados_1="estados_1"
      :isVisible="isVisible"
    />
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";
import AnalisisHorizontalDescarga from "./AnalisisHorizontalDescarga";

export default {
  name: "TablaHorizontal",
  data() {
    return {
      pag: 1,
      showBalance: true,
      showEstado: false,
      ds: true,
      isVisible: true,
    };
  },
  components: {
    AnalisisHorizontalDescarga,
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
      if (this.showBalance && this.showEstado === false) {
        this.isVisible = false;
        let name =
          "Analisis-horizontal-" +
          this.balance1.anio +
          "-" +
          this.balance2.anio;
        await html2pdf(document.getElementById("element-to-convert"), {
          margin: 1,
          filename: name,
          margin: [1, 0, 1, 0], // [top, right, bottom, left]
          jsPDF: { unit: "in" },
        });

        this.isVisible = true;
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
        
      } else if (this.showEstado && this.showBalance === false) {
        let name =
          "Analisis-horizontal-" +
          this.balance1.anio +
          "-" +
          this.balance2.anio;
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
      }
    },
    nextPage() {
      if (this.pag === 1) {
        this.showEstado = true;
        this.showBalance = false;
        this.ds = true;
        this.pag = 2;
      }
    },
    prevPage() {
      if (this.pag === 2) {
        this.showEstado = false;
        this.showBalance = true;
        this.pag = 1;
      }
    },
    ayuda() {
      this.$swal({
        icon: "info",
        title: "¿Como ver el análisis horizontal?",
        text: "Para ver el análisis horizontal correctamente debes hacer scroll horizontalmente en la tabla.",
      });
    },
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
  color: #9cff2e;
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

.pagination {
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

.pag {
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
