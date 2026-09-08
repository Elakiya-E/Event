"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { siteContent } from "@/data/siteContent";

/**
 * Fixed bottom action bar for mobile devices.
 * Shows three primary actions: CALL, WHATSAPP, PLAN EVENT.
 * Visible on screens smaller than the xl breakpoint.
 */
export default function MobileCTABar() {
  const { phoneRaw, whatsappUrl } = siteContent.brand.contact;

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const form = document.getElementById("contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      aria-label="Mobile quick contact actions"
      className="fixed inset-x-0 bottom-0 z-40 flex justify-between items-center bg-neutral-900/90 backdrop-blur-md border-t border-neutral-800 px-4 py-2 lg:hidden"
    >
      {/* CALL */}
      <Link
        href={`tel:${phoneRaw}`}
        aria-label="Call Iragu Events"
        className="flex-1 flex items-center justify-center gap-1.5 text-xs font-mono text-teal-400 hover:text-white"
      >
        <Phone className="w-4 h-4" />
        <span>CALL</span>
      </Link>

      {/* WHATSAPP */}
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Iragu Events on WhatsApp"
        className="flex-1 flex items-center justify-center gap-1.5 text-xs font-mono text-[#25D366] hover:text-white"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WHATSAPP</span>
      </Link>

      {/* PLAN EVENT */}
      <Link
        href="#contact-form"
        onClick={handleScrollToForm}
        aria-label="Plan your event"
        className="flex-1 flex items-center justify-center gap-1.5 text-xs font-mono text-teal-500 bg-teal-950 hover:bg-teal-900 rounded-sm px-2 py-1"
      >
        <span>PLAN EVENT</span>
      </Link>
    </nav>
  );
}
