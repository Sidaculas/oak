"use client";

import Link from "next/link";
import { FaWhatsapp, FaSearch } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="hero-circle-1 absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl"></div>
                <div className="hero-circle-2 absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-5xl text-center">
                {/* Badge */}
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4af37]"></span>
                    </span>
                    <span className="hero-text text-sm font-medium">
                        Trusted by 500+ International Entrepreneurs
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="hero-heading mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Start Your UK Company from{" "}
                    <span className="bg-gradient-to-r from-[#d4af37] via-[#f3d066] to-[#d4af37] bg-clip-text text-transparent">
                        Anywhere in the World
                    </span>
                    {" "}— in 24 Hours
                </h1>

                {/* Subheading */}
                <p className="hero-text mx-auto mb-10 max-w-2xl text-lg leading-relaxed sm:text-xl md:text-2xl">
                    Premium UK company formation for non-residents. Confidential address, fintech approval
                    support, global business structuring.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                    <Link
                        href="https://wa.me/447447488755"
                        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-8 py-4 text-base font-bold text-black shadow-2xl shadow-[#d4af37]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#d4af37]/50 active:scale-95 sm:text-lg"
                    >
                        <FaWhatsapp className="h-5 w-5 transition-transform group-hover:rotate-12" />
                        <span>Start Now</span>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f3d066] to-[#d4af37] opacity-0 transition-opacity group-hover:opacity-100"></div>
                    </Link>

                    <Link
                        href="#checker"
                        className="hero-secondary-btn group inline-flex items-center gap-3 rounded-xl border-2 border-[#d4af37] bg-transparent px-8 py-4 text-base font-bold transition-all duration-300 hover:scale-105 hover:bg-[#d4af37] hover:text-black active:scale-95 sm:text-lg"
                    >
                        <FaSearch className="h-4 w-4 transition-transform group-hover:scale-110" />
                        <span>Check Company Name</span>
                    </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm sm:gap-8">
                    <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="hero-text font-medium">24-Hour Setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="hero-text font-medium">100% Remote</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="hero-text font-medium">Expert Support</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
