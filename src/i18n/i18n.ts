import type { WritableComputedRef } from 'vue'
import { createI18n, type I18n } from 'vue-i18n'

const SUPPORT_LOCALES_NAMES = {
  en: 'English',
  fr: 'Français',
}
export const SUPPORT_LOCALES = Object.keys(SUPPORT_LOCALES_NAMES)
const DEFAULT_LOCALE = SUPPORT_LOCALES[1]

export function onI18nLocaleChanged(listener: (e: CustomEventInit<LocaleChangedEvent>) => void) {
  window.addEventListener('onI18nLocaleChanged', listener)
}

const i18n: I18n = createI18n({
  legacy: false,
  locale: getNavigatorLanguage(),
  fallbackLocale: DEFAULT_LOCALE,
})

interface LocaleChangedEvent {
  previousLocale: string
  locale: string
}

export function setI18nLocale(locale: string) {
  const localeRef = <WritableComputedRef<string, string>>i18n.global.locale
  const previousLocale = localeRef.value
  localeRef.value = locale
  document.querySelector('html')!.setAttribute('lang', locale)
  setTimeout(() => {
    window.dispatchEvent(
      new CustomEvent('onI18nLocaleChanged', {
        detail: {
          previousLocale,
          locale,
        },
      }),
    )
  })
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
