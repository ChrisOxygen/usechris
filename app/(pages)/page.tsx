import AboutSection from "@/shared/components/AboutSection";
import ExperienceSection from "@/shared/components/ExperienceSection";
import HeroSection from "@/shared/components/HeroSection";
import ProjectsSection from "@/shared/components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
    </main>
  );
}
