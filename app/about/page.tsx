import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AboutSection, DoctorSection, EmergencyBanner, FinalCta, ReviewsSection, VisitSection, WhySection } from "@/components/Sections";
import { CtaBand, Reveal, SectionHead, WaButton } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { attributes } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Freshsmile Dental Hub is a women-owned, patient-centred dental clinic in Osogbo, Osun, rated 4.8★ by patients.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Freshsmile"
        crumbs={[{ label: "About" }]}
        title={<>A women-owned clinic with <span className="text-gradient italic">your comfort</span> at heart.</>}
        sub="Modern, welcoming and patient-centred — right in the heart of Osogbo."
      >
        <WaButton label="Book Appointment" arrow />
      </PageHero>
      <AboutSection />
      <WhySection />
      <section className="section-pad">
        <div className="container-wide">
          <SectionHead eyebrow="The clinic" title={<>Made for an <span className="text-gradient italic">easy visit</span></>} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {attributes.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.1} className="h-full">
                <div className="glass card-lift h-full rounded-[2rem] p-8">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-aqua-300"><Icon name={a.icon} className="h-7 w-7" /></span>
                  <h3 className="display mt-6 text-2xl">{a.title}</h3>
                  <p className="mt-2 text-ink/70">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Come and meet us." text="We’d love to welcome you to Freshsmile." />
      <DoctorSection />
      <ReviewsSection />
      <EmergencyBanner />
      <VisitSection />
      <FinalCta />
    </>
  );
}
