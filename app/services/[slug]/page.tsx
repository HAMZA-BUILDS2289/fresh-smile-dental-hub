import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { BUSINESS, getService, services } from "@/lib/data";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { CallButton, CtaBand, Reveal, WaButton } from "@/components/ui";
import { FinalCta } from "@/components/Sections";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: `${s.title} in Osogbo`,
    description: `${s.tagline} ${s.short}`,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();
  const msg = `Hello Freshsmile Dental Hub, I want to book an appointment for ${s.title}.`;
  const others = services.filter((x) => x.slug !== s.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: s.title,
    description: s.overview,
    provider: { "@type": "Dentist", name: BUSINESS.name, telephone: BUSINESS.phoneTel },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow={s.title}
        crumbs={[{ label: "Services", href: "/services" }, { label: s.title }]}
        title={<span className="text-gradient italic">{s.tagline}</span>}
        sub={s.short}
      >
        <WaButton label={`Book ${s.title}`} message={msg} arrow />
        <CallButton label="Call The Clinic" />
      </PageHero>

      <section className="pb-24 lg:pb-32">
        <div className="container-wide grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
          <div className="space-y-20">
            <Reveal>
              <h2 className="h-md">About this treatment</h2>
              <p className="mt-6 text-xl leading-relaxed text-ink/75">{s.overview}</p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-aqua-100 px-5 py-2 font-semibold text-ocean-800">
                <Clock className="h-4 w-4" /> {s.visits}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="h-md">Who it’s for</h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {s.goodFor.map((g) => (
                  <li key={g} className="glass flex items-start gap-3 rounded-2xl p-5 text-lg">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-aqua-600" /> {g}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div>
              <Reveal><h2 className="h-md">What to expect</h2></Reveal>
              <ol className="mt-10 space-y-6">
                {s.steps.map((st, i) => (
                  <Reveal as="li" key={st.title} delay={i * 0.08}>
                    <div className="glass flex gap-6 rounded-[2rem] p-8">
                      <span className="display grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-aqua-300 to-ocean-600 text-2xl text-ink">{i + 1}</span>
                      <div>
                        <h3 className="display text-2xl">{st.title}</h3>
                        <p className="mt-2 text-lg text-ink/70">{st.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>

            <Reveal>
              <h2 className="h-md">Benefits</h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-lg">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-aqua-600" /> {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="h-md">Common questions</h2>
              <div className="mt-8 space-y-4">
                {s.faqs.map((f) => (
                  <details key={f.q} className="group rounded-3xl border border-ink/10 bg-white p-6 open:border-aqua-400/60 open:shadow-glass">
                    <summary className="display flex cursor-pointer list-none items-center justify-between gap-4 text-xl">
                      {f.q}
                      <span className="text-2xl text-aqua-600 transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 text-lg leading-relaxed text-ink/70">{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ink via-ocean-900 to-ocean-700 p-8 text-white shadow-glass sm:p-10">
              <div className="aurora opacity-50" />
              <div className="relative">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-aqua-300 to-ocean-500 text-ink">
                  <Icon name={s.icon} className="h-8 w-8" />
                </span>
                <h3 className="display mt-6 text-3xl text-white">Book {s.title}</h3>
                <p className="mt-3 text-aqua-100/80">Message us and we’ll confirm a time. Appointment required.</p>
                <WaButton label="Book On WhatsApp" message={msg} className="mt-6 w-full" />
                <a href={`tel:${BUSINESS.phoneTel}`} className="btn-ghost-dark mt-3 w-full">Call {BUSINESS.phoneDisplay}</a>
              </div>
            </div>
            <div className="glass mt-6 rounded-[2rem] p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-ink/50">More treatments</p>
              <ul className="mt-4 space-y-1">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/services/${o.slug}`} className="flex items-center justify-between rounded-xl px-3 py-2 font-semibold hover:bg-aqua-100">
                      {o.title} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand title={`Ready for ${s.title.toLowerCase()}?`} text="Tap below and your WhatsApp opens with the message ready to send." message={msg} />
      <FinalCta />
    </>
  );
}
