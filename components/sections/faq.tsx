"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What is your typical project timeline?", a: "Depending on the complexity, our projects usually range from 2 to 6 months. We work in 2-week agile sprints to ensure continuous delivery and feedback." },
  { q: "Do you provide post-launch support?", a: "Yes. We offer comprehensive SLA-based maintenance and support packages to ensure your application remains secure, up-to-date, and fully optimized." },
  { q: "What technologies do you specialize in?", a: "We build primarily with Next.js, React, Node.js, Laravel, and Go. For mobile, we use React Native or Flutter. We deploy on AWS or Google Cloud." },
  { q: "Can you integrate with our existing legacy systems?", a: "Absolutely. We have extensive experience building middleware and secure APIs to connect modern interfaces with legacy enterprise systems." },
  { q: "How do you handle project pricing?", a: "We offer both fixed-price contracts for well-defined scopes and time-and-materials for dynamic, evolving projects. Every engagement starts with a detailed discovery phase." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-10 md:py-32 relative bg-[#050505]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <Badge className="mb-4">FAQ</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Common <span className="text-white/50">Questions</span>
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
