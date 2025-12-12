"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

const paymentProviders = [
    { name: "Stripe", logo: "/assets/stripe.svg" },
    { name: "Wise", logo: "/assets/wise.svg" },
    { name: "Payoneer", logo: "/assets/payoneer.svg" },
    { name: "Airwallex", logo: "/assets/airwallaex.svg" },
    { name: "Revolut", logo: "/assets/revolut.svg" },
];

export default function TrustSection() {
    const { theme } = useTheme();

    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="trust-heading mb-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                        Payment Gateways
                    </h2>
                    <p className="trust-subheading mx-auto max-w-2xl text-base sm:text-lg">
                        Accept payments globally with the following options:
                    </p>
                </div>

                {/* Payment Provider Cards Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
                    {paymentProviders.map((provider, index) => (
                        <div
                            key={provider.name}
                            className="trust-card-bg group relative overflow-hidden rounded-xl border p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl sm:p-6"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Card glow effect on hover */}
                            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                            </div>

                            {/* Logo container */}
                            <div className="flex h-20 items-center justify-center sm:h-24">
                                <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-110">
                                    <Image
                                        src={provider.logo}
                                        alt={`${provider.name} logo`}
                                        fill
                                        className="object-contain brightness-0 invert dark:brightness-100 dark:invert-0"
                                        style={{
                                            filter: theme === "dark" ? "grayscale(100%)" : "grayscale(10%)"
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Provider name (hidden, for accessibility) */}
                            <span className="sr-only">{provider.name}</span>

                            {/* Decorative corner accent */}
                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/10 blur-2xl transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom text */}
                <div className="mt-10 text-center lg:mt-12">
                    <p className="trust-footer-text text-xs sm:text-sm">
                        We support integration with all major payment gateways for your business needs
                    </p>
                </div>
            </div>
        </section>
    );
}
