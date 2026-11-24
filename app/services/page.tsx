import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ServicesPageContent from "@/components/ServicesPageContent";

export const metadata: Metadata = {
  title: "Events We Plan, Design & Manage | Iragu Events Services",
  description:
    "From personal life milestones to corporate gatherings and large-scale public events, explore our complete event execution capabilities. One Team. Every Detail. Complete Event Responsibility.",
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <ServicesPageContent />
    </PageLayout>
  );
}
