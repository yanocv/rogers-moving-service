"use client";

import "./styles.css";

import CTASection from "./components/CTASection";
import DisposalSection from "./components/DisposalSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import IntroductionSection from "./components/IntroductionSection";
import MovingWithEaseSection from "./components/MovingWithEaseSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import StorageSolutionsSection from "./components/StorageSolutionsSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <IntroductionSection />
      <ServicesSection />
      <MovingWithEaseSection />
      <StorageSolutionsSection />
      <DisposalSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
