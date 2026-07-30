"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#020202]">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto border border-white/10 bg-white/[0.02] backdrop-blur-xl p-12 md:p-20 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group/card"
        >
          {/* Animated Background Mesh inside card */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.4)_0%,transparent_70%)] group-hover/card:opacity-50 transition-opacity duration-700" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-tight">
              Let's Build Something <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-primary">Amazing Together.</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Ready to elevate your digital presence? Partner with us to transform your ideas into world-class software solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="mailto:intechstudio8@gmail.com" className="relative group/btn w-full sm:w-auto block">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur opacity-40 group-hover/btn:opacity-100 transition duration-500 animate-pulse"></div>
                <Button size="lg" className="relative w-full h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-white/90 font-semibold shadow-xl">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
