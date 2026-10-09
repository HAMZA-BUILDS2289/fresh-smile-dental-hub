import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Siren,
  Star,
} from "lucide-react";
import {
  BUSINESS,
  attributes,
  doctor,
  fmtDate,
  mapEmbed,
  mapLink,
  packages,
  posts,
  services,
  stats,
  steps,
  why,
} from "@/lib/data";
import { Icon } from "./Icon";
import { BeforeAfter, FaqList, TestimonialCarousel } from "./Interactive";
import { CallButton, Counter, LinkButton, Reveal, SectionHead, Tilt, WaButton } from "./ui";

/* ------------------------------ Marquee ------------------------------ */
export function TrustMarquee() {
  const items = [
    "★ 4.8 Google rating",
    "Women-owned clinic",
    "Appointment required",
    "On-site services",
    "Cards accepted",
    "Free parking",
    "Gender-neutral toilets",
    "Emergency services",
    "Sedation dentistry",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-ink py-5 text-aqua-100" aria-label="Clinic highlights">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 text-sm font-bold uppercase tracking-[0.2em]">
            {t} <span className="text-aqua-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- Stats ------------------------------- */
export function StatsBand() {
  return (
    <section id="stats" className="relative py-20 lg:py-28">
      <div className="container-wide">
        <div className="glass grid grid-cols-2 gap-px overflow-hidden rounded-[2.5rem] bg-ink/10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} y={30} className="bg-white/80 p-8 text-center sm:p-12 lg:p-16">
              <p className="display text-[clamp(2.8rem,6vw,5.5rem)] text-gradient">
                <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-ink/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- About ------------------------------ */
export function AboutSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-wide grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <Tilt className="relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-aqua-300 to-ocean-600 opacity-40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white shadow-glass">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/clinic-chair.jpg" alt="Treatment chair at Freshsmile Dental Hub, Osogbo" className="h-[520px] w-full object-cover sm:h-[680px]" loading="lazy" />
            </div>
            <div className="glass absolute -bottom-8 -right-2 rounded-3xl p-6 sm:-right-8">
              <p className="display text-4xl text-gradient">11</p>
              <p className="text-sm font-semibold text-ink/70">treatments under one roof</p>
            </div>
          </Tilt>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">About Freshsmile</span>
            <h2 className="h-lg mt-6">
              Dentistry that feels <span className="text-gradient italic">personal,</span> not clinical.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ink/75 sm:text-xl">{BUSINESS.mission}</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-10 grid gap-4 sm:grid-cols-2">
            {["Women-owned & patient-centred", "We preserve natural teeth first", "Personalised treatment plans", "Comfort-first, sedation available"].map((t) => (
              <div key={t} className="flex items-center gap-3 rounded-2xl bg-white/70 p-4 font-semibold shadow-sm">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-aqua-600" /> {t}
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.25} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/about" variant="dark">
              Our Story <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <WaButton label="Book Appointment" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Why us ------------------------------ */
export function WhySection() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink text-white">
      <div className="aurora opacity-40" />
      <div className="grid-bg-dark absolute inset-0" />
      <div className="container-wide relative">
        <SectionHead
          dark
          eyebrow="Why choose us"
          title={<>Six reasons patients <span className="text-gradient-light italic">keep coming back</span></>}
          sub="Rated 4.8★ by our patients, who call our service “top-notch” — here’s what sits behind it."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.1} className="h-full">
              <Tilt className="glass-dark card-lift group h-full rounded-[2rem] p-8 sm:p-10">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-aqua-300 to-ocean-500 text-ink shadow-glow transition group-hover:rotate-6 group-hover:scale-110">
                  <Icon name={w.icon} className="h-8 w-8" />
                </span>
                <h3 className="display mt-8 text-3xl text-white">{w.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-aqua-100/75">{w.text}</p>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Services ----------------------------- */
export function ServicesSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-wide">
        <SectionHead
          eyebrow="Our services"
          title={<>Every treatment, <span className="text-gradient italic">one comfortable roof</span></>}
          sub="From a simple check-up to a complete smile makeover — tap any treatment to see how it works."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08} className="h-full">
              <Link
                href={`/services/${s.slug}`}
                className="glass card-lift group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 sm:p-10"
              >
                <span className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-aqua-300/30 blur-2xl transition group-hover:scale-150" />
                <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-ink text-aqua-300 transition group-hover:bg-gradient-to-br group-hover:from-aqua-300 group-hover:to-ocean-500 group-hover:text-ink">
                  <Icon name={s.icon} className="h-8 w-8" />
                </span>
                <p className="relative mt-8 text-xs font-bold uppercase tracking-[0.2em] text-ocean-600">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display relative mt-2 text-3xl">{s.title}</h3>
                <p className="relative mt-3 font-semibold text-ocean-700">{s.tagline}</p>
                <p className="relative mt-4 flex-1 text-lg leading-relaxed text-ink/70">{s.short}</p>
                <span className="relative mt-8 inline-flex items-center gap-2 font-bold text-ink">
                  Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-2" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 text-center">
          <LinkButton href="/services" variant="dark" className="!px-10 !py-5">
            View All Services <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- Before & After -------------------------- */
export function SmileGallerySection() {
  return (
    <section className="section-pad relative overflow-hidden bg-gradient-to-b from-aqua-50 to-white">
      <div className="container-wide">
        <SectionHead
          eyebrow="Before & after"
          title={<>See what a <span className="text-gradient italic">brighter smile</span> can do</>}
          sub="Slide to see the difference professional whitening and cleaning can make."
        />
        <Reveal>
          <BeforeAfter />
        </Reveal>
        <Reveal className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="/gallery" variant="dark">See The Full Gallery</LinkButton>
          <WaButton label="Get Your Dream Smile Now" />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- Doctor ------------------------------ */
export function DoctorSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-wide grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal className="order-2 lg:order-1">
          <span className="eyebrow">Meet the doctor</span>
          <h2 className="h-lg mt-6">
            Meet the women <span className="text-gradient italic">behind your smile</span>
          </h2>
          <p className="display mt-6 text-2xl text-ocean-700">{doctor.name}</p>
          <p className="text-sm font-bold uppercase tracking-widest text-ink/50">{doctor.role}</p>
          {doctor.bio.map((p) => (
            <p key={p} className="mt-6 text-lg leading-relaxed text-ink/75">{p}</p>
          ))}
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {doctor.points.map((p) => (
              <li key={p} className="flex items-center gap-3 font-semibold">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-aqua-600" /> {p}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WaButton label="Book With Our Team" />
            <LinkButton href="/about" variant="ghost">About the clinic</LinkButton>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <Tilt className="relative mx-auto max-w-lg">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-ocean-600 via-aqua-300 to-aqua-100 opacity-60 blur-3xl" />
            <div className="relative overflow-hidden rounded-[3rem] border-4 border-white shadow-glass">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={doctor.image} alt="Freshsmile dentist treating a patient" className="h-[560px] w-full object-cover object-top sm:h-[720px]" loading="lazy" />
            </div>
            <div className="glass absolute -left-4 bottom-12 rounded-3xl p-5 sm:-left-10">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-aqua-500 text-aqua-500" />)}
              </div>
              <p className="mt-1 text-sm font-bold">“She’s best at what she does”</p>
              <p className="text-xs text-ink/60">— Tomilayo Grace</p>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- Testimonials -------------------------- */
export function ReviewsSection() {
  return (
    <section id="reviews" className="section-pad relative overflow-hidden bg-gradient-to-br from-ink via-ocean-900 to-ocean-800 text-white">
      <div className="aurora opacity-50" />
      <div className="container-wide relative">
        <SectionHead
          dark
          eyebrow={`★ ${BUSINESS.rating} · ${BUSINESS.reviewCount} Google reviews`}
          title={<>Loved by patients <span className="text-gradient-light italic">across Osogbo</span></>}
          sub="Real words from real patients."
        />
        <Reveal>
          <TestimonialCarousel />
        </Reveal>
        <Reveal className="mt-14 text-center">
          <a href={mapLink} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">
            <Star className="h-4 w-4 fill-aqua-300 text-aqua-300" /> Read All {BUSINESS.reviewCount} Reviews On Google
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- How it works -------------------------- */
export function HowItWorks() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-wide">
        <SectionHead
          eyebrow="How it works"
          title={<>Three simple steps to <span className="text-gradient italic">your new smile</span></>}
        />
        <div className="relative grid gap-8 lg:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-14 hidden h-px bg-gradient-to-r from-transparent via-aqua-400 to-transparent lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.15} className="h-full">
              <div className="glass card-lift relative h-full rounded-[2rem] p-10 text-center">
                <span className="display relative mx-auto grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-aqua-300 to-ocean-600 text-5xl text-ink shadow-glow">
                  {s.n}
                </span>
                <h3 className="display mt-8 text-3xl">{s.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-ink/70">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 text-center">
          <WaButton label="Start Step 1 — Book On WhatsApp" arrow className="!px-10 !py-5" />
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- Emergency ----------------------------- */
export function EmergencyBanner() {
  return (
    <section className="container-wide py-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-red-600 via-red-500 to-rose-500 p-10 text-white shadow-[0_30px_100px_-20px_rgba(239,68,68,0.6)] sm:p-16 lg:p-20">
          <div className="absolute -right-20 -top-20 h-96 w-96 animate-pulse rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]">
                <Siren className="h-4 w-4" /> Dental emergency
              </span>
              <h2 className="h-lg mt-6 text-white">Severe toothache? Broken or knocked-out tooth?</h2>
              <p className="mt-5 text-xl text-white/90">Don’t wait it out. Call us now — we make room for dental emergencies.</p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:w-auto">
              <CallButton label={`Emergency? Call ${BUSINESS.phoneDisplay}`} variant="red" className="!px-10 !py-5 !text-lg" />
              <WaButton label="Chat Us On WhatsApp" variant="ghost-dark" message="Hello Freshsmile Dental Hub, I have a dental emergency. Please help as soon as possible." />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------ Pricing ------------------------------ */
export function PricingSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-wide">
        <SectionHead
          eyebrow="Care packages"
          title={<>Clear starting points, <span className="text-gradient italic">a personal quote</span></>}
          sub="Every mouth is different, so we price after a short assessment. Pick a package and we’ll send you a quote on WhatsApp."
        />
        <div className="grid items-stretch gap-8 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-[2.5rem] p-10 sm:p-12 ${
                  p.featured
                    ? "bg-gradient-to-br from-ink via-ocean-900 to-ocean-700 text-white shadow-[0_40px_100px_-20px_rgba(6,182,212,0.55)] lg:-my-6 lg:py-16"
                    : "glass"
                }`}
              >
                <span className={`inline-flex w-fit rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${p.featured ? "bg-aqua-300 text-ink" : "bg-aqua-100 text-ocean-700"}`}>
                  {p.badge}
                </span>
                <h3 className="display mt-6 text-4xl">{p.name}</h3>
                <p className={`mt-2 text-sm font-semibold ${p.featured ? "text-aqua-200" : "text-ocean-700"}`}>Personal quote after assessment</p>
                <ul className="mt-8 flex-1 space-y-4">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-lg">
                      <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${p.featured ? "text-aqua-300" : "text-aqua-600"}`} /> {it}
                    </li>
                  ))}
                </ul>
                <WaButton label="Get A Quote" message={p.message} variant={p.featured ? "primary" : "dark"} className="mt-10 w-full" />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink/55">Credit and debit cards accepted.</p>
      </div>
    </section>
  );
}

/* --------------------------- Blog cover art -------------------------- */
export function PostCover({ post, className = "" }: { post: (typeof posts)[number]; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: `linear-gradient(135deg, ${post.from}, ${post.to})` }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/tooth-3d.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-overlay" loading="lazy" />
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
      <div className="relative grid h-full place-items-center">
        <span className="grid h-24 w-24 place-items-center rounded-3xl border border-white/40 bg-white/20 text-white backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon name={post.icon} className="h-12 w-12" />
        </span>
      </div>
    </div>
  );
}

/* ----------------------------- Blog preview -------------------------- */
export function BlogPreview({ limit = 3 }: { limit?: number }) {
  return (
    <section className="section-pad relative overflow-hidden bg-gradient-to-b from-white to-aqua-50">
      <div className="container-wide">
        <SectionHead
          eyebrow="Dental tips"
          title={<>Fresh advice for <span className="text-gradient italic">healthier smiles</span></>}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, limit).map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.1} as="article" className="h-full">
              <Link href={`/blog/${p.slug}`} className="card-lift group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-glass">
                <PostCover post={p} className="h-60" />
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-ocean-600">{p.category} · {p.readTime}</p>
                  <h3 className="display mt-3 text-2xl">{p.title}</h3>
                  <p className="mt-3 flex-1 text-ink/70">{p.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-bold">
                    Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-2" />
                  </span>
                  <span className="mt-1 text-xs text-ink/45">{fmtDate(p.date)}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 text-center">
          <LinkButton href="/blog" variant="dark">All Articles <ArrowRight className="h-4 w-4" /></LinkButton>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Visit us ----------------------------- */
export function VisitSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-wide">
        <SectionHead
          eyebrow="Find us"
          title={<>Right in the heart of <span className="text-gradient italic">Osogbo</span></>}
          sub={BUSINESS.address}
        />
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-white shadow-glass">
              <iframe
                title="Freshsmile Dental Hub on Google Maps"
                src={mapEmbed}
                className="h-[420px] w-full lg:h-[560px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="glass flex flex-col justify-between gap-8 rounded-[2.5rem] p-8 sm:p-10">
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-aqua-600" />
                <p className="text-lg">{BUSINESS.address}</p>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-aqua-600" />
                <a href={`tel:${BUSINESS.phoneTel}`} className="text-lg font-bold">{BUSINESS.phoneDisplay}</a>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 h-6 w-6 shrink-0 text-aqua-600" />
                <p className="text-lg">By appointment — book on WhatsApp.</p>
              </div>
              <ul className="grid grid-cols-2 gap-3 pt-2">
                {attributes.slice(0, 6).map((a) => (
                  <li key={a.title} className="flex items-center gap-2 rounded-xl bg-white/70 p-3 text-sm font-semibold">
                    <Icon name={a.icon} className="h-4 w-4 shrink-0 text-aqua-600" /> {a.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <a href={mapLink} target="_blank" rel="noopener noreferrer" className="btn-dark">
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
              <WaButton label="Chat Us On WhatsApp" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FAQ -------------------------------- */
export function FaqSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-gradient-to-b from-aqua-50 to-white">
      <div className="container-wide">
        <SectionHead eyebrow="FAQ" title={<>Questions? <span className="text-gradient italic">We’ve got answers.</span></>} />
        <Reveal><FaqList /></Reveal>
        <Reveal className="mt-14 text-center">
          <p className="mb-5 text-lg text-ink/70">Still wondering about something?</p>
          <WaButton label="Ask Us On WhatsApp" />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Final CTA ---------------------------- */
export function FinalCta() {
  return (
    <section className="container-wide pb-24 pt-10 lg:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-aqua-300 via-aqua-400 to-ocean-500 p-10 text-center shadow-glow sm:p-20 lg:p-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_50%)]" />
          <div className="relative mx-auto max-w-4xl">
            <h2 className="h-xl text-ink">Your dream smile starts with one message.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-ink/75">
              Tap the button — your WhatsApp opens with everything pre-written. Press send, and we’ll take it from there.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WaButton label="Get Your Dream Smile Now" variant="dark" arrow className="!px-10 !py-5 !text-lg" />
              <CallButton label={`Call ${BUSINESS.phoneDisplay}`} variant="white" className="!px-10 !py-5 !text-lg" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
