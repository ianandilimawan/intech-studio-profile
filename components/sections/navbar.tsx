"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t, locale, setLocale } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled 
          ? "bg-[#020202]/80 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-500 group-hover:scale-105 border border-white/20 relative overflow-hidden">
             <Image src="/logo.png" alt="Intech Studio Logo" fill sizes="40px" className="object-cover" />
             <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-1000 -translate-x-full skew-x-12 z-20" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
            Intech Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["about", "services", "products", "process", "portfolio"].map((item) => (
            <Link
              key={item}
              href={`/#${item}`}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
            >
              {t(`navbar.${item}`)}
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <button 
            onClick={() => setLocale(locale === 'en' ? 'id' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider"
          >
            <span className={locale === 'en' ? 'text-primary font-bold' : 'text-white/40'}>EN</span>
            <span className="text-white/20">|</span>
            <span className={locale === 'id' ? 'text-primary font-bold' : 'text-white/40'}>ID</span>
          </button>
          
          <Link href="/#contact" className="hidden md:block group/btn relative">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 group-hover/btn:opacity-70 transition duration-500"></div>
            <Button className="relative bg-[#0a0a0a] border-white/10 hover:bg-[#111] hover:text-white text-white/90 rounded-full px-6 font-medium tracking-wide">
              {t("navbar.letsTalk")}
            </Button>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-b border-white/10 bg-[#050505]/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-4 overflow-hidden"
          >
            {["about", "services", "products", "process", "portfolio"].map((item) => (
              <Link
                key={item}
                href={`/#${item}`}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-white/70 hover:text-white py-2 border-b border-white/5 transition-colors"
              >
                {t(`navbar.${item}`)}
              </Link>
            ))}
            <Link 
              href="/#contact" 
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center py-3 rounded-full bg-primary text-white font-medium text-sm shadow-lg shadow-primary/20"
            >
              {t("navbar.letsTalk")}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

