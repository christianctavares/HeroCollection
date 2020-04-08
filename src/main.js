import Vue from "vue";
import App from "./App.vue";
import router from './router';
import store from "./store";


//Filtros

Vue.filter('to-uppercase', function(value){
  return value.toUpperCase()
})


new Vue({
  store,
  render: h => h(App),
  router: router,
}).$mount("#app");
