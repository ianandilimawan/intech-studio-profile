"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card/50 border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] relative overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Intech Studio Logo"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Intech Studio
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t("footer.services.title")}</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t("footer.services.custom")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t("footer.services.pos")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t("footer.services.whatsapp")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t("footer.services.uiux")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t("footer.products.title")}</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t("footer.products.katalogin")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t("footer.products.inpos")}
                </Link>
              </li>
              {/* <li><Link href="#" className="hover:text-primary transition-colors">Enterprise Boilerplate</Link></li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t("footer.company.title")}</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link
                  href="/#about"
                  className="hover:text-primary transition-colors"
                >
                  {t("footer.company.about")}
                </Link>
              </li>
              {/* <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li> */}
              <li>
                <Link
                  href="mailto:intechstudio8@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  {t("footer.company.contact")}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors"
                >
                  {t("footer.company.privacy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
          <p>© {new Date().getFullYear()} Intech Studio. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-white transition-colors">Dribbble</Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
