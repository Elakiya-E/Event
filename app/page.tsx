import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import IraguHero from "@/components/IraguHero";
import CinematicVideoSection from "@/components/CinematicVideoSection";
import WhatWeDo from "@/components/WhatWeDo";
import CaseStudies from "@/components/CaseStudies";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Iragu Events | Complete Event Planning & Management",
  description:
    "Helping People & Brands Create Stress-Free Events. We're not just event decorators — we're your complete event partner. Your Vision. Our Creativity. Complete Event Responsibility.",
};

export default function Home() {
  return (
    <PageLayout offsetNav={false}>
      {/* 01. HERO — Introduce IRAGU EVENTS and complete event management */}
      <IraguHero />

      {/* 02. COMPLETE EVENT MANAGEMENT VIDEO — Planning, décor, catering, photography, sound & execution */}
      <CinematicVideoSection />

      {/* 03. ABOUT / BRAND INTRODUCTION — Who IRAGU is, our philosophy & what makes us different */}
      <WhatWeDo showCoreValueJourney={false} />

      {/* 04. CASE STUDIES — Documented event challenges, planning, on-ground execution & results */}
      <CaseStudies />

      {/* 05. CONTACT / FINAL ENQUIRY CTA — Plan your event with our team */}
      <FinalCTA />
    </PageLayout>
  );
}
