import HeroSection from "@/shared/components/HeroSection";
import LogoSlideSection from "@/shared/components/LogoSlideSection";
import AboutSection from "@/shared/components/AboutSection";
import StatsSection from "@/shared/components/StatsSection";
import ContactSection from "@/shared/components/ContactSection";
import ProjectsSection from "@/shared/components/ProjectsSection";

function Home() {
  return (
    <main className="flex flex-col w-full h-full relative">
      <HeroSection />
      <AboutSection />
      <LogoSlideSection />
      <StatsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default Home;
