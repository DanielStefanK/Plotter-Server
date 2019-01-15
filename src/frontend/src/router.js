import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home",
        icon: "fa-home"
      }
    },
    {
      path: "/settings",
      name: "settings",
      meta: {
        title: "Settings",
        icon: "fa-cogs"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "settings" */ "./views/Settings.vue")
    }
  ]
});
