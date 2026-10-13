'use client';

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { RecentProjects } from "@/components/recent-projects";
import CardSection from "@/components/card/CardSection";
import Hero from "@/components/hero/Hero";
import AboutMe from "@/components/sections/AboutMe";
import ResumeSection from "@/components/sections/ResumeSection";
import TechnicalSkills from "@/components/sections/TechnicalSkills";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import App from "@/components/band/App";

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-x-clip bg-black-100 px-5 sm:px-10">
      <Navigation />

      <div style={{ minHeight: "100vh", width: "100vw", backgroundColor: "black" }}>
        <App />
      </div>

      <div className="w-full max-w-7xl">
        <Hero />
        <AboutMe />
        <ResumeSection />
        <TechnicalSkills />
        <EducationSection />
        <RecentProjects />
        <ExperienceSection />
        <CardSection />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
