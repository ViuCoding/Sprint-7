//BOOTSTRAP
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";


import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";


// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

createApp(App).use(router).component("fa", FontAwesomeIcon).mount("#app");
