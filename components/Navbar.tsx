'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'Event World', href: '#event-world' },
    { label: 'Creation Journey', href: '#creation' },
    { label: 'The Difference', href: '#difference' },
    { label: 'Customised Décor', href: '#decor' },
    { label: 'Portfolio', href: '#showcase' },
    { label: 'Services', href: '#services' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 pointer-events-none mix-blend-difference text-white">
      <div className="flex items-center justify-between pointer-events-auto">
        <Link href="/" className="text-xl md:text-2xl font-serif tracking-widest uppercase">
          Iragu Events
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-widest">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="/#plan" className="border border-white/50 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors mix-blend-normal">
            Plan Your Event
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-background text-foreground z-50 flex flex-col p-6 pointer-events-auto mix-blend-normal"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-serif tracking-widest uppercase" onClick={() => setIsOpen(false)}>
                Iragu Events
              </Link>
              <button 
                className="p-2 -mr-2"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6 mt-20 text-2xl font-serif tracking-wide uppercase">
              {links.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
              <div className="mt-8">
                <Link href="/#plan" onClick={() => setIsOpen(false)} className="inline-block border border-border px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors text-base font-sans">
                  Plan Your Event
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
