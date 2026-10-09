"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Minus, Plus, Quote, Star } from "lucide-react";
import { BUSINESS, faqs, reviews } from "@/lib/data";

/* ---------------------------- Testimonials ---------------------------- */
export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = reviews.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 5500);
    return () => clearInterval(t);
  }, [paused, n]);

  const r = reviews[i];
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="mx-auto max-w-5xl">
      <div className="glass-dark relative min-h-[360px] overflow-hidden rounded-[2.5rem] p-8 sm:p-14 lg:p-20">
        <Quote className="absolute right-8 top-8 h-24 w-24 text-aqua-300/10 sm:h-40 sm:w-40" />
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0, x: 60, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-6 w-6 fill-aqua-300 text-aqua-300" />
              ))}
            </div>
            <blockquote className="display mt-8 text-[clamp(1.6rem,3.6vw,3rem)] leading-tight text-white">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-aqua-300 to-ocean-600 text-lg font-extrabold text-ink">
                {r.name[0]}
              </span>
              <span>
                <span className="block font-bold text-white">{r.name}</span>
                <span className="text-sm text-aqua-200/70">Google review · verified patient</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2" role="tablist" aria-label="Choose review">
          {reviews.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Review ${k + 1}`}
              className={`h-2.5 rounded-full transition-all ${k === i ? "w-10 bg-aqua-300" : "w-2.5 bg-white/25 hover:bg-white/50"}`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button onClick={() => setI((i - 1 + n) % n)} aria-label="Previous review" className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white hover:border-aqua-300 hover:bg-white/10">
            <ChevronLeft />
          </button>
          <button onClick={() => setI((i + 1) % n)} aria-label="Next review" className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white hover:border-aqua-300 hover:bg-white/10">
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- FAQ ---------------------------------- */
export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-4xl space-y-4">
      {faqs.map((f, k) => {
        const is = open === k;
        return (
          <div key={f.q} className={`overflow-hidden rounded-3xl border transition ${is ? "border-aqua-400/60 bg-white shadow-glass" : "border-ink/10 bg-white/60"}`}>
            <button
              onClick={() => setOpen(is ? null : k)}
              aria-expanded={is}
              className="flex w-full items-center justify-between gap-6 p-6 text-left sm:p-8"
            >
              <span className="display text-xl sm:text-2xl">{f.q}</span>
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition ${is ? "bg-aqua-300 text-ink" : "bg-ink/5"}`}>
                {is ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {is && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
                  <p className="px-6 pb-8 text-lg leading-relaxed text-ink/70 sm:px-8">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ----------------------- Before / After slider ------------------------ */
function Smile({ bright }: { bright: boolean }) {
  const teeth = Array.from({ length: 12 }, (_, k) => {
    const t = k - 5.5; // -5.5 … 5.5
    const a = Math.abs(t);
    const w = a < 1.1 ? 82 : a < 2.1 ? 66 : a < 3.1 ? 58 : 66;
    const h = a < 1.1 ? 118 : a < 2.1 ? 100 : a < 3.1 ? 92 : 80;
    const x = 400 + t * 62;
    const y = 112 + a * a * 2.6 - h / 2 + 24;
    return { x, y, w, h, tilt: t * 2.2 };
  });
  const fill = bright ? "url(#bright)" : "url(#stain)";
  return (
    <svg viewBox="0 0 800 340" className="h-full w-full" role="img" aria-label={bright ? "Whitened smile illustration" : "Stained smile illustration"}>
      <defs>
        <linearGradient id="bright" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dff7fb" />
        </linearGradient>
        <linearGradient id="stain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#efe0a8" />
          <stop offset="1" stopColor="#c9a64f" />
        </linearGradient>
        <radialGradient id="mouth" cx="50%" cy="40%" r="70%">
          <stop offset="0" stopColor="#8c2a3a" />
          <stop offset="1" stopColor="#4a0f1c" />
        </radialGradient>
      </defs>
      <rect width="800" height="340" fill="#f6c7c0" />
      <path d="M40 120 Q400 20 760 120 Q700 330 400 320 Q100 330 40 120Z" fill="url(#mouth)" />
      <path d="M40 120 Q400 20 760 120" fill="none" stroke="#c2566a" strokeWidth="14" strokeLinecap="round" />
      {teeth.map((t, k) => (
        <g key={k} transform={`rotate(${t.tilt} ${t.x} ${t.y})`}>
          <rect x={t.x - t.w / 2} y={t.y} width={t.w} height={t.h} rx={t.w * 0.34} fill={fill} stroke={bright ? "#bfeef6" : "#a8873a"} strokeWidth="2" />
          <rect x={t.x - t.w / 2 + 8} y={t.y + 8} width={t.w * 0.22} height={t.h * 0.55} rx="8" fill="#fff" opacity={bright ? 0.9 : 0.25} />
          {!bright && <circle cx={t.x + t.w * 0.18} cy={t.y + t.h * 0.7} r="4" fill="#8a6a1c" opacity="0.35" />}
        </g>
      ))}
    </svg>
  );
}

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  return (
    <div className="mx-auto max-w-5xl">
      <div ref={box} className="relative aspect-[800/340] w-full select-none overflow-hidden rounded-[2rem] border-4 border-white shadow-glass sm:rounded-[2.5rem]">
        <div className="absolute inset-0"><Smile bright /></div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}><Smile bright={false} /></div>
        <div className="pointer-events-none absolute inset-y-0 w-1 bg-white shadow-[0_0_30px_6px_rgba(34,211,238,0.8)]" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-glass">
            <ChevronLeft className="-mr-1 h-4 w-4" /><ChevronRight className="-ml-1 h-4 w-4" />
          </span>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">Before</span>
        <span className="absolute right-4 top-4 rounded-full bg-aqua-300 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink">After</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Drag to compare before and after"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-5 text-center text-sm text-ink/55">
        Illustration of professional whitening — drag to compare. Real {BUSINESS.short} patient results are added in the{" "}
        <a href="/gallery" className="font-semibold text-ocean-700 underline underline-offset-4">gallery</a>.
      </p>
    </div>
  );
}
