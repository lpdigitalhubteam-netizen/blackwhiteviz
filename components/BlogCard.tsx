import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block text-left"
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-panel">
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/30" />
      </div>
      <h3 className="mt-4 font-display text-sm font-semibold leading-snug tracking-tight uppercase text-foreground transition-opacity group-hover:opacity-70 md:text-base">
        {post.title}
      </h3>
    </Link>
  );
}

export function BlogCardDetailed({ post }: { post: BlogPost }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-panel">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <p className="mt-4 text-[10px] tracking-[0.22em] text-muted uppercase">
          {post.date}
        </p>
        <h2 className="mt-2 font-display text-xl font-semibold leading-snug tracking-tight uppercase md:text-2xl">
          {post.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase transition-opacity group-hover:opacity-60">
          Read
          <span aria-hidden>→</span>
        </span>
      </Link>
    </article>
  );
}
