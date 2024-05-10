import polyglotI18nProvider from "ra-i18n-polyglot";

import enMessages from "ra-language-english";
import uaMessages from "ra-language-ukrainian";

import { TranslationMessages } from "react-admin";

export const en: TranslationMessages = {
  ...enMessages,
  resources: {
    menu: {
      name: "Element of menu |||| Menu",
      create: "Add menu element",
      fields: {
        title: "Title",
        ingredients: "Ingredients",
        price: "Price",
        weight: "Weight",
        image: "Image",
      },
    },
  },
  root: {
    searchByName: "Search by title",
  },
};

export const ua: TranslationMessages = {
  ...uaMessages,
  resources: {
    menu: {
      name: "Елемент меню |||| Меню",
      fields: {
        title: "Назва",
        ingredients: "Інгрідієнти",
        price: "Ціна",
        weight: "Вага",
        image: "Зображення",
      },
    },
  },
  root: {
    searchByName: "Пошук за назвою",
  },
};

const translations: Record<string, TranslationMessages> = { en, ua };

export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  "ua", // default locale
  [
    { locale: "en", name: "English" },
    { locale: "ua", name: "Українська" },
  ]
);
