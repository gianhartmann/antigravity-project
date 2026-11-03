import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  caseStudies,
  featuredCaseStudy,
  contactContent,
} from "@/data/mockData";

const WorkPage: React.FC = () => {
  const { t, locale } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactContent.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyLabel =
    locale === "pt-BR"
      ? copied ? "Email copiado!" : "Copiar email"
      : locale === "es"
      ? copied ? "¡Correo copiado!" : "Copiar correo"
      : copied ? "Email copied!" : "Copy email";

  // Build localized case studies using translations for descriptions/categories
  const localizedCaseStudies = caseStudies.map((cs, i) => {
    const descriptions = [t.work.luminaDesc, t.work.nexusCrmDesc, t.work.coreSystemDesc, t.work.auraHealthDesc];
    const categoryMap: Record<string, string> = {
      "Mobile App": t.work.mobileApp,
      "Web Platform": t.work.webPlatform,
      "Research": t.work.research,
    };
    return {
      ...cs,
      description: descriptions[i] ?? cs.description,
      categories: cs.categories.map((c) => categoryMap[c] ?? c),
    };
  });

  return (
    <>
      <main className="pt-28 md:pt-32 pb-20 md:pb-24">
        {/* ─── Page Header ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
          <h1 className="font-headline font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-on-surface tracking-tighter leading-[1.05] mb-4">
            {t.work.selected}{" "}
            <span className="italic font-body font-normal text-primary">
              {t.work.caseStudies}
            </span>
            <br />
            {t.work.yearRange}
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-lg mt-4">
            {t.work.description}
          </p>
        </section>

        {/* ─── Case Studies Grid ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
          {/* Row 1: Large + Medium */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="md:col-span-7">
              <ProjectCard project={localizedCaseStudies[0]} />
            </div>
            <div className="md:col-span-5">
              <ProjectCard project={localizedCaseStudies[1]} />
            </div>
          </div>

          {/* Row 2: Two equal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <ProjectCard project={localizedCaseStudies[2]} />
            <ProjectCard project={localizedCaseStudies[3]} />
          </div>
        </section>

        {/* ─── Featured Project Banner ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-32">
          <div className="bg-surface-container-low p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Content */}
              <div>
                <Badge className="bg-primary text-on-primary font-label text-[10px] uppercase tracking-wider border-none mb-6 px-3 py-1">
                  {t.work.featuredLabel}
                </Badge>
                <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface mb-4 tracking-tight leading-tight">
                  {t.work.featuredTitle}
                </h2>
                <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed mb-8">
                  {t.work.featuredDescription}
                </p>
                <Link to={`/project/${featuredCaseStudy.slug}`}>
                  <Button
                    className="bg-primary text-on-primary px-6 md:px-8 py-4 font-label text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-primary-dim transition-all duration-200 transform hover:scale-[1.02] h-auto"
                  >
                    {t.work.featuredCta}
                  </Button>
                </Link>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden group">
                <img
                  src={featuredCaseStudy.image}
                  alt={featuredCaseStudy.imageAlt}
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-20 text-center">
          <h2 className="font-body text-3xl md:text-4xl lg:text-5xl italic text-on-surface mb-6 text-balance">
            {t.work.workCtaHeadline}{" "}
            <span className="underline underline-offset-4 decoration-2">
              {t.work.workCtaMeaningful}
            </span>{" "}
            {t.work.workCtaTogether}
          </h2>
          <div className="inline-flex items-center justify-center gap-3">
            <a
              href={`mailto:${contactContent.email}`}
              className="font-headline font-bold text-lg md:text-xl text-on-surface underline underline-offset-4 decoration-2 hover:text-primary transition-colors"
            >
              {contactContent.email}
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
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WorkPage;
