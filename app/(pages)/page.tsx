import HeroSection from "@/shared/components/HeroSection";
import LogoSlideSection from "@/shared/components/LogoSlideSection";
import AboutSection from "@/shared/components/AboutSection";
import StatsSection from "@/shared/components/StatsSection";
import ContactSection from "@/shared/components/ContactSection";

function Home() {
  return (
    <main className="flex flex-col w-full h-full relative">
      <HeroSection />
      {/* <LogoSlideSection /> */}
      <AboutSection />
      <StatsSection />
      <ContactSection />
    </main>
  );
}

export default Home;
