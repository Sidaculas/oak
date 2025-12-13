"use client";

interface SuccessStory {
    title: string;
    subtitle: string;
    description: string;
    badge: string;
    logos?: string[];
}

const successStories: SuccessStory[] = [
    {
        title: "UK LTD",
        subtitle: "SUCCESS STORY",
        description: "Non-resident entrepreneur formed limited company.",
        badge: "Approved in 48 hours",
        logos: [],
    },
    {
        title: "USA LLC",
        subtitle: "SUCCESS STORY",
        description: "African founder structured Delaware LLC.",
        badge: "Zerotax exposure",
        logos: [],
    },
    {
        title: "CANADA CORPORATION",
        subtitle: "SUCCESS STORY",
        description: "Asian entrepreneur incorporated without local address.",
        badge: "Virtual office",
        logos: [],
    },
    {
        title: "FINTECH APPROVALS",
        subtitle: "",
        description: "International client accepted by top payment platforms",
        badge: "",
        logos: ["Wise", "Revolut", "Stripe"],
    },
];

export default function SuccessStories() {
    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center lg:mb-16">
                    <h2 className="success-stories-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        SUCCESS STORIES
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Success Stories Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                    {successStories.map((story, index) => (
                        <div
                            key={index}
                            className="success-story-card group relative overflow-hidden rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Card glow effect on hover */}
                            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                            </div>

                            {/* Title */}
                            <h3 className="success-story-title mb-2 text-xl font-bold">
                                {story.title}
                            </h3>

                            {/* Subtitle */}
                            {story.subtitle && (
                                <p className="success-story-subtitle mb-4 text-xs font-semibold tracking-wider">
                                    {story.subtitle}
                                </p>
                            )}

                            {/* Description */}
                            <p className="success-story-description mb-6 text-sm leading-relaxed">
                                {story.description}
                            </p>

                            {/* Badge or Logos */}
                            {story.badge && (
                                <div className="mt-auto">
                                    <div className="success-story-badge inline-flex items-center rounded-full border-2 border-[#d4af37] px-4 py-2 text-xs font-semibold">
                                        {story.badge}
                                    </div>
                                </div>
                            )}

                            {story.logos && story.logos.length > 0 && (
                                <div className="mt-auto flex flex-wrap items-center gap-3">
                                    {story.logos.map((logo, logoIndex) => (
                                        <span
                                            key={logoIndex}
                                            className="success-story-logo text-lg font-bold"
                                        >
                                            {logo}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Decorative corner accent */}
                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/10 blur-2xl transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
