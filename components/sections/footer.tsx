import Image from "next/image";
import Link from "next/link";

export function Footer() {
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
              World-class software house building enterprise-grade digital
              products for forward-thinking companies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  POS Systems
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  WhatsApp Commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Katalogin
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  InPOS
                </Link>
              </li>
              {/* <li><Link href="#" className="hover:text-primary transition-colors">Enterprise Boilerplate</Link></li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link
                  href="/#about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              {/* <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li> */}
              <li>
                <Link
                  href="mailto:hi.intechstudio@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
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
