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
      className="fixed inset-x-0 bottom-0 z-40 flex justify-between items-center bg-[#F7F3EA]/95 backdrop-blur-md border-t border-[#DED6C9] px-4 py-2 lg:hidden"
    >
      {/* CALL */}
      <Link
        href={`tel:${phoneRaw}`}
        aria-label="Call Iragu Events"
        className="flex-1 flex items-center justify-center gap-1.5 text-xs font-mono text-[#4F918B] hover:text-[#292825]"
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
        className="flex-1 flex items-center justify-center gap-1.5 text-xs font-mono text-[#25D366] hover:text-[#25D366]"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WHATSAPP</span>
      </Link>

      {/* PLAN EVENT */}
      <Link
        href="#contact-form"
        onClick={handleScrollToForm}
        aria-label="Plan your event"
        className="flex-1 flex items-center justify-center gap-1.5 text-xs font-mono text-[#FCFAF6] bg-[#4F918B] hover:bg-[#437D77] rounded-md px-2 py-1.5 transition-colors"
      >
        <span>PLAN EVENT</span>
      </Link>
    </nav>
  );
}
