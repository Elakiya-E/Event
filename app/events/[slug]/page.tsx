import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventDetailPage from "@/components/EventDetailPage";
import {
  getAllEventPageSlugs,
  getEventPageConfig,
} from "@/data/eventPages";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllEventPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getEventPageConfig(slug);
  if (!config) {
    return {
      title: "Event Service | Iragu Events",
      description: "Explore our event planning and management services.",
    };
  }
  return {
    title: `${config.title} | Iragu Events — Complete Event Planning`,
    description: `${config.tagline}. ${config.description}`,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const config = getEventPageConfig(slug);
  if (!config) {
    notFound();
  }
  return (
    <main className="relative flex flex-col min-h-screen overflow-x-hidden w-full max-w-full">
      <Navbar />
      <EventDetailPage slug={slug} />
      <Footer />
    </main>
  );
}

