/**
 * data.js — Single source of truth for all site content.
 * Edit this file to update publications, skills, timeline, etc.
 * No HTML changes needed.
 */

export const PROFILE = {
  name:      'Julio Esparza',
  nameShort: 'Julio\nEsparza',
  eyebrow:   'Computational Neuroscientist · Data Scientist',
  statement: `I build mathematical tools to decode how neural circuits organize
    high-dimensional information — from hippocampal manifolds to scalable AI
    infrastructure. PhD Cum Laude, Imperial College Distinction, first-author
    papers in <em>Neuron</em> and <em>PLOS Computational Biology</em>.`,
  about: {
    lead: `I work at the intersection of topology, geometry, and neural
      computation — building tools that reveal structure hidden in
      high-dimensional data.`,
    paragraphs: [
      `My research centers on how the hippocampus organizes spatial information
      across cell types. My doctoral thesis demonstrated, for the first time,
      that deep and superficial CA1 sublayers form geometrically distinct neural
      manifolds that encode space through entirely independent reference frames —
      a finding that reframes how population-level codes are interpreted.`,
      `Beyond neuroscience, I design general-purpose computational tools: the
      Structure Index (SI), a graph-based method for quantifying variable
      organization in arbitrary-dimensional spaces, has been validated across
      neural data, audio classification, and computer vision.`,
      `Currently building AI infrastructure and GenAI solutions at Deloitte,
      while staying close to the frontier questions in neural computation and
      machine intelligence.`,
    ],
    stats: [
      { number: '7',  label: 'Publications'       },
      { number: '3',  label: 'First-author'        },
      { number: '4%', label: 'INPhINIT acceptance' },
    ],
  },
  location:    'Madrid · Open to relocation · English & Spanish',
  contactText: 'Open to frontier research and engineering roles.',
  links: {
    email:   'mailto:julio.esparza@example.com',
    linkedin: 'https://linkedin.com/in/julio-esparza',
    github:  'https://github.com/julioesparza',
    scholar: 'https://scholar.google.com',
  },
};

/** @typedef {{ year: string, venue: string, primary?: boolean, title: string, authors: string, doi: string }} Paper */
export const PAPERS = [
  {
    year:    '2025',
    venue:   'Neuron',
    primary: true,
    title:   'Cell-type-specific manifold analysis discloses independent geometric transformations in the hippocampal spatial code',
    authors: '<strong>Esparza J.</strong>, Quintanilla JP., Cid E., Medeiros AC., Gallego JA., de la Prida LM.',
    doi:     'https://doi.org/10.1016/j.neuron.2025.01.024',
  },
  {
    year:    '2024',
    venue:   'PLOS Comp. Bio.',
    title:   'Quantifying the distribution of feature values over data represented in arbitrary dimensional spaces',
    authors: 'Sebastian ER.*, <strong>Esparza J.*</strong>, de la Prida LM. <em>(co-first author)</em>',
    doi:     'https://doi.org/10.1371/journal.pcbi.1011768',
  },
  {
    year:    '2023',
    venue:   'Curr. Opin. Neurobiol.',
    title:   'From cell types to population dynamics: Making hippocampal manifolds physiologically interpretable',
    authors: '<strong>Esparza J.</strong>, Sebastián ER., de la Prida LM.',
    doi:     '#',
  },
  {
    year:    '2023',
    venue:   'Nature Neuroscience',
    title:   'Topological analysis of sharp-wave ripple waveforms',
    authors: 'Sebastián ER., Quintanilla JP., Sanchez-Aguilera A., <strong>Esparza J.</strong>, et al.',
    doi:     '#',
  },
  {
    year:    '2022',
    venue:   'Nature Comm.',
    title:   'Ca²⁺-modulated photoactivatable imaging reveals neuron-astrocyte glutamatergic circuitries within the nucleus accumbens',
    authors: 'Serra I., <strong>Esparza J.</strong>, et al.',
    doi:     '#',
  },
  {
    year:    '2021',
    venue:   'Nature Neuroscience',
    title:   'GABAergic signaling to astrocytes in the prefrontal cortex sustains goal-directed behaviors',
    authors: 'Mederos S., Sánchez-Puelles C., <strong>Esparza J.</strong>, et al.',
    doi:     '#',
  },
];

