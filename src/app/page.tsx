import Link from "next/link";
import { getAllPosts, getPostPath } from "@/lib/post-list";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-12 sm:px-8">
      <section>
        <ul className="divide-y divide-[var(--border)]">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={getPostPath(post)}
                className="group flex flex-col gap-0.5 py-4 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <div className="min-w-0">
                  <h2 className="font-medium text-[var(--foreground)] transition-colors group-hover:text-[var(--muted)]">
                    {post.title}
                  </h2>
                  <p className="mt-0.5 text-sm text-[var(--muted)] line-clamp-1 sm:mt-1">
                    {post.excerpt}
                  </p>
                </div>
                <time
                  dateTime={post.date}
                  className="shrink-0 text-xs text-[var(--muted)] sm:text-right"
                >
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
