export type Locale = "en" | "pt-BR";

export interface Translations {
  // Nav
  nav: {
    work: string;
    about: string;
    contact: string;
    resume: string;
  };
  // Hero
  hero: {
    tagline: string;
    headline: string;
    headlineAccent: string;
    headlineSuffix: string;
    description: string;
  };
  // Featured Project
  featured: {
    title: string;
    description: string;
    categories: string[];
    cta: string;
  };
  // Bento
  bento: {
    philosophyTitle: string;
    philosophyQuote: string;
    keywords: string[];
    experienceLabel: string;
    toolboxTitle: string;
    toolboxItems: string[];
    trustedBy: string;
  };
  // CTA
  cta: {
    headline: string;
    getInTouch: string;
    downloadCV: string;
  };
  // Work Page
  work: {
    selected: string;
    caseStudies: string;
    yearRange: string;
    description: string;
    caseStudyLabel: string;
    featuredLabel: string;
    featuredTitle: string;
    featuredDescription: string;
    featuredCta: string;
    workCtaHeadline: string;
    workCtaMeaningful: string;
    workCtaTogether: string;
    // Case study descriptions
    luminaDesc: string;
    nexusCrmDesc: string;
    coreSystemDesc: string;
    auraHealthDesc: string;
    // Categories
    mobileApp: string;
    webPlatform: string;
    research: string;
  };
  // About Page
  about: {
    headline: string;
    subtitle: string;
    quote: string;
    approachTitle: string;
    approachBody: string;
    backgroundTitle: string;
    backgroundBody: string;
    capabilitiesHeadline: string;
    capabilitiesLabel: string;
    capabilities: string[];
    contactHeadline: string;
    contactDescription: string;
    socialsLabel: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formSent: string;
  };
  // Project Detail
  detail: {
    label: string;
    title: string;
    description: string;
    metaRole: string;
    metaRoleValue: string;
    metaTimeline: string;
    metaTimelineValue: string;
    metaTools: string;
    metaToolsValue: string;
    metaFocus: string;
    metaFocusValue: string;
    challengeTitle: string;
    challengeP1: string;
    challengeP2: string;
    processLabel: string;
    step1Title: string;
    step1Desc: string;
    step1Quote1: string;
    step1Quote2: string;
    step2Title: string;
    solutionTitle: string;
    solutionDesc: string;
    tactileTitle: string;
    tactileDesc: string;
    semanticTitle: string;
    semanticDesc: string;
    impactTitle: string;
    impactDesc: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    stat4Label: string;
    nextProjectLabel: string;
    nextProjectTitle: string;
  };
  // Footer
  footer: {
    brand: string;
    copyright: string;
  };
}
