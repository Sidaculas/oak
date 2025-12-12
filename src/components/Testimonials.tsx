"use client";

import { FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
    quote: string;
    name: string;
    location: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "Setting up my Delaware LLC from abroad was seamless. The service was fast and straightforward.",
        name: "Harry T.",
        location: "London, UK",
    },
    {
        quote: "Exceptional support throughout the LLC formation process. Highly recommended for non-residents.",
        name: "Ada S.",
        location: "Sydney, Australia",
    },
    {
        quote: "Transparent pricing and excellent assistance. My LLC was formed and ready to go in no time.",
        name: "Malik O.",
        location: "Dubai, UAE",
    },
];

export default function Testimonials() {
    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center lg:mb-16">
                    {/* Quote Icon */}
                    <div className="mb-6 flex justify-center">
                        <FaQuoteLeft className="h-12 w-12 text-[#d4af37] sm:h-16 sm:w-16" />
                    </div>

                    <h2 className="testimonials-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Testimonials
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="testimonial-card group relative overflow-hidden rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Card glow effect on hover */}
                            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                            </div>

                            {/* Quote */}
                            <p className="testimonial-quote mb-6 text-lg leading-relaxed">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="border-t border-border/40 pt-4">
                                <p className="testimonial-name mb-1 font-bold text-[#d4af37]">
                                    {testimonial.name}
                                </p>
                                <p className="testimonial-location text-sm">
                                    {testimonial.location}
                                </p>
                            </div>

                            {/* Decorative corner accent */}
                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/10 blur-2xl transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
