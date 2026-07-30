"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe2, Sparkles, BrainCircuit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n";

export function About() {
  const { t } = useLanguage();

  const principlesKeys = ["engineering", "ai", "automation", "ecosystems", "ux"];
  const icons = [Code2, BrainCircuit, Cpu, Globe2, Sparkles];

  return (
    <section id="about" className="py-32 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Badge className="mb-6 border-white/10 bg-white/5 backdrop-blur-md">{t("about.badge")}</Badge>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8"
          >
            {t("about.title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Intech Studio</span>.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 font-light leading-relaxed"
          >
            <p className="mb-6">
              {t("about.description1")}
            </p>
            <p>
              {t("about.description2")}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-[90rem] mx-auto">
          {principlesKeys.map((key, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Icon className="w-10 h-10 text-primary mb-6 opacity-80" />
                <h3 className="text-xl font-semibold text-white mb-3">{t(`about.principles.${key}.title`)}</h3>
                <p className="text-white/50 leading-relaxed font-light">{t(`about.principles.${key}.desc`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
