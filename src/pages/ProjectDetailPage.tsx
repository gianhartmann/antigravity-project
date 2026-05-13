import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import { StatCard } from "@/components/StatCard";
import { useLanguage } from "@/i18n/LanguageContext";
import { projectDetail } from "@/data/mockData";

const ProjectDetailPage: React.FC = () => {
  const data = projectDetail;
  const { t } = useLanguage();

  const metadata = [
    { label: t.detail.metaRole, value: t.detail.metaRoleValue },
    { label: t.detail.metaTimeline, value: t.detail.metaTimelineValue },
    { label: t.detail.metaTools, value: t.detail.metaToolsValue },
    { label: t.detail.metaFocus, value: t.detail.metaFocusValue },
  ];

  const outcomes = [
    { value: data.outcomes[0].value, label: t.detail.stat1Label },
    { value: data.outcomes[1].value, label: t.detail.stat2Label },
    { value: data.outcomes[2].value, label: t.detail.stat3Label },
    { value: data.outcomes[3].value, label: t.detail.stat4Label },
  ];

  return (
    <>
      {/* ─── Hero Banner (Dark) ─── */}
      <section className="bg-inverse-surface text-surface-bright pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-12 md:mb-16">
            <div className="md:col-span-8">
              <Badge className="bg-primary text-on-primary font-label text-[10px] uppercase tracking-wider border-none mb-4 px-3 py-1">
                {t.detail.label}
              </Badge>
              <h1 className="font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-surface-bright tracking-tighter leading-[1.05]">
                {t.detail.title}
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="font-body text-lg md:text-xl text-inverse-on-surface leading-relaxed italic">
                {t.detail.description}
              </p>
            </div>
          </div>

          {/* Metadata Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-surface-bright/10 pt-8">
            {metadata.map((item) => (
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
                {t.detail.challengeTitle}
              </h2>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed mb-4">
                {t.detail.challengeP1}
              </p>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
                {t.detail.challengeP2}
              </p>
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
              {t.detail.processLabel}
            </span>

            {/* Step 1 */}
            <div className="mb-16">
              <h3 className="font-headline font-bold text-xl md:text-2xl text-on-surface mb-4">
                {t.detail.step1Title}
              </h3>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed mb-6 max-w-2xl">
                {t.detail.step1Desc}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6 max-w-md">
                <div className="bg-inverse-surface text-surface-bright p-6 md:p-8 font-body text-lg italic">
                  {t.detail.step1Quote1}
                </div>
                <div className="bg-inverse-surface text-surface-bright p-6 md:p-8 font-body text-lg italic">
                  {t.detail.step1Quote2}
                </div>
              </div>
              {data.process[0].substeps && (
                <div className="flex flex-wrap gap-4 mt-4">
                  {data.process[0].substeps.map((sub) => (
                    <span
                      key={sub}
                      className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="font-headline font-bold text-xl md:text-2xl text-on-surface mb-4">
                {t.detail.step2Title}
              </h3>
              {data.process[1].images && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  {data.process[1].images.map((img, ii) => (
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
          </div>
        </section>

        {/* ─── The Solution ─── */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-12">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-on-surface tracking-tight mb-4">
              {t.detail.solutionTitle}
            </h2>
            <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              {t.detail.solutionDesc}
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
            <div className="group">
              <div className="overflow-hidden mb-4">
                <img
                  src={data.designDetails[0].image}
                  alt={t.detail.tactileTitle}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-headline font-bold text-lg md:text-xl text-on-surface mb-2">
                {t.detail.tactileTitle}
              </h3>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                {t.detail.tactileDesc}
              </p>
            </div>
            <div className="group">
              <div className="overflow-hidden mb-4">
                <img
                  src={data.designDetails[1].image}
                  alt={t.detail.semanticTitle}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-headline font-bold text-lg md:text-xl text-on-surface mb-2">
                {t.detail.semanticTitle}
              </h3>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                {t.detail.semanticDesc}
              </p>
            </div>
          </div>
        </section>

        {/* ─── Impact & Outcomes ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
            <div className="md:col-span-4">
              <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight leading-tight whitespace-pre-line">
                {t.detail.impactTitle}
              </h2>
              <p className="font-body text-base text-on-surface-variant leading-relaxed mt-4">
                {t.detail.impactDesc}
              </p>
            </div>
            <div className="md:col-span-8 grid grid-cols-2 gap-4 md:gap-6">
              {outcomes.map((outcome) => (
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
              {t.detail.nextProjectLabel}
            </span>
            <Link
              to={`/project/${data.nextProject.slug}`}
              className="font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-on-surface tracking-tighter hover:text-primary transition-colors inline-flex items-center gap-4"
            >
              {t.detail.nextProjectTitle}
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
