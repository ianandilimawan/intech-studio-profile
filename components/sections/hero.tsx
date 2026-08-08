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
    <section ref={containerRef} className="relative min-h-[100svh] flex flex-col items-center justify-center pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-background to-background">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Core glow - Brighter on mobile */}
        <div className="absolute top-[10%] md:top-[20%] left-[50%] -translate-x-1/2 w-[120vw] md:w-[80vw] h-[60vh] md:h-[50vh] bg-primary/30 md:bg-primary/20 rounded-full blur-[100px] md:blur-[150px] mix-blend-screen opacity-70 md:opacity-50" />
        
        {/* Animated glowing orbs that follow mouse slightly */}
        <motion.div 
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-1/4 left-0 md:left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 md:bg-primary/10 rounded-full blur-[100px] md:blur-[120px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ x: -mousePosition.x * 2, y: -mousePosition.y * 2 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute bottom-1/4 right-0 md:right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-secondary/20 md:bg-secondary/10 rounded-full blur-[100px] md:blur-[120px] mix-blend-screen" 
        />
        
        {/* Refined Noise Texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_80%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10 flex-1 flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-6 md:mb-8"
          >
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-colors hover:bg-white/20">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
              {t("hero.badge")}
            </div>
          </motion.div>

          <div className="overflow-hidden mb-6 md:mb-8 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4 md:mb-8 leading-[1.15] md:leading-[1.1]"
            >
              {t("hero.title1")} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 animate-gradient-x inline-block pb-1">
                {t("hero.title2")}
              </span>{" "}
              <br className="hidden sm:block" />
              {t("hero.title3")}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed tracking-wide px-4 md:px-0"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto px-4 md:px-0"
          >
            <Link href="mailto:hi.intechstudio@gmail.com" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-full bg-white text-black hover:bg-white/90 font-semibold px-8 h-12 md:h-14 shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all text-base">
                {t("hero.ctaPrimary")}
              </Button>
            </Link>
            <Link href="/#portfolio" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-white/30 bg-white/5 backdrop-blur-md hover:bg-white/20 font-medium px-8 h-12 md:h-14 text-white hover:text-white transition-all text-base">
                {t("hero.ctaSecondary")}
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Advanced Abstract CSS Illustration - Hidden on very small screens, visible on md+ */}
        <motion.div 
          style={{ opacity, scale }}
          className="mt-20 md:mt-32 relative h-[40vh] md:h-[65vh] w-full perspective-1000 max-w-6xl mx-auto hidden sm:block"
        >
          {/* Main Dashboard Panel */}
          <motion.div
            style={{ y: springY1, rotateX: mousePosition.y * -0.5, rotateY: mousePosition.x * 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[95%] md:w-[80%] aspect-[16/10] rounded-2xl md:rounded-3xl border border-white/20 bg-[#0a0a0a]/70 backdrop-blur-3xl shadow-[0_30px_100px_-20px_rgba(0,0,0,1),inset_0_0_0_1px_rgba(255,255,255,0.1)] overflow-hidden z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-primary/[0.08] pointer-events-none" />
            
            {/* Window Chrome */}
            <div className="flex h-10 md:h-12 border-b border-white/10 bg-black/50 items-center px-4 md:px-6 gap-2">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>
              <div className="mx-auto px-6 py-1 rounded-full bg-white/10 border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-white/60 text-[10px] md:text-xs font-mono tracking-wider">intech-ai-engine.app</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 md:p-8 h-[calc(100%-2.5rem)] md:h-[calc(100%-3rem)] flex flex-col gap-4 md:gap-6 relative">
              
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <div className="h-5 md:h-7 w-32 md:w-40 bg-white/30 rounded-md" />
                  <div className="h-3 md:h-4 w-48 md:w-64 bg-white/20 rounded-md" />
                </div>
                <div className="flex gap-4">
                  <div className="h-8 md:h-10 w-24 md:w-32 bg-primary/30 rounded-lg border border-primary/40 relative overflow-hidden flex items-center justify-center">
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                     <span className="text-primary text-[10px] md:text-xs font-bold tracking-widest">AI ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Grid Layout */}
              <div className="flex gap-4 md:gap-6 flex-1">
                {/* Sidebar */}
                <div className="w-[150px] md:w-[200px] hidden md:flex flex-col gap-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`h-9 md:h-11 w-full rounded-xl transition-colors ${i === 1 ? 'bg-primary/30 border border-primary/40' : 'bg-white/10'}`} />
                  ))}
                  <div className="mt-auto h-20 md:h-24 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 p-3 md:p-4">
                     <div className="w-full h-1.5 md:h-2 bg-white/20 rounded-full overflow-hidden mb-2">
                        <motion.div 
                          animate={{ width: ["20%", "80%", "40%"] }} 
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="h-full bg-primary rounded-full" 
                        />
                     </div>
                     <div className="text-[10px] md:text-xs text-white/60">Model Training...</div>
                  </div>
                </div>
                
                {/* Main Content Area */}
                <div className="flex-1 flex flex-col gap-4 md:gap-6">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 md:gap-6 h-24 md:h-32">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white/10 rounded-xl md:rounded-2xl border border-white/10 p-3 md:p-5 flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-primary/30 blur-2xl md:blur-3xl rounded-full group-hover:bg-primary/50 transition-colors duration-500" />
                        <div className="h-3 md:h-4 w-1/2 bg-white/20 rounded-md" />
                        <div className="h-6 md:h-8 w-3/4 bg-white/40 rounded-md" />
                      </div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="flex-1 bg-white/10 rounded-xl md:rounded-2xl border border-white/10 p-4 md:p-6 flex flex-col gap-4 md:gap-6 relative overflow-hidden">
                    <div className="h-4 md:h-5 w-1/4 bg-white/20 rounded-md" />
                    
                    {/* Animated Waveform / Chart */}
                    <div className="flex-1 w-full flex items-end gap-2 md:gap-3 justify-between px-1 md:px-2 pb-1 md:pb-2">
                      {[40, 70, 45, 90, 65, 85, 100, 75, 50, 80, 110, 85, 95].map((h, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ height: "10%" }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
                          className="w-full relative group rounded-t-sm bg-white/20 overflow-hidden" 
                        >
                          <motion.div 
                            animate={{ opacity: [0.4, 0.9, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                            className="absolute inset-0 bg-gradient-to-t from-primary/40 to-primary" 
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
            className="absolute right-[5%] md:right-[8%] top-[30%] w-[100px] md:w-[200px] aspect-[9/19] rounded-[2rem] md:rounded-[2.5rem] border-[4px] md:border-[6px] border-[#1a1a1a] bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.2)] overflow-hidden z-20"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 md:h-5 bg-[#1a1a1a] rounded-b-lg md:rounded-b-xl z-30 flex justify-center items-center">
              <div className="w-6 md:w-8 h-1 rounded-full bg-white/20" />
            </div>
            
            <div className="p-3 md:p-4 flex flex-col gap-3 md:gap-4 pt-8 md:pt-10 h-full relative bg-gradient-to-b from-primary/20 to-transparent">
              
              <div className="flex justify-between items-center relative z-10 mb-1">
                <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary/70 animate-pulse" />
                </div>
                <div className="h-2 md:h-3 w-12 md:w-16 bg-white/20 rounded-full" />
              </div>
              
              <div className="h-16 md:h-24 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent rounded-lg md:rounded-xl border border-white/20 relative z-10 p-3 md:p-4 flex flex-col justify-end overflow-hidden group">
                <div className="h-2 md:h-3 w-1/2 bg-white/60 rounded-sm mb-1.5 md:mb-2 relative z-10" />
                <div className="h-4 md:h-6 w-3/4 bg-white/100 rounded-sm relative z-10" />
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-3 relative z-10">
                 {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="aspect-square bg-white/10 rounded-lg md:rounded-xl border border-white/10 flex flex-col items-center justify-center gap-1 md:gap-1.5">
                     <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white/20" />
                     <div className="w-6 h-1 md:w-8 md:h-1.5 rounded bg-white/20" />
                   </div>
                 ))}
              </div>
              
              <div className="mt-auto h-8 md:h-12 bg-white/10 rounded-lg md:rounded-xl border border-white/10 relative overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }} 
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" 
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
        className="w-full max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8 md:py-10 relative z-20 mt-12 md:mt-20"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        {[
          { label: "Projects Delivered", value: "150+" },
          { label: "Happy Clients", value: "98%" },
          { label: "Years Experience", value: "10+" },
          { label: "Support", value: "24/7" },
        ].map((stat, i) => (
          <div key={i} className="text-center group">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 tracking-tight group-hover:text-primary transition-colors">{stat.value}</h3>
            <p className="text-white/70 text-[10px] md:text-sm font-medium uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

