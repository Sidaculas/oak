
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { FaCalendar, FaUser, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function BlogHome() {
    const allPostsData = getSortedPostsData();

    return (
        <main className="min-h-screen pt-24 pb-16">
            {/* Header Section */}
            <section className="relative px-4 py-16 sm:px-6 lg:px-8">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-7xl">
                    {/* Back Button */}
                    <Link
                        href="/"
                        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-[#d4af37]"
                    >
                        <FaArrowLeft className="h-3 w-3" />
                        Back to Home
                    </Link>

                    <div className="text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Latest <span className="text-[#d4af37]">Insights</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Expert guides on UK company formation, fintech banking, and global business structuring.
                        </p>
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {allPostsData.map(({ slug, date, title, excerpt, tags }) => (
                            <article
                                key={slug}
                                className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg hover:shadow-[#d4af37]/10"
                            >
                                <div className="flex flex-1 flex-col p-6">
                                    {/* Tags */}
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {tags?.map(tag => (
                                            <span key={tag} className="rounded-full bg-[#d4af37]/10 px-3 py-1 text-xs font-medium text-[#d4af37]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h2 className="mb-3 text-2xl font-bold leading-tight decoration-[#d4af37] underline-offset-4 group-hover:underline">
                                        <Link href={`/blog/${slug}`} className="focus:outline-none">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {title}
                                        </Link>
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="mb-6 flex-1 text-muted-foreground">
                                        {excerpt}
                                    </p>

                                    {/* Footer */}
                                    <div className="mt-auto flex items-center justify-between border-t py-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <FaCalendar className="h-3 w-3" />
                                            <time dateTime={date}>{date}</time>
                                        </div>
                                        <div className="flex items-center gap-1 font-medium text-[#d4af37]">
                                            Read Article <FaArrowRight className="h-3 w-3" />
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#d4af37] to-[#f3d066] opacity-0 transition-opacity group-hover:opacity-100" />
                            </article>
                        ))}
                    </div>

                    {allPostsData.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-xl text-muted-foreground">No posts found.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
