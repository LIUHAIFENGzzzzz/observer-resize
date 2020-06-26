import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// import DigitRoll from "@/components/digit-roll";
import DigitRoll from "digit-roll";
Vue.use(DigitRoll);

import ObserverResize from "@/components/observer-resize";
Vue.use(ObserverResize);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
