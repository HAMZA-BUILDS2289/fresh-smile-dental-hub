import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS, mapLink, services, nav } from "@/lib/data";
import { Logo } from "./Header";
import { WaButton } from "./ui";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-aqua-100/80">
      <div className="aurora opacity-30" />
      <div className="grid-bg-dark absolute inset-0 opacity-50" />
      <div className="container-wide relative py-24 lg:py-32">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-16 lg:flex-row lg:items-end">
          <h2 className="h-lg max-w-3xl text-white">
            Ready for a smile you’ll <span className="text-gradient-light italic">love to show?</span>
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <WaButton label="Get Your Dream Smile Now" arrow />
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn-ghost-dark">
              <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs leading-relaxed">{BUSINESS.tagline}.</p>
            <p className="mt-4 inline-flex rounded-full border border-aqua-300/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-aqua-200">
              Women-owned · ★ {BUSINESS.rating} ({BUSINESS.reviewCount})
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">Explore</h3>
            <ul className="space-y-3">
              {[...nav, { href: "/appointment", label: "Book Appointment" }, { href: "/privacy", label: "Privacy Policy" }].map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition hover:text-aqua-300">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">Treatments</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition hover:text-aqua-300">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">Visit us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-aqua-300" />
                <a href={mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-aqua-300">
                  {BUSINESS.address}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-aqua-300" />
                <a href={`tel:${BUSINESS.phoneTel}`} className="hover:text-aqua-300">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-aqua-300" />
                <span>By appointment — message us on WhatsApp to book</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>Appointment required · Cards accepted · Free parking</p>
        </div>
      </div>
    </footer>
  );
}
