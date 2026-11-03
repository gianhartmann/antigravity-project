import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

interface CTASectionProps {
  readonly headline: string;
  readonly variant?: "buttons" | "email";
  readonly email?: string;
  readonly className?: string;
}

export const CTASection: React.FC<Readonly<CTASectionProps>> = ({
  headline,
  variant = "buttons",
  email,
  className = "",
}) => {
  const { t, locale } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (!email) return;
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyLabel =
    locale === "pt-BR"
      ? copied ? "Email copiado!" : "Copiar email"
      : locale === "es"
      ? copied ? "¡Correo copiado!" : "Copiar correo"
      : copied ? "Email copied!" : "Copy email";

  return (
    <section className={`max-w-7xl mx-auto px-6 md:px-8 mb-20 text-center ${className}`}>
      <h2 className="font-body text-3xl md:text-4xl italic text-on-surface mb-8 text-balance">
        {headline}
      </h2>

      {variant === "buttons" && (
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link to="/about#contact">
            <Button
              size="lg"
              className="bg-on-surface text-surface px-8 md:px-10 py-5 md:py-6 font-label text-xs font-bold uppercase tracking-widest rounded-lg hover:opacity-90 transition-all h-auto"
            >
              {t.cta.getInTouch}
            </Button>
          </Link>
          <a
            href="/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="ghost-border bg-transparent text-on-surface px-8 md:px-10 py-5 md:py-6 font-label text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-surface-container-low transition-all h-auto border-none cursor-pointer"
            >
              {t.cta.downloadCV}
            </Button>
          </a>
        </div>
      )}

      {variant === "email" && email && (
        <div className="inline-flex items-center justify-center gap-3">
          <a
            href={`mailto:${email}`}
            className="font-headline font-bold text-lg md:text-xl text-on-surface underline underline-offset-4 decoration-2 hover:text-primary transition-colors"
          >
            {email}
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label={copyLabel}
            title={copyLabel}
            className="relative inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            {copied ? (
              <Check className="w-4 h-4 text-primary transition-all duration-200 scale-110" />
            ) : (
              <Copy className="w-4 h-4 text-on-surface-variant transition-all duration-200" />
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default CTASection;
