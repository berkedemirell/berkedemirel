import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {Analytics} from '@vercel/analytics/react'
import global_en from './translations/en/translation.json'
import global_es from './translations/es/translation.json'
import global_tr from './translations/tr/translation.json'
import global_jp from './translations/jp/translation.json'
import global_fr from './translations/fr/translation.json'
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
    tr: {
      global : global_tr,
    },
    jp : {
      global: global_jp
    },
    fr: {
      global: global_fr
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
      <Analytics/>
    </BrowserRouter>
  </React.StrictMode>
);
