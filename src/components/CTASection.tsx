import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
              Get In Touch
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="ghost-border bg-transparent text-on-surface px-8 md:px-10 py-5 md:py-6 font-label text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-surface-container-low transition-all h-auto border-none"
          >
            Download CV
          </Button>
        </div>
      )}

      {variant === "email" && email && (
        <a
          href={`mailto:${email}`}
          className="font-headline font-bold text-lg md:text-xl text-on-surface underline underline-offset-4 decoration-2 hover:text-primary transition-colors"
        >
          {email}
        </a>
      )}
    </section>
  );
};

export default CTASection;
