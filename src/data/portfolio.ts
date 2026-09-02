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
    title: "Python & AI Developer",
    tagline:
      "Computer Science student and Python-focused developer experienced in Django, DRF, FastAPI, PostgreSQL, REST APIs, real-world e-commerce systems, AI/ML, and RAG pipelines.",
    description:
      "Computer Science student at Tribhuvan University and Python-focused developer experienced in Django, DRF, FastAPI, PostgreSQL, REST APIs, and real-world e-commerce systems. Built the complete A-One Collection Stores platform, including backend, admin, Seller Center, and Android app. Also experienced in AI/ML, data analysis, React/Next.js, React Native, and RAG.",
    address: "Bharatpur, Nepal",
    phone: "+977 9844735418",
    email: "paudelbipin19@gmail.com",
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
      degree: "B.Sc. Computer Science and Information Technology (B.Sc. CSIT)",
      institution: "Tribhuvan University, Nepal",
      period: "Final Year · Expected Nov 2027",
    },
    {
      degree: "Higher Secondary Education Board (+2 Science)",
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
      period: "Feb 2026 - Aug 2026",
      location: "Remote",
      bullets: [
        "Work on backend and AI features for an AI skin-analysis app used by 13,000+ people daily.",
        "Built the RAG pipeline powering the product's AI skincare assistant.",
      ],
      link: "https://skinpalai.app",
    },
    {
      role: "Founder, Developer & Manager",
      company: "A-One Collection Stores",
      period: "2024 - Present",
      location: "Bharatpur, Nepal",
      bullets: [
        "Founded and manage an e-commerce platform serving customers across Nepal.",
        "Built the storefront, admin panel, Seller Center, backend services, and mobile app.",
        "Manage product, inventory, marketplace, and order workflows.",
      ],
      link: "https://www.aonecollectionstores.com.np",
    },
    {
      role: "Web Developer",
      company: "Khata Academy",
      period: "Aug 2025 - Jan 2026",
      location: "Bharatpur, Nepal",
      bullets: [
        "Built a Financial MIS for business data tracking and operational workflows.",
        "Developed Business Model Canvas and Persona Generator tools.",
      ],
      link: "https://tools.khatapreneur.com",
    },
  ],
  skills: {
    programming: ["Python", "SQL", "JavaScript", "Java"],
    frameworks: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "REST APIs",
      "API Design",
    ],
    ml: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "NLP",
      "Sentence-BERT",
      "LangChain",
      "RAG",
      "PyMuPDF",
    ],
    mobile: ["React.js", "Next.js", "React Native"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    tools: ["Git", "GitHub", "Docker", "Postman", "Linux"],
  },
  projects: [
    {
      slug: "aone-collection-stores",
      title: "A-One Collection Stores",
      description:
        "An e-commerce platform with storefront, admin panel, Seller Center, backend, and mobile app, including product, order, inventory, and seller workflows.",
      category: "Web",
      role: "Founder & Developer",
      techStack: ["Django", "PostgreSQL", "React", "Next.js", "Android"],
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
        "Online shopping in Nepal runs on trust. Customers want cash on delivery, clear return policies, and someone who actually responds. I built a comprehensive platform with full inventory, multi-seller workflows, and mobile access to serve customers reliably.",
      architecture:
        "Built with Django and PostgreSQL for robust backend services, data models, and business logic. The frontend and admin/seller systems leverage React and Next.js, while a native Android application connects via REST APIs for real-time mobile order and catalog synchronization.",
    },
    {
      slug: "researchgap",
      title: "ResearchGap AI",
      description:
        "An AI platform using semantic embeddings and clustering to analyze research literature and identify potential research gaps.",
      category: "AI/ML",
      techStack: ["Python", "Sentence-BERT", "Scikit-learn", "K-Means", "Next.js"],
      liveUrl: "https://www.researchgap.tech",
      image: "/projects/researchgap.jpg",
      problem:
        "Finding a genuine research gap means reading hundreds of papers by hand. Most students and early researchers don't have time for that, so they end up picking topics that are already crowded.",
      architecture:
        "Papers are ingested from academic sources, embedded with Sentence-BERT, then clustered with K-Means to group them by theme. Bibliometric analysis on each cluster looks at publication counts, recency, and citation activity to surface underexplored themes. The app walks users through collecting papers, clustering them, pinpointing gaps, and exporting a report, with a Next.js frontend.",
    },
    {
      slug: "rag-from-scratch",
      title: "RAG From Scratch",
      description:
        "A 13-module RAG system covering document ingestion, chunking, vector search, reranking, and conversational RAG.",
      category: "AI/ML",
      techStack: ["Python", "LangChain", "ChromaDB", "Ollama"],
      githubUrl: "https://github.com/Bipin-Paudel/rag-from-scratch",
      image: "/projects/rag-from-scratch.png",
      problem:
        "Most RAG tutorials show one happy-path pipeline and skip the decisions that actually matter: how to chunk documents, which retrieval strategy to use, and how the pieces fit together.",
      architecture:
        "Thirteen progressive modules in Python notebooks. The first four build the core pipeline from document ingestion to conversational RAG with chat history. The middle modules compare chunking strategies: character-based, recursive, semantic, and LLM-driven. The later modules cover multi-query retrieval, reciprocal rank fusion, hybrid search, and reranking with Cohere. Everything runs locally with Llama 3 through Ollama and ChromaDB for vector storage.",
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
        "Built with React Native for Android and published on Google Play (Package: com.aonecollection.mobile). Communicates via secure REST APIs with the e-commerce backend for live catalog sync, cart management, and order tracking.",
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
      techStack: ["Django", "React", "PostgreSQL", "REST API"],
      liveUrl: "https://tools.khatapreneur.com",
      image: "/projects/khata-academy-mis.jpg",
      problem:
        "Small businesses needed an integrated platform to track finances and generate strategic planning documents without expensive software.",
      architecture:
        "Financial MIS and business planning tools built with backend REST APIs and interactive React frontends with PostgreSQL database storage.",
    },
  ] satisfies Project[],
};
