import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVfm } from "vue-final-modal";
import i18n from "./i18n";
import App from "./App.vue";
import router from "./router";
import "vue-final-modal/style.css";
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";

const pinia = createPinia();
const vfm = createVfm();

createApp(App)
	.use(pinia)
	.use(router)
	.use(i18n)
	.use(FloatingVue)
	.use(vfm)
	.mount("#app");
