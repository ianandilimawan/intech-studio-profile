"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const { t } = useLanguage();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // Smooth spring for parallax
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates -1 to 1
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Core glow */}
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[80vw] h-[50vh] bg-primary/20 rounded-full blur-[150px] mix-blend-screen opacity-50" />
        
        {/* Animated glowing orbs that follow mouse slightly */}
        <motion.div 
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ x: -mousePosition.x * 2, y: -mousePosition.y * 2 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen" 
        />
        
        {/* Refined Noise Texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col items-center">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-1 text-sm font-medium text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-colors hover:bg-white/10">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              {t("hero.badge")}
            </div>
          </motion.div>

          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]"
            >
              {t("hero.title1")} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">
                {t("hero.title2")}
              </span>{" "}
              <br className="hidden md:block" />
              {t("hero.title3")}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <Link href="mailto:intechstudio8@gmail.com">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 font-medium px-8 h-12 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                {t("hero.ctaPrimary")}
              </Button>
            </Link>
            <Link href="/#portfolio">
              <Button size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/10 font-medium px-8 h-12 text-white hover:text-white">
                {t("hero.ctaSecondary")}
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Advanced Abstract CSS Illustration */}
        <motion.div 
          style={{ opacity, scale }}
          className="mt-24 md:mt-32 relative h-[50vh] md:h-[65vh] w-full perspective-1000 max-w-6xl mx-auto"
        >
          {/* Main Dashboard Panel */}
          <motion.div
            style={{ y: springY1, rotateX: mousePosition.y * -0.5, rotateY: mousePosition.x * 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[95%] md:w-[80%] aspect-[16/10] rounded-3xl border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-3xl shadow-[0_30px_100px_-20px_rgba(0,0,0,1),inset_0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-primary/[0.05] pointer-events-none" />
            
            {/* Window Chrome */}
            <div className="flex h-12 border-b border-white/5 bg-black/40 items-center px-6 gap-2">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>
              <div className="mx-auto px-8 py-1.5 rounded-full bg-white/5 border border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-white/40 text-xs font-mono tracking-wider">intech-ai-engine.app</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8 h-[calc(100%-3rem)] flex flex-col gap-6 relative">
              
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <div className="h-7 w-40 bg-white/20 rounded-md" />
                  <div className="h-4 w-64 bg-white/10 rounded-md" />
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-32 bg-primary/20 rounded-lg border border-primary/30 relative overflow-hidden flex items-center justify-center">
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                     <span className="text-primary text-xs font-bold tracking-widest">AI ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Grid Layout */}
              <div className="flex gap-6 flex-1">
                {/* Sidebar */}
                <div className="w-[200px] hidden md:flex flex-col gap-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`h-11 w-full rounded-xl transition-colors ${i === 1 ? 'bg-primary/20 border border-primary/30' : 'bg-white/5'}`} />
                  ))}
                  <div className="mt-auto h-24 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-4">
                     <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                        <motion.div 
                          animate={{ width: ["20%", "80%", "40%"] }} 
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="h-full bg-primary rounded-full" 
                        />
                     </div>
                     <div className="text-xs text-white/40">Model Training...</div>
                  </div>
                </div>
                
                {/* Main Content Area */}
                <div className="flex-1 flex flex-col gap-6">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-6 h-32">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white/5 rounded-2xl border border-white/5 p-5 flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/40 transition-colors duration-500" />
                        <div className="h-4 w-1/2 bg-white/10 rounded-md" />
                        <div className="h-8 w-3/4 bg-white/20 rounded-md" />
                      </div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="flex-1 bg-white/5 rounded-2xl border border-white/5 p-6 flex flex-col gap-6 relative overflow-hidden">
                    <div className="h-5 w-1/4 bg-white/10 rounded-md" />
                    
                    {/* Animated Waveform / Chart */}
                    <div className="flex-1 w-full flex items-end gap-3 justify-between px-2 pb-2">
                      {[40, 70, 45, 90, 65, 85, 100, 75, 50, 80, 110, 85, 95].map((h, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ height: "10%" }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
                          className="w-full relative group rounded-t-sm bg-white/10 overflow-hidden" 
                        >
                          <motion.div 
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                            className="absolute inset-0 bg-gradient-to-t from-primary/20 to-primary" 
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Floating Mobile App Panel */}
          <motion.div
            style={{ y: springY2, rotateX: mousePosition.y * 0.5, rotateY: mousePosition.x * -0.5 }}
            className="absolute right-[2%] md:right-[8%] top-[30%] w-[130px] md:w-[200px] aspect-[9/19] rounded-[2.5rem] border-[6px] border-[#1a1a1a] bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] overflow-hidden z-20"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-[#1a1a1a] rounded-b-xl z-30 flex justify-center items-center">
              <div className="w-8 h-1 rounded-full bg-white/10" />
            </div>
            
            <div className="p-4 flex flex-col gap-4 pt-10 h-full relative bg-gradient-to-b from-primary/10 to-transparent">
              
              <div className="flex justify-between items-center relative z-10 mb-1">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary/50 animate-pulse" />
                </div>
                <div className="h-3 w-16 bg-white/10 rounded-full" />
              </div>
              
              <div className="h-24 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-xl border border-white/10 relative z-10 p-4 flex flex-col justify-end overflow-hidden group">
                <div className="h-3 w-1/2 bg-white/40 rounded-sm mb-2 relative z-10" />
                <div className="h-6 w-3/4 bg-white/90 rounded-sm relative z-10" />
              </div>

              <div className="grid grid-cols-2 gap-3 relative z-10">
                 {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="aspect-square bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-1.5">
                     <div className="w-6 h-6 rounded-full bg-white/10" />
                     <div className="w-8 h-1.5 rounded bg-white/5" />
                   </div>
                 ))}
              </div>
              
              <div className="mt-auto h-12 bg-white/5 rounded-xl border border-white/5 relative overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }} 
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" 
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats - Refined */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 relative z-20 mt-10 md:mt-20"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {[
          { label: "Projects Delivered", value: "150+" },
          { label: "Happy Clients", value: "98%" },
          { label: "Years Experience", value: "10+" },
          { label: "Support", value: "24/7" },
        ].map((stat, i) => (
          <div key={i} className="text-center group">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">{stat.value}</h3>
            <p className="text-white/50 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

