"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n";
import { useMemo } from "react";

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = useMemo(() => [
    { id: 1, name: t("testimonials.items.sarah.name"), role: t("testimonials.items.sarah.role"), text: t("testimonials.items.sarah.text") },
    { id: 2, name: t("testimonials.items.david.name"), role: t("testimonials.items.david.role"), text: t("testimonials.items.david.text") },
    { id: 3, name: t("testimonials.items.elena.name"), role: t("testimonials.items.elena.role"), text: t("testimonials.items.elena.text") },
    { id: 4, name: t("testimonials.items.michael.name"), role: t("testimonials.items.michael.role"), text: t("testimonials.items.michael.text") },
  ], [t]);

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 text-center mb-16 relative z-10">
        <Badge className="mb-4">{t("testimonials.badge")}</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          {t("testimonials.title1")} <span className="text-white/50">{t("testimonials.title2")}</span>
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden w-full group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex flex-none gap-6 px-3"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-[350px] md:w-[450px] p-8 rounded-3xl border border-white/10 bg-card/50 backdrop-blur-sm flex-none hover:bg-card hover:border-white/20 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center text-white font-bold text-lg border border-white/10">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-white/50 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed text-lg">"{t.text}"</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
