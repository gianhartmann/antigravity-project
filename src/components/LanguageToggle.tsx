import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export const LanguageToggle: React.FC = () => {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 font-label text-[11px] font-bold uppercase tracking-wider text-on-surface-variant hover:text-on-surface group"
      aria-label={locale === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
      title={locale === "en" ? "Português" : "English"}
    >
      <span
        className={`transition-all duration-200 ${
          locale === "en"
            ? "text-on-surface font-extrabold"
            : "opacity-50"
        }`}
      >
        EN
      </span>
      <span className="w-px h-3 bg-outline-variant" />
      <span
        className={`transition-all duration-200 ${
          locale === "pt-BR"
            ? "text-on-surface font-extrabold"
            : "opacity-50"
        }`}
      >
        PT
      </span>
    </button>
  );
};
