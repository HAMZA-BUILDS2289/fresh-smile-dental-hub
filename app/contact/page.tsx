import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EmergencyBanner, FaqSection, FinalCta, VisitSection } from "@/components/Sections";
import { CallButton, WaButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description: "Find Freshsmile Dental Hub beside Ascension filling station, Osogbo, Osun. Call 0913 656 2143 or WhatsApp to book.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumbs={[{ label: "Contact" }]}
        title={<>Let’s get you <span className="text-gradient italic">smiling.</span></>}
        sub="Call, WhatsApp or walk in with an appointment — we’re beside Ascension filling station, Osogbo."
      >
        <WaButton label="Chat Us On WhatsApp" arrow />
        <CallButton label="Call Now" />
      </PageHero>
      <VisitSection />
      <EmergencyBanner />
      <FaqSection />
      <FinalCta />
    </>
  );
}
