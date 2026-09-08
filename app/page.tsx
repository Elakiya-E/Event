import Navbar from "@/components/Navbar";
import IraguHero from "@/components/IraguHero";
import TrustSection from "@/components/TrustSection";
import WhatWeDo from "@/components/WhatWeDo";
import USPSection from "@/components/USPSection";
import CustomisedDecor from "@/components/CustomisedDecor";
import ServicesExperience from "@/components/ServicesExperience";
import EventShowcase from "@/components/EventShowcase";
import EventCreationJourney from "@/components/EventCreationJourney";
import CaseStudies from "@/components/CaseStudies";
import OurApproach from "@/components/OurApproach";
import IraguDifference from "@/components/IraguDifference";
import AboutFounder from "@/components/AboutFounder";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Locations from "@/components/Locations";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black overflow-x-hidden w-full max-w-full pb-24 md:pb-0">
      <Navbar />
      
      {/* 01. HERO */}
      <IraguHero />
      
      {/* 02. TRUST / SOCIAL PROOF */}
      <TrustSection />
      
      {/* 03. WHAT WE DO / CORE PROPOSITION */}
      <WhatWeDo />

      {/* 03.5. USP — Vision → Understanding → Creativity → Execution */}
      <USPSection />
      
      {/* 04. CUSTOMISED DÉCOR */}
      <CustomisedDecor />

      {/* 05. COMPLETE SERVICES & EVENT CATEGORIES */}
      <ServicesExperience />
      
      {/* 06. PORTFOLIO / OUR WORK */}
      <EventShowcase />
      
      {/* 07. HOW WE WORK / PROCESS */}
      <EventCreationJourney />
      
      {/* 08. CASE STUDIES */}
      <CaseStudies />

      {/* 09. OUR APPROACH */}
      <OurApproach />
      
      {/* 10. WHY IRAGU / DIFFERENTIATORS */}
      <IraguDifference />
      
      {/* 11. ABOUT IRAGU & MEET THE FOUNDER */}
      <AboutFounder />
      
      {/* 12. TESTIMONIALS */}
      <Testimonials />
      
      {/* 13. PRICING */}
      <Pricing />

      {/* 14. LOCATIONS */}
      <Locations />

      {/* 15. FAQ */}
      <FAQ />
      
      {/* 16. FINAL CTA */}
      <FinalCTA />
      
      {/* 17. FOOTER / ENQUIRY FORM */}
      <Footer />
      <MobileCTABar />
    </main>
  );
}
