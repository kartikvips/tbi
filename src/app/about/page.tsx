import type { Metadata } from "next";

const SITE_NAME = "Tech by India";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techbyindia.com";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description: "Tech by India: a place to talk Indian tech and help guide it towards true sovereignty.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: `About | ${SITE_NAME}`,
    description: "Tech by India: a place to talk Indian tech and help guide it towards true sovereignty.",
    url: `${BASE_URL}/about`,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `About | ${SITE_NAME}`,
    description: "Tech by India: a place to talk Indian tech and help guide it towards true sovereignty.",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
        About
      </h1>
      <div className="mt-8 space-y-5 text-[length:1.0625rem] leading-relaxed text-[var(--muted)]">
        <p>
          I remember the 1990s. Rolling brownouts, open nalis, potholes. Things not working. The growth since then has been remarkable, but sovereignty can’t be sacrificed for it.
        </p>
        <p>
          Real sovereignty is its own stack, its own standards. An ecosystem that doesn’t depend on someone else’s goodwill. I started Tech by India to talk about Indian tech and help guide it towards that.
        </p>

        <h2 className="mt-10 text-lg font-semibold tracking-tight text-[var(--foreground)]">
          What this is
        </h2>
        <p>
          A place for insights. Think tank with commentary. Short, practical writing on Indian tech. Opinion and perspective, not breaking news. Working through what sovereignty looks like in practice and how to get there, and shining a light on the tremendous work already being done and what else can be done.
        </p>

        <h2 className="mt-10 text-lg font-semibold tracking-tight text-[var(--foreground)]">
          Why sovereignty matters
        </h2>
        <p>
          Without it, growth is borrowed. You run on someone else’s infra, their rules, their ability to turn off the tap. Sovereignty means deciding. Your data, your systems, your standards. It’s what lets Indian tech endure when the world gets noisy.
        </p>

        <h2 className="mt-10 text-lg font-semibold tracking-tight text-[var(--foreground)]">
          Who’s behind this
        </h2>
        <p>
          I’m Kartik. Founder and developer in San Francisco, 9+ years building platforms and consumer web apps. I’ve done ecommerce (Trove) and fintech (Forge Global). Now I run <a href="https://riverrun.xyz" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] underline underline-offset-2 hover:opacity-80">Riverrun</a>, where I build things like <a href="https://musicly.org" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] underline underline-offset-2 hover:opacity-80">Musicly</a>.
        </p>
      </div>
    </main>
  );
}
