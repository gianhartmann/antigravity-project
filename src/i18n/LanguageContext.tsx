import React, { createContext, useContext, useState, useCallback } from "react";
import type { Locale, Translations } from "./types";
import { en } from "./en";
import { ptBR } from "./pt-br";

const translationsMap: Record<Locale, Translations> = {
  en,
  "pt-BR": ptBR,
};

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-locale") as Locale | null;
      if (saved && translationsMap[saved]) return saved;
    }
    return "en";
  });

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("portfolio-locale", newLocale);
    document.documentElement.lang = newLocale === "pt-BR" ? "pt-BR" : "en";
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "pt-BR" : "en");
  }, [locale, setLocale]);

  const t = translationsMap[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
