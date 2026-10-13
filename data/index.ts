import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Resume", link: "#resume" },
  { name: "Skills", link: "#skills" },
  { name: "Education", link: "#education" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Research", link: "#research" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "About Me",
    description: "I'm Shambhavi Jha, a BCA student at Birla Institute of Technology, Mesra, focused on machine learning, data science, and applied AI research. I explore predictive modeling, semantic search, computer vision, and data-driven problem solving to turn technical ideas into practical applications.",
    title2: "Education",
    description2: "2025 - Present \u00A0\u00A0 Birla Institute of Technology, Mesra",
    description3: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Bachelor of Computer Applications · CGPA 8.7",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Technical Skills",
    description: "Python · Pandas · NumPy · Scikit-Learn · OpenCV · YOLO · Sentence Transformers · FastAPI · PostgreSQL",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Loan Approval: ML vs. LLM Decision System",
    des: "A comparative loan-approval workflow evaluating traditional models (Random Forest, Logistic Regression) against an LLM-assisted decision approach using LendingClub data.",
    img: "/images/projects/crm-analytics-cover.jpg",
    iconLists: ["/ts.svg", "/c.svg", "/re.svg"],
    link: "",
    sourceCode: "",
    status: "Documented Implementation",
  },
  {
    id: 2,
    title: "Cross-Domain Recommendation System",
    des: "A cross-domain recommendation engine using semantic embeddings to discover meaningful connections between movies, books, songs, and games.",
    img: "/images/projects/cross-recommendation-cover.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "",
    sourceCode: "",
    status: "Documented Implementation",
  },
  {
    id: 3,
    title: "Artificial Wisdom System",
    des: "An ongoing experimental research framework exploring adaptive learning concepts, intelligent prediction, and explainable AI.",
    img: "/images/projects/artificial-wisdom-cover.jpg",
    iconLists: ["/c.svg", "/git.svg", "/re.svg"],
    link: "",
    sourceCode: "",
    status: "Ongoing Research Framework",
  },
  {
    id: 4,
    title: "AI-Driven CRM Analytics System",
    des: "A data-driven CRM analytics project exploring customer segmentation, lead scoring, and predictive insights.",
    img: "/images/projects/crm-analytics-cover.jpg",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg"],
    link: "",
    sourceCode: "",
    status: "In Development",
  },
] as const;

export const testimonials = [
  {
    quote: "Shambhavi Jha is dedicated to developing rigorous machine learning models, semantic recommendation systems, and data-driven solutions.",
    name: "Birla Institute of Technology, Mesra",
    title: "Department of Computer Science & Applications",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "Python",
    img: "/c.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Git",
    img: "/git.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "React",
    img: "/re.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Next.js",
    img: "/next.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    img: "/ts.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "Tailwind",
    img: "/tail.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 7,
    name: "SQL",
    img: "/mysql.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 8,
    name: "Three.js",
    img: "/three.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/shambhavijhacodes0504",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shambhavi-jha0405/",
  },
  {
    name: "Email",
    img: "/email.svg",
    link: "mailto:shambhavijha0504@gmail.com",
  },
] as const;

export const techStack = {
  stack1: ["Python", "Pandas", "Scikit-Learn"],
  stack2: ["FastAPI", "React.js", "PostgreSQL"],
} as const;

import { portfolioData, type ExperienceItem } from "./portfolio";
export { portfolioData, type ExperienceItem };
export const experiences: ExperienceItem[] = portfolioData.experiences;


