"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Katalogin ERP",
    category: "Web Application",
    desc: "A massive multi-tenant ERP system handling thousands of daily B2B transactions.",
    color: "from-emerald-500/20 via-green-500/10 to-transparent",
    accent: "bg-emerald-500",
    image: "/projects/katalogin/mockup-admin.png",
  },
  {
    id: 2,
    title: "InPOS Terminal",
    category: "Fintech & POS",
    desc: "Real-time analytics and POS system dashboard with complete restaurant management.",
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accent: "bg-blue-500",
    image: "/projects/inpos/mockup-pos-dark.png",
  },
  // {
  //   id: 3,
  //   title: "Aura Commerce",
  //   category: "Mobile App",
  //   desc: "A blazing fast cross-platform e-commerce application with AR try-on features.",
  //   color: "from-orange-500/20 via-red-500/10 to-transparent",
  //   accent: "bg-orange-500",
  //   image: "/projects/inpos/mockup-menu.png"
  // },
  // {
  //   id: 4,
  //   title: "MedSync",
  //   category: "Healthcare Portal",
  //   desc: "HIPAA-compliant telemedicine platform connecting thousands of patients.",
  //   color: "from-cyan-500/20 via-blue-500/10 to-transparent",
  //   accent: "bg-cyan-500",
  //   image: null
  // },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-10 md:py-32 relative bg-[#050505]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-white/5 border-white/10 backdrop-blur-md">
              Selected Works
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-tight">
              Featured <br />
              <span className="text-white/40">projects.</span>
            </h2>
          </div>
          <a
            href="#"
            className="group hidden md:inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-medium pb-2 border-b border-white/10 hover:border-primary"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: (i % 2) * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group cursor-pointer flex flex-col ${i % 2 !== 0 ? "md:mt-24" : ""}`}
            >
              <div
                className={`relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 bg-[#0a0a0a] border border-white/10 p-6 flex flex-col items-center justify-center transform-gpu transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-100 transition-opacity duration-700`}
                />

                {/* App UI Mockup */}
                <div className="w-[85%] h-[85%] bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative z-10 transform-gpu transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1">
                  <div className="h-8 border-b border-white/5 bg-white/5 flex items-center px-4 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>

                  <div className="relative w-full h-[calc(100%-2rem)] flex items-center justify-center p-2 bg-black">
                    {project.image ? (
                      <div className="relative w-full h-full rounded-md overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain object-top"
                        />
                      </div>
                    ) : (
                      <div className="p-4 w-full h-full flex flex-col gap-4 opacity-40 group-hover:opacity-60 transition-opacity">
                        <div className="w-1/3 h-4 bg-white/20 rounded" />
                        <div className="flex gap-4 flex-1">
                          <div className="w-1/4 h-full bg-white/10 rounded-lg" />
                          <div className="flex-1 h-full bg-white/5 rounded-lg border border-white/5 flex flex-col p-3 gap-3">
                            <div className="w-full h-1/2 bg-white/5 rounded-md" />
                            <div className="w-full h-1/2 bg-white/5 rounded-md" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20 backdrop-blur-[2px]">
                  <div className="px-6 py-3 rounded-full bg-white text-black font-semibold transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-xl flex items-center gap-2">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`w-2 h-2 rounded-full ${project.accent} shadow-[0_0_10px_currentColor]`}
                  />
                  <span className="text-sm font-medium uppercase tracking-wider text-white/50">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-medium border border-white/10 rounded-full px-6 py-3 bg-white/5"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
