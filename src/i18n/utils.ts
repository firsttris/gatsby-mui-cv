import { ui, defaultLang } from './ui';
import { useLocation } from "@reach/router";

export const getLangFromUrl = () => {
  const { pathname } = useLocation();
  const lang = pathname.includes('/de') ? 'de' : 'en';
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export const useTranslations = (lang: keyof typeof ui) => {
    return (key: keyof typeof ui[typeof defaultLang]) => {
      return ui[lang][key] || ui[defaultLang][key];
    }
  }