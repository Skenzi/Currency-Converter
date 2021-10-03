import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import App from './components/App.jsx';
import store from './store/store.js';
import resources from './locales/index.js';

export default async () => {
  const i18n = i18next.createInstance();
  await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'ru',
      fallbackLng: 'ru',
      interpolation: {
        escapeValue: false,
      },
    });
  render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('container'),
  );
};
