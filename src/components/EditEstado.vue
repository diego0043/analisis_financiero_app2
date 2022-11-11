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
                  class="inp"
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
                  class="inp"
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
                  class="inp"
                  v-model="doc.ingreso_de_operaciones.intereses_inversiones"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Intereses sobre depósitos:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.ingreso_de_operaciones.intereses_depositos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">Costos de operación :</div>
            <div class="row">
              <div class="col-7 row-item">Intereses sobre préstamos :</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.costos_operacion.intereses_sobre_prestamos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">
                Intereses sobre títulos de emisión propia:
              </div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.costos_operacion.comisiones_sobre_titulos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Comisiones y otros:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.costos_operacion.comisiones_y_otros"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Reservas de saneamiento:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.costos_operacion.reservas_de_saneamiento"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">Gastos de operación:</div>
            <div class="row">
              <div class="col-7 row-item">De funcionarios y empleados:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.gastos_operacion.funcionarios_y_empleados"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Generales:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.gastos_operacion.generales"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Depresiaciones y amortizaciones:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.gastos_operacion.depresiaciones_y_amortizaciones"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Dividendos:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
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
                  class="inp"
                  v-model="doc.otros_ingreso_y_gastos.otros_ingresos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Otros gastos:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.otros_ingreso_y_gastos.otros_gastos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">
              Utilidad antes de impuesto sobre la renta:
            </div>
            <div class="row">
              <div class="col-7 row-item">
                Contribución especial plan de seguridad ciudada:
              </div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="
                    doc.utilidad_antes_impuestos
                      .contribucion_especial_plan_de_seguridad_ciudada
                  "
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">Efecto fiscal de:</div>
            <div class="row">
              <div class="col-7 row-item">gastos no deducibles:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.efecto_fiscal.gastos_no_deducibles"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Ingresos no gravables:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.efecto_fiscal.ingresos_no_gravables"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">Datos generales:</div>
            <div class="row">
              <div class="col-7 row-item">Año:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.anio"
                  type="text"
                ></b-form-input>
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
              Llena los campos y luego presiona el boton guardar
            </div>
            <button @click="save" class="btn-save shadow-sm mb-1">
              Guardar Estado de Resultado
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "EditEstado",
  data() {
    return {
      doc: {
        anio: this.$route.query.anio,
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
      doc_cp: {
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

      interes_prestamos: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.ingreso_de_operaciones.interes_prestamos",
      },
      comisiones_y_otros_ingresos: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar:
          "doc_cp.ingreso_de_operaciones.comisiones_y_otros_ingresos",
      },
      intereses_inversiones: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.ingreso_de_operaciones.intereses_inversiones",
      },
      intereses_depositos: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.ingreso_de_operaciones.intereses_depositos",
      },

      intereses_sobre_prestamos: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.costos_operacion.intereses_sobre_prestamos",
      },
      comisiones_sobre_titulos: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.costos_operacion.comisiones_sobre_titulos",
      },
      comisiones_y_otros: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.costos_operacion.comisiones_y_otros",
      },
      reservas_de_saneamiento: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.costos_operacion.reservas_de_saneamiento",
      },
      utilidad_antes_gastos: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.gastos_operacion.utilidad_antes_gastos",
      },

      funcionarios_y_empleados: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.gastos_operacion.funcionarios_y_empleados",
      },
      generales: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.gastos_operacion.generales",
      },
      depresiaciones_y_amortizaciones: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.gastos_operacion.depresiaciones_y_amortizaciones",
      },
      dividendos: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.gastos_operacion.dividendos",
      },

      otros_ingresos: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.otros_ingreso_y_gastos.otros_ingresos",
      },
      otros_gastos: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.otros_ingreso_y_gastos.otros_gastos",
      },

      impuesto_sobre_la_renta: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.utilidad_antes_impuestos.impuesto_sobre_la_renta",
      },
      contribucion_especial_plan_de_seguridad_ciudada: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar:
          "doc_cp.utilidad_antes_impuestos.contribucion_especial_plan_de_seguridad_ciudada",
      },
      gastos_no_deducibles: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.efecto_fiscal.gastos_no_deducibles",
      },
      ingresos_no_gravables: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.efecto_fiscal.ingresos_no_gravables",
      },
    };
  },
  computed: {
    ...mapGetters(["EstadoResultados"]),
  },
  async created() {
    await this.getEstadoResultados();
    setTimeout(() => {this.colocarInfo()}, 1000);
  },
  methods: {
    ...mapActions(["getEstadoResultados", "EditEstadoResultados"]),
    colocarInfo(){
        this.EstadoResultados.forEach(e => {
            if (e.anio == this.$route.query.anio) {
                this.doc = e;
            }
        });
    },
    async save() {
      let estado = { ...this.doc };
      estado.anio = this.doc.anio;

      let totales = {
        total_ingresos_operacion:
          parseFloat(estado.ingreso_de_operaciones.intereses_inversiones) +
          parseFloat(estado.ingreso_de_operaciones.intereses_depositos) +
          parseFloat(estado.ingreso_de_operaciones.interes_prestamos) +
          parseFloat(estado.ingreso_de_operaciones.comisiones_y_otros_ingresos),

        total_gastos_operacional:
          parseFloat(estado.gastos_operacion.generales) +
          parseFloat(estado.gastos_operacion.funcionarios_y_empleados) +
          parseFloat(estado.gastos_operacion.depresiaciones_y_amortizaciones),

        total_costos_operacion:
          parseFloat(estado.costos_operacion.intereses_sobre_prestamos) +
          parseFloat(estado.costos_operacion.comisiones_sobre_titulos) +
          parseFloat(estado.costos_operacion.comisiones_y_otros),

        total_utilidad_antes_de_gastos:
          parseFloat(estado.ingreso_de_operaciones.intereses_inversiones) +
          parseFloat(estado.ingreso_de_operaciones.intereses_depositos) +
          parseFloat(estado.ingreso_de_operaciones.interes_prestamos) +
          parseFloat(estado.ingreso_de_operaciones.comisiones_y_otros_ingresos) -
          (parseFloat(estado.costos_operacion.intereses_sobre_prestamos) +
            parseFloat(estado.costos_operacion.comisiones_sobre_titulos) +
            parseFloat(estado.costos_operacion.comisiones_y_otros)) -
          parseFloat(estado.costos_operacion.reservas_de_saneamiento),

        total_utilidad_de_operacion:
          parseFloat(estado.ingreso_de_operaciones.intereses_inversiones) +
          parseFloat(estado.ingreso_de_operaciones.intereses_depositos) +
          parseFloat(estado.ingreso_de_operaciones.interes_prestamos) +
          parseFloat(estado.ingreso_de_operaciones.comisiones_y_otros_ingresos) -
          (parseFloat(estado.costos_operacion.intereses_sobre_prestamos) +
            parseFloat(estado.costos_operacion.comisiones_sobre_titulos) +
            parseFloat(estado.costos_operacion.comisiones_y_otros)) -
          parseFloat(estado.costos_operacion.reservas_de_saneamiento) -
          (parseFloat(estado.gastos_operacion.generales) +
            parseFloat(estado.gastos_operacion.funcionarios_y_empleados) +
            parseFloat(estado.gastos_operacion.depresiaciones_y_amortizaciones)),

        total_otros_ingresos_y_gastos:
          parseFloat(estado.otros_ingreso_y_gastos.otros_ingresos) -
          parseFloat(estado.otros_ingreso_y_gastos.otros_gastos),

        total_utilidad_antes_de_impuestos:
          parseFloat(estado.ingreso_de_operaciones.intereses_inversiones) +
          parseFloat(estado.ingreso_de_operaciones.intereses_depositos) +
          parseFloat(estado.ingreso_de_operaciones.interes_prestamos) +
          parseFloat(estado.ingreso_de_operaciones.comisiones_y_otros_ingresos) -
          (parseFloat(estado.costos_operacion.intereses_sobre_prestamos) +
            parseFloat(estado.costos_operacion.comisiones_sobre_titulos) +
            parseFloat(estado.costos_operacion.comisiones_y_otros)) -
          parseFloat(estado.costos_operacion.reservas_de_saneamiento) -
          (parseFloat(estado.gastos_operacion.generales) +
            parseFloat(estado.gastos_operacion.funcionarios_y_empleados) +
            parseFloat(estado.gastos_operacion.depresiaciones_y_amortizaciones)) +
          (parseFloat(estado.otros_ingreso_y_gastos.otros_ingresos) -
            parseFloat(estado.otros_ingreso_y_gastos.otros_gastos)) +
          parseFloat(estado.gastos_operacion.dividendos),

        total_utilidad_neta: 0,
        total_impuestos_renta: 0,
        total_impuesto_sobre_la_renta: 0,
      };

      let impuesto_sobre_la_renta =
        totales.total_utilidad_antes_de_impuestos * 1000 > 150000
          ? totales.total_utilidad_antes_de_impuestos * 0.3
          : totales.total_utilidad_antes_de_impuestos * 0.25;

      let impuestos_renta =
        impuesto_sobre_la_renta +
        estado.efecto_fiscal.gastos_no_deducibles -
        estado.efecto_fiscal.ingresos_no_gravables;

      let utilidad_neta =
        totales.total_utilidad_antes_de_impuestos -
        impuestos_renta -
        estado.utilidad_antes_impuestos
          .contribucion_especial_plan_de_seguridad_ciudada;

      totales.total_impuesto_sobre_la_renta = impuesto_sobre_la_renta;
      totales.total_utilidad_neta = utilidad_neta;
      totales.total_impuestos_renta = impuestos_renta;

      //Llenamos los campos restantes en el estado de resultados que vamos a guardar

      estado.ingreso_de_operaciones.total_ingresos_operacion =
        totales.total_ingresos_operacion;
      estado.gastos_operacion.total_gastos_operacion =
        totales.total_gastos_operacional;
      estado.costos_operacion.total_costos_operacion =
        totales.total_costos_operacion;
      estado.otros_ingreso_y_gastos.total_otros_ingresos_y_gastos =
        totales.total_otros_ingresos_y_gastos.toFixed(1);
      estado.utilidad_antes_impuestos.utilidad_antes_impuestos =
        totales.total_utilidad_antes_de_impuestos.toFixed(1);
      estado.utilidad_antes_impuestos.impuesto_sobre_la_renta =
        totales.total_impuestos_renta.toFixed(1);
      estado.utilidad_neta = totales.total_utilidad_neta.toFixed(1);
      estado.impuesto_sobre_la_renta = impuesto_sobre_la_renta.toFixed(1);
      estado.efecto_fiscal.impuesto_sobre_la_renta =
        totales.total_impuestos_renta.toFixed(1);
      estado.costos_operacion.utilidad_antes_gastos = totales.total_utilidad_antes_de_gastos.toFixed(1);
      estado.gastos_operacion.utilidad_operacional = totales.total_utilidad_de_operacion.toFixed(1);
      //console.log(estado);

      //Guardamos el estado de resultados

      if (estado.anio != "") {
        let guardo = await this.EditEstadoResultados(estado);
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
      } else {
        if (estado.anio === "") {
          await this.$swal.fire({
            title: "¡Ups! Parece que te falta el año",
            icon: "info",
            confirmButtonText: "Aceptar",
          });
        }
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
  color: gray;
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
.inp:focus {
  box-shadow: none;
}
</style>
