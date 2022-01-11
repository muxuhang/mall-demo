import * as Localization from "expo-localization"
import i18n from "i18n-js"
import zh from "./zh.json"
import en from "./en.json"

i18n.fallbacks = true
i18n.translations = { zh, en }

i18n.locale = Localization.locale || "zh"

/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
type DefaultLocale = typeof zh
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
  ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
  : `${TKey}`
}[keyof TObj & string]
