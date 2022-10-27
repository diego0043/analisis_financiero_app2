import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@lottiefiles/lottie-player";
import { firestorePlugin } from 'vuefire'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import money from "@titou10/v-money";

Vue.use(money, { precision: 4 });
Vue.use(VueSweetalert2);
Vue.use(firestorePlugin)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
