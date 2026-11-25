"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navLinks: NavItem[] = [
  { label: "HOME", href: "/", id: "home" },
  { label: "ABOUT", href: "/about", id: "about" },
  { label: "SERVICES", href: "/services", id: "services" },
  { label: "CUSTOMISED DÉCOR", href: "/customised-decor", id: "customised-decor" },
  { label: "OUR WORK", href: "/our-work", id: "our-work" },
  { label: "CASE STUDIES", href: "/case-studies", id: "case-studies" },
  { label: "WHY IRAGU", href: "/why-iragu", id: "why-iragu" },
  { label: "FAQ", href: "/faq", id: "faq" },
  { label: "CONTACT", href: "/contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Highlight based on current route
  const isCurrent = (item: NavItem) => {
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname === item.href || pathname.startsWith(item.href + "/");
  };

  // Scroll effect for header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FCFAF6]/95 backdrop-blur-md border-b border-[#DED6C9] shadow-[0_4px_20px_rgba(41,40,37,0.06)]"
          : "bg-[#F7F3EA]/90 backdrop-blur-sm border-b border-[#DED6C9]/70"
      }`}
    >
      <div className="w-full h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 logo-container w-[148px] sm:w-[160px]">
          <Image
            src="/images/logo.png"
            alt="Iragu Events Logo"
            width={152}
            height={38}
            className="h-10 sm:h-11 w-auto object-contain transition-opacity duration-300"
            priority
          />
        </Link>

        {/* Desktop Navigation (Clean, Non-Overcrowded, High-Res View) */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center gap-2 2xl:gap-3.5 text-[11px] 2xl:text-xs font-mono font-medium tracking-wider uppercase"
        >
          {navLinks.map((item) => {
            const active = isCurrent(item);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-1 px-1 transition-colors whitespace-nowrap ${
                  active
                    ? "text-[#4F918B] font-semibold"
                    : "text-[#292825] hover:text-[#4F918B]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <span>{item.label}</span>
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4F918B] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Primary Navigation CTA & Phone Contact (Desktop) */}
        <div className="hidden xl:flex items-center gap-2.5 2xl:gap-3 flex-shrink-0">
          <a
            href="tel:+919042429868"
            className="inline-flex items-center gap-1.5 text-[11px] 2xl:text-xs font-mono font-bold tracking-wider text-[#292825] hover:text-[#4F918B] py-1.5 2xl:py-2 px-2.5 2xl:px-3 rounded-md border border-[#DED6C9] hover:border-[#4F918B]/50 bg-[#FCFAF6] hover:bg-white transition-all duration-200 shadow-2xs group"
            aria-label="Call +91 90424 29868"
          >
            <Phone className="w-3.5 h-3.5 text-[#4F918B] transition-transform duration-200 group-hover:scale-110" />
            <span>+91 90424 29868</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 2xl:px-4 py-2 2xl:py-2.5 bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6] font-mono font-bold text-[10px] 2xl:text-xs tracking-wider uppercase transition-all duration-200 shadow-md shadow-[#4F918B]/15 active:scale-95 rounded-md"
          >
            <span>PLAN YOUR EVENT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile / Tablet Controls (Below XL) */}
        <div className="flex xl:hidden items-center gap-2 sm:gap-2.5">
          {/* Quick Call CTA for mobile header */}
          <a
            href="tel:+919042429868"
            aria-label="Call +91 90424 29868"
            className="inline-flex items-center justify-center gap-1.5 min-h-[38px] px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs font-mono font-bold tracking-wider rounded-md border border-[#4F918B]/40 bg-[#FCFAF6] text-[#292825] hover:text-[#4F918B] hover:border-[#4F918B] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#4F918B]" />
            <span className="hidden sm:inline">+91 90424 29868</span>
            <span className="sm:hidden font-bold">CALL</span>
          </a>

          {/* Quick prominent CTA for mobile header (Visible from 360px+) */}
          <Link
            href="/contact"
            className="hidden min-[360px]:inline-flex items-center min-h-[38px] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider px-3 py-1.5 bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6] shadow-sm transition-all rounded-md"
          >
            PLAN EVENT
          </Link>

          {/* Hamburger Toggle - Minimum 44x44px touch target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-[#DED6C9] bg-[#FCFAF6] text-[#292825] hover:text-[#4F918B] hover:border-[#4F918B]/40 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Hamburger Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-20 bg-[#F7F3EA] backdrop-blur-xl border-t border-[#DED6C9] z-40 overflow-y-auto flex flex-col justify-between px-4 sm:px-6 py-6 sm:py-8"
          >
            <div className="space-y-5 max-w-lg mx-auto w-full">
              <div className="flex items-center justify-between pb-3 border-b border-[#DED6C9]">
                <span className="text-[11px] font-mono tracking-widest text-[#6F6A61] uppercase flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#4F918B]" />
                  Menu Navigation
                </span>
                <span className="text-[10px] font-mono text-[#C7A978]">IRAGU EVENTS</span>
              </div>

              {/* Navigation Items List */}
              <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
                {navLinks.map((item, idx) => {
                  const active = isCurrent(item);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl transition-all ${
                        active
                          ? "bg-[#F1EADF] text-[#4F918B] font-bold border border-[#DED6C9]"
                          : "text-[#292825] hover:text-[#4F918B] hover:bg-[#F1EADF]/60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-[#928B81]">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs sm:text-sm font-mono uppercase tracking-wider">
                          {item.label}
                        </span>
                      </div>
                      {active && (
                        <span className="w-2 h-2 rounded-full bg-[#4F918B]" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Primary Mobile CTA */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6] font-bold font-mono text-xs uppercase tracking-widest transition-all shadow-md shadow-[#4F918B]/15 rounded-md"
                >
                  <span>PLAN YOUR EVENT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Mobile Footer Contact Details */}
            <div className="pt-6 border-t border-[#DED6C9] max-w-lg mx-auto w-full space-y-3">
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <a
                  href="tel:+919042429868"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-[#4F918B]/40 bg-[#FCFAF6] text-[#292825] hover:text-[#4F918B] hover:border-[#4F918B]"
                  aria-label="Call +91 90424 29868"
                >
                  <Phone className="w-3.5 h-3.5 text-[#4F918B]" />
                  <span className="font-semibold">+91 90424 29868</span>
                </a>
                <a
                  href="https://wa.me/919042429868?text=Hello%20Iragu%20Events%2C%20I%20would%20like%20to%20plan%20an%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 text-[#292825] hover:text-[#25D366]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <p className="text-[10px] text-center font-mono text-[#928B81]">
                © 2026 Iragu Events • Nagercoil, Tamil Nadu
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
