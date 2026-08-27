"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { 
  ShoppingCart, BarChart3, MessageCircle, Users, 
  LayoutDashboard, QrCode, ChefHat, Receipt, ArrowRight,
  Wallet, PieChart, RefreshCw, FileSpreadsheet 
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useMemo } from "react";

export function Products() {
  const { t } = useLanguage();

  const products = useMemo(() => [
    {
      id: "katalogin",
      name: "Katalogin",
      logo: "/projects/katalogin/logo.jpg",
      tag: "WhatsApp Commerce",
      desc: t("products.items.katalogin.desc"),
      features: [
        { icon: ShoppingCart, title: t("products.items.katalogin.features.0.title"), desc: t("products.items.katalogin.features.0.desc") },
        { icon: MessageCircle, title: t("products.items.katalogin.features.1.title"), desc: t("products.items.katalogin.features.1.desc") },
        { icon: BarChart3, title: t("products.items.katalogin.features.2.title"), desc: t("products.items.katalogin.features.2.desc") },
        { icon: Users, title: t("products.items.katalogin.features.3.title"), desc: t("products.items.katalogin.features.3.desc") },
      ],
      gradient: "from-emerald-500/10 via-green-500/5 to-transparent",
      accent: "text-emerald-500",
      bgAccent: "bg-emerald-500",
      image: "/projects/katalogin/mockup-admin.png",
      imageAlt: "Katalogin Dashboard",
      floatingImage: "/projects/katalogin/mockup-catalog.png",
      floatingDevice: "mobile",
    },
    {
      id: "inpos",
      name: "InPOS",
      logo: "/projects/inpos/logo.png",
      tag: "Modern POS Ecosystem",
      desc: t("products.items.inpos.desc"),
      features: [
        { icon: LayoutDashboard, title: t("products.items.inpos.features.0.title"), desc: t("products.items.inpos.features.0.desc") },
        { icon: QrCode, title: t("products.items.inpos.features.1.title"), desc: t("products.items.inpos.features.1.desc") },
        { icon: ChefHat, title: t("products.items.inpos.features.2.title"), desc: t("products.items.inpos.features.2.desc") },
        { icon: Receipt, title: t("products.items.inpos.features.3.title"), desc: t("products.items.inpos.features.3.desc") },
      ],
      gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
      accent: "text-blue-500",
      bgAccent: "bg-blue-500",
      image: "/projects/inpos/mockup-pos-dark.png",
      imageAlt: "InPOS Terminal",
      floatingImage: "/projects/inpos/mockup-pos-list-dark.png",
    },
    {
      id: "budgetin",
      name: "BudgetIn",
      logo: "/projects/budgetin/logo.png",
      tag: "Smart Financial & Multi-Wallet",
      desc: t("products.items.budgetin.desc"),
      features: [
        { icon: Wallet, title: t("products.items.budgetin.features.0.title"), desc: t("products.items.budgetin.features.0.desc") },
        { icon: PieChart, title: t("products.items.budgetin.features.1.title"), desc: t("products.items.budgetin.features.1.desc") },
        { icon: RefreshCw, title: t("products.items.budgetin.features.2.title"), desc: t("products.items.budgetin.features.2.desc") },
        { icon: FileSpreadsheet, title: t("products.items.budgetin.features.3.title"), desc: t("products.items.budgetin.features.3.desc") },
      ],
      gradient: "from-cyan-500/10 via-emerald-500/5 to-transparent",
      accent: "text-cyan-400",
      bgAccent: "bg-cyan-500",
      image: "/projects/budgetin/mockup-dashboard.png",
      imageAlt: "BudgetIn Workspace",
      floatingImage: "/projects/budgetin/mockup-mobile.png",
      floatingDevice: "mobile",
    }
  ], [t]);

  return (
    <section id="products" className="py-32 relative bg-[#050505] border-y border-white/5 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-32">
          <Badge className="mb-6 border-white/10 bg-white/5 backdrop-blur-md">{t("products.badge")}</Badge>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
            {t("products.title1")} <br />
            <span className="text-white/40">{t("products.title2")}</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl font-light">
            {t("products.subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-32 md:gap-40">
          {products.map((product, idx) => (
            <div 
              key={product.id}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Text & Features (Left/Right alternating) */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 flex flex-col"
              >
                <div className={`inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase ${product.accent} mb-4`}>
                  <span className={`w-2 h-2 rounded-full ${product.bgAccent} animate-pulse`} />
                  {product.tag}
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                    <Image src={product.logo} alt={`${product.name} Logo`} fill sizes="40px" className="object-cover" />
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{product.name}</h3>
                </div>
                <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 font-light">
                  {product.desc}
                </p>

                {/* Bento Features */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {product.features.map((feature, i) => (
                    <div key={i} className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.06] transition-colors group">
                      <feature.icon className={`w-6 h-6 mb-4 ${product.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />
                      <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                      <p className="text-white/40 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <div>
                  {product.id === "katalogin" ? (
                    <a href="https://katalogin.intechstudio.id" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="group h-12 px-8 rounded-full border-white/10 hover:bg-white/10">
                        {t("products.explore")} {product.name} 
                        <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Button>
                    </a>
                  ) : (
                    <a href={`mailto:intechstudio8@gmail.com?subject=Permintaan%20Demo%20${product.name}%20-%20Intech%20Studio&body=Halo%20Intech%20Studio,%0A%0ASaya%20tertarik%20untuk%20mencoba%20demo%20aplikasi%20${product.name}.%20Mohon%20informasi%20akses%20dan%20demonstrasinya.%0A%0ATerima%20kasih.`}>
                      <Button variant="outline" className="group h-12 px-8 rounded-full border-white/10 hover:bg-white/10">
                        {t("products.requestDemo")}
                        <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Button>
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Massive Dashboard Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 relative"
              >
                {/* Desktop/Browser Frame */}
                <div className="relative w-full aspect-[4/3] rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group/mockup cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-50 group-hover/mockup:opacity-80 transition-opacity duration-700`} />
                  
                  {/* Browser/Device Chrome */}
                  <div className="absolute top-0 inset-x-0 h-12 border-b border-white/10 bg-white/[0.02] flex items-center px-6 gap-2 z-20 backdrop-blur-md">
                    <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-red-500/80 transition-colors cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-yellow-500/80 transition-colors cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-green-500/80 transition-colors cursor-pointer" />
                  </div>

                  {/* Actual Application Screenshot */}
                  <div className="absolute inset-0 mt-12 overflow-hidden bg-black flex items-center justify-center p-4 z-10">
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
                </div>

                {/* Floating secondary UI layer */}
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute z-30 hidden md:block group-hover:scale-105 transition-transform duration-700 ${
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
