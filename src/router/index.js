import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import cheque_staffmenu from "../views/cheque_staffmenu.vue";
import cheque_usermenu from "../views/cheque_usermenu.vue";
import cheque_approve from "../views/cheque_approve.vue";

import cheque_verify from "../views/cheque_verify.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/cheque_staffmenu",
    component: cheque_staffmenu,
  },
  {
    path: "/cheque_usermenu",
    component: cheque_usermenu,
  },
  {
    path: "/cheque_approve",
    component: cheque_approve,
  },
  {
    path: "/cheque_verify/:id",
    name: "cheque_verify",
    component: cheque_verify,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
