import { BrowserRouter, Routes, Route } from "react-router";
import { CTASection } from "./components/CTASection";
import FeatureSection from "./components/FeatureSection";
import { Footer } from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { StatsSection } from "./components/StatsSection";
import { RequestDeleteAccount } from "./components/RequestDeleteAccount";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <StatsSection />
      <CTASection />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0D0D14] text-white flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/request-delete-account" element={<RequestDeleteAccount />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