/** @typedef {{ heading: string, items: string[] }} SkillGroup */
export const SKILLS = [
  {
    heading: 'ML / AI',
    items: ['Neural manifolds & TDA', 'Large language models', 'Sentence transformers', 'CNN, XGBoost, SVR', 'Reinforcement learning', 'Embeddings & RAG'],
  },
  {
    heading: 'Computational',
    items: ['Python (TF, sklearn, numpy)', 'MATLAB', 'Topological data analysis', 'Graph theory & k-NN', 'Signal processing', 'Spectral analysis'],
  },
  {
    heading: 'Infrastructure',
    items: ['Snowflake & dbt', 'PostgreSQL', 'Liquibase', 'ETL pipeline design', 'Git', 'Cloud data architectures'],
  },
  {
    heading: 'Scientific',
    items: ['In vivo electrophysiology', 'Calcium imaging', 'Computer vision', 'Biomedical imaging', 'BCI systems', 'Science communication'],
  },
];

/** @typedef {{ period: string, role: string, where: string, detail: string }} TimelineItem */
export const TIMELINE = [
  {
    period: '2025 — present',
    role:   'Data Scientist · AI Engineer',
    where:  'Deloitte España, Advanced Analytics & AI',
    detail: 'Design and implementation of scalable AI solutions: GenAI pipelines, LLM integration, ETL harmonisation across heterogeneous providers, Snowflake infrastructure.',
  },
  {
    period: '2021 — 2025',
    role:   'PhD in Computational Neuroscience — Cum Laude',
    where:  'UAM / Instituto Cajal, CSIC · Madrid',
    detail: 'INPhINIT La Caixa Fellow (4% acceptance). Developed the Structure Index, a general-purpose graph-based tool for high-dimensional feature quantification. Demonstrated geometrically distinct and functionally independent manifolds in CA1 sublayers. Research stay at Columbia University (Losonczy Lab, 2023).',
  },
  {
    period: '2020 — 2021',
    role:   'MSc Biomedical Engineering — Distinction · Top 1.8%',
    where:  'Imperial College London',
    detail: 'Stella Bagrit Centenary Prize (best MSc project, cohort-wide). Thesis: first neural manifold analysis of hippocampal spatial navigation. GPA 80.50/100.',
  },
  {
    period: '2019 — 2021',
    role:   'Research Engineer',
    where:  'Instituto Cajal, CSIC · Perea & Navarrete Lab',
    detail: 'Automated computer vision pipeline for ROI detection in calcium imaging video. Signal processing and spectral analysis of high-frequency neural data. Three Nature-family publications.',
  },
  {
    period: '2015 — 2019',
    role:   'BSc Biomedical Engineering — GPA 8.5/10',
    where:  'Universidad Carlos III de Madrid · Year abroad: UC Irvine (GPA 3.8)',
    detail: 'Specialisation in signal processing and data analysis. Honours in Calculus, Signals & Systems, Tissue Engineering. TFG at CSIC: LFP analysis of astrocyte-neuron networks → Nature Neuroscience 2021.',
  },
];

/** @typedef {{ year: string, name: string, org: string }} Award */
export const AWARDS = [
  { year: '2024', name: 'TPDA Award',                        org: 'Society for Neuroscience, Chicago' },
  { year: '2022', name: 'INPhINIT Retaining Fellowship',      org: 'La Caixa Foundation · 4% acceptance rate' },
  { year: '2021', name: 'Stella Bagrit Centenary Prize',      org: 'Imperial College London · Best MSc project' },
  { year: '2021', name: '1st Prize — BrainCode Games Hackathon', org: 'The BrainCode' },
  { year: '2021', name: 'FPU Doctoral Fellowship',            org: 'Ministerio de Ciencia y Educación' },
  { year: '2019', name: '1st Prize — Engineering Medicine Contest', org: 'CEEIBIS' },
  { year: '2019', name: 'Scholarship for Excellence',         org: 'Comunidad de Madrid' },
  { year: '2016', name: 'Scholarship for Excellence',         org: 'Comunidad de Madrid' },
];
