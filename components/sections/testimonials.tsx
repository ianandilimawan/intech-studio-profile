"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  { id: 1, name: "Sarah Jenkins", role: "CEO at TechFlow", text: "Intech Studio completely transformed our legacy systems into a modern, lightning-fast architecture." },
  { id: 2, name: "David Chen", role: "Founder of RetailX", text: "The POS system they built for us reduced our checkout times by 40%. Absolutely game-changing." },
  { id: 3, name: "Elena Rodriguez", role: "Operations, Foodies", text: "Their WhatsApp commerce integration helped us capture a totally new demographic of customers." },
  { id: 4, name: "Michael Chang", role: "CTO at FinSecure", text: "The level of code quality and security they deliver is unmatched. A true premium agency." },
];

export function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 text-center mb-16 relative z-10">
        <Badge className="mb-4">Testimonials</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Don't just take <span className="text-white/50">our word for it.</span>
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
