import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { ProcessChip } from "@/components/ProcessChip";
import { useContactForm } from "@/hooks/useContactForm";
import { useLanguage } from "@/i18n/LanguageContext";
import { aboutHero, contactContent } from "@/data/mockData";

const AboutPage: React.FC = () => {
  const { form, updateField, handleSubmit, submitted } = useContactForm();
  const location = useLocation();
  const { t } = useLanguage();

  // Scroll to contact section if hash is #contact
  useEffect(() => {
    if (location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <main className="pt-28 md:pt-32">
        {/* ─── Hero & Bio Section (Exact Stitch Design) ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Sticky Headline/Title */}
            <div className="md:col-span-4 md:sticky md:top-32">
              <h1 className="font-headline font-extrabold text-5xl md:text-6xl tracking-tighter text-on-surface leading-none mb-8">
                {t.about.headline}
              </h1>
              <div className="flex items-center gap-4 group">
                <div className="h-[1px] w-12 bg-outline-variant group-hover:w-16 transition-all duration-500" />
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                  {t.about.subtitle}
                </span>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-8 flex flex-col gap-16 md:gap-24">
              {/* Headshot & Intro */}
              <div className="relative group">
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low shadow-sm">
                  <img
                    alt={aboutHero.portraitAlt}
                    src={aboutHero.portrait}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                </div>
                <div className="mt-8 md:mt-12 max-w-xl">
                  <p className="text-2xl md:text-3xl font-body italic leading-relaxed text-on-surface">
                    {t.about.quote}
                  </p>
                </div>
              </div>

              {/* Narrative Bio Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div className="space-y-4 md:space-y-6">
                  <h3 className="font-headline font-bold text-lg uppercase tracking-tight text-on-surface">
                    {t.about.approachTitle}
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed text-on-surface-variant font-body">
                    {t.about.approachBody}
                  </p>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <h3 className="font-headline font-bold text-lg uppercase tracking-tight text-on-surface">
                    {t.about.backgroundTitle}
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed text-on-surface-variant font-body">
                    {t.about.backgroundBody}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Process Chips / Expertise Area (Bento-lite) ─── */}
        <section className="w-full bg-surface-container-low py-20 md:py-32 mb-24 md:mb-40 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
              <h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tighter text-on-surface max-w-md leading-tight">
                {t.about.capabilitiesHeadline}
              </h2>
              <span className="font-label text-xs uppercase tracking-widest text-outline font-bold">
                {t.about.capabilitiesLabel}
              </span>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {t.about.capabilities.map((cap) => (
                <ProcessChip key={cap} label={cap} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Contact Section (Exact Stitch Design) ─── */}
        <section
          id="contact"
          className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-40"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            {/* Left: Info */}
            <div className="md:col-span-5 space-y-8 md:space-y-12">
              <h2 className="font-headline font-extrabold text-5xl md:text-6xl tracking-tighter text-on-surface leading-none">
                {t.about.contactHeadline}
              </h2>
              <p className="text-xl md:text-2xl font-body italic text-on-surface-variant max-w-sm leading-relaxed">
                {t.about.contactDescription}
              </p>
              <div className="space-y-6 pt-4 md:pt-8">
                <div className="flex items-center gap-4">
                  <span className="font-headline font-bold text-xs uppercase tracking-widest text-outline">
                    {t.about.socialsLabel}
                  </span>
                  <div className="h-[1px] flex-grow bg-outline-variant/30" />
                </div>
                <div className="flex gap-6 md:gap-8">
                  {contactContent.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="font-headline font-bold text-sm uppercase tracking-tight text-primary hover:opacity-70 transition-opacity"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form Card */}
            <div className="md:col-span-7 bg-surface-container-lowest p-8 md:p-16 rounded-xl ambient-shadow border border-outline-variant/10">
              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="relative group">
                    <label
                      htmlFor="name"
                      className="font-headline font-bold text-[10px] uppercase tracking-[0.2em] text-outline mb-2 block"
                    >
                      {t.about.formName}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder={t.about.formNamePlaceholder}
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 font-body text-lg md:text-xl text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline-variant/50"
                    />
                  </div>
                  <div className="relative group">
                    <label
                      htmlFor="email"
                      className="font-headline font-bold text-[10px] uppercase tracking-[0.2em] text-outline mb-2 block"
                    >
                      {t.about.formEmail}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder={t.about.formEmailPlaceholder}
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 font-body text-lg md:text-xl text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline-variant/50"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label
                    htmlFor="message"
                    className="font-headline font-bold text-[10px] uppercase tracking-[0.2em] text-outline mb-2 block"
                  >
                    {t.about.formMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder={t.about.formMessagePlaceholder}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 font-body text-lg md:text-xl text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline-variant/50 resize-none"
                  />
                </div>

                <div className="flex justify-start">
                  <button
                    type="submit"
                    disabled={submitted}
                    className="group relative inline-flex items-center gap-4 bg-primary text-on-primary px-10 py-5 rounded-md font-label font-bold text-xs uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 cursor-pointer"
                  >
                    <span className="relative z-10">
                      {submitted ? t.about.formSent : t.about.formSubmit}
                    </span>
                    {!submitted && (
                      <span className="material-symbols-outlined relative z-10 text-lg transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
