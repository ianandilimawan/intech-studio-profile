"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n";

const technologies = [
  "Laravel", "Next.js", "React", "TypeScript", 
  "Node.js", "MySQL", "PostgreSQL", "Docker", 
  "AWS", "Cloudflare", "GitHub", "Tailwind CSS"
];

export function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative overflow-hidden bg-[#020202]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <Badge className="mb-6 bg-white/5 border-white/10 backdrop-blur-md">{t("techStack.badge")}</Badge>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            {t("techStack.title1")} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-primary">{t("techStack.title2")}</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl font-light">
            {t("techStack.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 py-10 relative z-20">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              animate={{
                y: [0, -8, 0],
              }}
              // @ts-ignore
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }
              }}
              whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2 } }}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white/80 font-medium hover:text-white hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-colors cursor-default shadow-xl"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Orbit Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] border border-white/5 rounded-full border-dashed" 
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] border border-white/10 rounded-full" 
        />
        <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-[100px]" />
      </div>
    </section>
  );
}
