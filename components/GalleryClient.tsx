"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { gallery, galleryCategories } from "@/lib/data";

export function GalleryClient() {
  const [cat, setCat] = useState<(typeof galleryCategories)[number]>("All");
  const [idx, setIdx] = useState<number | null>(null);
  const items = gallery.filter((g) => cat === "All" || g.category === cat);

  const close = useCallback(() => setIdx(null), []);
  const next = useCallback(() => setIdx((i) => (i === null ? i : (i + 1) % items.length)), [items.length]);
  const prev = useCallback(() => setIdx((i) => (i === null ? i : (i - 1 + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx, close, next, prev]);

  return (
    <>
      <div className="mb-14 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Gallery categories">
        {galleryCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => setCat(c)}
            className={`rounded-full px-6 py-3 text-[15px] font-bold transition ${
              cat === c ? "bg-ink text-white shadow-glass" : "border border-ink/15 bg-white/70 hover:border-aqua-500"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {items.map((g, i) => (
            <motion.button
              layout
              key={g.src}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIdx(i)}
              className="group relative mb-6 block w-full overflow-hidden rounded-[2rem] border-4 border-white text-left shadow-glass"
              aria-label={`Open ${g.title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt={g.title} loading="lazy" className="w-full object-cover transition duration-700 group-hover:scale-110" />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-6 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="text-white">
                  <span className="block text-xs font-bold uppercase tracking-widest text-aqua-300">{g.category}</span>
                  <span className="display text-xl">{g.title}</span>
                </span>
              </span>
              <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/80 text-ink opacity-0 backdrop-blur transition group-hover:opacity-100">
                <ZoomIn className="h-5 w-5" />
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {idx !== null && items[idx] && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button onClick={close} aria-label="Close" className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <X />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image" className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-8">
              <ChevronLeft />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image" className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-8">
              <ChevronRight />
            </button>
            <motion.figure
              key={items[idx].src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-5xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={items[idx].src} alt={items[idx].title} className="max-h-[78vh] rounded-3xl object-contain shadow-2xl" />
              <figcaption className="mt-4 text-center text-white">
                <span className="block text-xs font-bold uppercase tracking-widest text-aqua-300">{items[idx].category}</span>
                <span className="display text-xl">{items[idx].title}</span>
                <span className="mt-1 block text-sm text-white/50">{idx + 1} / {items.length}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
