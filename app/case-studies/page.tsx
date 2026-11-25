import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import CaseStudies from "@/components/CaseStudies";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Event Case Studies | Iragu Events",
  description:
    "Behind every event is a story. Explore in-depth case studies of grand institutional events like MAGUDAM '26 and fast-turnaround celebrations like SP Grand Days.",
};

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      {/* CASE STUDIES & PROJECT SHOWCASE */}
      <CaseStudies />

      {/* FINAL CTA */}
      <FinalCTA />
    </PageLayout>
  );
}

