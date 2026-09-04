import type { Metadata } from "next";
import { BlogCardDetailed } from "@/components/BlogCard";
import { blogIntro, blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: blogIntro.description,
};

export default function BlogPage() {
  return (
    <main className="px-5 pt-28 pb-24 md:px-8 md:pt-32 md:pb-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-[10px] tracking-[0.28em] text-muted uppercase">
          {blogIntro.kicker}
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight uppercase md:text-7xl">
          {blogIntro.title}
        </h1>
        <p className="mt-4 text-sm italic text-foreground/70 md:text-base">
          {blogIntro.tagline}
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted">
          {blogIntro.description}
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCardDetailed key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
