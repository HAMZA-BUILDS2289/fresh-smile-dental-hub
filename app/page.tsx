import { Hero } from "@/components/Hero";
import {
  AboutSection,
  BlogPreview,
  DoctorSection,
  EmergencyBanner,
  FaqSection,
  FinalCta,
  HowItWorks,
  PricingSection,
  ReviewsSection,
  ServicesSection,
  SmileGallerySection,
  StatsBand,
  TrustMarquee,
  VisitSection,
  WhySection,
} from "@/components/Sections";
import { CtaBand } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <StatsBand />
      <CtaBand
        title="Ready for a brighter, healthier smile?"
        text="Appointments are by booking — message us and we’ll find a time that suits you."
      />
      <AboutSection />
      <WhySection />
      <CtaBand
        title="Experience dentistry without the dread."
        text="Gentle care, sedation if you need it, and a team that listens."
        message="Hello Freshsmile Dental Hub, I want to book an appointment. I'd like a gentle, comfortable visit."
      />
      <ServicesSection />
      <SmileGallerySection />
      <CtaBand
        title="Whitening, braces, root canals — all in one place."
        text="Tell us what you’d like to fix and we’ll build a plan around it."
        message="Hello Freshsmile Dental Hub, I want to book an appointment to discuss a treatment plan."
      />
      <DoctorSection />
      <ReviewsSection />
      <CtaBand
        title="Join our happy 4.8★ patients."
        text="Your first step is one WhatsApp message away."
        label="Chat Us On WhatsApp"
      />
      <HowItWorks />
      <EmergencyBanner />
      <PricingSection />
      <BlogPreview />
      <CtaBand
        title="Free parking. Cards accepted. Friendly faces."
        text="Everything you need for an easy, comfortable visit."
      />
      <VisitSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
