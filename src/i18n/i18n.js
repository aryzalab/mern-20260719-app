import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import frTranslation from "./locales/fr/translation.json";
import neTranslation from "./locales/ne/translation.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  ne: {
    translation: neTranslation,
  },
  fr: {
    translation: frTranslation,
  },
};

if (!i18n.isInitialized) {
  i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      fallbackLng: "en",
      supportedLngs: ["en", "ne", "fr"],
      debug: true,
      resources,

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    });
}

export default i18n;
