"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { 
  ShoppingCart, BarChart3, MessageCircle, Users, 
  LayoutDashboard, QrCode, ChefHat, Receipt, ArrowRight 
} from "lucide-react";

const products = [
  {
    id: "katalogin",
    name: "Katalogin",
    logo: "/projects/katalogin/logo.jpg",
    tag: "WhatsApp Commerce",
    desc: "A headless SaaS platform enabling businesses to build digital catalogs with direct WhatsApp checkout. No app download required.",
    features: [
      { icon: ShoppingCart, title: "Smart Cart", desc: "Frictionless ordering" },
      { icon: MessageCircle, title: "WhatsApp Sync", desc: "Automated chat flows" },
      { icon: BarChart3, title: "Analytics", desc: "Real-time sales tracking" },
      { icon: Users, title: "Multi-Tenant", desc: "Manage multiple branches" },
    ],
    gradient: "from-emerald-500/10 via-green-500/5 to-transparent",
    accent: "text-emerald-500",
    bgAccent: "bg-emerald-500",
    image: "/projects/katalogin/mockup-admin.png",
    imageAlt: "Katalogin Dashboard",
    floatingImage: "/projects/katalogin/mockup-catalog.png",
    floatingDevice: "mobile",
    link: "https://katalogin.intechstudio.id"
  },
  {
    id: "inpos",
    name: "InPOS",
    logo: "/projects/inpos/logo.png",
    tag: "Modern POS Ecosystem",
    desc: "An intelligent Point of Sale system bridging front-of-house ordering with back-of-house kitchen automation.",
    features: [
      { icon: LayoutDashboard, title: "POS Terminal", desc: "Lightning fast checkout" },
      { icon: QrCode, title: "QR Ordering", desc: "Table-side self service" },
      { icon: ChefHat, title: "Kitchen Display", desc: "Digital ticket routing" },
      { icon: Receipt, title: "Smart Billing", desc: "Split payments & promos" },
    ],
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    accent: "text-blue-500",
    bgAccent: "bg-blue-500",
    image: "/projects/inpos/mockup-pos-dark.png",
    imageAlt: "InPOS Terminal",
    floatingImage: "/projects/inpos/mockup-pos-list-dark.png",
    link: "mailto:intechstudio8@gmail.com"
  }
];

export function Products() {
  return (
    <section id="products" className="py-10 md:py-32 relative bg-[#050505] border-y border-white/5 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <Badge className="mb-4 md:mb-6 border-white/10 bg-white/5 backdrop-blur-md">Featured Products</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-4 md:mb-6 leading-tight">
            Enterprise solutions, <br />
            <span className="text-white/40">ready to deploy.</span>
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-2xl font-light">
            We don't just build custom software. We've developed battle-tested SaaS products that power thousands of daily transactions.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {products.map((product, idx) => (
            <div 
              key={product.id}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-20 items-center`}
            >
              {/* Text & Features (Left/Right alternating) */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 flex flex-col"
              >
                <div className={`inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide uppercase ${product.accent} mb-4`}>
                  <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${product.bgAccent} animate-pulse`} />
                  {product.tag}
                </div>
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl overflow-hidden border border-white/10 shadow-lg">
                    <Image src={product.logo} alt={`${product.name} Logo`} fill sizes="40px" className="object-cover" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{product.name}</h3>
                </div>
                <p className="text-white/60 text-base md:text-xl leading-relaxed mb-8 md:mb-10 font-light">
                  {product.desc}
                </p>

                {/* Bento Features */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                  {product.features.map((feature, i) => (
                    <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 hover:bg-white/[0.06] transition-colors group">
                      <feature.icon className={`w-5 h-5 md:w-6 md:h-6 mb-3 md:mb-4 ${product.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />
                      <h4 className="text-white text-sm md:text-base font-medium mb-1">{feature.title}</h4>
                      <p className="text-white/40 text-xs md:text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <Link href={product.link} target={product.link.startsWith("http") ? "_blank" : "_self"}>
                    <Button variant="outline" className="group h-12 px-6 md:px-8 rounded-full border-white/10 hover:bg-white/10 w-full sm:w-auto text-sm md:text-base">
                      Explore {product.name} 
                      <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Massive Dashboard Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 relative mt-4 md:mt-0"
              >
                {/* Desktop/Browser Frame */}
                <Link href={product.link} target={product.link.startsWith("http") ? "_blank" : "_self"} className="block relative w-full aspect-[4/3] rounded-2xl md:rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group/mockup cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-50 group-hover/mockup:opacity-80 transition-opacity duration-700`} />
                  
                  {/* Browser/Device Chrome */}
                  <div className="absolute top-0 inset-x-0 h-8 md:h-12 border-b border-white/10 bg-white/[0.02] flex items-center px-4 md:px-6 gap-1.5 md:gap-2 z-20 backdrop-blur-md">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/20 hover:bg-red-500/80 transition-colors" />
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/20 hover:bg-yellow-500/80 transition-colors" />
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/20 hover:bg-green-500/80 transition-colors" />
                  </div>

                  {/* Actual Application Screenshot */}
                  <div className="absolute inset-0 mt-8 md:mt-12 overflow-hidden bg-black flex items-center justify-center p-2 md:p-4 z-10">
                    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl transform-gpu transition-transform duration-700 group-hover/mockup:scale-105">
                      <Image 
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain object-center"
                      />
                    </div>
                  </div>
                </Link>

                {/* Floating secondary UI layer */}
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute z-30 hidden md:block group-hover:scale-105 transition-transform duration-700 pointer-events-none ${
                    product.floatingDevice === 'mobile' 
                      ? 'w-48 aspect-[9/19.5] rounded-[2.5rem] border-[6px] border-[#1a1a1a] bg-black shadow-2xl overflow-hidden -bottom-16 ' + (idx % 2 === 0 ? '-left-12' : '-right-12')
                      : 'w-2/3 aspect-video rounded-2xl border border-white/20 shadow-2xl overflow-hidden -bottom-10 ' + (idx % 2 === 0 ? '-left-10' : '-right-10')
                  }`}
                >
                  {product.floatingDevice === 'mobile' && (
                    <div className="absolute top-0 inset-x-0 h-5 flex justify-center z-30">
                      <div className="w-1/3 h-full bg-[#1a1a1a] rounded-b-xl" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black">
                     <Image 
                        src={product.floatingImage}
                        alt={`${product.imageAlt} Secondary View`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover object-top"
                      />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
