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
    path: "/balance",
    name: "balance",
    component: () => import("../views/BalanceView.vue"),
  },
  {
    path: "/nuevo_balance",
    name: "n_balance",
    component: () => import("../views/AddBalanceView.vue"),
  },
  {
    path: "/estado",
    name: "estado",
    component: () => import("../views/EstadoView.vue"),
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
