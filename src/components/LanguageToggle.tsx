import React, { useState, useRef, useEffect } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/types";

interface LanguageOption {
  code: Locale;
  label: string;
  short: string;
}

const languages: LanguageOption[] = [
  { code: "pt-BR", label: "Português", short: "PT" },
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
];

export const LanguageToggle: React.FC = () => {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (code: Locale) => {
    setLocale(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Selecionar idioma / Select language"
        className="relative flex items-center gap-1.5 px-2.5 py-1.5 h-8 md:h-9 rounded-full bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 font-label text-[11px] font-bold uppercase tracking-wider text-on-surface-variant hover:text-on-surface cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 text-on-surface-variant transition-colors" />
        <span className="text-on-surface font-extrabold">{currentLang.short}</span>
        <ChevronDown
          className={`w-3 h-3 text-on-surface-variant transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 mt-2 w-36 py-1.5 rounded-xl bg-surface-container border border-outline-variant/20 shadow-lg backdrop-blur-md z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {languages.map((lang) => {
            const isSelected = locale === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-left font-label text-xs uppercase tracking-wider transition-colors cursor-pointer hover:bg-surface-container-high ${
                  isSelected
                    ? "text-primary font-extrabold bg-surface-container-low"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                <span>{lang.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-primary" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
