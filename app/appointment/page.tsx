import type { Metadata } from "next";
import { Clock, MessageCircle, Phone } from "lucide-react";
import { AppointmentForm } from "@/components/AppointmentForm";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/Sections";
import { Reveal, WaButton } from "@/components/ui";
import { BUSINESS, steps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Book your dental appointment at Freshsmile Dental Hub, Osogbo, via WhatsApp. Appointment required.",
  alternates: { canonical: "/appointment" },
};

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Book an appointment"
        crumbs={[{ label: "Appointment" }]}
        title={<>Book your visit in <span className="text-gradient italic">under a minute.</span></>}
        sub="Fill in what you can, or skip straight to WhatsApp. Appointments are required so every patient gets our full attention."
      >
        <WaButton label="Skip The Form — Chat On WhatsApp" arrow />
      </PageHero>

      <section className="pb-24 lg:pb-32">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal><AppointmentForm /></Reveal>
          <Reveal delay={0.1} className="space-y-6">
            <div className="rounded-[2rem] bg-ink p-8 text-white">
              <h2 className="display text-2xl text-white">How it works</h2>
              <ol className="mt-6 space-y-5">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="display text-3xl text-aqua-300">{s.n}</span>
                    <span><b className="block">{s.title}</b><span className="text-sm text-aqua-100/70">{s.text}</span></span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="glass space-y-4 rounded-[2rem] p-8">
              <p className="flex items-center gap-3 font-semibold"><Phone className="h-5 w-5 text-aqua-600" /><a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phoneDisplay}</a></p>
              <p className="flex items-center gap-3 font-semibold"><MessageCircle className="h-5 w-5 text-aqua-600" /> WhatsApp the same number</p>
              <p className="flex items-center gap-3 font-semibold"><Clock className="h-5 w-5 text-aqua-600" /> By appointment only</p>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn-red !text-white !bg-red-500 w-full">Emergency? Call Now</a>
            </div>
          </Reveal>
        </div>
      </section>
      <FaqSection />
    </>
  );
}
