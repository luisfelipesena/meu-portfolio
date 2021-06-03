import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { messages } from "./languages";

export const useI18n = () => {
  const fallbackLng =
    typeof window !== "undefined" ? localStorage.getItem("i18nextLng") : null;

  i18n.use(LanguageDetector).init({
    debug: false,
    defaultNS: "translations",
    fallbackLng: fallbackLng ? fallbackLng : "pt",
    ns: ["translations"],
    resources: messages,
  });
  return i18n;
};
