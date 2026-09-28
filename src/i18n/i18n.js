import { createI18n } from '@kreisler/i18n';
import { es } from './langs/es.js';
import { en } from './langs/en.js';

export const translations = {
  es,
  en,
};

export const i18n = createI18n({
  defaultLocale: 'es',
  messages: {
    es,
    en,
  },
});

export const { getAvailableLocales, getDefaultLocale, useTranslations } = i18n;
export const defaultLang = getDefaultLocale();
export const languagesKeys = getAvailableLocales();
