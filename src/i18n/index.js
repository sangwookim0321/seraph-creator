import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import ko from './locales/ko.json'
import en from './locales/en.json'
import ja from './locales/ja.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ko: { translation: ko },
      en: { translation: en },
      ja: { translation: ja }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n 