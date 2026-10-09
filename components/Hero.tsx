"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, BadgeCheck, Siren, Star } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { LinkButton, WaButton } from "./ui";

const Tooth3D = dynamic(() => import("./Tooth3D"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full place-items-center">
      <div className="h-40 w-40 animate-pulse rounded-full bg-aqua-200/60 blur-2xl" />
    </div>
  ),
});

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="aurora" />
      <div className="grid-bg absolute inset-0 -z-10" />

      <div className="container-wide relative grid min-h-[calc(100svh-120px)] items-center gap-10 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-16">
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow"
          >
            <Star className="h-3.5 w-3.5 fill-aqua-500 text-aqua-500" /> {BUSINESS.rating} stars · {BUSINESS.reviewCount} reviews · Osogbo
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-xl mt-7"
          >
            The smile you’ve <br className="hidden sm:block" />
            <span className="text-gradient italic">always wanted,</span>
            <br className="hidden sm:block" /> made comfortable.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl"
          >
            {BUSINESS.tagline}. Whitening, braces, root canals, sedation and more — all under one roof, led by a
            women-owned team that puts you first.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <WaButton label="Get Your Dream Smile Now" arrow className="sm:!px-9 sm:!py-5 sm:!text-base" />
            <LinkButton href="/#reviews" variant="ghost" className="sm:!px-8 sm:!py-5">
              <Star className="h-4 w-4 fill-aqua-500 text-aqua-500" /> Check Our 4.8 Star Reviews
            </LinkButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-ink/70"
          >
            {["Women-owned", "Appointment-only, no waiting rooms", "Free on-site parking"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-aqua-600" /> {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* 3D stage */}
        <div className="relative z-0 h-[420px] sm:h-[560px] lg:h-[720px]">
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-aqua-200/70 via-white/0 to-ocean-500/30 blur-3xl" />
          <div className="absolute inset-0">
            <Tooth3D />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="glass absolute right-0 top-8 animate-float rounded-3xl px-5 py-4 sm:right-4"
          >
            <p className="display text-3xl text-ink">{BUSINESS.rating}★</p>
            <p className="text-xs font-semibold text-ink/60">{BUSINESS.reviewCount} patient reviews</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="glass absolute bottom-24 left-0 animate-float rounded-3xl px-5 py-4 [animation-delay:-2s] sm:left-4"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-ocean-600">11 treatments</p>
            <p className="display mt-1 text-xl text-ink">One roof. One team.</p>
          </motion.div>
          <motion.a
            href={`tel:${BUSINESS.phoneTel}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="glass absolute bottom-4 right-2 flex animate-float items-center gap-3 rounded-full py-2 pl-2 pr-5 [animation-delay:-4s] sm:right-10"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-red-500 text-white">
              <Siren className="h-5 w-5" />
            </span>
            <span className="text-sm font-bold text-ink">Emergency? Call Now</span>
          </motion.a>
          <p className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 text-xs text-ink/40 lg:block">Move your cursor — the tooth follows</p>
        </div>
      </div>

      <a href="#stats" aria-label="Scroll down" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-ink/40 lg:block">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}

