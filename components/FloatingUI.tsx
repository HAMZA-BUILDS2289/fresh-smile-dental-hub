"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, X } from "lucide-react";
import { BUSINESS, wa } from "@/lib/data";
import { WhatsAppIcon } from "./Icon";
import { WaButton } from "./ui";

/** WhatsApp chat widget (all screens) + sticky Book / Call bar (mobile). */
export function FloatingWidgets() {
  return (
    <>
      <a
        href={wa("Hello Freshsmile Dental Hub, I have a question.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Freshsmile on WhatsApp"
        className="group fixed bottom-24 right-5 z-[60] lg:bottom-8 lg:right-8"
      >
        <span className="absolute inset-0 animate-pulseRing rounded-full bg-[#25D366]" />
        <span className="relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-5px_rgba(37,211,102,0.7)] transition group-hover:scale-110">
          <WhatsAppIcon className="h-8 w-8" />
        </span>
        <span className="pointer-events-none absolute right-[4.5rem] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-glass transition group-hover:opacity-100 lg:block">
          Chat with us on WhatsApp
        </span>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/60 bg-white/85 p-3 backdrop-blur-2xl lg:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <WaButton label="Book Appointment" className="flex-1 !px-4 !py-3.5" />
          <a href={`tel:${BUSINESS.phoneTel}`} className="btn-dark !px-5 !py-3.5" aria-label="Call the clinic">
            <Phone className="h-4 w-4" />
            Call
          </a>
        </div>
      </div>
    </>
  );
}

/** Lead pop-up: appears once per session after 10 s, or on exit intent (desktop). */
export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const shown = useRef(false);

  const show = useCallback(() => {
    if (shown.current) return;
    try {
      if (sessionStorage.getItem("fs-popup")) return;
      sessionStorage.setItem("fs-popup", "1");
    } catch {
      /* storage unavailable — still show once per page load */
    }
    shown.current = true;
    setOpen(true);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(show, 10000);
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };
    document.addEventListener("mouseout", onLeave);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [show]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/70 p-5 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Book your appointment"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.85, y: 40, rotateX: 12 }}
            animate={{ scale: 1, y: 0, rotateX: 0 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 240 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-ocean-900 to-ocean-700 p-8 text-white shadow-2xl sm:p-12"
          >
            <div className="aurora opacity-60" />
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative">
              <span className="eyebrow-dark">★ {BUSINESS.rating} rated in Osogbo</span>
              <h2 className="h-md mt-5 text-white">
                Your best smile is <span className="text-gradient-light italic">one message away.</span>
              </h2>
              <p className="mt-4 text-aqua-100/80">
                Appointments are by booking only. Tap below — your WhatsApp opens with the message already written.
                Just press send.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <WaButton label="Get Your Dream Smile Now" arrow />
                <a href={`tel:${BUSINESS.phoneTel}`} className="btn-ghost-dark">
                  <Phone className="h-4 w-4" /> Emergency? Call Now
                </a>
              </div>
              <button onClick={() => setOpen(false)} className="mt-6 text-sm text-aqua-200/70 underline underline-offset-4">
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
