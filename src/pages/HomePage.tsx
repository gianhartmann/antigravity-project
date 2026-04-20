import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import {
  heroContent,
  featuredProject,
  designPhilosophy,
  experienceStat,
  toolboxItems,
  trustedByLogos,
} from "@/data/mockData";

const HomePage: React.FC = () => {
  return (
    <>
      <main className="pt-28 md:pt-32 pb-20 md:pb-24">
        {/* ─── Hero Section ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-40">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="md:col-span-9">
              <span className="font-label text-xs uppercase tracking-widest text-primary font-bold mb-4 md:mb-6 block">
                {heroContent.tagline}
              </span>
              <h1 className="font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-on-surface tracking-tighter mb-6 md:mb-8">
                {heroContent.headline}{" "}
                <span className="italic font-body font-normal text-primary">
                  {heroContent.headlineAccent}
                </span>{" "}
                {heroContent.headlineSuffix}
              </h1>
            </div>
            <div className="md:col-span-3 pb-2 md:pb-4">
              <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed">
                {heroContent.description}
              </p>
            </div>
          </div>
        </section>

        {/* ─── Featured Project ─── */}
        <section className="mb-24 md:mb-40">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-surface-container-low overflow-hidden flex flex-col md:flex-row items-stretch">
              {/* Image */}
              <div className="w-full md:w-3/5 relative overflow-hidden group">
                <img
                  alt={featuredProject.imageAlt}
                  className="w-full h-[350px] sm:h-[450px] md:h-[700px] object-cover transition-transform duration-700 group-hover:scale-105"
                  src={featuredProject.image}
                />
                <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="w-full md:w-2/5 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
                <div className="flex gap-2 mb-6 md:mb-8">
                  {featuredProject.categories.map((cat) => (
                    <Badge
                      key={cat}
                      variant="secondary"
                      className="px-3 py-1 bg-surface-variant rounded-full font-label text-[10px] uppercase tracking-wider text-on-surface-variant border-none"
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>
                <h2 className="font-headline font-bold text-2xl md:text-3xl lg:text-4xl text-on-surface mb-4 md:mb-6 leading-tight">
                  {featuredProject.title}
                </h2>
                <p className="font-body text-base md:text-lg text-on-surface-variant mb-8 md:mb-12 leading-relaxed">
                  {featuredProject.description}
                </p>
                <div>
                  <Link to={`/project/${featuredProject.slug}`}>
                    <Button
                      className="bg-primary text-on-primary px-6 md:px-8 py-4 md:py-5 font-label text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-primary-dim transition-all duration-200 transform hover:scale-[1.02] h-auto"
                    >
                      {featuredProject.cta}
                      <span className="material-symbols-outlined text-sm ml-2">
                        arrow_forward
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Bento Grid: Skills & Stats ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Design Philosophy */}
            <div className="sm:col-span-2 bg-surface-container-low p-8 md:p-12 flex flex-col justify-between min-h-[280px] md:min-h-[320px]">
              <h3 className="font-headline font-bold text-xl md:text-2xl text-on-surface">
                {designPhilosophy.title}
              </h3>
              <p className="font-body text-xl md:text-2xl italic text-on-surface leading-relaxed max-w-xl my-6">
                {designPhilosophy.quote}
              </p>
              <div className="flex gap-4">
                {designPhilosophy.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="font-label text-xs uppercase font-bold text-primary"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Stat */}
            <div className="bg-primary p-8 md:p-12 flex flex-col justify-between text-on-primary min-h-[280px] md:min-h-[320px]">
              <span
                className="material-symbols-outlined text-3xl md:text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {experienceStat.icon}
              </span>
              <div>
                <div className="font-headline font-black text-5xl md:text-6xl mb-2">
                  {experienceStat.value}
                </div>
                <div className="font-label text-xs uppercase tracking-widest font-bold opacity-80">
                  {experienceStat.label}
                </div>
              </div>
            </div>

            {/* Toolbox */}
            <div className="bg-surface-container-lowest ghost-border p-8 md:p-12 flex flex-col justify-between min-h-[280px] md:min-h-[320px] ambient-shadow">
              <h3 className="font-headline font-bold text-lg md:text-xl text-on-surface">
                Toolbox
              </h3>
              <ul className="space-y-3 md:space-y-4 mt-6">
                {toolboxItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="font-label text-sm uppercase font-bold text-on-surface-variant">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trusted By */}
            <div className="sm:col-span-2 bg-surface-container-low p-8 md:p-12 flex items-center justify-center min-h-[160px]">
              <div className="text-center">
                <h3 className="font-headline font-bold text-xl md:text-2xl text-on-surface mb-4">
                  Trusted By
                </h3>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-40 grayscale">
                  {trustedByLogos.map((logo, i) => (
                    <div
                      key={logo}
                      className={`font-headline font-black text-xl md:text-2xl ${
                        i === 0
                          ? "italic"
                          : i === 2
                          ? "tracking-tighter"
                          : i === 3
                          ? "uppercase"
                          : ""
                      }`}
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Secondary CTA ─── */}
        <CTASection headline="Ready to start a conversation?" variant="buttons" />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
