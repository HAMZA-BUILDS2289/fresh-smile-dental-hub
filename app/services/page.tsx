import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServicesSection } from "@/components/Sections";
import { CallButton, CtaBand, WaButton } from "@/components/ui";
import { FaqSection, FinalCta } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Dental Services in Osogbo",
  description:
    "Teeth whitening, scaling & polishing, corrective braces, tooth replacement, extraction, root canal, check-ups, cosmetic, emergency, pediatric and sedation dentistry at Freshsmile Dental Hub, Osogbo.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        crumbs={[{ label: "Services" }]}
        title={<>11 treatments. <span className="text-gradient italic">One caring team.</span></>}
        sub="Complete dental care in Osogbo — from routine check-ups to advanced treatments like root canals and corrective braces."
      >
        <WaButton label="Get Your Dream Smile Now" arrow />
        <CallButton />
      </PageHero>
      <ServicesSection />
      <CtaBand title="Not sure which treatment you need?" text="Book a check-up and we’ll explain your options in plain language." />
      <FaqSection />
      <FinalCta />
    </>
  );
}
