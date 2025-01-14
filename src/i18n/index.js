import { createI18n } from "vue-i18n";
import uaLoacale from "./locales/ua";
import ruLoacale from "./locales/ru";
import enLoacale from "./locales/en";

const messages = {
	en: enLoacale,
	ru: ruLoacale,
	ua: uaLoacale,
};

const i18n = createI18n({
	locale: "ru",
	fallbackLocale: "en",
	messages,
});

export default i18n;
