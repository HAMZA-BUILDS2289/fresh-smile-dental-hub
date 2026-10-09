import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BUSINESS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Freshsmile Dental Hub handles your information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  { h: "Who we are", p: `${BUSINESS.name} is a dental clinic at ${BUSINESS.address}. You can reach us on ${BUSINESS.phoneDisplay}.` },
  { h: "What this website collects", p: "This website does not ask you to create an account and does not store your name, phone number or health details on our servers. If you use the appointment form, the details you type are used only to prepare a WhatsApp message that you choose to send." },
  { h: "WhatsApp and phone", p: "When you tap a Book Appointment or Chat button, WhatsApp opens with a pre-written message. What you send there is governed by WhatsApp’s own privacy policy. When you call us, we only use your number to reply to you and manage your appointment." },
  { h: "Cookies & storage", p: "We use your browser’s session storage solely to avoid showing the same pop-up more than once in a visit. We do not use it to identify you. Embedded Google Maps and Google Fonts may set their own cookies under Google’s policies." },
  { h: "Your clinical records", p: "Information you share with our clinical team during treatment is treated as confidential and used only for your care." },
  { h: "Your choices", p: "You can ask us at any time to correct or delete the details we hold about you by calling or messaging us on WhatsApp." },
  { h: "Changes", p: "We may update this policy from time to time. The latest version is always on this page." },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" crumbs={[{ label: "Privacy" }]} title={<>Privacy <span className="text-gradient italic">policy</span></>} sub="Short, plain-language, and honest about what we do." />
      <section className="pb-28">
        <div className="container-wide max-w-4xl space-y-12">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="h-md">{s.h}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">{s.p}</p>
            </div>
          ))}
          <p className="text-sm text-ink/50">Last updated: October 2026. This page is a general summary and not legal advice — have it reviewed before launch.</p>
        </div>
      </section>
    </>
  );
}
