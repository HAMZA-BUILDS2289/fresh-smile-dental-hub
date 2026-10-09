import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BlogPreview, FinalCta } from "@/components/Sections";
import { CtaBand } from "@/components/ui";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dental Care Blog",
  description: "Practical dental-care advice from Freshsmile Dental Hub in Osogbo: whitening, root canals, braces, children’s dentistry and emergencies.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The Freshsmile blog"
        crumbs={[{ label: "Blog" }]}
        title={<>Fresh advice for <span className="text-gradient italic">healthier smiles</span></>}
        sub="Simple, practical dental-care guidance from our team."
      />
      <BlogPreview limit={posts.length} />
      <CtaBand title="Got a dental question?" text="Ask us on WhatsApp — we’re happy to help." label="Chat Us On WhatsApp" />
      <FinalCta />
    </>
  );
}
