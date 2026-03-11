import type { Metadata } from "next";

const SITE_NAME = "Tech by India";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techbyindia.com";

export const metadata: Metadata = {
  title: `Does tech sovereignty matter? What's the point? | ${SITE_NAME}`,
  description:
    "Why care about sovereignty in tech? A straight take on what's at stake.",
  alternates: {
    canonical: `${BASE_URL}/does-tech-sovereignty-matter`,
  },
  openGraph: {
    title: `Does tech sovereignty matter? What's the point? | ${SITE_NAME}`,
    description:
      "Why care about sovereignty in tech? A straight take on what's at stake.",
    url: `${BASE_URL}/does-tech-sovereignty-matter`,
    siteName: SITE_NAME,
    type: "article",
    publishedTime: "2025-03-09",
  },
  twitter: {
    card: "summary_large_image",
    title: `Does tech sovereignty matter? What's the point? | ${SITE_NAME}`,
    description:
      "Why care about sovereignty in tech? A straight take on what's at stake.",
  },
};

export default function DoesTechSovereigntyMatterPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
      <header className="mb-10">
        <time
          dateTime="2025-03-09"
          className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]"
        >
          March 9, 2025
        </time>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Does tech sovereignty matter? What&apos;s the point?
        </h1>
      </header>
      <div className="space-y-5 text-[length:1.0625rem] leading-relaxed text-[var(--muted)]">
        <p>
          Add your content here. Why care about sovereignty in tech? What&apos;s actually at stake?
        </p>
      </div>
    </article>
  );
}
