/**
 * data.js — Single source of truth for all site content.
 * Edit this file to update publications, skills, timeline, etc.
 * No HTML changes needed.
 */

export const PROFILE = {
  name:      'Julio Esparza',
  nameShort: 'Julio\nEsparza',
  eyebrow:   'Computational Neuroscientist · AI Engineer',
  statement: `Biomedical engineer with a PhD in neuroscience, trained to
    understand systems from first principles and build things that actually work.
    I am drawn to problems where biological understanding and AI reinforce each
    other: tools precise enough for peer review, robust enough for production.
    First-author in <em>Neuron</em> (2025), PhD Cum Laude. Now building
    production AI systems at the intersection of both.`,
  about: {
    lead: `I carry a scientist's need to understand things from first principles
      and an engineer's refusal to stop until something works. I am fuelled by
      the satisfaction of knowing, the curiosity towards the unknown, and the
      desire to make a positive impact.`,
    paragraphs: [
      `Trained as an engineer, I kept asking scientific questions. Trained as a
      scientist, I kept wanting to build things. That tension has shaped
      everything: doctoral research into how the brain organises information,
      computational tools that generalise beyond neuroscience, and production
      AI systems that have to work in the real world.`,
      `Neural circuits organise information geometrically, in the collective
      activity of hundreds of neurons at once. My doctoral research asked
      how cell diversity shapes this geometry in the hippocampus, the brain's
      spatial navigation system. The answer was sharper than expected: two
      adjacent neural populations maintain independent geometric representations
      of the same environment, each anchored to a different reference frame.
      Mixing them erases both. Unit identity is not a biological detail,
      it is a computational one.`,
      `That realisation required a tool to measure it properly. My engineering
      background equipped me to build the tools that do not yet exist. The
      Structure Index is the one I built for this: leveraging graph theory,
      it quantifies how strongly any variable organises a point cloud, in
      spaces of arbitrary dimensionality. Built for neural data but designed
      from the start to be general purpose, it has since been validated in
      audio classification and computer vision. It applies equally to
      artificial neural networks: quantifying how concepts and features are
      organised in learned latent spaces, a question central to
      interpretability and representation learning research. Open source at
      <a href="https://github.com/PridaLab/structure_index"
      target="_blank" rel="noopener">PridaLab/structure_index</a>.`,
      `The same instinct now runs in production. I design end-to-end AI
      solutions for international clients: LLM pipelines that harmonise data
      across 20+ providers, AI agents for automated quality checks, semantic
      layers that make unstructured data queryable. The science and the
      engineering have always been the same problem.`,
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
    venue:   'Nature Communications',
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

/** @typedef {{ id: string, year: string, category: string, title: string, tagline: string, body: (string|{heading:string,text:string})[], tags: string[], links?: {label:string,href:string}[] }} Project */
export const PROJECTS = [
  {
    id:       'structure-index',
    year:     '2024',
    category: 'Open Source Tool',
    title:    'Structure Index',
    tagline:  'A graph-based measure for quantifying how strongly a continuous variable organizes a point cloud in spaces of arbitrary dimensionality.',
    body: [
      'Most methods for probing high-dimensional data ask whether two groups differ. The Structure Index asks a different question: how much does a given variable — position, frequency, semantic similarity — determine the local geometry of a point cloud? The answer is a scalar in [0, 1] computed from a k-nearest-neighbour graph: 0 is no structure, 1 is perfect organization.',
      { heading: 'Method', text: 'The method builds a k-NN graph over the data, then measures the ratio of within-class to between-class edge weights as class boundaries are swept across the variable\'s range. A permutation test provides a null distribution. The full Python implementation is open-source and pip-installable.' },
      { heading: 'Validation', text: 'Validated across three domains: CA1 spatial tuning in electrophysiology, genre structure in audio spectrograms, and category separation in ImageNet embeddings. The method detects structure that linear classifiers and PCA miss when the organizing variable has nonlinear geometry.' },
    ],
    tags:  ['Python', 'Graph theory', 'k-NN', 'Open source', 'Neural data', 'Computer vision'],
    links: [
      { label: 'GitHub', href: 'https://github.com/PridaLab/structure_index' },
      { label: 'Paper',  href: 'https://doi.org/10.1371/journal.pcbi.1011768' },
    ],
  },
  {
    id:       'ca1-sublayer-manifolds',
    year:     '2025',
    category: 'Research',
    title:    'CA1 Sublayer Manifolds',
    tagline:  'Manifold analysis revealing that deep and superficial CA1 pyramidal cells form geometrically distinct, independent spatial codes.',
    body: [
      'The hippocampus has long been treated as a single computational unit. This project asked whether averaging across CA1 was hiding meaningful heterogeneity. It was. Deep and superficial sublayer cells form separate neural manifolds with different reference frames, different drift dynamics, and different relationships to sharp-wave ripple events.',
      { heading: 'Methods', text: 'Custom calcium imaging analysis pipeline to segment and classify cells by sublayer depth, followed by manifold analysis using Structure Index and principal curve fitting to quantify the geometric properties of each population\'s spatial code. Data from behaving mice navigating linear and open-field environments.' },
      { heading: 'Impact', text: 'First-author paper in Neuron (2025). Overturns the assumption that CA1 computes a single unified spatial code and reframes how population-level signals should be interpreted across the hippocampal formation.' },
    ],
    tags:  ['Neural manifolds', 'Calcium imaging', 'Electrophysiology', 'Python', 'MATLAB'],
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1016/j.neuron.2025.01.024' },
    ],
  },
  {
    id:       'genai-pipeline',
    year:     '2025',
    category: 'Production AI',
    title:    'GenAI Data Pipeline',
    tagline:  'Production LLM integration harmonising data from 20+ external providers for international client reporting at Deloitte.',
    body: [
      'Designed and shipped a production GenAI pipeline for a large international client. The core problem: 20+ external data providers with incompatible schemas, update cadences, and quality levels, feeding into a reporting layer that needed to be consistent, auditable, and fast.',
      { heading: 'Architecture', text: 'Semantic layer over Snowflake with dbt, AI agents that run automated data quality checks on each provider\'s feed, and an LLM-powered harmonisation step that resolves naming conflicts and missing mappings. All infrastructure designed and owned end-to-end.' },
      { heading: 'Scale', text: 'Processes data from over 20 international providers daily, feeding executive dashboards used for strategic decisions. The AI quality agents catch schema drift and outlier values before they reach downstream models.' },
    ],
    tags:  ['LLM', 'AI agents', 'Snowflake', 'dbt', 'ETL', 'Python'],
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
  { year: '2025', type: 'Talk',     event: 'Universidad Católica de San Pablo',                          location: 'Arequipa, Peru',                    note: '"Cómo el cerebro representa y navega el espacio" (How the brain represents and navigates space)' },
  { year: '2025', type: 'Talk',     event: 'Imperial College London',                                    location: 'London, UK',                        note: '"Cell heterogeneity in hippocampal representations"' },
  { year: '2024', type: 'Poster',   event: 'Society for Neuroscience',                                   location: 'Chicago, USA',                      note: '"Cell-type-specific geometric transformations in the hippocampal spatial map" · TPDA Award' },
  { year: '2024', type: 'Chair',    event: 'Biophysics Annual Scientific Meeting, UAM',                  location: 'Madrid, Spain',                     note: '"Physical properties of molecular, nanometric and biological systems"' },
  { year: '2024', type: 'Panel',    event: "Cajal Junior's Meeting",                                     location: 'Madrid, Spain',                     note: '"What I wish I\'d known before starting my PhD"' },
  { year: '2024', type: 'Outreach', event: "European Researcher's Night, CaixaForum",                   location: 'Madrid, Spain',                     note: '"Deciphering the brain: the shape of thoughts"' },
  { year: '2023', type: 'Talk',     event: 'Topology & Geometry in Neuroscience Workshop, ICERM',       location: 'Brown University, Providence, USA', note: '"Structure Index: a graph-based method for point cloud data analysis"' },
  { year: '2023', type: 'Panel',    event: 'Joven Academia de España, UNED',                              location: 'Madrid, Spain',                     note: '"Stages of the Research Career"' },
  { year: '2022', type: 'Talk',     event: 'NTNU Neural Data Science Winter Symposium',                  location: 'Trondheim, Norway',                 note: '"Quantifying the distribution of feature values over data represented in arbitrary dimensional spaces"' },
  { year: '2022', type: 'Poster',   event: 'FENS Forum',                                                 location: 'Paris, France',                     note: '"Inference of hippocampal representations with neural manifolds"' },
  { year: '2022', type: 'Poster',   event: 'ENCODS',                                                     location: 'Paris, France',                     note: '"Neural manifold analysis of hippocampal activity"' },
  { year: '2022', type: 'Talk',     event: "Cajal Junior's Meeting",                                     location: 'Madrid, Spain',                     note: '"Inference of hippocampal representations with neural manifolds"' },
  { year: '2022', type: 'Outreach', event: "European Researcher's Night, CaixaForum",                   location: 'Madrid, Spain',                     note: '"How to connect brains to machines" · BCI workshop with live EEG demo' },
  { year: '2021', type: 'Talk',     event: 'AbNeuralNets Annual Meeting',                                location: 'Online (Covid-19)',                  note: '"Unraveling the role of astrocytes in the social brain"' },
  { year: '2019', type: 'Talk',     event: 'Conference of Junior Researchers, Instituto Cajal',          location: 'Madrid, Spain',                            note: '"Local field potential data analysis in vivo: deciphering functional astrocyte-neuron networks"' },
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
