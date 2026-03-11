import type { Metadata } from "next";

const SITE_NAME = "Tech by India";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techbyindia.com";

export const metadata: Metadata = {
  title: `Exploring Indian dependencies on foreign tech | ${SITE_NAME}`,
  description:
    "A look at where Indian tech relies on foreign infrastructure, tools, and platforms, and what it would take to change that.",
  alternates: {
    canonical: `${BASE_URL}/indian-dependencies-foreign-tech`,
  },
  openGraph: {
    title: `Exploring Indian dependencies on foreign tech | ${SITE_NAME}`,
    description:
      "A look at where Indian tech relies on foreign infrastructure, tools, and platforms, and what it would take to change that.",
    url: `${BASE_URL}/indian-dependencies-foreign-tech`,
    siteName: SITE_NAME,
    type: "article",
    publishedTime: "2025-03-10",
  },
  twitter: {
    card: "summary_large_image",
    title: `Exploring Indian dependencies on foreign tech | ${SITE_NAME}`,
    description:
      "A look at where Indian tech relies on foreign infrastructure, tools, and platforms, and what it would take to change that.",
  },
};

export default function IndianDependenciesForeignTechPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
      <header className="mb-10">
        <time
          dateTime="2025-03-10"
          className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]"
        >
          March 10, 2025
        </time>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Exploring Indian dependencies on foreign tech
        </h1>
      </header>
      <div className="space-y-5 text-[length:1.0625rem] leading-relaxed text-[var(--muted)]">
        <p>
          Where does Indian tech rely on foreign infrastructure, tools, and platforms? This piece will map those dependencies and what it would take to build alternatives. Add your content here.
        </p>
      </div>
    </article>
  );
}
