<template>
  <div class="container-fluid">
    <div class="row p-3">
      <div class="col-12 card-principal shadow-sm">
        <div class="row">
          <div class="col-7 scroll-form">
            <div class="row title">ACTIVOS:</div>
            <div class="row">
              <div class="col-7 row-item">Caja y bancos:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model.lazy="doc.activos.caja_y_bancos"
                  class="inp"
                  type="text"
                  v-money="caja_y_bancos"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">
                Reportes y otras operaciones bursatiles:
              </div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.activos.operaciones_bursatiles"
                  type="text"
                  v-money="operaciones_bursatiles"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Inversiones financieras (Neto):</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.activos.inversiones_financieras"
                  type="text"
                  v-money="inversiones_financieras"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">
                Cartera de préstamo, neta de reservas de saneamiento:
              </div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.activos.cartera_de_prestamos"
                  type="text"
                  v-money="cartera_de_prestamos"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Diversos (Neto):</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.otros_activos.diversos"
                  type="text"
                  v-money="diversos_a"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Bienes inmuebles y otros:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.activos_fijos.bienes_inmuebles"
                  type="text"
                  v-money="bienes_inmuebles"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">PASIVOS:</div>
            <div class="row">
              <div class="col-7 row-item">
                Prestamos del Banco central de la República de El Salvador:
              </div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.pasivos.prestamos_del_banco"
                  class="inp"
                  type="text"
                  v-money="prestamos_del_banco"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Prestamos de otros bancos:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.pasivos.prestamo_bancos"
                  type="text"
                  v-money="prestamo_bancos"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Titulos de emisión propia:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.pasivos.titulos_de_emision_propia"
                  type="text"
                  v-money="titulos_de_emision_propia"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Fondos de administración:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.pasivos.fondos_de_administracion"
                  type="text"
                  v-money="fondos_de_administracion"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Provisiones:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.pasivos.provisiones"
                  type="text"
                  v-money="provisiones"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Diversos:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.pasivos.diversos"
                  type="text"
                  v-money="diversos_p"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">PATRIMONIO:</div>
            <div class="row">
              <div class="col-7 row-item">Aportes del estado:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.patrimonio.aportes_del_estado"
                  type="text"
                  v-money="aportes_del_estado"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">
                Reservas de capital, resultados acumulados y patrimonio ganado:
              </div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.patrimonio.reservas_del_capital"
                  type="text"
                  v-money="reservas_del_capital"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">DATOS GENERALES:</div>
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
              Guardar balance
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
      doc_cp: {
        anio: "",
        activos: {
          activos_de_intermediacion: "",
          caja_y_bancos: "",
          cartera_de_prestamos: "",
          inversiones_financieras: "",
          operaciones_bursatiles: "",
        },
        activos_fijos: {
          bienes_inmuebles: "",
        },
        otros_activos: {
          diversos: "",
        },
        pasivos: {
          diversos: "",
          fondos_de_administracion: "",
          otros_pasivos: "",
          pasivos_de_intermediacion: "",
          prestamo_bancos: "",
          prestamos_del_banco: "",
          provisiones: "",
          titulos_de_emision_propia: "",
        },
        patrimonio: {
          aportes_del_estado: "",
          reservas_del_capital: "",
        },
        total_activos: "",
        total_pasivos: "",
        total_pasivos_patrimonio: "",
        total_patrimonio: "",
      },

      caja_y_bancos: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.activos.caja_y_bancos",
      },
      cartera_de_prestamos: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.activos.cartera_de_prestamos",
      },
      inversiones_financieras: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.activos.inversiones_financieras",
      },
      operaciones_bursatiles: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.activos.operaciones_bursatiles",
      },
      diversos_a: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.otros_activos.diversos",
      },
      bienes_inmuebles: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.activos_fijos.bienes_inmuebles",
      },

      prestamos_del_banco: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.pasivos.prestamos_del_banco",
      },
      prestamo_bancos: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.pasivos.prestamo_bancos",
      },
      titulos_de_emision_propia: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.pasivos.titulos_de_emision_propia",
      },
      fondos_de_administracion: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.pasivos.fondos_de_administracion",
      },
      provisiones: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.pasivos.provisiones",
      },
      diversos_p: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.pasivos.diversos",
      },

      aportes_del_estado: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.patrimonio.aportes_del_estado",
      },
      reservas_del_capital: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        unmaskedVar: "doc_cp.patrimonio.reservas_del_capital",
      },

      doc: {
        anio: "",
        activos: {
          activos_de_intermediacion: "",
          caja_y_bancos: "",
          cartera_de_prestamos: "",
          inversiones_financieras: "",
          operaciones_bursatiles: "",
        },
        activos_fijos: {
          bienes_inmuebles: "",
        },
        otros_activos: {
          diversos: "",
        },
        pasivos: {
          diversos: "",
          fondos_de_administracion: "",
          otros_pasivos: "",
          pasivos_de_intermediacion: "",
          prestamo_bancos: "",
          prestamos_del_banco: "",
          provisiones: "",
          titulos_de_emision_propia: "",
        },
        patrimonio: {
          aportes_del_estado: "",
          reservas_del_capital: "",
        },
        total_activos: "",
        total_pasivos: "",
        total_pasivos_patrimonio: "",
        total_patrimonio: "",
      },
    };
  },
  methods: {
    ...mapActions(["setBalanceGeneral"]),
    async save() {
      let balance = { ...this.doc_cp };
      balance.anio = this.doc.anio;

      let totales = {
        activos:
          balance.activos.caja_y_bancos +
          balance.activos.cartera_de_prestamos +
          balance.activos.inversiones_financieras +
          balance.activos.operaciones_bursatiles +
          balance.otros_activos.diversos +
          balance.activos_fijos.bienes_inmuebles,

        pasivos:
          balance.pasivos.prestamos_del_banco +
          balance.pasivos.prestamo_bancos +
          balance.pasivos.titulos_de_emision_propia +
          balance.pasivos.fondos_de_administracion +
          balance.pasivos.provisiones +
          balance.pasivos.diversos,

        patrimonio:
          balance.patrimonio.aportes_del_estado +
          balance.patrimonio.reservas_del_capital,
        pasivo_y_patrimonio:
          balance.pasivos.prestamos_del_banco +
          balance.pasivos.prestamo_bancos +
          balance.pasivos.titulos_de_emision_propia +
          balance.pasivos.fondos_de_administracion +
          balance.pasivos.provisiones +
          balance.pasivos.diversos +
          balance.patrimonio.aportes_del_estado +
          balance.patrimonio.reservas_del_capital,

        activos_de_intermediacion:
          balance.activos.caja_y_bancos +
          balance.activos.cartera_de_prestamos +
          balance.activos.inversiones_financieras +
          balance.activos.operaciones_bursatiles,

        pasivos_de_intermediacion:
          balance.pasivos.prestamos_del_banco +
          balance.pasivos.prestamo_bancos +
          balance.pasivos.titulos_de_emision_propia,

        otros_pasivos:
          balance.pasivos.fondos_de_administracion +
          balance.pasivos.provisiones +
          balance.pasivos.diversos,
      };

      balance.total_activos = totales.activos;
      balance.total_pasivos = totales.pasivos;
      balance.total_pasivos_patrimonio = totales.pasivo_y_patrimonio;
      balance.total_patrimonio = totales.patrimonio;
      balance.activos.activos_de_intermediacion =
        totales.activos_de_intermediacion;
      balance.pasivos.pasivos_de_intermediacion =
        totales.pasivos_de_intermediacion;
      balance.pasivos.otros_pasivos = totales.otros_pasivos;

      if (balance.anio != "") {
        let guardo = await this.setBalanceGeneral(balance);
        if (guardo) {
          await this.$swal.fire({
            title: "Se guardo correctamente",
            icon: "success",
            confirmButtonText: "Aceptar",
          });
          this.$router.push({
            name: "balance",
          });
        } else {
          await this.$swal.fire({
            title: "No se pudo guardar",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        }
      } else {
        if (balance.anio === "") {
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
  font-size: 16px;
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
