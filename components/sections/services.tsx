"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Terminal, Database, MessageSquare, Cloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRef, useState } from "react";

const services = [
  {
    title: "Custom Software",
    description: "Enterprise-grade scalable systems built with modern architecture and clean code for high-performance operations.",
    icon: Code2,
    colSpan: "md:col-span-2 md:row-span-2",
    color: "from-blue-500 to-purple-500",
    bgAccent: "bg-blue-500/10",
  },
  {
    title: "POS Systems",
    description: "Complete Point of Sale ecosystems with advanced QR ordering.",
    icon: Terminal,
    colSpan: "md:col-span-1 md:row-span-1",
    color: "from-emerald-500 to-teal-500",
    bgAccent: "bg-emerald-500/10",
  },
  {
    title: "WhatsApp Commerce",
    description: "Automated ordering and checkout directly within WhatsApp.",
    icon: MessageSquare,
    colSpan: "md:col-span-1 md:row-span-1",
    color: "from-green-500 to-emerald-500",
    bgAccent: "bg-green-500/10",
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences.",
    icon: Smartphone,
    colSpan: "md:col-span-1 md:row-span-1",
    color: "from-orange-500 to-red-500",
    bgAccent: "bg-orange-500/10",
  },
  {
    title: "Cloud & API",
    description: "Robust backend services and seamless third-party integrations.",
    icon: Cloud,
    colSpan: "md:col-span-1 md:row-span-1",
    color: "from-cyan-500 to-blue-500",
    bgAccent: "bg-cyan-500/10",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="services" className="py-32 relative bg-[#050505]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-white/5 border-white/10 backdrop-blur-md">Our Expertise</Badge>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Everything you need to <br />
              <span className="text-white/40">scale your business.</span>
            </h2>
          </div>
          <div className="text-white/50 max-w-sm text-lg font-light">
            We don't just write code. We architect solutions that give you an unfair advantage.
          </div>
        </div>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(250px,auto)] relative group/container"
        >
          {/* Global spotlight effect for the grid */}
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover/container:opacity-100 z-0 hidden md:block"
            style={{
              background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
            }}
          />

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 md:p-10 transition-all hover:bg-white/[0.04] z-10 ${service.colSpan}`}
            >
              {/* Inner glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl`} />
              
              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                <div className={`w-14 h-14 rounded-2xl ${service.bgAccent} border border-white/10 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white opacity-80 group-hover:opacity-100" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed font-light group-hover:text-white/70 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md bg-white/5">
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-white/50 group-hover:text-white transition-colors"
                  >
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
