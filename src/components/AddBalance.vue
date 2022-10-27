<template>
  <div class="container-fluid">
    <div class="row p-3">
      <div class="col-12 card-principal shadow-sm">
        <div class="row">
          <div class="col-7 scroll-form">
            <div class="row title">ACTIVOS:</div>
            <div class="row">
              <div class="col-7 row-item">Activos de intermediación:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.activos.activos_de_intermediacion"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Caja y bancos:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.activos.caja_y_bancos"
                  type="text"
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
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Total activos:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.total_activos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row title">PASIVOS:</div>
            <div class="row mt-2">
              <div class="col-7 row-item">Pasivos de intermediación:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.pasivos.pasivos_de_intermediacion"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">
                Prestamos del Banco central de la República de El Salvador:
              </div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.pasivos.prestamos_del_banco"
                  class="inp"
                  type="text"
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
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Otros pasivos:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.pasivos.otros_pasivos"
                  type="text"
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
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Total pasivos:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.total_pasivos"
                  type="text"
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
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Total patrimonio:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.total_patrimonio"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-7 row-item">Total pasivos y patrimonio:</div>
              <div class="col row-item2">
                <b-form-input
                  class="inp"
                  v-model="doc.total_pasivos_patrimonio"
                  type="text"
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
      let year = new Date().getFullYear();
      let copiaBalance = { ...this.doc };

      let totales = {
        activos: 0,
        pasivos: 0,
        patrimonio: 0,
        activos_de_intermediacion: 0,
        pasivos_de_intermediacion: 0,
        otros_pasivos: 0,
        otros_activos: 0,
        activos_fijo: 0,
      };

      let balance = {
        anio:
          copiaBalance.anio === ""
            ? parseInt(year)
            : parseInt(copiaBalance.anio),
        activos: {
          activos_de_intermediacion: 0,
          caja_y_bancos:
            copiaBalance.activos.caja_y_bancos === ""
              ? 0
              : parseFloat(copiaBalance.activos.caja_y_bancos),
          cartera_de_prestamos:
            copiaBalance.activos.cartera_de_prestamos === ""
              ? 0
              : parseFloat(copiaBalance.activos.cartera_de_prestamos),
          inversiones_financieras:
            copiaBalance.activos.inversiones_financieras === ""
              ? 0
              : parseFloat(copiaBalance.activos.inversiones_financieras),
          operaciones_bursatiles:
            copiaBalance.activos.operaciones_bursatiles === ""
              ? 0
              : parseFloat(copiaBalance.activos.operaciones_bursatiles),
        },
        activos_fijos: {
          bienes_inmuebles:
            copiaBalance.activos_fijos.bienes_inmuebles === ""
              ? 0
              : parseFloat(copiaBalance.activos_fijos.bienes_inmuebles),
        },
        otros_activos: {
          diversos:
            copiaBalance.otros_activos.diversos === ""
              ? 0
              : parseFloat(copiaBalance.otros_activos.diversos),
        },
        pasivos: {
          diversos:
            copiaBalance.pasivos.diversos === ""
              ? 0
              : parseFloat(copiaBalance.pasivos.diversos),
          fondos_de_administracion:
            copiaBalance.pasivos.fondos_de_administracion === ""
              ? 0
              : parseFloat(copiaBalance.pasivos.fondos_de_administracion),
          otros_pasivos: 0,
          pasivos_de_intermediacion:
            copiaBalance.pasivos.pasivos_de_intermediacion === ""
              ? 0
              : parseFloat(copiaBalance.pasivos.pasivos_de_intermediacion),
          prestamo_bancos:
            copiaBalance.pasivos.prestamo_bancos === ""
              ? 0
              : parseFloat(copiaBalance.pasivos.prestamo_bancos),
          prestamos_del_banco:
            copiaBalance.pasivos.prestamos_del_banco === ""
              ? 0
              : parseFloat(copiaBalance.pasivos.prestamos_del_banco),
          provisiones:
            copiaBalance.pasivos.provisiones === ""
              ? 0
              : parseFloat(copiaBalance.pasivos.provisiones),
          titulos_de_emision_propia:
            copiaBalance.pasivos.titulos_de_emision_propia === ""
              ? 0
              : parseFloat(copiaBalance.pasivos.titulos_de_emision_propia),
        },
        patrimonio: {
          aportes_del_estado:
            copiaBalance.patrimonio.aportes_del_estado === ""
              ? 0
              : parseFloat(copiaBalance.patrimonio.aportes_del_estado),
          reservas_del_capital:
            copiaBalance.patrimonio.reservas_del_capital === ""
              ? 0
              : parseFloat(copiaBalance.patrimonio.reservas_del_capital),
        },
        total_activos: 0,
        total_pasivos: 0,
        total_pasivos_patrimonio: 0,
        total_patrimonio: 0,
      };

      // total activo
      totales.activos =
        balance.activos.caja_y_bancos +
        balance.activos.cartera_de_prestamos +
        balance.activos.inversiones_financieras +
        balance.activos.operaciones_bursatiles +
        balance.activos_fijos.bienes_inmuebles +
        balance.otros_activos.diversos;

      // total pasivo
      totales.pasivos =
        balance.pasivos.diversos +
        balance.pasivos.fondos_de_administracion +
        balance.pasivos.prestamo_bancos +
        balance.pasivos.provisiones +
        balance.pasivos.titulos_de_emision_propia;
      balance.pasivos.prestamos_del_banco;

      // activo de intermediacion
      totales.activos_de_intermediacion =
        balance.activos.caja_y_bancos +
        balance.activos.operaciones_bursatiles +
        balance.activos.inversiones_financieras +
        balance.activos.cartera_de_prestamos;

      // pasivo de intermediacion

      totales.pasivos_de_intermediacion =
        balance.pasivos.prestamos_del_banco +
        balance.pasivos.prestamo_bancos +
        balance.pasivos.titulos_de_emision_propia;

      totales.otros_pasivos =
        balance.pasivos.fondos_de_administracion +
        balance.pasivos.provisiones +
        balance.pasivos.diversos +
        console.log(totales);

      totales.patrimonio =
        balance.patrimonio.aportes_del_estado +
        balance.patrimonio.reservas_del_capital;

      let guardo = false;
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
