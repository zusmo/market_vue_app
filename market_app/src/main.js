import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

Vue.config.productionTip = false;


/*router.beforeEach((to, from, next) => {
  const isAuth = store.getters.isAuthenticated;

  if(!isAuth && typeof to.meta.requiresAuth != "undefined" && to.name != "login") {
    next({
      name: "login",
    });
  } else {
    next();
  }
});*/


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
