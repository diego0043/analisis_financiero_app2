import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/balance_general",
    name: "balance",
    component: () => import("../views/BalanceView.vue"),
  },
  {
    path: "/nuevo_balance",
    name: "n_balance",
    component: () => import("../views/AddBalanceView.vue"),
  },
  {
    path: "/editar_balance",
    name: "e_balance",
    component: () => import("../views/EditBalanceView.vue"),
  },
  {
    path: "/editar_estado",
    name: "e_estado",
    component: () => import("../views/EditEstadoView.vue"),
  },
  {
    path: "/estado_resultados",
    name: "estado",
    component: () => import("../views/EstadoView.vue"),
  },
  {
    path: "/nuevo_estado",
    name: "n_estado",
    component: () => import("../views/AddEstadoView.vue"),
  },
  {
    path: "/indicadores",
    name: "indicadores",
    component: () => import("../views/IndicadoresView.vue"),
  },  
  {
    path: "/vertical",
    name: "vertical",
    component: () => import("../views/VerticalView.vue"),
  },
  {
    path: "/horizontal",
    name: "horizontal",
    component: () => import("../views/HorizontalView.vue"),
  },
  {
    path: "/dupont",
    name: "dupont",
    component: () => import("../views/DupontView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
