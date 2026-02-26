export const portfolioData = {
  about: {
    name: "Bipin Paudel",
    title: "Fullstack Developer & Python Developer",
    tagline:
      "Computer Science student from Nepal building real web apps with Python, React, and a bit of machine learning. I care more about things that actually work than things that look impressive.",
    description:
      "I'm studying Computer Science at Tribhuvan University and have been building web apps on the side since I started. My stack is mostly Python and Django on the backend, React and Next.js on the frontend. I've done some ML projects too — mostly classification and data analysis work. I like problems that have a real use case behind them.",
    experience: "1+ Year",
    address: "Bharatpur-11, Chitwan",
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
  },
  education: [
    {
      degree: "B.Sc. Computer Science and Information Technology",
      institution: "Tribhuvan University",
      period: "Feb 2023 – Nov 2027 (Expected)",
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
      role: "Web Developer",
      company: "Khata Academy",
      period: "Aug 2025 – Jan 2026",
      location: "Bharatpur",
      bullets: [
        "Built Financial MIS for business data tracking.",
        "Developed tools like Business Model Canvas and Persona generators.",
        "Worked with Django and React to deliver scalable features.",
      ],
      link: "https://tools.khatapreneur.com",
    },
    {
      role: "Data Fellow",
      company: "Code for Nepal",
      period: "May 2025 – Present",
      location: "Remote",
      bullets: ["Working on data analysis tasks and community tech projects."],
      link: "",
    },
  ],
  skills: {
    programming: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML & CSS", level: 90 },
      { name: "Java", level: 55 },
    ],
    frameworks: [
      { name: "Django / DRF", level: 80 },
      { name: "React.js", level: 75 },
      { name: "Next.js", level: 70 },
      { name: "FastAPI", level: 65 },
      { name: "NestJS", level: 55 },
      { name: "Tailwind CSS", level: 85 },
    ],
    ml: [
      { name: "Scikit-learn", level: 75 },
      { name: "NumPy & Pandas", level: 80 },
      { name: "Matplotlib / Seaborn", level: 70 },
      { name: "Classification Models", level: 72 },
    ],
    databases: [
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "SQLite", level: 80 },
    ],
  },
  projects: [
    {
      slug: "humansign",
      title: "HumanSign – Keystroke Notary",
      description:
        "A privacy-preserving authorship verification system using behavioral biometrics and ML classifiers. ",
      category: "AI/ML",
      techStack: ["Python", "Scikit-learn", "FastAPI", "Next.js"],
      githubUrl: "https://github.com/Bipin-Paudel",
      liveUrl:
        "https://drive.google.com/file/d/1LSeHxZmkLEUtLuDVUy_04vykA4f8RitQ/view?usp=sharing",
      problem:
        "Distinguish human-typed content from AI-generated or copy-pasted text using behavioral biometrics without collecting personally identifiable information.",
      architecture:
        "Captures keystroke dynamics in the browser, sends encrypted logs to a FastAPI backend. A trained Random Forest classifier analyses the patterns and returns an authorship confidence score. SHA-256 log chaining ensures tamper-proof audit trails.",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop",
    },
    {
      slug: "crisiscare",
      title: "CrisisCare – Disaster Management App",
      description:
        "A React-based disaster management interface with Maps API integration for real-time disaster visualization. Built at CSITAN Hackfest.",
      category: "Web",
      techStack: ["React.js", "Maps API", "FastAPI", "PostgreSQL"],
      githubUrl: "https://github.com/Bipin-Paudel/CrisisCare",
      liveUrl: "https://crisis-care-vxqw.vercel.app",
      problem:
        "First responders and citizens need a real-time, map-centric view of ongoing disasters to coordinate relief efforts efficiently.",
      architecture:
        "Frontend-only React SPA that consumes disaster data and renders interactive map layers using the Maps API. Designed for speed and clarity under emergency conditions.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop",
    },
    {
      slug: "khata-academy-mis",
      title: "Khata Academy – Business Tools",
      description:
        "A Financial Management Information System and set of business tools (Business Model Canvas, Persona Generator, Employee Agreement Generator) built for Khata Academy.",
      category: "Web",
      techStack: ["Laravel", "React.js", "PostgreSQL", "REST API"],
      githubUrl: "https://github.com/Bipin-Paudel",
      liveUrl: "https://tools.khatapreneur.com",
      problem:
        "Small businesses needed an integrated platform to track finances and generate strategic planning documents without expensive software.",
      architecture:
        "Laravel powers the backend API; React.js renders dynamic business tools on the frontend. PostgreSQL stores financial records with row-level security.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop",
    },
  ],
};
