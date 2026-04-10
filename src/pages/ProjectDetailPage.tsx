import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import { StatCard } from "@/components/StatCard";
import { projectDetail } from "@/data/mockData";

const ProjectDetailPage: React.FC = () => {
  const data = projectDetail;

  return (
    <>
      {/* ─── Hero Banner (Dark) ─── */}
      <section className="bg-inverse-surface text-surface-bright pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-12 md:mb-16">
            <div className="md:col-span-8">
              <Badge className="bg-primary text-on-primary font-label text-[10px] uppercase tracking-wider border-none mb-4 px-3 py-1">
                {data.label}
              </Badge>
              <h1 className="font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-surface-bright tracking-tighter leading-[1.05]">
                {data.title}
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="font-body text-lg md:text-xl text-inverse-on-surface leading-relaxed italic">
                {data.description}
              </p>
            </div>
          </div>

          {/* Metadata Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-surface-bright/10 pt-8">
            {data.metadata.map((item) => (
              <div key={item.label}>
                <span className="font-label text-[10px] uppercase tracking-widest text-inverse-on-surface/60 font-bold block mb-2">
                  {item.label}
                </span>
                <span className="font-body text-sm md:text-base text-surface-bright">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="pb-0">
        {/* ─── The Challenge ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight mb-6">
                {data.challenge.title}
              </h2>
              {data.challenge.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="relative overflow-hidden">
              <img
                src={data.challenge.image}
                alt={data.challenge.imageAlt}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ─── The Process ─── */}
        <section className="bg-surface-container-low py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-8 block">
              The Process
            </span>

            {data.process.map((step, idx) => (
              <div key={idx} className="mb-16 last:mb-0">
                <h3 className="font-headline font-bold text-xl md:text-2xl text-on-surface mb-4">
                  {step.step}
                </h3>

                {step.description && (
                  <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed mb-6 max-w-2xl">
                    {step.description}
                  </p>
                )}

                {step.quotes && (
                  <div className="grid sm:grid-cols-2 gap-4 mb-6 max-w-md">
                    {step.quotes.map((quote, qi) => (
                      <div
                        key={qi}
                        className="bg-inverse-surface text-surface-bright p-6 md:p-8 font-body text-lg italic"
                      >
                        {quote}
                      </div>
                    ))}
                  </div>
                )}

                {step.substeps && (
                  <div className="flex flex-wrap gap-4 mt-4">
                    {step.substeps.map((sub) => (
                      <span
                        key={sub}
                        className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                )}

                {step.images && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    {step.images.map((img, ii) => (
                      <div key={ii} className="overflow-hidden">
                        <img
                          src={img}
                          alt={`Wireframe ${ii + 1}`}
                          className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── The Solution ─── */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-12">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-on-surface tracking-tight mb-4">
              {data.solution.title}
            </h2>
            <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              {data.solution.description}
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="ambient-shadow overflow-hidden">
              <img
                src={data.solution.image}
                alt={data.solution.imageAlt}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ─── Design Details ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {data.designDetails.map((detail) => (
              <div key={detail.title} className="group">
                <div className="overflow-hidden mb-4">
                  <img
                    src={detail.image}
                    alt={detail.title}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-headline font-bold text-lg md:text-xl text-on-surface mb-2">
                  {detail.title}
                </h3>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Impact & Outcomes ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
            <div className="md:col-span-4">
              <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight leading-tight">
                Impact &<br />
                Outcomes
              </h2>
              <p className="font-body text-base text-on-surface-variant leading-relaxed mt-4">
                The redesign led to a significant increase in engagement metrics
                and content satisfaction.
              </p>
            </div>
            <div className="md:col-span-8 grid grid-cols-2 gap-4 md:gap-6">
              {data.outcomes.map((outcome) => (
                <StatCard
                  key={outcome.label}
                  value={outcome.value}
                  label={outcome.label}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Next Project CTA ─── */}
        <section className="border-t border-outline-variant/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4 block">
              {data.nextProject.label}
            </span>
            <Link
              to={`/project/${data.nextProject.slug}`}
              className="font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-on-surface tracking-tighter hover:text-primary transition-colors inline-flex items-center gap-4"
            >
              {data.nextProject.title}
              <span className="text-3xl md:text-5xl">→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetailPage;
