import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { BUSINESS, fmtDate, getPost, getService, posts } from "@/lib/data";
import { PostCover } from "@/components/Sections";
import { FinalCta } from "@/components/Sections";
import { PageHero } from "@/components/PageHero";
import { CtaBand, Reveal, WaButton } from "@/components/ui";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.excerpt, publishedTime: p.date },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug);
  if (!p) notFound();
  const svc = getService(p.related);
  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    author: { "@type": "Organization", name: BUSINESS.name },
    publisher: { "@type": "Organization", name: BUSINESS.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow={p.category}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: p.title }]}
        title={<span className="block max-w-5xl !text-[clamp(2.2rem,5.5vw,4.8rem)]">{p.title}</span>}
        sub={p.excerpt}
      >
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink/60">
          <Clock className="h-4 w-4" /> {p.readTime} · {fmtDate(p.date)} · By the Freshsmile team
        </span>
      </PageHero>

      <article className="pb-24">
        <div className="container-wide max-w-4xl">
          <Reveal>
            <PostCover post={p} className="h-64 rounded-[2.5rem] shadow-glass sm:h-96" />
          </Reveal>
          <div className="mt-14 space-y-8">
            {p.body.map((b, i) => (
              <div key={i}>
                {b.h && <h2 className="h-md mb-4">{b.h}</h2>}
                <p className="text-xl leading-[1.8] text-ink/80">{b.p}</p>
              </div>
            ))}
          </div>

          {svc && (
            <div className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ink via-ocean-900 to-ocean-700 p-10 text-white">
              <div className="aurora opacity-50" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-widest text-aqua-300">Related treatment</p>
                <h3 className="display mt-2 text-3xl text-white">{svc.title}</h3>
                <p className="mt-3 text-aqua-100/80">{svc.short}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <WaButton label={`Book ${svc.title}`} message={`Hello Freshsmile Dental Hub, I read your article "${p.title}" and want to book an appointment for ${svc.title}.`} />
                  <Link href={`/services/${svc.slug}`} className="btn-ghost-dark">Learn more <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </div>
          )}
          <p className="mt-10 text-sm text-ink/50">General information only — not a substitute for an examination. Book a check-up for advice about your own teeth.</p>
        </div>
      </article>

      <section className="pb-24">
        <div className="container-wide">
          <h2 className="h-md mb-10">Keep reading</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {more.map((m) => (
              <Link key={m.slug} href={`/blog/${m.slug}`} className="card-lift group overflow-hidden rounded-[2rem] bg-white shadow-glass">
                <PostCover post={m} className="h-44" />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-ocean-600">{m.category}</p>
                  <h3 className="display mt-2 text-xl">{m.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Healthy smile, happy you." text="Book your check-up on WhatsApp in seconds." />
      <FinalCta />
    </>
  );
}
