import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: process.env.VUE_APP_SENTRY_DNS,
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
