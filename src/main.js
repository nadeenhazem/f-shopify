import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
createApp(App)
  .use(bootstrap)

  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
