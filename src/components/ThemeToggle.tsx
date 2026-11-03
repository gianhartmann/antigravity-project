import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/theme/ThemeContext";
import { useLanguage } from "@/i18n/LanguageContext";

interface ThemeToggleProps {
  readonly className?: string;
}

export const ThemeToggle: React.FC<Readonly<ThemeToggleProps>> = ({
  className = "",
}) => {
  const { resolvedTheme, toggleTheme } = useTheme();
  const { locale } = useLanguage();

  const isDark = resolvedTheme === "dark";

  const label =
    locale === "pt-BR"
      ? isDark
        ? "Mudar para modo claro"
        : "Mudar para modo escuro"
      : locale === "es"
      ? isDark
        ? "Cambiar a modo claro"
        : "Cambiar a modo oscuro"
      : isDark
      ? "Switch to light mode"
      : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 group cursor-pointer ${className}`}
      aria-label={label}
      title={label}
    >
      <div className="relative w-4 h-4 md:w-[18px] md:h-[18px] flex items-center justify-center">
        {/* Sun Icon (Visible in Dark Mode) */}
        <Sun
          className={`w-full h-full text-amber-400 dark:text-amber-300 transition-all duration-300 transform ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
          aria-hidden="true"
        />
        {/* Moon Icon (Visible in Light Mode) */}
        <Moon
          className={`absolute w-full h-full text-on-surface transition-all duration-300 transform ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
          aria-hidden="true"
        />
      </div>
      <span className="sr-only">{label}</span>
    </button>
  );
};

export default ThemeToggle;
