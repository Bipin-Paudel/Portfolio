export type Project = {
  slug: string;
  title: string;
  description: string;
  category: "AI/ML" | "Web" | "Mobile";
  techStack: string[];
  role?: string;
  githubUrl?: string;
  liveUrl?: string;
  playStoreUrl?: string;
  image?: string;
  gallery?: { src: string; caption: string }[];
  problem: string;
  architecture: string;
};

export const portfolioData = {
  about: {
    name: "Bipin Paudel",
    title: "AI & Backend Developer",
    tagline:
      "Computer Science student from Nepal building web apps with Python, React, Next.js, and machine learning. I care more about things that actually work than things that look impressive.",
    description:
      "I'm studying Computer Science at Tribhuvan University and building web and AI applications on the backend and frontend. My stack is Python, Django, FastAPI, React, Next.js, and practical ML/RAG systems.",
    address: "Bharatpur-11, Chitwan",
    phone: "+977 9844735418",
    email: "info@paudelbipin.com.np",
    website: "paudelbipin.com.np",
    resumeLink: "/Bipin_Paudel_Resume.pdf",
  },
  socials: {
    linkedin: "https://linkedin.com/in/bipin-paudel/",
    twitter: "https://twitter.com/paudelbipin19",
    github: "https://github.com/Bipin-Paudel",
    instagram: "https://www.instagram.com/___vip___in____/",
    youtube: "https://www.youtube.com/@buildwithbipin19",
  },
  education: [
    {
      degree: "B.Sc. Computer Science and Information Technology",
      institution: "Tribhuvan University",
      period: "Feb 2023 - Nov 2027 (Expected)",
    },
    {
      degree: "Higher Secondary Education Board",
      institution: "Bhawani Vidyapeeth Secondary School",
      period: "2020 - 2022",
    },
  ],
  certifications: [
    {
      title: "Data Scientist Associate",
      issuer: "DataCamp",
      link: "https://www.datacamp.com/certificate/DSA0015283742978",
    },
    {
      title: "Complete Django Web Development",
      issuer: "GeeksForGeeks",
      link: "https://www.geeksforgeeks.org/certificate/5d31949faad2fa554327620a2405c7dd?utm_source=socials&utm_medium=cc_link",
    },
    {
      title: "The Ultimate Job Ready Data Science Course",
      issuer: "CodeWithHarry",
      link: "https://drive.google.com/file/d/1WppoNEsEjOFkB1eSJWCa2SayVfD9YHfY/view?usp=sharing",
    },
  ],
  experience: [
    {
      role: "Software Developer",
      company: "SkinPal AI",
      period: "Feb 2026 - Present",
      location: "Remote",
      bullets: [
        "Working on backend and AI features for an AI skin-analysis app used by 13,000+ people daily.",
        "Built the RAG pipeline behind the product's skincare assistant.",
      ],
      link: "https://skinpalai.app",
    },
    {
      role: "Web Developer",
      company: "Khata Academy",
      period: "Aug 2025 - Jan 2026",
      location: "Bharatpur",
      bullets: [
        "Built a financial MIS for business data tracking.",
        "Developed tools like Business Model Canvas and Persona generators.",
        "Worked with Django and React to deliver features end to end.",
      ],
      link: "https://tools.khatapreneur.com",
    },
    {
      role: "Data Fellow",
      company: "Code for Nepal",
      period: "May 2025 - Present",
      location: "Remote",
      bullets: ["Working on data analysis tasks and community tech projects."],
      link: "",
    },
    {
      role: "Founder, Developer & Manager",
      company: "A-One Collection Stores",
      period: "2024 - Present",
      location: "Bharatpur",
      bullets: [
        "Founded and run an e-commerce business selling electronics, fashion, and lifestyle products across Nepal.",
        "Built the full platform in Next.js: customer storefront, admin panel, and a Seller Center for multi-vendor selling.",
        "Handle inventory, Daraz marketplace listings, and the cash-on-delivery order flow.",
      ],
      link: "https://www.aonecollectionstores.com.np",
    },
  ],
  skills: {
    programming: ["Python", "JavaScript", "TypeScript", "HTML & CSS", "Java"],
    frameworks: [
      "Django / DRF",
      "FastAPI",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    ml: [
      "Scikit-learn",
      "NumPy & Pandas",
      "Matplotlib / Seaborn",
      "Sentence-BERT",
      "LangChain / RAG",
    ],
    mobile: [
      "React Native",
      "Expo",
      "Android Development",
      "Mobile Architecture",
      "Google Play Publishing",
    ],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    tools: ["Git", "Docker", "VS Code", "Postman", "Linux"],
  },
  projects: [
    {
      slug: "researchgap",
      title: "ResearchGap AI",
      description:
        "A literature-review platform that helps PhD candidates and researchers compile papers, run semantic theme analysis, and pinpoint research gaps grounded in the sources. Live at researchgap.tech.",
      category: "AI/ML",
      techStack: ["Python", "Sentence-BERT", "K-Means", "scikit-learn", "Next.js"],
      liveUrl: "https://www.researchgap.tech",
      image: "/projects/researchgap.jpg",
      problem:
        "Finding a genuine research gap means reading hundreds of papers by hand. Most students and early researchers don't have time for that, so they end up picking topics that are already crowded.",
      architecture:
        "Papers are ingested from sources like arXiv and OpenAlex, embedded with Sentence-BERT, then clustered with K-Means to group them by theme. Bibliometric analysis on each cluster looks at publication counts, recency, and citation activity to surface the underexplored themes. The app itself walks users through collecting papers, clustering them, pinpointing gaps, and exporting a report, with a Next.js frontend.",
    },
    {
      slug: "aone-collection-mobile",
      title: "A-One Collection Mobile App",
      description:
        "Official Android e-commerce mobile app for A-One Collection Stores, published on the Google Play Store. Enables smooth shopping, catalog browsing, and cash-on-delivery checkout across Nepal.",
      category: "Mobile",
      role: "Mobile Developer & Founder",
      techStack: ["React Native", "Android", "REST API", "Next.js Backend"],
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.aonecollection.mobile",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.aonecollection.mobile",
      image: "/projects/a-one-collection-mobile.png",
      problem:
        "Mobile shoppers in Nepal need a fast, native Android app for quick browsing, real-time deal alerts, and reliable cash-on-delivery order placement without Web browser overhead.",
      architecture:
        "Built with React Native for Android and published on Google Play (Package: com.aonecollection.mobile). Communicates via secure REST APIs with the Next.js e-commerce backend for live catalog sync, cart management, and order tracking.",
    },
    {
      slug: "aone-collection-stores",
      title: "A-One Collection Stores",
      description:
        "My own e-commerce business selling electronics, fashion, and lifestyle products across Nepal. I built the whole platform myself: customer storefront, admin panel, Seller Center, and native Android mobile app.",
      category: "Web",
      role: "Founder & Developer",
      techStack: ["Next.js", "React", "React Native", "Android", "Vercel"],
      liveUrl: "https://www.aonecollectionstores.com.np",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.aonecollection.mobile",
      image: "/projects/a-one-collection-stores.png",
      gallery: [
        {
          src: "/projects/a-one-collection-stores.png",
          caption: "Customer storefront with catalog, deals, and COD checkout",
        },
        {
          src: "/projects/a-one-seller-panel.png",
          caption: "Seller Center for multi-vendor selling, preparing for launch",
        },
      ],
      problem:
        "Online shopping in Nepal runs on trust. Customers want cash on delivery, clear return policies, and someone who actually responds. I wanted a store that gets those basics right instead of another dropshipping page.",
      architecture:
        "The platform is a set of Next.js applications deployed on Vercel along with an Android app on Google Play. The customer storefront handles the product catalog, cart, deals, and cash-on-delivery checkout. An admin panel manages products, inventory, orders, and customers. A separate Seller Center is built for multi-vendor selling, and the native Android app is live on Google Play.",
    },
    {
      slug: "build-with-bipin",
      title: "Build With Bipin",
      description:
        "My learning platform and YouTube channel for developers who want to learn AI and software engineering by building real projects. It has structured learning paths, articles, and long-form video walkthroughs.",
      category: "Web",
      role: "Creator",
      techStack: ["Next.js", "React", "Vercel", "YouTube"],
      liveUrl: "https://build.paudelbipin.com.np",
      image: "/projects/build-with-bipin.png",
      problem:
        "Most tutorials chase hype and stop at toy examples. I wanted a place that teaches fundamentals first and walks through production-grade projects end to end, fully open source and free.",
      architecture:
        "A Next.js site deployed on Vercel with structured learning paths from Python fundamentals up to LLM systems. Long-form walkthroughs go on the Build With Bipin YouTube channel, and all project source code lives on GitHub. Content is being built in public.",
    },
    {
      slug: "rag-from-scratch",
      title: "RAG From Scratch",
      description:
        "An open-source, 13-module course on Retrieval-Augmented Generation that I built while learning RAG engineering end to end. Covers ingestion, chunking strategies, vector search, hybrid retrieval, reranking, and conversational RAG.",
      category: "AI/ML",
      techStack: ["Python", "LangChain", "ChromaDB", "Ollama"],
      githubUrl: "https://github.com/Bipin-Paudel/rag-from-scratch",
      image: "/projects/rag-from-scratch.png",
      problem:
        "Most RAG tutorials show one happy-path pipeline and skip the decisions that actually matter: how to chunk documents, which retrieval strategy to use, and how the pieces fit together. I wanted a course that walks through those choices with runnable code.",
      architecture:
        "Thirteen progressive modules in Python notebooks. The first four build the core pipeline from document ingestion to conversational RAG with chat history. The middle modules compare chunking strategies: character-based, recursive, semantic, and LLM-driven. The later modules cover multi-query retrieval, reciprocal rank fusion, hybrid search, and reranking with Cohere. Everything runs locally with Llama 3 through Ollama and ChromaDB for vector storage.",
    },
    {
      slug: "humansign",
      title: "HumanSign",
      description:
        "A privacy-preserving authorship verification system using behavioral biometrics and ML classifiers.",
      category: "AI/ML",
      techStack: ["Python", "Scikit-learn", "FastAPI", "Next.js"],
      liveUrl:
        "https://drive.google.com/file/d/1LSeHxZmkLEUtLuDVUy_04vykA4f8RitQ/view?usp=sharing",
      image: "/projects/humansign.png",
      problem:
        "Distinguish human-typed content from AI-generated or copy-pasted text using behavioral biometrics without collecting personally identifiable information.",
      architecture:
        "Captures keystroke dynamics in the browser, sends encrypted logs to a FastAPI backend. A trained Random Forest classifier analyses the patterns and returns an authorship confidence score. SHA-256 log chaining ensures tamper-proof audit trails.",
    },
    {
      slug: "crisiscare",
      title: "CrisisCare",
      description:
        "A React-based disaster management interface with Maps API integration for real-time disaster visualization. Built at CSITAN Hackfest.",
      category: "Web",
      techStack: ["React", "Maps API", "FastAPI", "PostgreSQL"],
      githubUrl: "https://github.com/Bipin-Paudel/CrisisCare",
      liveUrl: "https://crisis-care-vxqw.vercel.app",
      image: "/projects/crisiscare.jpg",
      problem:
        "First responders and citizens need a real-time, map-centric view of ongoing disasters to coordinate relief efforts efficiently.",
      architecture:
        "Frontend-only React SPA that consumes disaster data and renders interactive map layers using the Maps API. Designed for speed and clarity under emergency conditions.",
    },
    {
      slug: "khata-academy-mis",
      title: "Khata Academy Business Tools",
      description:
        "A financial management information system and set of business tools (Business Model Canvas, Persona Generator, Employee Agreement Generator) built for Khata Academy.",
      category: "Web",
      techStack: ["Laravel", "React", "PostgreSQL", "REST API"],
      liveUrl: "https://tools.khatapreneur.com",
      image: "/projects/khata-academy-mis.jpg",
      problem:
        "Small businesses needed an integrated platform to track finances and generate strategic planning documents without expensive software.",
      architecture:
        "Laravel powers the backend API; React renders the business tools on the frontend. PostgreSQL stores financial records with row-level security.",
    },
  ] satisfies Project[],
};
