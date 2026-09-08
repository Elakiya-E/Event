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
  { label: "HOME", href: "/#hero", id: "hero" },
  { label: "ABOUT", href: "/#about", id: "about" },
  { label: "SERVICES", href: "/#services", id: "services" },
  { label: "CUSTOMISED DÉCOR", href: "/#customised-decor", id: "customised-decor" },
  { label: "OUR WORK", href: "/#portfolio", id: "portfolio" },
  { label: "CASE STUDIES", href: "/#case-studies", id: "case-studies" },
  { label: "WHY IRAGU", href: "/#why-iragu", id: "why-iragu" },
  { label: "FAQ", href: "/#faq", id: "faq" },
  { label: "CONTACT", href: "/contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Highlight based on route or scroll position
  useEffect(() => {
    if (pathname === "/contact") {
      setActiveId("contact");
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy on homepage
      if (pathname === "/") {
        const sections = navLinks
          .map((item) => document.getElementById(item.id))
          .filter((el): el is HTMLElement => el !== null);

        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section.offsetTop <= scrollPosition) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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

  const isCurrent = (item: NavItem) => {
    if (pathname === "/contact" && item.id === "contact") return true;
    if (pathname === "/" && activeId === item.id) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-neutral-800 shadow-2xl shadow-black/40"
          : "bg-black/70 backdrop-blur-sm border-b border-neutral-900/60"
      }`}
    >
      <div className="w-full h-full max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 logo-container w-[164px]">

          <Image
            src="/images/logo.png"
            alt="Iragu Events Logo"
            width={152}
            height={38}
            className="h-12 w-auto object-contain transition-opacity duration-300 filter drop-shadow-[0_0_2px_rgba(255,255,255,0.6)]"
            priority
          />
        </Link>

        {/* Desktop Navigation (Clean, Non-Overcrowded, High-Res View) */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center gap-4 2xl:gap-5 text-[11px] 2xl:text-xs font-mono tracking-wider uppercase"
        >
          {navLinks.map((item) => {
            const active = isCurrent(item);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-1 transition-colors whitespace-nowrap ${
                  active
                    ? "text-teal-400 font-semibold"
                    : "text-neutral-300 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <span>{item.label}</span>
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Primary Navigation CTA (Desktop) */}
        <div className="hidden xl:flex items-center flex-shrink-0">
          <Link
            href="/#contact-form"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-black font-mono font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-md shadow-teal-500/20 active:scale-95"
          >
            <span>PLAN YOUR EVENT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile / Tablet Controls (Below XL) */}
        <div className="flex xl:hidden items-center gap-2 sm:gap-3">
          {/* Quick prominent CTA for mobile header (Visible from 360px+) */}
          <Link
            href="/#contact-form"
            className="hidden min-[360px]:inline-flex text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider px-3 py-2 bg-teal-500 hover:bg-teal-400 text-black shadow-sm transition-all"
          >
            PLAN EVENT
          </Link>

          {/* Hamburger Toggle - Minimum 44x44px touch target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/80 text-white hover:text-teal-400 hover:border-teal-500/40 transition-colors"
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
            className="fixed inset-0 top-20 bg-black/95 backdrop-blur-xl border-t border-neutral-800 z-40 overflow-y-auto flex flex-col justify-between px-4 sm:px-6 py-6 sm:py-8"
          >
            <div className="space-y-6 max-w-lg mx-auto w-full">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
                <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  Menu Navigation
                </span>
                <span className="text-[10px] font-mono text-teal-400">IRAGU EVENTS</span>
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
                      className={`flex items-center justify-between py-3 px-3 rounded-xl transition-all ${
                        active
                          ? "bg-neutral-900 text-teal-400 font-bold border border-teal-500/30"
                          : "text-neutral-300 hover:text-white hover:bg-neutral-900/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-neutral-500">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-mono uppercase tracking-wider">
                          {item.label}
                        </span>
                      </div>
                      {active && (
                        <span className="w-2 h-2 rounded-full bg-teal-400" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Primary Mobile CTA */}
              <div className="pt-2">
                <Link
                  href="/#contact-form"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2.5 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold font-mono text-xs uppercase tracking-widest transition-all shadow-lg shadow-teal-500/20"
                >
                  <span>PLAN YOUR EVENT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Mobile Footer Contact Details */}
            <div className="pt-8 border-t border-neutral-900 max-w-lg mx-auto w-full space-y-3">
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <a
                  href="tel:+919042429868"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/919042429868?text=Hello%20Iragu%20Events%2C%20I%20would%20like%20to%20plan%20an%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-[#25D366]/30 bg-[#25D366]/10 text-neutral-200 hover:text-white"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <p className="text-[10px] text-center font-mono text-neutral-500">
                © 2026 Iragu Events • Nagercoil, Tamil Nadu
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
