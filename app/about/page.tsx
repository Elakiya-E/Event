import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import AboutFounder from "@/components/AboutFounder";
import OurApproach from "@/components/OurApproach";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "About Iragu Events | Our Story & Founder",
  description:
    "Learn about Iragu Events, our founder Bezlon, our philosophy, and our thoughtful approach to stress-free celebration and complete event management.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      {/* ABOUT IRAGU & MEET THE FOUNDER */}
      <AboutFounder />

      {/* OUR APPROACH & 5-QUESTION METHOD */}
      <OurApproach />

      {/* FINAL CTA */}
      <FinalCTA />
    </PageLayout>
  );
}

