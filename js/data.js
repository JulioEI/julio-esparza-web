/**
 * data.js — Single source of truth for all site content.
 * Edit this file to update publications, skills, timeline, etc.
 * No HTML changes needed.
 */

export const PROFILE = {
  name:      'Julio Esparza',
  nameShort: 'Julio\nEsparza',
  eyebrow:   'Computational Neuroscientist · AI Engineer',
  statement: `I build the tools to ask sharper questions about high-dimensional
    data, then ship them: a manifold-analysis method reused across
    neuroscience, audio, and computer vision, and production GenAI
    infrastructure integrating data across 20+ external providers at Deloitte.
    My research on hippocampal coding, published first-author in
    <em>Neuron</em> and co-first-author in <em>PLOS Computational Biology</em>,
    has been cited 450+ times. PhD Cum Laude.`,
  about: {
    lead: `Trained as a biomedical engineer, I'm drawn to problems where
      rigorous science has to become something that actually works: tools
      that ask sharper questions about the brain, and systems people
      actually use.`,
    paragraphs: [
      `My doctoral research asked a simple question: why does averaging across
      CA1 erase structure that's obvious once you separate cell types? The
      answer was that deep and superficial sublayers form geometrically
      distinct neural manifolds, encoding space through entirely independent
      reference frames. That overturned the assumption that CA1 computes a
      single, unified spatial code, with direct implications for how
      population-level signals are interpreted across the field.`,
      `Beyond neuroscience, I design general-purpose computational tools: the
      Structure Index (SI), a graph-based method for quantifying variable
      organization in arbitrary-dimensional spaces, has been validated across
      neural data, audio classification, and computer vision. It's open
      source at <a href="https://github.com/PridaLab/structure_index"
      target="_blank" rel="noopener">PridaLab/structure_index</a> and has
      been cited 11 times since publication.`,
      `I chose engineering because it let me translate scientific depth into
      something that actually works in the world, and that instinct never
      went quiet through a PhD spent on methodological rigor. Today I build
      production AI infrastructure at Deloitte: GenAI pipelines and LLM
      integrations that harmonize data across 20+ external providers, AI
      agents for automated data quality checks, semantic layers over
      Snowflake, all running on infrastructure I designed end to end. Same
      instinct, now applied to systems people depend on daily.`,
    ],
    stats: [
      { number: '7',  label: 'Publications' },
      { number: '3',  label: 'First-author' },
      { number: '450+', label: 'Citations'  },
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
    doi:     'https://doi.org/10.1016/j.conb.2023.102800',
  },
  {
    year:    '2023',
    venue:   'Nature Neuroscience',
    title:   'Topological analysis of sharp-wave ripple waveforms',
    authors: 'Sebastián ER., Quintanilla JP., Sanchez-Aguilera A., <strong>Esparza J.</strong>, et al.',
    doi:     'https://doi.org/10.1038/s41593-023-01471-9',
  },
  {
    year:    '2022',
    venue:   'Nature Comm.',
    title:   'Ca²⁺-modulated photoactivatable imaging reveals neuron-astrocyte glutamatergic circuitries within the nucleus accumbens',
    authors: 'Serra I., <strong>Esparza J.</strong>, et al.',
    doi:     'https://doi.org/10.1038/s41467-022-33020-6',
  },
  {
    year:    '2021',
    venue:   'Nature Neuroscience',
    title:   'GABAergic signaling to astrocytes in the prefrontal cortex sustains goal-directed behaviors',
    authors: 'Mederos S., Sánchez-Puelles C., <strong>Esparza J.</strong>, et al.',
    doi:     'https://doi.org/10.1038/s41593-020-00752-x',
  },
];

/** @typedef {{ heading: string, items: string[] }} SkillGroup */
export const SKILLS = [
  {
    heading: 'ML / AI',
    items: ['AI agents', 'Large language models', 'Neural manifolds & TDA', 'Sentence transformers', 'CNN, XGBoost, SVR', 'Reinforcement learning', 'Embeddings & RAG'],
  },
  {
    heading: 'Infrastructure',
    items: ['Snowflake & dbt', 'Semantic layers', 'PostgreSQL', 'Liquibase', 'ETL pipeline design', 'Git', 'Cloud data architectures'],
  },
  {
    heading: 'Computational',
    items: ['Python (TF, sklearn, numpy)', 'MATLAB', 'Topological data analysis', 'Graph theory & k-NN', 'Signal processing', 'Spectral analysis'],
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
    detail: 'Designed and shipped production GenAI pipelines for an international client: LLM integration, AI agents for automated data quality checks, semantic layers over Snowflake, multi-provider ETL harmonisation.',
  },
  {
    period: '2021 — 2025',
    role:   'PhD in Computational Neuroscience — Cum Laude',
    where:  'UAM / Instituto Cajal, CSIC · Madrid · Internship: Columbia University (Losonczy Lab, NYC)',
    detail: 'Developed the Structure Index, a general-purpose tool for quantifying structure in high-dimensional data, and used it to show that CA1 sublayers form independent, functionally distinct spatial codes. INPhINIT La Caixa Fellow (4% acceptance).',
  },
  {
    period: '2020 — 2021',
    role:   'MSc Biomedical Engineering — Distinction · Top 1.8%',
    where:  'Imperial College London',
    detail: 'Thesis: first neural manifold analysis of hippocampal spatial navigation, a direct precursor to the doctoral work. Stella Bagrit Centenary Prize, best MSc project cohort-wide. GPA 80.50/100.',
  },
  {
    period: '2019 — 2021',
    role:   'Research Engineer',
    where:  'Instituto Cajal, CSIC · Perea & Navarrete Lab',
    detail: 'Built an automated computer vision pipeline for ROI detection in calcium imaging, replacing manual preprocessing and increasing throughput. Signal and spectral analysis work contributed to three Nature-family publications.',
  },
  {
    period: '2015 — 2019',
    role:   'BSc Biomedical Engineering — GPA 8.5/10',
    where:  'Universidad Carlos III de Madrid · Year abroad: UC Irvine (GPA 3.8)',
    detail: 'Chose biomedical engineering for the chance to translate rigorous science into solutions that improve people’s lives. Specialisation in signal processing and data analysis; honours in Calculus, Signals & Systems, Tissue Engineering. TFG at CSIC: LFP analysis of astrocyte-neuron networks → Nature Neuroscience 2021.',
  },
];

/** @typedef {{ year: string, type: string, event: string, location: string, note?: string }} Talk */
export const TALKS = [
  { year: '2025', type: 'Talk',     event: 'Universidad Católica de San Pablo',                          location: 'Arequipa, Peru' },
  { year: '2025', type: 'Talk',     event: 'Imperial College London',                                    location: 'London, UK' },
  { year: '2024', type: 'Poster',   event: 'Society for Neuroscience',                                   location: 'Chicago, USA',          note: 'TPDA Award' },
  { year: '2024', type: 'Chair',    event: 'Biophysics Annual Scientific Meeting, UAM',                  location: 'Madrid' },
  { year: '2024', type: 'Panel',    event: "Cajal Junior's Meeting",                                     location: 'Madrid',                 note: '"What I wish I\'d known before starting my PhD"' },
  { year: '2024', type: 'Outreach', event: "European Researcher's Night — CaixaForum",                   location: 'Madrid',                 note: '"Deciphering the brain: the shape of thoughts"' },
  { year: '2023', type: 'Talk',     event: 'ICERM — Topology & Geometry in Neuroscience Workshop',       location: 'Brown University, Providence, USA' },
  { year: '2023', type: 'Panel',    event: 'Young Academy of Spain / UNED',                              location: 'Madrid',                 note: '"Stages of the Research Career"' },
  { year: '2022', type: 'Talk',     event: 'NTNU Neural Data Science Winter Symposium',                  location: 'Trondheim, Norway' },
  { year: '2022', type: 'Talk',     event: 'FENS Forum',                                                 location: 'Paris, France' },
  { year: '2022', type: 'Poster',   event: 'FENS Forum',                                                 location: 'Paris, France' },
  { year: '2022', type: 'Poster',   event: 'ENCODS',                                                     location: 'Paris, France' },
  { year: '2022', type: 'Talk',     event: "Cajal Junior's Meeting",                                     location: 'Madrid' },
  { year: '2022', type: 'Outreach', event: "European Researcher's Night — CaixaForum",                   location: 'Madrid',                 note: '"How to connect brains to machines" · BCI workshop with live EEG demo' },
];

/** @typedef {{ year: string, name: string, org: string }} Award */
export const AWARDS = [
  { year: '2024', name: 'TPDA Award',                        org: 'Society for Neuroscience, Chicago' },
  { year: '2023', name: 'iMOVE23 Travel Scholarship',         org: 'CSIC' },
  { year: '2022', name: 'INPhINIT Retaining Fellowship',      org: 'La Caixa Foundation · 4% acceptance rate' },
  { year: '2021', name: 'Stella Bagrit Centenary Prize',      org: 'Imperial College London · Best MSc project' },
  { year: '2021', name: '1st Prize — BrainCode Games Hackathon', org: 'The BrainCode' },
  { year: '2021', name: 'FPU Doctoral Fellowship',            org: 'Ministerio de Ciencia y Educación' },
  { year: '2019', name: '1st Prize — Engineering Medicine Contest', org: 'CEEIBIS' },
  { year: '2019', name: 'Scholarship for Excellence',         org: 'Comunidad de Madrid' },
];
