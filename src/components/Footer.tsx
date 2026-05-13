import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { footerContent } from "@/data/mockData";

interface FooterProps {
  readonly className?: string;
  readonly variant?: "light" | "dark";
}

export const Footer: React.FC<Readonly<FooterProps>> = ({
  className = "",
  variant = "light",
}) => {
  const isDark = variant === "dark";
  const { t } = useLanguage();

  return (
    <footer
      className={`w-full py-16 md:py-20 px-6 md:px-8 border-t border-outline-variant/10 ${
        isDark ? "bg-inverse-surface text-inverse-on-surface" : "bg-surface"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <Link
            to="/"
            className={`font-headline font-bold ${
              isDark ? "text-surface-dim" : "text-on-surface"
            } hover:opacity-80 transition-opacity`}
          >
            {t.footer.brand}
          </Link>
          <span className="font-body italic text-base md:text-lg text-on-surface-variant">
            {t.footer.copyright}
          </span>
        </div>

        <div className="flex gap-8 md:gap-12">
          {footerContent.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={`font-body italic text-base md:text-lg transition-colors ${
                isDark
                  ? "text-surface-dim hover:text-inverse-primary"
                  : "text-on-surface hover:text-primary"
              }`}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
