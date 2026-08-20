import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog post" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main>
      <section className="relative h-[50svh] min-h-[20rem]">
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(7,7,7,0.95) 0%, rgba(7,7,7,0.35) 45%, rgba(7,7,7,0.15) 100%)",
          }}
        />
        <div className="absolute right-0 bottom-0 left-0 z-[1] px-5 pb-8 md:px-8 md:pb-10">
          <p className="mb-3 text-[10px] tracking-[0.28em] text-muted uppercase">
            Blog
          </p>
          <h1 className="font-display max-w-4xl text-3xl font-semibold tracking-tight uppercase md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-[10px] tracking-[0.22em] text-muted uppercase">
            {post.date}
          </p>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-14">
        <article className="mx-auto max-w-3xl">
          <p className="mb-8 text-base leading-relaxed text-foreground/90">
            {post.excerpt}
          </p>
          {post.content.map((paragraph, i) => (
            <p key={i} className="mb-5 text-sm leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </article>

        <div className="mx-auto mt-14 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-foreground transition-opacity hover:opacity-70"
          >
            <span aria-hidden>←</span> Back to blog
          </Link>
        </div>
      </section>
    </main>
  );
}
