"use client";

import { useState } from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Footer() {
  const content = siteContent.footer;
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate integration structure
    setTimeout(() => {
      // In production, this would be replaced with actual API call
      // Because there is no backend provided yet, we indicate that it's an intended integration point
      setFormState("success");
      setTimeout(() => setFormState("idle"), 5000); // Reset after 5 seconds
    }, 1000);
  };

  return (
    <footer className="w-full bg-[#050505] text-white py-16 px-6 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Enquiry Form */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            {content.contactForm.title}
          </h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" required placeholder="Name" className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded text-white focus:outline-none focus:border-teal-500 transition-colors" />
              <input type="text" required placeholder="Phone / WhatsApp" className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded text-white focus:outline-none focus:border-teal-500 transition-colors" />
              <input type="text" placeholder="Event Type" className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded text-white focus:outline-none focus:border-teal-500 transition-colors" />
              <input type="text" placeholder="Event Date" className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded text-white focus:outline-none focus:border-teal-500 transition-colors" />
              <input type="text" placeholder="Venue / Location" className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded text-white focus:outline-none focus:border-teal-500 transition-colors" />
              <input type="text" placeholder="Approx. Guest Count" className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded text-white focus:outline-none focus:border-teal-500 transition-colors" />
              <input type="text" placeholder="Approximate Budget" className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded text-white focus:outline-none focus:border-teal-500 transition-colors" />
            </div>
            
            <div className="space-y-4">
              <p className="text-neutral-400 text-sm tracking-widest uppercase">Services Required</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-neutral-300">
                <label className="flex items-center space-x-2"><input type="checkbox" className="accent-teal-500" /> <span>Décor</span></label>
                <label className="flex items-center space-x-2"><input type="checkbox" className="accent-teal-500" /> <span>Complete Planning</span></label>
                <label className="flex items-center space-x-2"><input type="checkbox" className="accent-teal-500" /> <span>Photography</span></label>
                <label className="flex items-center space-x-2"><input type="checkbox" className="accent-teal-500" /> <span>Catering</span></label>
                <label className="flex items-center space-x-2"><input type="checkbox" className="accent-teal-500" /> <span>Entertainment</span></label>
                <label className="flex items-center space-x-2"><input type="checkbox" className="accent-teal-500" /> <span>Other</span></label>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
              <button type="submit" disabled={formState !== "idle"} className="w-full md:w-auto px-8 py-4 bg-teal-500 text-black font-bold uppercase tracking-widest hover:bg-teal-400 transition-colors disabled:opacity-50">
                {formState === "submitting" ? "Submitting..." : formState === "success" ? "Enquiry Ready" : "Submit Enquiry"}
              </button>
              {formState === "success" && (
                <p className="text-teal-400 text-sm tracking-widest uppercase">
                  Your enquiry is ready to be connected (API pending).
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <Image src="/images/logo.png" alt="Iragu Events Logo" width={200} height={54} className="object-contain" />
            <p className="text-neutral-400">Complete Event Planning & Management</p>
            <p className="text-neutral-400 max-w-sm">
              Nagercoil, Kanniyakumari, South Tamil Nadu
            </p>
          </div>
          
          <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Iragu Events. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-teal-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-teal-400 transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
