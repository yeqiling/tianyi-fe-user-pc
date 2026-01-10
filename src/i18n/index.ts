import zhCN from './locales/zh-CN'
import enUS from './locales/en-US'

export const messages = {
  'zh-CN': zhCN,
  'en-US': enUS
}

export const defaultLocale = 'zh-CN'

export function getI18nText(key: string, locale: string = defaultLocale) {
  const keys = key.split('.')
  let text: any = messages[locale as keyof typeof messages]
  
  for (const k of keys) {
    text = text?.[k]
  }
  
  return text || key
}

export const useI18n = (locale: string = defaultLocale) => {
  return {
    t: (key: string) => getI18nText(key, locale)
  }
}
