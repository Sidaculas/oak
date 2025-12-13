import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostData, getAllPostSlugs } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaArrowLeft, FaCalendar, FaUser, FaTag } from 'react-icons/fa';

export async function generateStaticParams() {
    const posts = getAllPostSlugs();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostData(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-24 pb-16">
            {/* Header Section */}
            <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    href="/blog"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-[#d4af37]"
                >
                    <FaArrowLeft className="h-3 w-3" />
                    Back to Blog
                </Link>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center gap-1 rounded-full bg-[#d4af37]/10 px-3 py-1 text-xs font-medium text-[#d4af37]"
                            >
                                <FaTag className="h-2.5 w-2.5" />
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    {post.title}
                </h1>

                {/* Meta Information */}
                <div className="mb-8 flex flex-wrap items-center gap-4 border-b pb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <FaCalendar className="h-3.5 w-3.5" />
                        <time dateTime={post.date}>{post.date}</time>
                    </div>
                    {post.author && (
                        <div className="flex items-center gap-2">
                            <FaUser className="h-3.5 w-3.5" />
                            <span>{post.author}</span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h1: ({ node, ...props }) => (
                                <h1 className="mb-4 mt-8 text-3xl font-bold" {...props} />
                            ),
                            h2: ({ node, ...props }) => (
                                <h2 className="mb-3 mt-6 text-2xl font-bold text-[#d4af37]" {...props} />
                            ),
                            h3: ({ node, ...props }) => (
                                <h3 className="mb-2 mt-4 text-xl font-semibold" {...props} />
                            ),
                            p: ({ node, ...props }) => (
                                <p className="mb-4 leading-relaxed text-foreground/90" {...props} />
                            ),
                            ul: ({ node, ...props }) => (
                                <ul className="mb-4 ml-6 list-disc space-y-2" {...props} />
                            ),
                            ol: ({ node, ...props }) => (
                                <ol className="mb-4 ml-6 list-decimal space-y-2" {...props} />
                            ),
                            li: ({ node, ...props }) => (
                                <li className="leading-relaxed" {...props} />
                            ),
                            a: ({ node, ...props }) => (
                                <a
                                    className="font-medium text-[#d4af37] underline decoration-[#d4af37]/30 underline-offset-2 transition-colors hover:decoration-[#d4af37]"
                                    {...props}
                                />
                            ),
                            blockquote: ({ node, ...props }) => (
                                <blockquote
                                    className="border-l-4 border-[#d4af37] pl-4 italic text-muted-foreground"
                                    {...props}
                                />
                            ),
                            code: ({ node, inline, ...props }: any) =>
                                inline ? (
                                    <code
                                        className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
                                        {...props}
                                    />
                                ) : (
                                    <code
                                        className="block rounded-lg bg-muted p-4 font-mono text-sm"
                                        {...props}
                                    />
                                ),
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>

                {/* Back to Blog Link */}
                <div className="mt-12 border-t pt-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-6 py-3 font-semibold text-black shadow-lg shadow-[#d4af37]/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#d4af37]/30 active:scale-95"
                    >
                        <FaArrowLeft className="h-4 w-4" />
                        Back to All Articles
                    </Link>
                </div>
            </article>
        </main>
    );
}
