export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  tags: string[];
  status: string;
  overview: string;
  problem: string;
  architecture: string;
  technicalDetails: string[];
  formula?: string;
  repoUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface Coursework {
  code: string;
  title: string;
  platform: string;
  type: "Coursework" | "Independent Research" | "Specialization";
  status: "Completed Learning" | "Active Study" | "Ongoing";
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  employmentType: string;
  dates?: string;
  location?: string;
  status: "Internship Offer" | "Completed" | "Active";
  description: string;
  contributions?: string[];
  technologies?: string[];
}

export const portfolioData = {
  profile: {
    name: "Shambhavi Jha",
    role: "AI/ML Engineer · Data Scientist · Applied AI Research",
    institution: "Birla Institute of Technology, Mesra",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2025–Present",
    cgpa: "8.7",
    location: "Ranchi, India",
    email: "shambhavijha0504@gmail.com",
    githubUrl: "https://github.com/shambhavijhacodes0504",
    linkedinUrl: "https://www.linkedin.com/in/shambhavi-jha0405/",
    
    headline: "Building intelligent systems from data, models, and ideas.",
    supportingIntro:
      "I explore machine learning, semantic search, computer vision, and data-driven problem solving to turn technical ideas into useful applications.",
    
    aboutParagraph1:
      "I'm Shambhavi Jha, a BCA student at Birla Institute of Technology, Mesra, with an interest in machine learning, data science, and applied AI research. I enjoy exploring how data, algorithms, and intelligent systems can solve practical problems, from computer vision to semantic recommendation systems.",
    aboutParagraph2:
      "My work centers on data exploration, predictive modeling, semantic representations, and building interactive tools around machine learning pipelines. I am particularly curious about how models formulate intermediate representations and how their decisions can be analyzed, evaluated, and explained.",
    
    // Exact path to the profile portrait / technical visual.
    // Replace this file at public/images/profile/shambhavi-portrait.jpg with your genuine photo.
    portraitPath: "/images/profile/shambhavi-portrait.jpeg",
    hasGenuinePortrait: true,
  },

  navigation: [
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" },
  ],

  projects: [
    {
      id: "project-01",
      number: "01",
      title: "Loan Approval Prediction: ML vs. LLM-Driven Decision System",
      category: "Machine Learning · LLM Comparison · Decision Systems",
      description:
        "A comparative loan-approval workflow evaluating traditional machine learning models (Random Forest, Logistic Regression) against an LLM-assisted decision approach.",
      coverImage: "/images/projects/crm-analytics-cover.jpg",
      tags: ["Python", "Pandas", "Scikit-learn", "Flask", "OpenAI API", "Random Forest", "Logistic Regression"],
      status: "Documented Implementation",
      overview:
        "Developed a comparative loan-approval workflow evaluating traditional models against an LLM-assisted decision approach using LendingClub data attributes, feature engineering, and a Flask explanation interface.",
      problem:
        "Evaluating the trade-offs between interpretable tabular classifiers and LLM reasoning prompts for high-stakes loan underwriting and risk sensitivity.",
      architecture:
        "LendingClub Dataset -> Preprocessing & Feature Engineering -> Scikit-learn Models (Random Forest / Logistic Regression) & OpenAI API Prompt Engine -> Flask Evaluation Interface -> Comparison Metrics & Explanations.",
      technicalDetails: [
        "Developed a comparative loan-approval workflow evaluating traditional models, including Random Forest and Logistic Regression, against an LLM-assisted decision approach",
        "Designed preprocessing and feature-engineering pipelines for applicant attributes such as credit history, employment type, and regional factors",
        "Used the LendingClub loan dataset as the project data source for credit evaluation",
        "Built a Flask interface to compare model predictions and contextual explanations",
      ],
      repoUrl: "",
      demoUrl: "",
    },
    {
      id: "project-02",
      number: "02",
      title: "Cross Recommendation System",
      category: "NLP · Semantic Search · Recommendation Systems",
      description:
        "A multi-modal recommendation engine linking themes across movies, books, songs, and games using sentence transformers and blended similarity scoring.",
      coverImage: "/images/projects/cross-recommendation-cover.jpg",
      tags: [
        "Sentence Transformers",
        "all-MiniLM-L6-v2",
        "NumPy",
        "FastAPI",
        "PostgreSQL",
        "React",
        "Cosine Similarity",
      ],
      status: "Documented Implementation",
      overview:
        "Maps textual narratives and synopses across disparate cultural mediums into a unified 384-dimensional vector space, enabling serendipitous cross-domain exploration.",
      formula: "final_score = (0.8 × cosine_similarity) + (0.2 × popularity_score)",
      problem:
        "Traditional recommenders operate within walled silos (books only or cinema only). Bridging categories requires semantic alignment without letting commercial popularity overwhelm thematic relevance.",
      architecture:
        "Content Corpus -> Sentence Transformers (all-MiniLM-L6-v2) -> 384-dim Dense Embeddings -> Vector Similarity Index (NumPy Cosine) -> Blended Scoring & Category Diversity Balancer -> FastAPI REST -> Vite/React Interface.",
      technicalDetails: [
        "Dense semantic representations produced via all-MiniLM-L6-v2 embeddings (384 dimensions)",
        "Documented scoring formula: final_score = (0.8 × cosine_similarity) + (0.2 × popularity_score)",
        "Category diversity balancing ensuring proportional discovery across literature, cinema, music, and interactive games",
        "FastAPI asynchronous backend with PostgreSQL metadata persistence",
      ],
      repoUrl: "",
      demoUrl: "",
    },
    {
      id: "project-03",
      number: "03",
      title: "Artificial Wisdom System",
      category: "Applied AI · Machine Learning · Explainability",
      description:
        "An ongoing experimental research framework investigating adaptive learning heuristics, reasoning concepts, and explainable AI interfaces.",
      coverImage: "/images/projects/artificial-wisdom-cover.jpg",
      tags: [
        "Python",
        "Scikit-learn",
        "Streamlit",
        "Explainable AI",
        "Feature Attribution",
        "Adaptive Learning",
      ],
      status: "Ongoing Research Framework",
      overview:
        "Explores how predictive models can provide human-interpretable reasoning pathways rather than opaque black-box outputs, with interactive inference dashboards in Streamlit.",
      problem:
        "Complex decision models frequently fail to expose the causal factors driving specific predictions, restricting their utility in academic exploration and critical analysis.",
      architecture:
        "Input Feature Matrix -> Intermediate Representation Layer -> Adaptive Heuristic Engine -> Interpretability Inspector (Streamlit) -> Feature Attribution Heatmaps.",
      technicalDetails: [
        "Interactive inference and visual attribution inspections implemented via Streamlit",
        "Analysis of feature sensitivities and perturbation responses to evaluate explanatory consistency",
        "Distinguishes experimental research concepts from fully validated intelligent reasoning claims",
      ],
      repoUrl: "",
      demoUrl: "",
    },
    {
      id: "project-04",
      number: "04",
      title: "AI-Driven CRM Analytics System",
      category: "Data Science · Predictive Analytics · Full-Stack Development",
      description:
        "An end-to-end analytics application performing unsupervised customer segmentation, lead scoring, and exploratory retention forecasting.",
      coverImage: "/images/projects/crm-analytics-cover.jpg",
      tags: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "React.js",
        "Node.js",
        "MongoDB",
        "EDA",
      ],
      status: "Full-Stack System",
      overview:
        "Combines exploratory data analysis, statistical clustering, and predictive lead qualification into an accessible dashboard for commercial insights.",
      problem:
        "Unstructured sales logs contain significant noise and sparse interaction histories, making early lead prioritization unreliable without systematic feature engineering.",
      architecture:
        "Data Ingestion -> Cleaning & Feature Engineering (Pandas) -> Clustering & Scoring Pipeline (Scikit-learn) -> Node/Express API with MongoDB -> React Frontend.",
      technicalDetails: [
        "Exploratory Data Analysis (EDA) uncovering key engagement drivers for conversion",
        "Unsupervised customer clustering separating high-intent enterprise accounts from casual users",
        "Modular dashboard interface presenting lead conversion probabilities and cohort distributions",
      ],
      repoUrl: "",
      demoUrl: "",
    },
  ] as ProjectItem[],

  skillCategories: [
    {
      title: "Programming Languages",
      description: "Core algorithmic logic, software implementation, and computational modeling",
      skills: ["Python", "C", "C++", "SQL", "Java (basic)", "JavaScript (basic)"],
    },
    {
      title: "Machine Learning & Data Science",
      description: "Data exploration, feature transformations, predictive inference, and explainability",
      skills: [
        "Machine Learning",
        "Data Analysis",
        "Data Preprocessing",
        "Feature Engineering",
        "Model Evaluation",
        "Explainable AI",
      ],
    },
    {
      title: "Libraries & Frameworks",
      description: "Specialized toolkits for numerical computation, vector embeddings, and web services",
      skills: [
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Sentence Transformers",
        "Streamlit",
        "Flask",
        "FastAPI",
      ],
    },
    {
      title: "Web Development & Databases",
      description: "Full-stack components, reactive interfaces, and relational/document persistence",
      skills: ["React.js", "Node.js", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Tools & Core CS",
      description: "Foundational computer science principles, version control, and system environments",
      skills: [
        "Git",
        "GitHub",
        "Linux (basics)",
        "Data Structures and Algorithms",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Computer Networks",
        "Computer Architecture",
      ],
    },
  ] as SkillCategory[],

  researchCoursework: [
    {
      code: "CS221",
      title: "Artificial Intelligence: Principles and Techniques",
      platform: "Stanford OpenCourseWare",
      type: "Coursework",
      status: "Completed Learning",
    },
    {
      code: "CS229",
      title: "Machine Learning",
      platform: "Stanford OpenCourseWare",
      type: "Coursework",
      status: "Completed Learning",
    },
    {
      code: "CS230",
      title: "Deep Learning",
      platform: "Stanford OpenCourseWare",
      type: "Coursework",
      status: "Completed Learning",
    },
    {
      code: "CS224N",
      title: "Natural Language Processing with Deep Learning",
      platform: "Stanford OpenCourseWare",
      type: "Coursework",
      status: "Completed Learning",
    },
    {
      code: "DS-ML-NLP",
      title: "Data Science, Machine Learning, Deep Learning and NLP Bootcamp",
      platform: "Udemy (Krish Naik)",
      type: "Specialization",
      status: "Completed Learning",
    },
    {
      code: "RES-01",
      title: "Artificial Wisdom: Causal Heuristics & Explainable ML",
      platform: "Birla Institute of Technology, Mesra",
      type: "Independent Research",
      status: "Ongoing",
    },
  ] as Coursework[],

  education: {
    institution: "Birla Institute of Technology, Mesra",
    degree: "Bachelor of Computer Applications (BCA)",
    location: "Ranchi, Jharkhand, India",
    period: "2025–Present",
    cgpa: "8.7",
    highlights: [
      "Focused coursework in data structures, algorithms, mathematical foundations, and database systems",
      "Applied academic projects in machine learning, vector embeddings, and computer vision",
      "Consistently maintaining an academic performance of 8.7 CGPA",
    ],
  },

  experiences: [
    {
      id: "exp-01",
      role: "AI/ML Software Engineer Intern",
      organization: "Be11 Sports Technologies Private Limited",
      employmentType: "Internship",
      status: "Internship Offer",
      description:
        "Selected for an AI/ML Software Engineer Intern role focused on technology, AI/ML, and product development initiatives.",
      contributions: [
        "Selected for an AI/ML Software Engineer Intern role focused on technology, AI/ML, and product development initiatives.",
      ],
      technologies: ["AI/ML Engineering", "Intelligent Systems", "Product Development"],
    },
    {
      id: "exp-02",
      role: "Product Engineering & Data Science Intern",
      organization: "Vacation Mantra Technologies Pvt. Ltd.",
      employmentType: "Internship",
      dates: "June 2026 – August 2026",
      location: "Hybrid",
      status: "Completed",
      description:
        "Contributed to product engineering and data science workflows, supporting application development and data-driven features.",
      contributions: [
        "Contributed to product engineering and data science workflows, supporting application development and data-driven features.",
        "Worked with Python and software development tools to support data processing, product functionality, and AI-driven initiatives.",
        "Collaborated on implementation tasks connecting technical requirements with usable product features.",
      ],
      technologies: [
        "Python",
        "React.js",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "Data Processing",
        "AI-Driven Initiatives",
      ],
    },
  ] as ExperienceItem[],
};
