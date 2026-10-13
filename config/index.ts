import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/shambhavijhacodes0504/my-protfolio-website",
  github: "https://github.com/shambhavijhacodes0504",
  linkedin: "https://www.linkedin.com/in/shambhavi-jha0405/",
  ownerName: "Shambhavi",
  ownerEmail: "shambhavijha0504@gmail.com",
  resumeUrl: "/resume/Shambhavi_Jha_Resume.pdf",
} as const;

export const assetConfig = {
  portrait: "/images/profile/shambhavi-portrait.jpeg",
  projects: {
    objectDetection: "/images/projects/object-detection-cover.jpg",
    crossRecommendation: "/images/projects/cross-recommendation-cover.jpg",
    artificialWisdom: "/images/projects/artificial-wisdom-cover.jpg",
    crmAnalytics: "/images/projects/crm-analytics-cover.jpg",
  },
} as const;

export const siteConfig: Metadata = {
  metadataBase: new URL("https://shambhavijhacodes0504.github.io/my-protfolio-website"),
  title: "Shambhavi Portfolio | AI/ML, Data Science & Applied AI Research",
  description:
    "Explore Shambhavi's portfolio in machine learning, data science, semantic recommendation systems, computer vision, and applied AI research. BCA Student at BIT Mesra.",
  keywords: [
    "Shambhavi",
    "Shambhavi Portfolio",
    "AI/ML Engineer",
    "Data Scientist",
    "Applied AI Research",
    "Machine Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Recommendation Systems",
    "BIT Mesra",
    "Python",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: links.ownerName,
      url: links.github,
    },
  ],
  creator: links.ownerName,
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shambhavijhacodes0504.github.io/my-protfolio-website",
    title: "Shambhavi Portfolio | AI/ML Engineer & Data Scientist",
    description:
      "Explore Shambhavi's portfolio in machine learning, data science, semantic recommendation systems, computer vision, and applied AI research.",
    siteName: "Shambhavi Portfolio",
    images: [
      {
        url: "/images/profile/shambhavi-portrait.jpeg",
        width: 1200,
        height: 630,
        alt: "Shambhavi — AI/ML Engineer & Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shambhavi Portfolio | Shambhavi",
    description:
      "Explore Shambhavi's portfolio in machine learning, data science, semantic recommendation systems, computer vision, and applied AI research.",
    images: ["/images/profile/shambhavi-portrait.jpeg"],
  },
};
