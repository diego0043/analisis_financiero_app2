<template>
  <div class="container-fluid">
    <div class="row p-3">
      <div class="col-12 card-principal shadow-sm">
        <div class="row">
          <div class="col-3">
            <div class="row title">Activos:</div>
            <div class="row">
              <div class="col-8 row-item">Activos de intermediación:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.activos.activos_de_intermediacion"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">Caja y bancos:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.activos.caja_y_bancos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">Inversiones financieras:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.activos.inversiones_financieras"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">Cartera de prestamos:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.activos.carteira_de_prestamos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">Operaciones bursatiles:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.activos.operaciones_bursatiles"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">Diversos (Neto):</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.otros_activos.diversos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">Bienes inmuebles y otros:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.activos_fijos.bienes_inmuebles"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">Total activos:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.total_activos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="row title">Pasivo y patrimonio :</div>
            <div class="row">
              <div class="col-8 row-item">Pasivos de intermediación:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.pasivos.pasivos_de_intermediacion"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">
                Prestamos del Banco central de la República de El Salvador:
              </div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.pasivos.prestamos_del_banco"
                  class=""
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">Prestamos de otros bancos:</div>
              <div class="col row-item2">
                <b-form-input
                  :v-model="doc.pasivos.prestamos_bancos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">Titulos de emisión propia:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.pasivos.titulos_de_emision_propia"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">Otros pasivos:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.pasivos.otros_pasivos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">Fondos de administración:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.pasivos.fondos_de_administracion"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">Provisiones:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.pasivos.provisiones"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">Diversos:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.pasivos.diversos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="row row-cont">
              <div class="col-8 row-item">Total pasivos:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.total_pasivos"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row title-patrimonio">Patrimonio:</div>
            <div class="row">
              <div class="col-8 row-item">Aportes del estado:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.patrimonio.aportes_del_estado"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">
                Reservas de capital, resultados acumulados y patrimonio ganado:
              </div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.patrimonio.reservas_del_capital"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">Total patrimonio:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.total_patrimonio"
                  type="text"
                ></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-8 row-item">Total pasivos y patrimonio:</div>
              <div class="col row-item2">
                <b-form-input
                  v-model="doc.total_pasivos_patrimonio"
                  type="text"
                ></b-form-input>
              </div>
            </div>
          </div>
          <div class="col-2">
            <div class="row title">Datos generales:</div>
            <div class="row">
              <div class="col row-item">Año:</div>
              <div class="col row-item2">
                <b-form-input v-model="doc.anio" type="text"></b-form-input>
              </div>
            </div>
            <div class="row">
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets2.lottiefiles.com/packages/lf20_GtqlRg.json"
                style="width: 450px"
                class="img"
              >
              </lottie-player>
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
          carteira_de_prestamos: "",
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
    save() {
      let year = new Date().getFullYear();
      let copiaBalance = { ...this.doc };
      let balance = {
        anio: copiaBalance.anio === "" ? year : parseInt(copiaBalance.anio),
        activos: {
          activos_de_intermediacion:
            copiaBalance.activos.activos_de_intermediacion === ""
              ? 0
              : parseInt(copiaBalance.activos.activos_de_intermediacion),
          caja_y_bancos:
            copiaBalance.activos.caja_y_bancos === ""
              ? 0
              : parseInt(copiaBalance.activos.caja_y_bancos),
          carteira_de_prestamos:
            copiaBalance.activos.carteira_de_prestamos === ""
              ? 0
              : parseInt(copiaBalance.activos.carteira_de_prestamos),
          inversiones_financieras:
            copiaBalance.activos.inversiones_financieras === ""
              ? 0
              : parseInt(copiaBalance.activos.inversiones_financieras),
          operaciones_bursatiles:
            copiaBalance.activos.operaciones_bursatiles === ""
              ? 0
              : parseInt(copiaBalance.activos.operaciones_bursatiles),
        },
        activos_fijos: {
          bienes_inmuebles:
            copiaBalance.activos_fijos.bienes_inmuebles === ""
              ? 0
              : parseInt(copiaBalance.activos_fijos.bienes_inmuebles),
        },
        otros_activos: {
          diversos:
            copiaBalance.otros_activos.diversos === ""
              ? 0
              : parseInt(copiaBalance.otros_activos.diversos),
        },
        pasivos: {
          diversos:
            copiaBalance.pasivos.diversos === ""
              ? 0
              : parseInt(copiaBalance.pasivos.diversos),
          fondos_de_administracion:
            copiaBalance.pasivos.fondos_de_administracion === ""
              ? 0
              : parseInt(copiaBalance.pasivos.fondos_de_administracion),
          otros_pasivos:
            copiaBalance.pasivos.otros_pasivos === ""
              ? 0
              : parseInt(copiaBalance.pasivos.otros_pasivos),
          pasivos_de_intermediacion:
            copiaBalance.pasivos.pasivos_de_intermediacion === ""
              ? 0
              : parseInt(copiaBalance.pasivos.pasivos_de_intermediacion),
          prestamo_bancos:
            copiaBalance.pasivos.prestamo_bancos === ""
              ? 0
              : parseInt(copiaBalance.pasivos.prestamo_bancos),
          prestamos_del_banco:
            copiaBalance.pasivos.prestamos_del_banco === ""
              ? 0
              : parseInt(copiaBalance.pasivos.prestamos_del_banco),
          provisiones:
            copiaBalance.pasivos.provisiones === ""
              ? 0
              : parseInt(copiaBalance.pasivos.provisiones),
          titulos_de_emision_propia:
            copiaBalance.pasivos.titulos_de_emision_propia === ""
              ? 0
              : parseInt(copiaBalance.pasivos.titulos_de_emision_propia),
        },
        patrimonio: {
          aportes_del_estado:
            copiaBalance.patrimonio.aportes_del_estado === ""
              ? 0
              : parseInt(copiaBalance.patrimonio.aportes_del_estado),
          reservas_del_capital:
            copiaBalance.patrimonio.reservas_del_capital === ""
              ? 0
              : parseInt(copiaBalance.patrimonio.reservas_del_capital),
        },
        total_activos:
          copiaBalance.total_activos === ""
            ? 0
            : parseInt(copiaBalance.total_activos),
        total_pasivos:
          copiaBalance.total_pasivos === ""
            ? 0
            : parseInt(copiaBalance.total_pasivos),
        total_pasivos_patrimonio:
          copiaBalance.total_pasivos_patrimonio === ""
            ? 0
            : parseInt(copiaBalance.total_pasivos_patrimonio),
        total_patrimonio:
          copiaBalance.total_patrimonio === ""
            ? 0
            : parseInt(copiaBalance.total_patrimonio),
      };

      let guardo = this.setBalanceGeneral(balance);
      console.log(guardo);
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
}

.row-item2 {
  margin-top: 10px;
}

.row-cont {
  margin-top: 68px;
}

.title-patrimonio {
  display: block;
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  text-align: center;
}

.btn-save {
  display: block;
  position: absolute;
  background-color: #f8f8f8;
  color: gray;
  font-weight: 500;
  width: 82%;
  height: 40px;
  border: 1px solid #d8d7d7;
  border-radius: 10px;
  margin-right: auto;
  margin-left: auto;
  bottom: -30px;
}

.btn-save:hover {
  background-color: #d8d7d7;
}

.img {
  margin-top: 35%;
}
</style>
