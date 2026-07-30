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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, locale, setLocale } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const menuItems = ["about", "services", "products", "process", "portfolio"];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#020202]/80 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 cursor-pointer group z-50">
          <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-500 group-hover:scale-105 border border-white/20 relative overflow-hidden">
             <Image src="/logo.png" alt="Intech Studio Logo" fill sizes="40px" className="object-cover" />
             <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-1000 -translate-x-full skew-x-12 z-20" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
            Intech Studio
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
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

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setLocale(locale === 'en' ? 'id' : 'en')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider"
          >
            <span className={locale === 'en' ? 'text-primary' : 'text-white/40'}>EN</span>
            <span className="text-white/20">|</span>
            <span className={locale === 'id' ? 'text-primary' : 'text-white/40'}>ID</span>
          </button>
          
          <Link href="mailto:intechstudio8@gmail.com" className="group/btn relative">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 group-hover/btn:opacity-70 transition duration-500"></div>
            <Button className="relative bg-[#0a0a0a] border-white/10 hover:bg-[#111] hover:text-white text-white/90 rounded-full px-6 font-medium tracking-wide">
              {t("navbar.letsTalk")}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4 z-50">
          <button 
            onClick={() => setLocale(locale === 'en' ? 'id' : 'en')}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors text-[10px] font-medium uppercase tracking-wider"
          >
            <span className={locale === 'en' ? 'text-primary' : 'text-white/40'}>EN</span>
            <span className="text-white/20">|</span>
            <span className={locale === 'id' ? 'text-primary' : 'text-white/40'}>ID</span>
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white/80 hover:text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-[72px] bg-[#020202]/95 backdrop-blur-3xl border-t border-white/10 overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-10 gap-8">
              <nav className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <Link
                    key={item}
                    href={`/#${item}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-medium text-white/80 hover:text-primary transition-colors border-b border-white/5 pb-4"
                  >
                    {t(`navbar.${item}`)}
                  </Link>
                ))}
              </nav>
              
              <Link href="mailto:intechstudio8@gmail.com" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 w-full">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white rounded-xl py-6 text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                  {t("navbar.letsTalk")}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
