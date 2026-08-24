import Navbar from "@/components/Navbar";
import IraguHero from "@/components/IraguHero";
import TrustSection from "@/components/TrustSection";
import WhatWeDo from "@/components/WhatWeDo";
import CustomisedDecor from "@/components/CustomisedDecor";
import EventShowcase from "@/components/EventShowcase";
import ServicesExperience from "@/components/ServicesExperience";
import EventCreationJourney from "@/components/EventCreationJourney";
import CaseStudies from "@/components/CaseStudies";
import IraguDifference from "@/components/IraguDifference";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import AboutFounder from "@/components/AboutFounder";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black">
      <Navbar />
      
      {/* 01. HERO */}
      <IraguHero />
      
      {/* 02. TRUST / SOCIAL PROOF */}
      <TrustSection />
      
      {/* 03. WHAT WE DO */}
      <WhatWeDo />
      
      {/* 04. CUSTOMISED DÉCOR */}
      <CustomisedDecor />
      
      {/* 05. PORTFOLIO */}
      <EventShowcase />
      
      {/* 06. COMPLETE EVENT SERVICES */}
      <ServicesExperience />
      
      {/* 07. HOW WE WORK */}
      <EventCreationJourney />
      
      {/* 08. CASE STUDIES */}
      <CaseStudies />
      
      {/* 09. WHY IRAGU */}
      <IraguDifference />
      
      {/* 10. TESTIMONIALS */}
      <Testimonials />
      
      {/* 11. LOCATIONS */}
      <Locations />
      
      {/* 12. ABOUT / FOUNDER */}
      <AboutFounder />
      
      {/* 13. PRICING */}
      <Pricing />
      
      {/* 14. FINAL CTA */}
      <FinalCTA />
      
      {/* 15. FOOTER */}
      <Footer />
    </main>
  );
}
