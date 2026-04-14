import AboutSection from "@/shared/components/AboutSection";
import ExperienceSection from "@/shared/components/ExperienceSection";
import HeroSection from "@/shared/components/HeroSection";
import ProjectsSection from "@/shared/components/ProjectsSection";
import TestimonialSection from "@/shared/components/TestimonialSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <TestimonialSection />
    </main>
  );
}
