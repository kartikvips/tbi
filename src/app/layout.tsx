import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "Tech by India";
const DESCRIPTION = "Short, practical tech writing.";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techbyindia.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: DESCRIPTION,
    url: BASE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
          <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
            <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
              <Link
                href="/"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <span className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                  tbi
                </span>
                <span className="text-sm font-medium text-[var(--muted)]">
                  TechbyIndia
                </span>
              </Link>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-[var(--border)]">
            <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-8">
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="flex items-center gap-2 transition-opacity hover:opacity-80"
                >
                  <span className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                    tbi
                  </span>
                  <span className="text-sm font-medium text-[var(--muted)]">
                    TechbyIndia
                  </span>
                </Link>
                <span className="text-xs text-[var(--muted)]">
                  © {new Date().getFullYear()} Riverrun
                </span>
              </div>
              <Link
                href="/about"
                className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                About
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
