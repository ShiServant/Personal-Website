import type { Locale } from "@/i18n/config";

/** 中英文成对文案 */
export type LocalizedString = {
  zh: string;
  en: string;
};

export function t(value: LocalizedString, locale: Locale): string {
  return value[locale] || value.zh;
}

export function tList(values: LocalizedString[], locale: Locale): string[] {
  return values.map((value) => t(value, locale));
}
