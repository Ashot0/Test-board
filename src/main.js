import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./i18n";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

createApp(App).use(pinia).use(router).use(i18n).mount("#app");
