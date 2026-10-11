/**
 * Central portfolio data for Aditya Kumar Ratre.
 * This file is the single source of truth for the portfolio content.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Aditya Kumar Ratre',
  displayName: 'Aditya Kumar Ratre',
  firstName: 'ADITYA',
  seriesTag: 'THE CREATOR',
  originalLabel: 'AN ADITYA ORIGINAL',
  role: 'Founder & Developer',
  tagline: ['Founder', 'Developer', 'Digital Marketer', 'Creator'],
  intro:
    'I’m Aditya — a songwriter, lyricist, developer, creator, and entrepreneur who loves turning ideas into meaningful experiences. From building digital products and exploring AI-powered solutions to digital marketing, content creation, and songwriting, I enjoy creating things that blend technology, creativity, and storytelling.',
  location: 'Bilaspur, Chhattisgarh, India',
  email: 'adityaratre512@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/adityaratre',
    github: 'https://github.com/adityaratre',
    instagram: 'https://www.instagram.com/mr.aditya_ratre',
    creatorInstagram: 'https://www.instagram.com/nexagrindyt/',
    youtube: 'https://www.youtube.com/@nexagrind',
    gamingYoutube: 'https://www.youtube.com/@cgankitlive',
  },
  resumePdf: '/assets/Aditya_Ratre_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Aditya Kumar Ratre',
  },
  interests: ['AI & Digital Products', 'Digital Marketing', 'Entrepreneurship', 'Music & Creative Technology'],
};

export const education = [
  {
    school: 'D.P. Vipra College',
    place: 'Bilaspur, Chhattisgarh',
    degree: 'Bachelor of Business Administration (BBA)',
    period: '2025 – 2028',
    score: '1st-year SGPA 8.10',
  },
  {
    school: 'New Era Progressive School',
    place: 'Korba, Chhattisgarh',
    degree: 'Higher Secondary — Class 12',
    period: '2025',
    score: 'Completed',
  },
  {
    school: 'New Era Progressive School',
    place: 'Korba, Chhattisgarh',
    degree: 'Secondary — Class 10',
    period: '2023',
    score: 'Completed',
  },
];

export const experience = [
  {
    company: 'NexaGrind AI',
    role: 'Founder & Developer',
    place: 'Remote',
    period: '2026 – Present',
    points: [
      'Founded and developed an AI-powered digital platform focused on practical analysis, decision support, productivity, and creator workflows.',
      'Built features including AI text analysis and summarization, cost auditing, solution finding, risk analysis, AI Q&A, step-by-step decision workflows, SWOT analysis, calculators, flashcards, YouTube summarization, and habit tracking.',
      'Launched the platform for testing and reported 500K+ visits during its testing phase; currently rebuilding and improving the product.',
    ],
  },
  {
    company: 'ToolsOverflow',
    role: 'Lead Developer',
    place: 'Remote',
    period: '2026 – Present',
    points: [
      'Lead development of a multi-domain web tools ecosystem covering creator, SEO, developer, calculator, converter, and utility workflows.',
      'Worked on the core system that powers tools such as YouTube metadata extraction, thumbnail and channel asset utilities, region restriction checks, and other web utilities.',
    ],
  },
  {
    company: 'SEEMA Chat Bot',
    role: 'Founder & Developer',
    place: 'Remote',
    period: '2026 – Present',
    points: [
      'Founded and developed a Discord-based chatbot project focused on community interaction and automation.',
      'Project has reached 1M+ users according to project analytics.',
    ],
  },
  {
    company: 'HylexMC / FakePixel',
    role: 'Lead Developer',
    place: 'Remote',
    period: '2026 – Present',
    points: [
      'Worked across Minecraft server development, plugins, backend systems, game mechanics, anti-cheat systems, web/store systems, configuration, and optimization.',
      'Built and maintained custom gameplay and server-side systems for a large Minecraft network environment.',
    ],
  },
  {
    company: 'Game Modding & Custom Development',
    role: 'Game Developer & Mod Developer',
    place: 'Independent · Remote',
    period: '2025 – Present',
    points: [
      'Develop custom game modifications, plugins, gameplay systems, tools, and Minecraft server features.',
      'Work across gameplay logic, server-side systems, optimization, and security/testing-oriented development.',
    ],
  },
  {
    company: 'Secure Anti-Cheat Examination System',
    role: 'Founder & Developer',
    place: 'Remote',
    period: '2026 – Present',
    points: [
      'Building a secure online examination platform concept with candidate authentication, session monitoring, suspicious-activity detection, integrity checks, and administrative workflows.',
    ],
  },
  {
    company: 'DropshipHub',
    role: 'Founder & Developer',
    place: 'Remote',
    period: '2026 – Present',
    points: [
      'Building a digital dropshipping workflow focused on product research, comparison, profit-margin analysis, inventory/order workflows, and business analytics.',
    ],
  },
  {
    company: 'Independent Songwriter & Lyricist',
    role: 'Songwriter & Lyricist',
    place: 'Independent · Remote',
    period: 'Present',
    points: [
      'Create original lyrics and song concepts across different musical styles, combining storytelling, emotion, rhythm, and memorable hooks.',
      'Explore music production and AI-assisted creative workflows while developing an independent artistic identity.',
    ],
  },
];

export type Metric = { value: string; label: string };
export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  website?: string;
  extraLinks?: { label: string; url: string }[];
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'nexagrind-ai',
    title: 'NexaGrind AI',
    year: '2026',
    genre: 'AI • Product • Decision Intelligence',
    logline: 'An AI-powered digital platform built to turn complex ideas and problems into structured, actionable insights.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'OpenAI SDK'],
    build: [
      'Founded, designed, and developed the platform as a solo product builder.',
      'Built AI workflows for text analysis, summarization, cost auditing, solution finding, risk analysis, Q&A, SWOT analysis, and step-by-step decision support.',
      'Added practical tools including revenue/profit calculators, product cost analysis, flashcards, YouTube summarization, and habit tracking.',
    ],
    features: [
      'AI text analysis & summarization',
      'Cost, revenue & profit analysis',
      'Risk analysis & solution finding',
      'AI Q&A and decision workflows',
      'SWOT analysis',
      'YouTube summarization & flashcards',
      'Habit tracking, streaks & completion history',
    ],
    metrics: [
      { value: '500K+', label: 'reported testing-phase visits' },
      { value: '2026', label: 'founded & developed' },
      { value: 'Solo', label: 'founder & developer' },
      { value: 'Multi-tool', label: 'AI and productivity workflows' },
      { value: 'Rebuilding', label: 'current product phase' },
    ],
    github: 'https://github.com/adityaratre/NEXAGRIND.AI',
    website: 'https://nexagrindai.online/',
    extraLinks: [
      { label: 'Main App', url: 'https://nexagrindai.online/app.html' },
      { label: 'AI App 2', url: 'https://nexagrindai.online/app2.html' },
      { label: 'Habit Tracker', url: 'https://nexagrindai.online/tracker.html' },
    ],
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'toolsoverflow',
    title: 'ToolsOverflow',
    year: '2026',
    genre: 'Web Tools • SEO • Creator Utilities',
    logline: 'A multi-domain web tools ecosystem for creators, developers, SEO workflows, calculators, converters, and utilities.',
    stack: ['Web Development', 'JavaScript', 'SEO', 'APIs', 'Automation'],
    build: [
      'Joined as Lead Developer to build the core web-tools system and its reusable architecture.',
      'Worked on creator utilities, YouTube metadata tools, image/asset utilities, region restriction checks, SEO tools, calculators, converters, and developer utilities.',
    ],
    features: [
      'YouTube description & tag extraction',
      'YouTube thumbnail downloader',
      'Channel logo & banner utilities',
      'Text-to-handwriting tools',
      'SEO, developer & web utilities',
      'Calculators and converters',
    ],
    metrics: [
      { value: 'Multi-domain', label: 'web tools ecosystem' },
      { value: 'Lead', label: 'developer role' },
      { value: 'SEO', label: 'creator and discovery tools' },
      { value: 'Utilities', label: 'calculators and converters' },
      { value: 'Reusable', label: 'core system architecture' },
    ],
    website: 'https://www.toolsoverflow.com/',
    palette: amber,
    motif: 'flow',
  },
  {
    id: 'seema',
    title: 'SEEMA Chat Bot',
    year: '2026',
    genre: 'Discord • Automation • Community',
    logline: 'A Discord chatbot project built for community interaction, automation, and scalable user workflows.',
    stack: ['Discord', 'Bot Development', 'Automation'],
    build: ['Founded and developed the bot and its community-facing workflows.', 'Scaled the project to 1M+ users according to project analytics.'],
    features: ['Discord automation', 'Community interaction', 'Scalable bot workflows'],
    metrics: [{ value: '1M+', label: 'reported users' }, { value: 'Discord', label: 'community platform' }, { value: 'Automation', label: 'bot workflows' }, { value: 'Founder', label: 'product ownership' }],
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'hylexmc-fakepixel',
    title: 'HylexMC / FakePixel',
    year: '2026',
    genre: 'Minecraft • Server • Plugins',
    logline: 'Lead development across Minecraft server systems, plugins, gameplay mechanics, backend and optimization.',
    stack: ['Minecraft', 'Java', 'Plugins', 'Backend Systems', 'Anti-Cheat'],
    build: ['Develop server plugins, gameplay mechanics, backend systems, anti-cheat systems, web/store systems, and performance optimizations.'],
    features: ['Server development', 'Custom plugins', 'Gameplay systems', 'Anti-cheat', 'Web/store systems', 'Optimization'],
    metrics: [{ value: 'Lead', label: 'developer' }, { value: 'Full-stack', label: 'server ecosystem work' }, { value: 'Plugins', label: 'custom gameplay systems' }, { value: 'Optimization', label: 'server performance work' }],
    website: 'https://store.hylexmc.net/',
    extraLinks: [{ label: 'FakePixel World', url: 'https://world.fakepixel.shop/' }],
    palette: jade,
    motif: 'tenants',
  },
  {
    id: 'game-modding',
    title: 'Game Modding & Custom Development',
    year: '2025 – Present',
    genre: 'Game Development • Modding • Plugins',
    logline: 'Independent custom development across game mods, plugins, gameplay systems, and server tooling.',
    stack: ['Game Development', 'Custom Code', 'Plugins', 'Minecraft'],
    build: ['Create custom game modifications, plugins, tools, gameplay systems, and server-side features across different projects.'],
    features: ['Game mods', 'Custom plugins', 'Gameplay systems', 'Server-side tools', 'Optimization & testing'],
    metrics: [{ value: '2025+', label: 'independent development' }, { value: 'Mods', label: 'custom game modifications' }, { value: 'Plugins', label: 'server-side features' }, { value: 'Testing', label: 'optimization and security workflows' }],
    palette: violet,
    motif: 'shield',
  },
  {
    id: 'anti-cheat-exam',
    title: 'Secure Anti-Cheat Examination System',
    year: '2026',
    genre: 'Security • EdTech • Platform',
    logline: 'A secure online examination platform concept focused on exam integrity and suspicious-activity detection.',
    stack: ['Web Development', 'Security', 'Monitoring', 'Admin Systems'],
    build: ['Designing secure candidate authentication, session monitoring, suspicious-activity detection, integrity checks, and exam administration workflows.'],
    features: ['Candidate authentication', 'Session monitoring', 'Suspicious activity detection', 'Integrity checks', 'Admin/exam management'],
    metrics: [{ value: 'In development', label: 'current status' }, { value: 'Authentication', label: 'candidate verification' }, { value: 'Monitoring', label: 'session integrity workflows' }, { value: 'Admin', label: 'exam management concept' }],
    palette: ocean,
    motif: 'shield',
  },
  {
    id: 'dropshiphub',
    title: 'DropshipHub',
    year: '2026',
    genre: 'E-commerce • Business • Analytics',
    logline: 'A planned digital dropshipping workflow for product research, profitability analysis, inventory, orders, and analytics.',
    stack: ['Product Research', 'Business Analytics', 'E-commerce', 'Digital Marketing'],
    build: ['Building workflows for product research and comparison, profit-margin calculation, inventory/order management, and business analytics.'],
    features: ['Product research', 'Profit-margin calculator', 'Inventory workflows', 'Order management', 'Business analytics'],
    metrics: [{ value: 'In development', label: 'current status' }, { value: 'Research', label: 'product discovery workflows' }, { value: 'Profit', label: 'margin calculation concept' }, { value: 'Analytics', label: 'business insights concept' }],
    palette: amber,
    motif: 'tenants',
  },
  {
    id: 'songwriting',
    title: 'Songwriting & Lyric Writing',
    year: 'Present',
    genre: 'Music • Creativity • AI-assisted Workflows',
    logline: 'Independent songwriting and lyric development combining storytelling, emotion, rhythm, and memorable hooks.',
    stack: ['Songwriting', 'Lyric Writing', 'FL Studio', 'BandLab', 'AI Tools'],
    build: ['Create original lyrics and concepts while exploring music production and AI-assisted creative workflows.'],
    features: ['Original lyrics', 'Song concepts', 'Music production', 'AI-assisted creative workflows'],
    metrics: [{ value: 'Independent', label: 'creative work' }, { value: 'Lyrics', label: 'original writing' }, { value: 'Concepts', label: 'song ideas and hooks' }, { value: 'AI-assisted', label: 'creative workflows' }],
    palette: crimson,
    motif: 'flow',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  { id: 'nexagrind-visits', title: '500K+ Visits', org: 'NexaGrind AI', detail: 'Reported 500K+ visits during the platform testing phase.', laurel: 'Product Milestone' },
  { id: 'seema-users', title: '1M+ Users', org: 'SEEMA Chat Bot', detail: 'Reached 1M+ users according to project analytics.', laurel: 'Scale Milestone' },
  { id: 'certifications', title: '17 Credentials', org: 'Google Skillshop • HubSpot • Zielhoch', detail: 'Completed 15 Google Skillshop credentials plus digital marketing and marketing/finance certificates.', laurel: 'Learning & Growth' },
  { id: 'academic', title: '8.10 SGPA', org: 'BBA • D.P. Vipra College', detail: 'First-year academic result while continuing to build digital and creative projects.', laurel: 'Academic Milestone' },
  { id: 'toolsoverflow', title: 'Multi-Domain', org: 'ToolsOverflow', detail: 'Lead developer contribution to a reusable web-tools ecosystem spanning creator, SEO, utility, calculator, and developer workflows.', laurel: 'Engineering' },
  { id: 'founder', title: 'Founder & Builder', org: 'NexaGrind AI • SEEMA • DropshipHub', detail: 'Took product ideas from planning into development, testing, and iterative improvement; some projects remain in development.', laurel: 'Product Building' },
  { id: 'systems', title: 'Custom Systems', org: 'Game & Minecraft Development', detail: 'Worked on plugins, gameplay systems, server-side tools, configurations, optimization, and security/testing-oriented workflows.', laurel: 'Technical Work' },
  { id: 'creative', title: 'Multi-Disciplinary Creator', org: 'Tech • Content • Music', detail: 'Combines digital product development, content creation, video/design workflows, songwriting, and lyric writing.', laurel: 'Creative Practice' },
  { id: 'digital-business', title: 'Digital Business Skills', org: 'Marketing & E-Commerce', detail: 'Practical exposure to product research, digital marketing, SEO, content strategy, audience growth, and online business workflows.', laurel: 'Business Practice' },
];

export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [
  { issuer: 'Google Skillshop', name: 'AI-Powered Performance Ads Certification', link: 'https://skillshop.credential.net/d750f606-2f08-4f2f-95a8-16ba69bd7e6f' },
  { issuer: 'Google Skillshop', name: 'Google Ads Apps Certification', link: 'https://skillshop.credential.net/0a0bd5fa-42fa-41ab-8293-17f6e530f767' },
  { issuer: 'Google Skillshop', name: 'Google Ads Creative Certification', link: 'https://skillshop.credential.net/90b2f177-61d1-46ed-b060-71cf42853a89' },
  { issuer: 'Google Skillshop', name: 'Google Ads Display Certification', link: 'https://skillshop.credential.net/544e670a-2091-415f-b1f2-bca68549a178' },
  { issuer: 'Google Skillshop', name: 'Google Ads Search Certification', link: 'https://skillshop.credential.net/bac1d018-300f-4977-8abf-bba110ccda59' },
  { issuer: 'Google Skillshop', name: 'Google Ads Measurement Certification', link: 'https://skillshop.credential.net/0a3ac5e0-6d5c-49d2-a423-b7501f19a8c2' },
  { issuer: 'Google Skillshop', name: 'Campaign Manager 360 Certification (2026)', link: 'https://skillshop.credential.net/707048e7-cd7a-4a1d-8eb4-527a95d901b7' },
  { issuer: 'Google Skillshop', name: 'Conversion Optimization Certification Exam', link: 'https://skillshop.credential.net/89ba8dd3-1417-4dbe-822d-c2a5d437839c' },
  { issuer: 'Google Skillshop', name: 'Google Ads Search Certification (2026)', link: 'https://skillshop.credential.net/9061accf-20ab-42bd-9694-cddcc08fa500' },
  { issuer: 'Google Skillshop', name: 'Google Ads Video Certification', link: 'https://skillshop.credential.net/6475be39-f000-4716-b8dc-181896ceb46f' },
  { issuer: 'Google Skillshop', name: 'Display & Video 360 Certification (2026)', link: 'https://skillshop.credential.net/6e4cb928-a194-4d0a-9a43-e6359532935d' },
  { issuer: 'Google Skillshop', name: 'Search Ads 360 Certification (2026)', link: 'https://skillshop.credential.net/fff8eee2-3ddf-4e96-9305-b2a1f0d0746c' },
  { issuer: 'Google Skillshop', name: 'Grow Offline Sales Certification', link: 'https://skillshop.credential.net/4a45284b-2a2c-4d93-8d41-8d35221ce813' },
  { issuer: 'Google Skillshop', name: 'AI-Powered Shopping ads Certification', link: 'https://skillshop.credential.net/8c634acd-a677-45ee-b55b-f8d090559ce7' },
  { issuer: 'Google Skillshop', name: 'Google Ads Video Certification (2026)', link: 'https://skillshop.credential.net/61da1c2a-2570-495a-aa6a-61006463cce3' },
  { issuer: 'HubSpot Academy', name: 'Digital Marketing Certified', link: '/assets/certificates/hubspot-digital-marketing.png' },
  { issuer: 'Zielhoch', name: 'Marketing And Finance — Completion Certificate', link: '/assets/certificates/zielhoch-marketing-finance.pdf' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  { id: 'core', title: 'Core Skills', subtitle: 'What I build and work with', skills: [
    { name: 'Digital Marketing', mono: 'DM', note: 'Core' }, { name: 'Web Development', mono: 'WD' }, { name: 'AI Tools', mono: 'AI' }, { name: 'Product Development', mono: 'PD' }, { name: 'SEO', mono: 'SE' }, { name: 'Content Strategy', mono: 'CS' },
  ] },
  { id: 'development', title: 'Development', subtitle: 'Web, software & custom systems', skills: [
    { name: 'JavaScript', mono: 'Js', note: 'Learning' }, { name: 'Node.js', mono: 'No', note: 'Learning' }, { name: 'Express.js', mono: 'Ex' }, { name: 'React', mono: 'Re' }, { name: 'Next.js', mono: 'Nx' }, { name: 'HTML / CSS', mono: 'HC' }, { name: 'SQL', mono: 'Sq', note: 'Learning' }, { name: 'Custom Code Development', mono: 'CC' },
  ] },
  { id: 'frameworks', title: 'Frameworks', subtitle: 'Tools and frameworks used in projects', skills: [
    { name: 'Tailwind CSS', mono: 'Tw' }, { name: 'Bootstrap', mono: 'Bs' }, { name: 'Vite', mono: 'Vi' }, { name: 'Framer Motion', mono: 'Fm' }, { name: 'GSAP', mono: 'Gs' }, { name: 'Git / GitHub', mono: 'Gt' }, { name: 'VS Code', mono: 'Vs' },
  ] },
  { id: 'creative', title: 'Creative & Media', subtitle: 'Content, music and visual creation', skills: [
    { name: 'Content Creation', mono: 'CC' }, { name: 'Video Editing', mono: 'VE' }, { name: 'Graphic Design', mono: 'GD' }, { name: 'Songwriting', mono: 'Sw' }, { name: 'Lyric Writing', mono: 'Ly' }, { name: 'Music Production', mono: 'MP' }, { name: 'Social Media Management', mono: 'SM' },
  ] },
  { id: 'business', title: 'Business & Strategy', subtitle: 'Growth, analysis and product thinking', skills: [
    { name: 'Business & Market Analysis', mono: 'BM' }, { name: 'Strategic Problem Solving', mono: 'SP' }, { name: 'Product & Project Ideation', mono: 'PI' }, { name: 'CRM', mono: 'Cr' }, { name: 'Entrepreneurship', mono: 'En' }, { name: 'Stock Market Analysis', mono: 'St' },
  ] },
  { id: 'tools', title: 'Tools', subtitle: 'Creative, development and workflow tools', skills: [
    { name: 'Canva', mono: 'Ca' }, { name: 'FL Studio', mono: 'Fl' }, { name: 'BandLab', mono: 'Bl' }, { name: 'CapCut', mono: 'Cc' }, { name: 'Photoshop', mono: 'Ps' }, { name: 'Premiere Pro', mono: 'Pr' }, { name: 'OBS Studio', mono: 'Ob' },
  ] },
];

export const skillEvidence: Record<string, string[]> = {
  'Digital Marketing': ['Google Ads certifications', 'Content & social media projects'],
  'Web Development': ['NexaGrind AI', 'ToolsOverflow'],
  'AI Tools': ['NexaGrind AI', 'AI-assisted creative workflows'],
  'Product Development': ['NexaGrind AI', 'DropshipHub product planning'],
  SEO: ['ToolsOverflow', 'Digital marketing work'],
  'Content Strategy': ['NexaGrind YouTube', 'Instagram creator work'],
  JavaScript: ['Interactive web projects', 'Current learning focus'],
  'Node.js': ['NexaGrind AI backend workflows', 'Current learning focus'],
  'Express.js': ['NexaGrind AI backend workflows'],
  React: ['Current portfolio rebuild', 'Component-based interfaces'],
  'Next.js': ['Modern web development exploration'],
  'HTML / CSS': ['Website structure and responsive styling'],
  SQL: ['Data and product workflow exploration', 'Current learning focus'],
  'Custom Code Development': ['Game modding', 'Minecraft development'],
  'Tailwind CSS': ['Current portfolio UI', 'Responsive styling'],
  Bootstrap: ['Rapid interface prototyping'],
  Vite: ['Current portfolio build system'],
  'Framer Motion': ['Portfolio transitions and interactions'],
  GSAP: ['Animation workflow exploration'],
  'Git / GitHub': ['NexaGrind AI repository', 'Portfolio version control'],
  'VS Code': ['Primary development environment'],
  'Content Creation': ['NexaGrind YouTube', 'Instagram creator work'],
  'Video Editing': ['CapCut and Premiere Pro workflows'],
  'Graphic Design': ['Thumbnails, posters and creator visuals'],
  Songwriting: ['Independent songwriter & lyricist'],
  'Lyric Writing': ['Independent songwriter & lyricist'],
  'Music Production': ['FL Studio', 'BandLab'],
  'Social Media Management': ['Instagram and YouTube publishing workflows'],
  'Business & Market Analysis': ['Product and market research workflows'],
  'Strategic Problem Solving': ['AI decision workflows', 'Product planning'],
  'Product & Project Ideation': ['NexaGrind AI', 'DropshipHub concepts'],
  CRM: ['Digital business workflows'],
  Entrepreneurship: ['Founder-led digital products'],
  'Stock Market Analysis': ['Market research and analysis workflows'],
  Canva: ['Creator graphics and video projects'],
  'FL Studio': ['Music production workflows'],
  BandLab: ['Music and audio production'],
  CapCut: ['Short-form video editing'],
  Photoshop: ['Thumbnail and graphic design'],
  'Premiere Pro': ['Long-form video editing workflows'],
  'OBS Studio': ['YouTube and gaming livestream workflows'],
};


export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2023 – 2025',
    synopsis: 'School to BBA — building the academic and entrepreneurial foundation.',
    episodes: [
      { code: 'S01 E01', title: 'The Student', description: 'Completed Class 10 and Class 12 at New Era Progressive School, Korba.', tags: ['Class 10', 'Class 12'], runtime: '2023 – 2025', palette: amber },
      { code: 'S01 E02', title: 'Enter: BBA', description: 'Started BBA at D.P. Vipra College, Bilaspur, building a foundation in business and management.', tags: ['BBA', 'Bilaspur'], runtime: '2025 – Present', palette: violet },
    ],
  },
  {
    number: 2,
    title: 'Building Online',
    period: '2025 – 2026',
    synopsis: 'Moving from ideas to websites, digital marketing, content, game development, and online business experiments.',
    episodes: [
      { code: 'S02 E01', title: 'The Creator', description: 'Built content workflows across YouTube and Instagram with editing, thumbnails, SEO, and social media strategy.', tags: ['Content', 'SEO', 'Social Media'], runtime: '2025 – Present', palette: ocean },
      { code: 'S02 E02', title: 'The Developer', description: 'Worked on custom websites, tools, game mods, Minecraft systems, bots, and digital products.', tags: ['Web', 'Games', 'Bots'], runtime: '2025 – Present', palette: jade },
      { code: 'S02 E03', title: 'The Marketer', description: 'Built practical experience in Google Ads, SEO, digital marketing, content strategy, and online business.', tags: ['Google Ads', 'SEO', 'Marketing'], runtime: '2025 – Present', palette: crimson },
    ],
  },
  {
    number: 3,
    title: 'Products & Systems',
    period: '2026',
    synopsis: 'Founder and lead-developer work across AI, web tools, Discord, Minecraft, security, and e-commerce.',
    episodes: [
      { code: 'S03 E01', title: 'NexaGrind AI', description: 'Founded and developed an AI-powered product platform; reported 500K+ testing-phase visits.', tags: ['AI', 'Product', 'Founder'], runtime: '2026', palette: crimson },
      { code: 'S03 E02', title: 'ToolsOverflow', description: 'Lead developer for a multi-domain web tools ecosystem.', tags: ['Web Tools', 'SEO', 'Utilities'], runtime: '2026', palette: amber },
      { code: 'S03 E03', title: 'The Systems Builder', description: 'Built and worked on SEEMA, HylexMC/FakePixel, game systems, anti-cheat examination technology, and DropshipHub.', tags: ['Discord', 'Minecraft', 'Security', 'E-commerce'], runtime: '2026', palette: ocean },
    ],
  },
  {
    number: 4,
    title: 'Creative Technology',
    period: 'Present',
    synopsis: 'Technology meets storytelling through songwriting, lyric writing, music production, AI, and creator workflows.',
    episodes: [
      { code: 'S04 E01', title: 'The Lyricist', description: 'Develop original lyrics and song concepts across multiple styles.', tags: ['Songwriting', 'Lyrics'], runtime: 'Present', palette: violet },
      { code: 'S04 E02', title: 'The Producer', description: 'Explore FL Studio, BandLab, AI-assisted music workflows, and digital media production.', tags: ['FL Studio', 'BandLab', 'AI'], runtime: 'Present', palette: jade },
      { code: 'S04 E03', title: 'The Visual Storyteller', description: 'Combine thumbnails, video editing, visual design, and creator-focused content workflows.', tags: ['Video', 'Design', 'Content'], runtime: 'Present', palette: ocean },
    ],
  },
  {
    number: 5,
    title: 'Next Chapter Loading',
    period: 'Coming Soon',
    synopsis: 'The story is still being written. New product experiments, improved digital tools, and future creative projects will appear here as they are ready to share.',
    episodes: [
      { code: 'S05 E01', title: 'Next Build Loading…', description: 'A new digital product chapter is in progress. Details will be revealed when the build is ready.', tags: ['Coming Soon', 'In Progress'], runtime: 'Coming Soon', palette: crimson },
      { code: 'S05 E02', title: 'The Upgrade', description: 'Ongoing improvements, experiments, and lessons from building real-world digital products.', tags: ['Iteration', 'Product'], runtime: 'In Development', palette: ocean },
      { code: 'S05 E03', title: 'More to Come', description: 'Future projects and milestones will be added here as they become public.', tags: ['Future', 'Stay Tuned'], runtime: 'Not Yet Released', palette: violet },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Flagship Product', title: 'NexaGrind AI', detail: 'Founder & Developer • 500K+ reported testing visits', palette: crimson },
  { label: 'Lead Developer', title: 'ToolsOverflow', detail: 'Multi-domain web tools ecosystem', palette: amber },
  { label: 'Scale', title: 'SEEMA', detail: '1M+ reported users', palette: ocean },
  { label: 'Minecraft', title: 'HylexMC / FakePixel', detail: 'Lead developer across server systems', palette: jade },
  { label: 'Marketing', title: 'Google Ads', detail: '15 Skillshop certifications', palette: violet },
  { label: 'Business', title: 'DropshipHub', detail: 'Product research & digital business workflows', palette: amber },
  { label: 'Creative', title: 'Songwriting', detail: 'Independent songwriter & lyricist', palette: crimson },
  { label: 'Education', title: 'BBA', detail: 'D.P. Vipra College • SGPA 8.10 (1st year)', palette: ocean },
  { label: 'Development', title: 'Custom Code', detail: 'Web, game, bot and server development', palette: jade },
  { label: 'Current Focus', title: 'AI + Digital Products', detail: 'Building useful products and creator workflows', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Identity', title: 'Founder. Developer. Creator.', lines: ['Aditya Kumar Ratre', 'Bilaspur, Chhattisgarh, India'], chips: ['Founder', 'Developer', 'Digital Marketer', 'Creator'] },
  { kicker: 'Flagship', title: 'NexaGrind AI', lines: ['AI-powered digital product built and founded by Aditya', 'Reported 500K+ visits during testing'], chips: ['AI', 'Product', 'Decision Support'] },
  { kicker: 'Systems', title: 'Build real products.', lines: ['ToolsOverflow · SEEMA · HylexMC / FakePixel', 'Game development · security systems · e-commerce workflows'] },
  { kicker: 'Marketing', title: '15 Google Skillshop credentials', lines: ['Search · Display · Video · Measurement · Shopping', 'Campaign Manager 360 · Display & Video 360 · Search Ads 360'] },
  { kicker: 'Creative', title: 'Technology meets music.', lines: ['Songwriter · Lyricist · Music production', 'AI-assisted creative workflows and digital content'] },
  { kicker: 'Education', title: 'BBA · D.P. Vipra College', lines: ['Bilaspur, Chhattisgarh', '1st-year SGPA 8.10'], chips: ['BBA', '2028'] },
  { kicker: 'Next chapter', title: 'Build. Create. Grow.', lines: ['AI · Digital Products · Marketing · Content · Entrepreneurship'] },
];

export type ProfileId = 'aditya' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'aditya', name: 'Aditya', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Resume, achievements & skills first', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'developer', name: 'Developer', blurb: 'Projects, systems & GitHub first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Creative', blurb: 'Story, content & music first', color: '#ffb547', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & identity', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Highlights • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
