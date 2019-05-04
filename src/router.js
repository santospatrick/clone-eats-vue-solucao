import Vue from "vue";
import Router from "vue-router";
import Home from "@/routes/Home.vue";
import Cart from "@/routes/Cart.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/:id",
      name: "place",
      component: () =>
        import(/* webpackChunkName: "place" */ "@/routes/Place.vue")
    }
  ]
});
