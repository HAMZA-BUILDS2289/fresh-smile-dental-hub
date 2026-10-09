import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./ui";

export function PageHero({
  eyebrow,
  title,
  sub,
  crumbs = [],
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  crumbs?: { label: string; href?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-16 lg:pb-28 lg:pt-24">
      <div className="aurora" />
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="container-wide relative">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1 text-sm font-semibold text-ink/55">
          <Link href="/" className="hover:text-ink">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4" />
              {c.href ? <Link href={c.href} className="hover:text-ink">{c.label}</Link> : <span className="text-ink">{c.label}</span>}
            </span>
          ))}
        </nav>
        <Reveal y={30} className="max-w-5xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h-xl mt-6">{title}</h1>
          {sub && <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink/70 sm:text-xl">{sub}</p>}
          {children && <div className="mt-10 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
