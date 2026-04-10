import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import {
  caseStudies,
  featuredCaseStudy,
  contactContent,
} from "@/data/mockData";

const WorkPage: React.FC = () => {
  return (
    <>
      <main className="pt-28 md:pt-32 pb-20 md:pb-24">
        {/* ─── Page Header ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
          <h1 className="font-headline font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-on-surface tracking-tighter leading-[1.05] mb-4">
            Selected{" "}
            <span className="italic font-body font-normal text-primary">
              Case Studies
            </span>
            <br />
            2022—2024
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-lg mt-4">
            A collection of digital experiences centered on intentionality,
            systemic thinking, and the pursuit of visual excellence.
          </p>
        </section>

        {/* ─── Case Studies Grid ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
          {/* Row 1: Large + Medium */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="md:col-span-7">
              <ProjectCard project={caseStudies[0]} />
            </div>
            <div className="md:col-span-5">
              <ProjectCard project={caseStudies[1]} />
            </div>
          </div>

          {/* Row 2: Two equal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <ProjectCard project={caseStudies[2]} />
            <ProjectCard project={caseStudies[3]} />
          </div>
        </section>

        {/* ─── Featured Project Banner ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-32">
          <div className="bg-surface-container-low p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Content */}
              <div>
                <Badge className="bg-primary text-on-primary font-label text-[10px] uppercase tracking-wider border-none mb-6 px-3 py-1">
                  {featuredCaseStudy.label}
                </Badge>
                <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface mb-4 tracking-tight leading-tight">
                  {featuredCaseStudy.title}
                </h2>
                <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed mb-8">
                  {featuredCaseStudy.description}
                </p>
                <Button
                  asChild
                  className="bg-primary text-on-primary px-6 md:px-8 py-4 font-label text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-primary-dim transition-all duration-200 transform hover:scale-[1.02] h-auto"
                >
                  <Link to={`/project/${featuredCaseStudy.slug}`}>
                    {featuredCaseStudy.cta}
                  </Link>
                </Button>
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
            Let's build something{" "}
            <span className="underline underline-offset-4 decoration-2">
              meaningful
            </span>{" "}
            together.
          </h2>
          <a
            href={`mailto:${contactContent.email}`}
            className="font-headline font-bold text-lg md:text-xl text-on-surface underline underline-offset-4 decoration-2 hover:text-primary transition-colors"
          >
            {contactContent.email}
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WorkPage;
