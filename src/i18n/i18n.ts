import type { WritableComputedRef } from 'vue'
import { createI18n, type I18n } from 'vue-i18n'

const SUPPORT_LOCALES_NAMES = {
  en: 'English',
  fr: 'Français',
}
export const SUPPORT_LOCALES = Object.keys(SUPPORT_LOCALES_NAMES)
const DEFAULT_LOCALE = SUPPORT_LOCALES[1]

const i18n: I18n = createI18n({
  legacy: false,
  locale: getNavigatorLanguage(),
  fallbackLocale: DEFAULT_LOCALE,
})

export function setI18nLocale(locale: string) {
  ;(<WritableComputedRef<string, string>>i18n.global.locale).value = locale
  document.querySelector('html')!.setAttribute('lang', locale)
}

export function getI18nLocale(): string {
  return (<WritableComputedRef<string, string>>i18n.global.locale).value
}

export function switchI18nLocale() {
  const currentLocale = getI18nLocale()
  const newLocale = currentLocale === SUPPORT_LOCALES[0] ? SUPPORT_LOCALES[1] : SUPPORT_LOCALES[0]
  setI18nLocale(newLocale)
}

function getNavigatorLanguage(): string {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0] // Preferred user language on recent browsers
  }
  return (
    navigator.language || // Most browsers – Language Settings
    (<any>navigator).userLanguage || // IE-Specific – Windows OS – Regional Settings
    (<any>navigator).browserLanguage || // IE-Specific – Language Settings
    (<any>navigator).systemLanguage || // IE-Specific – System Language
    DEFAULT_LOCALE // Fallback to default locale
  )
}

export default i18n
