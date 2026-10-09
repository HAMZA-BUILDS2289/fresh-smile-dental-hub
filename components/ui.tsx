"use client";

import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS, wa } from "@/lib/data";
import { WhatsAppIcon } from "./Icon";

type Variant = "primary" | "dark" | "ghost" | "ghost-dark" | "white" | "red";

/** Every booking / chat button on the site is this component → opens WhatsApp with a pre-filled message. */
export function WaButton({
  label = "Book Appointment",
  message,
  variant = "primary",
  className = "",
  icon = true,
  arrow = false,
}: {
  label?: string;
  message?: string;
  variant?: Variant;
  className?: string;
  icon?: boolean;
  arrow?: boolean;
}) {
  return (
    <a
      href={wa(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-${variant} ${className}`}
    >
      {icon && <WhatsAppIcon className="h-5 w-5" />}
      <span>{label}</span>
      {arrow && <ArrowRight className="h-4 w-4" />}
    </a>
  );
}

export function CallButton({
  label = "Emergency? Call Now",
  variant = "ghost",
  className = "",
}: {
  label?: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a href={`tel:${BUSINESS.phoneTel}`} className={`btn-${variant} ${className}`}>
      <Phone className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
}

export function LinkButton({
  href,
  children,
  variant = "ghost",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`btn-${variant} ${className}`}>
      {children}
    </Link>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 40,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  );
}

/** Animated count-up for stats. */
export function Counter({
  value,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2200, bounce: 0 });
  const text = useTransform(spring, (v) => v.toFixed(decimals));
  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);
  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{text}</motion.span>
      {suffix}
    </span>
  );
}

/** 3D tilt-on-hover wrapper. */
export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 160, damping: 18 });
  const sry = useSpring(ry, { stiffness: 160, damping: 18 });
  return (
    <div className="tilt h-full">
      <motion.div
        ref={ref}
        className={className}
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
        onPointerMove={(e) => {
          if (e.pointerType !== "mouse") return;
          const r = ref.current!.getBoundingClientRect();
          ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
          rx.set(-((e.clientY - r.top) / r.height - 0.5) * 10);
        }}
        onPointerLeave={() => {
          rx.set(0);
          ry.set(0);
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  dark = false,
  center = true,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-16 lg:mb-24 ${center ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}`}>
      <span className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</span>
      <h2 className={`h-lg mt-6 ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {sub && (
        <p className={`mt-6 text-lg leading-relaxed sm:text-xl ${dark ? "text-aqua-100/80" : "text-ink/70"}`}>
          {sub}
        </p>
      )}
    </Reveal>
  );
}

/** Mid-page conversion band — used after every two homepage sections. */
export function CtaBand({
  title,
  text,
  message,
  label = "Get Your Dream Smile Now",
}: {
  title: string;
  text: string;
  message?: string;
  label?: string;
}) {
  return (
    <div className="container-wide py-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ink via-ocean-900 to-ocean-700 p-8 text-white shadow-glass sm:p-12 lg:p-16">
          <div className="aurora opacity-60" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <h3 className="h-md text-white">{title}</h3>
              <p className="mt-3 text-lg text-aqua-100/80">{text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <WaButton label={label} message={message} arrow />
              <CallButton label={`Call ${BUSINESS.phoneDisplay}`} variant="ghost-dark" />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
