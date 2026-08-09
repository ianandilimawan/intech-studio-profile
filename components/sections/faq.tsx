"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = useMemo(() => [
    { q: t("faq.items.timeline.q"), a: t("faq.items.timeline.a") },
    { q: t("faq.items.support.q"), a: t("faq.items.support.a") },
    { q: t("faq.items.tech.q"), a: t("faq.items.tech.a") },
    { q: t("faq.items.legacy.q"), a: t("faq.items.legacy.a") },
    { q: t("faq.items.pricing.q"), a: t("faq.items.pricing.a") },
  ], [t]);

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <Badge className="mb-4">{t("faq.badge")}</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t("faq.title1")} <span className="text-white/50">{t("faq.title2")}</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-primary/50 bg-white/5" : "border-white/10 bg-transparent hover:border-white/20 hover:bg-white/5"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-semibold transition-colors ${isOpen ? "text-primary" : "text-white"}`}>
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${isOpen ? "bg-primary/20 text-primary" : "bg-white/5 text-white/50"}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-white/60 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
