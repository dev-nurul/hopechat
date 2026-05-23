import { CTASection } from "./components/CTASection";
import FeatureSection from "./components/FeatureSection";
import { Footer } from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { StatsSection } from "./components/StatsSection";

export default function App() {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
