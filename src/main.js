import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import ObserverResize from '@/components/observer-resize'
Vue.use(ObserverResize)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
