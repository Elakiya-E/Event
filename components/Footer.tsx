"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import EventEnquiryForm from "@/components/EventEnquiryForm";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const brand = siteContent.brand;
  const cta = siteContent.cta;
  const contact = cta.contactDetails;
  const footerData = siteContent.footer;

  return (
    <footer
      id="contact"
      className="w-full bg-[#E8DFD0] pt-16 sm:pt-20 md:pt-28 pb-12 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-[#DED6C9] overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* ── Section 1: Event Enquiry Form & Direct Contact Card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column (7 cols): Event Enquiry Form */}
          <div className="lg:col-span-7">
            <EventEnquiryForm />
          </div>

          {/* Right Column (5 cols): Direct Verified Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 p-5 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl border border-[#DED6C9] bg-[#FCFAF6] lg:sticky lg:top-28">
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo.png"
                  alt="Iragu Events Logo"
                  width={180}
                  height={48}
                  className="object-contain"
                />
              </Link>

              <div className="space-y-1.5">
                <h4 className="text-xl font-serif font-bold text-[#292825]">
                  {footerData.brandName}
                </h4>
                <p className="text-xs font-mono text-[#4F918B] uppercase tracking-widest">
                  {footerData.tagline}
                </p>
                <p className="text-xs text-[#6F6A61] font-light pt-1">
                  {footerData.helpingText}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#6F6A61] pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#4F918B] flex-shrink-0" />
                  <span>{footerData.contactInfo.location}</span>
                </div>
              </div>

              {/* Direct Channels List */}
              <div className="space-y-3 pt-4 border-t border-[#DED6C9] text-sm">
                {/* Phone */}
                <a
                  href={`tel:${footerData.contactInfo.phoneRaw}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#F7F3EA] border border-[#DED6C9] hover:border-[#4F918B]/50 text-[#292825] transition-all group"
                  aria-label={`Call Iragu Events at ${footerData.contactInfo.phone}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#F1EADF] text-[#4F918B] group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6] transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#928B81] uppercase block">
                        Phone
                      </span>
                      <span className="font-mono text-[#292825] font-medium">
                        {footerData.contactInfo.phone}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#4F918B] group-hover:translate-x-0.5 transition-transform uppercase">
                    Call Us
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href={footerData.socialLinks.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/40 hover:border-[#25D366]/60 text-[#292825] transition-all group"
                  aria-label="Chat with Iragu Events on WhatsApp"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#25D366]/20 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-[#FCFAF6] transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#6F6A61] uppercase block">
                        WhatsApp
                      </span>
                      <span className="font-mono text-[#292825] font-medium">
                        {footerData.contactInfo.phone}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#25D366] group-hover:translate-x-0.5 transition-transform uppercase">
                    WhatsApp Us
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${footerData.contactInfo.email}?subject=Event%20Inquiry%20-%20Iragu%20Events`}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#F7F3EA] border border-[#DED6C9] hover:border-[#4F918B]/50 text-[#292825] transition-all group"
                  aria-label={`Email Iragu Events at ${footerData.contactInfo.email}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#F1EADF] text-[#4F918B] group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6] transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#928B81] uppercase block">
                        Email
                      </span>
                      <span className="font-mono text-[#292825] font-medium lowercase text-xs sm:text-sm">
                        {footerData.contactInfo.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#4F918B] group-hover:translate-x-0.5 transition-transform uppercase">
                    Email Us
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href={footerData.socialLinks.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#F7F3EA] border border-[#DED6C9] hover:border-[#4F918B]/50 text-[#292825] transition-all group"
                  aria-label="Visit Iragu Events on Instagram"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#F1EADF] text-[#4F918B] group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6] transition-colors">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#928B81] uppercase block">
                        Instagram
                      </span>
                      <span className="font-mono text-[#292825] font-medium">
                        {contact.instagram}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#928B81] group-hover:text-[#4F918B] transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 2: Structured Client Footer Navigation Grid ── */}
        <div className="pt-16 border-t border-[#DED6C9]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Column 1: Brand Details */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <h4 className="text-sm font-bold font-mono tracking-widest text-[#292825] uppercase">
                {footerData.brandName}
              </h4>
              <p className="text-xs text-[#4F918B] font-mono leading-relaxed">
                {footerData.helpingText}
              </p>
              <p className="text-xs text-[#6F6A61] font-light leading-relaxed">
                {footerData.tagline}
              </p>
            </div>

            {/* Column 2: SERVICES */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#292825] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978]" />
                <span>SERVICES</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-[#6F6A61] font-light">
                {footerData.servicesLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="hover:text-[#4F918B] transition-colors inline-block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: EXPLORE */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#292825] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978]" />
                <span>EXPLORE</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-[#6F6A61] font-light">
                {footerData.exploreLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="hover:text-[#4F918B] transition-colors inline-block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: CONTACT */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#292825] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978]" />
                <span>CONTACT</span>
              </h4>
              <ul className="space-y-3 text-xs text-[#292825] font-light">
                <li>
                  <a
                    href={`tel:${footerData.contactInfo.phoneRaw}`}
                    className="flex items-center gap-2 hover:text-[#4F918B] transition-colors font-mono"
                    aria-label={`Call ${footerData.contactInfo.phone}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-[#4F918B] flex-shrink-0" />
                    <span>{footerData.contactInfo.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${footerData.contactInfo.email}`}
                    className="flex items-center gap-2 hover:text-[#4F918B] transition-colors lowercase"
                    aria-label={`Email ${footerData.contactInfo.email}`}
                  >
                    <Mail className="w-3.5 h-3.5 text-[#4F918B] flex-shrink-0" />
                    <span className="truncate">{footerData.contactInfo.email}</span>
                  </a>
                </li>
                <li className="flex items-center gap-2 text-[#6F6A61]">
                  <MapPin className="w-3.5 h-3.5 text-[#4F918B] flex-shrink-0" />
                  <span>{footerData.contactInfo.location}</span>
                </li>
              </ul>
            </div>

            {/* Column 5: SOCIAL */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#292825] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978]" />
                <span>SOCIAL</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-[#292825] font-light">
                {/* Instagram */}
                <li>
                  <a
                    href={footerData.socialLinks.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#4F918B] transition-colors group"
                    aria-label="Iragu Events Instagram"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-[#4F918B] flex-shrink-0" />
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-[#928B81] group-hover:text-[#4F918B] transition-colors" />
                  </a>
                </li>

                {/* WhatsApp */}
                <li>
                  <a
                    href={footerData.socialLinks.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#25D366] transition-colors group"
                    aria-label="Iragu Events WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366] flex-shrink-0" />
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 text-[#928B81] group-hover:text-[#25D366] transition-colors" />
                  </a>
                </li>

                {/* LinkedIn (Strictly verified — no invented URL) */}
                <li>
                  <a
                    href="#contact"
                    title="LinkedIn profile being updated. Connect via direct contact channels."
                    className="flex items-center gap-2 text-[#6F6A61] hover:text-[#4F918B] transition-colors group"
                    aria-label="LinkedIn (Official profile being updated)"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-[#928B81] group-hover:text-[#4F918B] flex-shrink-0 transition-colors" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Section 3: Bottom Bar (Brand Statement & Copyright) ── */}
        <div className="pt-10 border-t border-[#DED6C9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#928B81]">
          <p className="text-[#292825] font-serif italic text-center sm:text-left text-xs sm:text-sm">
            {footerData.brandStatement}
          </p>
          <p className="font-mono text-[11px] text-[#928B81] text-center sm:text-right">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
