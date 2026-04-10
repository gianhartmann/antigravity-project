import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/Footer";
import { ProcessChip } from "@/components/ProcessChip";
import { useContactForm } from "@/hooks/useContactForm";
import {
  aboutHero,
  aboutQuote,
  aboutSections,
  capabilities,
  contactContent,
} from "@/data/mockData";

const AboutPage: React.FC = () => {
  const { form, updateField, handleSubmit, submitted } = useContactForm();
  const location = useLocation();

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
      <main className="pt-28 md:pt-32 pb-20 md:pb-24">
        {/* ─── Hero Split ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Text */}
            <div className="md:col-span-4 lg:col-span-3">
              <h1 className="font-headline font-extrabold text-5xl sm:text-6xl md:text-7xl text-on-surface tracking-tighter leading-[1.05] mb-4 italic">
                {aboutHero.headline}
              </h1>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-8 h-[2px] bg-on-surface-variant" />
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                  {aboutHero.subtitle}
                </span>
              </div>
            </div>

            {/* Portrait */}
            <div className="md:col-span-8 lg:col-span-9">
              <div className="relative overflow-hidden">
                <img
                  src={aboutHero.portrait}
                  alt={aboutHero.portraitAlt}
                  className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Quote Block ─── */}
        <section className="max-w-4xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
          <blockquote className="font-body text-xl sm:text-2xl md:text-3xl italic text-on-surface leading-relaxed">
            {aboutQuote}
          </blockquote>
        </section>

        {/* ─── Two-Column Philosophy ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-32">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
            {aboutSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface mb-4">
                  {section.title}
                </h3>
                <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Capabilities ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-32 bg-surface-container-low py-16 md:py-20 -mx-6 md:-mx-8 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
              <h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight max-w-sm">
                Equipped with a diverse toolkit.
              </h2>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                Capabilities 2024
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {capabilities.map((cap) => (
                <ProcessChip key={cap} label={cap} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Contact Section ─── */}
        <section
          id="contact"
          className="max-w-7xl mx-auto px-6 md:px-8 mb-20 scroll-mt-32"
        >
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            {/* Left: Info */}
            <div>
              <h2 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-on-surface tracking-tight leading-[1.05] mb-6">
                {contactContent.headline}
              </h2>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed italic mb-8 md:mb-12 max-w-sm">
                {contactContent.description}
              </p>

              <div className="border-t border-outline-variant/20 pt-6">
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4 block">
                  Socials
                </span>
                <div className="flex gap-6">
                  {contactContent.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="font-label text-xs uppercase font-bold text-primary hover:text-primary-dim transition-colors"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="font-label text-xs uppercase tracking-widest font-bold text-on-surface"
                    >
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="bg-transparent border-0 border-b-2 border-outline-variant/30 rounded-none px-0 py-3 font-body text-lg italic placeholder:text-on-surface-variant/40 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="font-label text-xs uppercase tracking-widest font-bold text-on-surface"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="hello@domain.com"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="bg-transparent border-0 border-b-2 border-outline-variant/30 rounded-none px-0 py-3 font-body text-lg italic placeholder:text-on-surface-variant/40 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="font-label text-xs uppercase tracking-widest font-bold text-on-surface"
                  >
                    The Project Details
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your vision..."
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    rows={4}
                    className="bg-transparent border-0 border-b-2 border-outline-variant/30 rounded-none px-0 py-3 font-body text-lg italic placeholder:text-on-surface-variant/40 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitted}
                  className="bg-primary text-on-primary px-8 py-5 font-label text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-primary-dim transition-all duration-200 transform hover:scale-[1.02] h-auto"
                >
                  {submitted ? "Sent!" : "Send Message"}
                  {!submitted && (
                    <span className="material-symbols-outlined text-sm ml-2">
                      arrow_forward
                    </span>
                  )}
                </Button>
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
