"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import { useLanguage } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";

export function Process() {
  const { t } = useLanguage();

  const steps = useMemo(() => [
    { id: "01", title: t("process.steps.discovery.title"), desc: t("process.steps.discovery.desc") },
    { id: "02", title: t("process.steps.wireframe.title"), desc: t("process.steps.wireframe.desc") },
    { id: "03", title: t("process.steps.development.title"), desc: t("process.steps.development.desc") },
    { id: "04", title: t("process.steps.testing.title"), desc: t("process.steps.testing.desc") },
    { id: "05", title: t("process.steps.deployment.title"), desc: t("process.steps.deployment.desc") },
    { id: "06", title: t("process.steps.support.title"), desc: t("process.steps.support.desc") },
  ], [t]);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="py-32 relative bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <Badge className="mb-4">{t("process.badge")}</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {t("process.title1")} <span className="text-white/50">{t("process.title2")}</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              style={{ height: lineHeight }} 
              className="w-full bg-gradient-to-b from-primary via-secondary to-accent" 
            />
          </div>

          <div className="flex flex-col gap-16">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex items-center md:justify-between flex-col md:flex-row ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full border-4 border-background bg-card flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <span className="text-sm font-bold text-white/50">{step.id}</span>
                </div>

                {/* Content */}
                <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${
                  idx % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}>
                  <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 hover:bg-white/10 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
