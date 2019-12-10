import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

let translationEN = require('./locales/en/translation.js');
let translationDE = require('./locales/de/translation.js');

const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

i18n
  .use(reactI18nextModule)
  .init({
    resources,
    lng: "en",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;