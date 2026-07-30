"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Layout, Code, Headset, TrendingUp, ArrowRight } from "lucide-react";
import { useState } from "react";

const reasons = [
  { id: 1, title: "Fast Development", icon: Zap, desc: "Rapid prototyping and agile methodology ensure quick time-to-market without sacrificing quality. We deploy in weeks, not months.", color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  { id: 2, title: "Security First", icon: Shield, desc: "Enterprise-grade security protocols built into the core of every application. Your data is encrypted, backed up, and protected.", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  { id: 3, title: "Modern UI/UX", icon: Layout, desc: "Award-winning designs that captivate users and drive engagement. We don't just make it work, we make it unforgettable.", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { id: 4, title: "Clean Code", icon: Code, desc: "Maintainable, scalable, and fully documented codebases adhering to strict industry best practices.", color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { id: 5, title: "Long-term Support", icon: Headset, desc: "Dedicated maintenance and support to ensure your product grows seamlessly with your business operations.", color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" },
  { id: 6, title: "Business Focused", icon: TrendingUp, desc: "Solutions engineered specifically to solve real business problems, increase efficiency, and maximize your ROI.", color: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
];

export function WhyChooseUs() {
  const [active, setActive] = useState(reasons[0].id);

  return (
    <section className="py-32 relative bg-[#020202]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-20">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-white/5 border-white/10 backdrop-blur-md">Why Choose Us</Badge>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Engineered for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Excellence</span>
            </h2>
          </div>
          <div className="md:ml-auto">
             <p className="text-white/50 text-lg max-w-sm font-light">
               Partnering with us means gaining a dedicated technical team that cares about your success.
             </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-auto lg:h-[600px]">
          {/* Interactive List - Left Sidebar */}
          <div className="w-full lg:w-5/12 flex flex-col gap-3">
            {reasons.map((reason) => {
              const isActive = active === reason.id;
              return (
                <button
                  key={reason.id}
                  onClick={() => setActive(reason.id)}
                  className={`group text-left relative w-full p-5 rounded-2xl transition-all duration-300 flex items-center gap-6 overflow-hidden ${
                    isActive
                      ? "bg-white/[0.08]"
                      : "bg-transparent hover:bg-white/[0.03]"
                  }`}
                >
                  {/* Active Highlight Line */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-r-full" 
                    />
                  )}
                  
                  <div className={`p-3 rounded-xl transition-colors duration-300 ${isActive ? reason.bg + ' ' + reason.color : "bg-white/5 text-white/40 group-hover:text-white/70"}`}>
                    <reason.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-lg font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                      {reason.title}
                    </h3>
                  </div>

                  <ArrowRight className={`w-5 h-5 transition-all duration-300 ${isActive ? "text-white/50 opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`} />
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Panel - Right Side */}
          <div className="w-full lg:w-7/12 h-[500px] lg:h-full relative perspective-1000">
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden">
              {/* Subtle grid background */}
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              <AnimatePresence mode="wait">
                {reasons.map((reason) => (
                  active === reason.id && (
                    <motion.div
                      key={reason.id}
                      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -20, filter: "blur(8px)", position: "absolute" }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 p-12 lg:p-16 flex flex-col items-start justify-center"
                    >
                       {/* Animated Glowing Background Orb */}
                       <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 pointer-events-none transform translate-x-1/3 -translate-y-1/3 ${reason.bg}`} />
                       
                       <motion.div 
                         initial={{ scale: 0.8, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         transition={{ delay: 0.2, type: "spring" }}
                         className={`w-20 h-20 mb-8 rounded-2xl ${reason.bg} ${reason.border} border flex items-center justify-center backdrop-blur-xl ${reason.color} relative`}
                       >
                         <reason.icon className="w-10 h-10 relative z-10" />
                         {/* Pulse effect */}
                         <div className={`absolute inset-0 rounded-2xl ${reason.bg} animate-ping opacity-20`} style={{ animationDuration: '3s' }} />
                       </motion.div>
                       
                       <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                         {reason.title}
                       </h3>
                       
                       <p className="text-xl text-white/60 leading-relaxed max-w-md font-light">
                         {reason.desc}
                       </p>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
