import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Contact Us | Iragu Events — Complete Event Planning & Management",
  description:
    "Planning an event? Have an idea you've been imagining? Or simply don't know where to start? Tell us about it. Our team will understand your requirements and help you plan the next step.",
};

export default function ContactPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black overflow-x-hidden w-full max-w-full">
      <Navbar />
      <div className="pt-20">
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
