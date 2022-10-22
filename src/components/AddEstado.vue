<template>
  <div class="container-fluid">
    <div class="row p-3">
      <div class="col-12 card-principal shadow-sm">
        <div class="row">
          <div class="col-7 scroll-form">
            <div class="row title">Ingreso de operación:</div>
            <div class="row">
              <div class="col-7 row-item">Intereses de préstamos:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.ingreso_de_operaciones.interes_prestamos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">
                comisiones y otros ingresos financieros:
              </div>
              <div class="col row-item2">
                <b-form-input
                  v-model="
                    doc.ingreso_de_operaciones.comisiones_y_otros_ingresos
                  "
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Intereses de inversiones:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.ingreso_de_operaciones.intereses_inversiones"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Intereses sobre depósitos:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.ingreso_de_operaciones.intereses_depositos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Total ingresos de operación:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.ingreso_de_operaciones.total_ingresos_operacion"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">Costos de operación :</div>
            <div class="row">
              <div class="col-7 row-item">Intereses sobre préstamos :</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.costos_operacion.intereses_sobre_prestamos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">
                comisiones sobre títulos de emisión propia:
              </div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.costos_operacion.comisiones_sobre_titulos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Comisiones y otros:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.costos_operacion.comisiones_y_otros"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Total costo de operación:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.costos_operacion.total_costos_operacion"
                  class=""
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Reservas de saneamiento:</div>
              <div class="col row-item2">
                <b-form-input
                  :v-model="doc.costos_operacion.reservas_de_saneamiento"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Utilidad antes de gastos:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.costos_operacion.utilidad_antes_gastos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">Gastos de operación:</div>
            <div class="row">
              <div class="col-7 row-item">De funcionarios y empleados:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.gastos_operacion.funcionarios_y_empleados"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Generales:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.gastos_operacion.generales"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Depresiaciones y amortizaciones:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.gastos_operacion.depresiaciones_y_amortizaciones"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Total gastos de operaciones:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.gastos_operacion.total_gastos_operacion"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Utilidad de operación:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.gastos_operacion.utilidad_operacional"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Dividendos:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.gastos_operacion.dividendos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">Otros ingresos y gastos:</div>
            <div class="row">
              <div class="col-7 row-item">Otros ingresos:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.otros_ingreso_y_gastos.otros_ingresos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Otros gastos:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.otros_ingreso_y_gastos.otros_gastos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">
                Total otros ingresos y otros gastos:
              </div>
              <div class="col row-item2">
                <b-form-input
                  v-model="
                    doc.otros_ingreso_y_gastos.total_otros_ingresos_y_gastos
                  "
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">
              Utilidad antes de impuesto sobre la renta:
            </div>
            <div class="row">
              <div class="col-7 row-item">
                Utilidad antes de impuesto sobre la renta
              </div>
              <div class="col row-item2">
                <b-form-input
                  v-model="
                    doc.utilidad_antes_impuestos.utilidad_antes_impuestos
                  "
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Impuesto sobre la renta:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.utilidad_antes_impuestos.impuesto_sobre_la_renta"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">
                Contribución especial plan de seguridad ciudada:
              </div>
              <div class="col row-item2">
                <b-form-input
                  v-model="
                    doc.utilidad_antes_impuestos
                      .contribucion_especial_plan_de_seguridad_ciudada
                  "
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">Utilidad neta:</div>
            <div class="row">
              <div class="col-7 row-item">Utilidad neta:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.utilidad_neta"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">
              Impuesto sobre la renta( si > 150 = 30%):
            </div>
            <div class="row">
              <div class="col-7 row-item">Utilidad neta:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.impuesto_sobre_la_renta"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">Efecto fiscal de:</div>
            <div class="row">
              <div class="col-7 row-item">gastos no deducibles:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.efecto_fiscal.gastos_no_deducibles"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Ingresos no gravables:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.efecto_fiscal.ingresos_no_gravables"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Impuesto sobre la renta:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.efecto_fiscal.impuesto_sobre_la_renta"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">Datos generales:</div>
            <div class="row">
              <div class="col-7 row-item">Año:</div>
              <div class="col row-item2">
                <b-form-input v-model="doc.anio" type="text"></b-form-input>
              </div>
            </div>

            <div class="row title"></div>
          </div>

          <div class="col-5 form-save">
            <div class="row">
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets2.lottiefiles.com/packages/lf20_GtqlRg.json"
                style="width: 400px"
                class="img"
              >
              </lottie-player>
            </div>
            <div class="row text-tip">
              Llena los campos y luego presiona el boton guardar, y luego
              regresa a la pagina de estado de resultados
            </div>
            <button @click="save" class="btn-save shadow-sm mb-1">
              Guardar Estado de Resultados
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddBalance",
  data() {
    return {
      doc: {
        anio: "",
        ingreso_de_operaciones: {
          interes_prestamos: "",
          comisiones_y_otros_ingresos: "",
          intereses_inversiones: "",
          intereses_depositos: "",
          total_ingresos_operacion: "",
        },
        costos_operacion: {
          intereses_sobre_prestamos: "",
          comisiones_sobre_titulos: "",
          comisiones_y_otros: "",
          total_costos_operacion: "",
          reservas_de_saneamiento: "",
          utilidad_antes_gastos: "",
        },
        gastos_operacion: {
          funcionarios_y_empleados: "",
          generales: "",
          depresiaciones_y_amortizaciones: "",
          total_gastos_operacion: "",
          utilidad_operacional: "",
          dividendos: "",
        },
        otros_ingreso_y_gastos: {
          otros_ingresos: "",
          otros_gastos: "",
          total_otros_ingresos_y_gastos: "",
        },
        utilidad_antes_impuestos: {
          utilidad_antes_impuestos: "",
          impuesto_sobre_la_renta: "",
          contribucion_especial_plan_de_seguridad_ciudada: "",
        },
        utilidad_neta: "",
        impuesto_sobre_la_renta: "",
        efecto_fiscal: {
          gastos_no_deducibles: "",
          ingresos_no_gravables: "",
          impuesto_sobre_la_renta: "",
        },
      },
    };
  },
  methods: {
    ...mapActions(["setEstadoResultados"]),
    async save() {
      let year = new Date().getFullYear();
      let copiaEstado = { ...this.doc };
      let estado = {
        anio: copiaEstado.anio === "" ? year : copiaEstado.anio,
        ingreso_de_operaciones: {
          interes_prestamos:
            copiaEstado.ingreso_de_operaciones.interes_prestamos === ""
              ? 0
              : copiaEstado.ingreso_de_operaciones.interes_prestamos,
          comisiones_y_otros_ingresos:
            copiaEstado.ingreso_de_operaciones.comisiones_y_otros_ingresos ===
            ""
              ? 0
              : copiaEstado.ingreso_de_operaciones.comisiones_y_otros_ingresos,
          intereses_inversiones:
            copiaEstado.ingreso_de_operaciones.intereses_inversiones === ""
              ? 0
              : copiaEstado.ingreso_de_operaciones.intereses_inversiones,
          intereses_depositos:
            copiaEstado.ingreso_de_operaciones.intereses_depositos === ""
              ? 0
              : copiaEstado.ingreso_de_operaciones.intereses_depositos,
          total_ingresos_operacion:
            copiaEstado.ingreso_de_operaciones.total_ingresos_operacion === ""
              ? 0
              : copiaEstado.ingreso_de_operaciones.total_ingresos_operacion,
        },
        costos_operacion: {
          intereses_sobre_prestamos: copiaEstado.costos_operacion.intereses_sobre_prestamos === "" ? 0 : copiaEstado.costos_operacion.intereses_sobre_prestamos,
          comisiones_sobre_titulos:
            copiaEstado.costos_operacion.comisiones_sobre_titulos === ""
              ? 0
              : copiaEstado.costos_operacion.comisiones_sobre_titulos,
          comisiones_y_otros:
            copiaEstado.costos_operacion.comisiones_y_otros === ""
              ? 0
              : copiaEstado.costos_operacion.comisiones_y_otros,
          total_costos_operacion:
            copiaEstado.costos_operacion.total_costos_operacion === ""
              ? 0
              : copiaEstado.costos_operacion.total_costos_operacion,
          reservas_de_saneamiento:
            copiaEstado.costos_operacion.reservas_de_saneamiento === ""
              ? 0
              : copiaEstado.costos_operacion.reservas_de_saneamiento,
          utilidad_antes_gastos:
            copiaEstado.costos_operacion.utilidad_antes_gastos === ""
              ? 0
              : copiaEstado.costos_operacion.utilidad_antes_gastos,
        },
        gastos_operacion: {
          funcionarios_y_empleados:
            copiaEstado.gastos_operacion.funcionarios_y_empleados === ""
              ? 0
              : copiaEstado.gastos_operacion.funcionarios_y_empleados,
          generales:
            copiaEstado.gastos_operacion.generales === ""
              ? 0
              : copiaEstado.gastos_operacion.generales,
          depresiaciones_y_amortizaciones:
            copiaEstado.gastos_operacion.depresiaciones_y_amortizaciones === ""
              ? 0
              : copiaEstado.gastos_operacion.depresiaciones_y_amortizaciones,
          total_gastos_operacion:
            copiaEstado.gastos_operacion.total_gastos_operacion === ""
              ? 0
              : copiaEstado.gastos_operacion.total_gastos_operacion,
          utilidad_operacional:
            copiaEstado.gastos_operacion.utilidad_operacional === ""
              ? 0
              : copiaEstado.gastos_operacion.utilidad_operacional,
          dividendos:
            copiaEstado.gastos_operacion.dividendos === ""
              ? 0
              : copiaEstado.gastos_operacion.dividendos,
        },
        otros_ingreso_y_gastos: {
          otros_ingresos:
            copiaEstado.otros_ingreso_y_gastos.otros_ingresos === ""
              ? 0
              : copiaEstado.otros_ingreso_y_gastos.otros_ingresos,
          otros_gastos:
            copiaEstado.otros_ingreso_y_gastos.otros_gastos === ""
              ? 0
              : copiaEstado.otros_ingreso_y_gastos.otros_gastos,
          total_otros_ingresos_y_gastos:
            copiaEstado.otros_ingreso_y_gastos.total_otros_ingresos_y_gastos ===
            ""
              ? 0
              : copiaEstado.otros_ingreso_y_gastos
                  .total_otros_ingresos_y_gastos,
        },
        utilidad_antes_impuestos: {
          utilidad_antes_impuestos:
            copiaEstado.utilidad_antes_impuestos.utilidad_antes_impuestos === ""
              ? 0
              : copiaEstado.utilidad_antes_impuestos.utilidad_antes_impuestos,
          impuesto_sobre_la_renta:
            copiaEstado.utilidad_antes_impuestos.impuesto_sobre_la_renta === ""
              ? 0
              : copiaEstado.utilidad_antes_impuestos.impuesto_sobre_la_renta,
          contribucion_especial_plan_de_seguridad_ciudada:
            copiaEstado.utilidad_antes_impuestos
              .contribucion_especial_plan_de_seguridad_ciudada === ""
              ? 0
              : copiaEstado.utilidad_antes_impuestos
                  .contribucion_especial_plan_de_seguridad_ciudada,
        },
        utilidad_neta:
          copiaEstado.utilidad_neta === "" ? 0 : copiaEstado.utilidad_neta,
        impuesto_sobre_la_renta:
          copiaEstado.impuesto_sobre_la_renta === ""
            ? 0
            : copiaEstado.impuesto_sobre_la_renta,
        efecto_fiscal: {
          gastos_no_deducibles:
            copiaEstado.efecto_fiscal.gastos_no_deducibles === ""
              ? 0
              : copiaEstado.efecto_fiscal.gastos_no_deducibles,
          ingresos_no_gravables:
            copiaEstado.efecto_fiscal.ingresos_no_gravables === ""
              ? 0
              : copiaEstado.efecto_fiscal.ingresos_no_gravables,
          impuesto_sobre_la_renta:
            copiaEstado.efecto_fiscal.impuesto_sobre_la_renta === ""
              ? 0
              : copiaEstado.efecto_fiscal.impuesto_sobre_la_renta,
        },
      };

      let guardo = await this.setEstadoResultados(estado);
      if (guardo) {
        await this.$swal.fire({
          title: "Se guardo correctamente",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        this.$router.push({
        name: "estado",
      });
      } else {
        await this.$swal.fire({
          title: "No se pudo guardar",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
}

.card-principal {
  display: block;
  margin-top: 5%;
  background-color: white;
  height: 83vh;
}

.title {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.row-item {
  margin-top: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  margin-left: 30px;
}

.row-item2 {
  margin-top: 10px;
}

.btn-save {
  display: block;
  position: absolute;
  background-color: #f8f8f8;
  color: gray;
  font-weight: 500;
  width: 50%;
  height: 40px;
  border: 1px solid #d8d7d7;
  border-radius: 10px;
  margin-left: 22%;
  bottom: 0px;
}

::-webkit-scrollbar {
  width: 5px;
  height: 40px;
}
::-webkit-scrollbar-track {
  background: white;
}
::-webkit-scrollbar-thumb {
  background: #f8f8f8;
  border-radius: 20px;
}

.btn-save:hover {
  background-color: #d8d7d7;
}

.img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
}

.scroll-form {
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 80vh;
  margin-top: 8px;
}

.form-save {
  height: 80vh;
}

.text-tip {
  display: block;
  padding: 10px;
  font-size: 17px;
  color: gray;
  font-weight: bold;
  margin-left: auto;
  margin-top: auto;
  text-align: center;
}
</style>
