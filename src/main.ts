import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://469b3fdbd7a74a84bb58fc6266db00a2@sentry.io/1423503",
  integrations:
    process.env.NODE_ENV === "production"
      ? [new Sentry.Integrations.Vue({ Vue })]
      : []
});

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "./registerServiceWorker";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
