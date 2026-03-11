export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
};

export function getPostPath(post: Post): string {
  return post.category ? `/${post.category}/${post.slug}` : `/${post.slug}`;
}

export const postList: Post[] = [
  {
    slug: "indian-dependencies-foreign-tech",
    title: "Exploring Indian dependencies on foreign tech",
    date: "2025-03-10",
    excerpt: "A look at where Indian tech relies on foreign infrastructure, tools, and platforms, and what it would take to change that.",
  },
  {
    slug: "does-tech-sovereignty-matter",
    title: "Does tech sovereignty matter? What's the point?",
    date: "2025-03-09",
    excerpt: "Why care about sovereignty in tech? A straight take on what's at stake.",
  },
];

export function getAllPosts(): Post[] {
  return [...postList].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
