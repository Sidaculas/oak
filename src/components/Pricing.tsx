"use client";

import Link from "next/link";
import CountrySelector, { Country } from "./CountrySelector";
import { FaCheck } from "react-icons/fa";
import { useCountry } from "@/contexts/CountryContext";

interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    featured?: boolean;
}

const pricingData: Record<Country, PricingTier[]> = {
    UK: [
        {
            name: "Starter",
            price: "£89",
            description: "Perfect for new entrepreneurs.",
            features: [
                "UK LTD incorporation",
                "Digital documents",
                "SIC optimisation",
                "24h formation",
            ],
            cta: "Start Now",
        },
        {
            name: "Prestige",
            price: "£199",
            description: "For business owners who want privacy & fintech approval.",
            features: [
                "Everything in the Starter, plus:",
                "Registered office",
                "Director service address",
                "Mail scanning",
                "Fintech application support (Wise, Revolut, Airwallex, Payoneer, Stripe)",
            ],
            cta: "Start Your Company",
            featured: true,
        },
        {
            name: "Elite",
            price: "£399",
            description: "Premium done-for-you setup.",
            features: [
                "Everything in Prestige, plus:",
                "Full compliance pack",
                "Consultation call",
                "Accounting onboarding",
                "VAT registration (optional)",
            ],
            cta: "Become Elite",
        },
    ],
    USA: [
        {
            name: "Starter",
            price: "$199",
            description: "Essential LLC formation.",
            features: [
                "Delaware LLC formation",
                "Registered agent (1 year)",
                "EIN registration",
                "Operating agreement",
            ],
            cta: "Start Now",
        },
        {
            name: "Premium",
            price: "$399",
            description: "Complete business setup.",
            features: [
                "Everything in Starter, plus:",
                "US business address",
                "Mail forwarding",
                "Bank account guidance",
                "Payment processor setup",
            ],
            cta: "Get Started",
            featured: true,
        },
        {
            name: "Elite",
            price: "$699",
            description: "Full-service package.",
            features: [
                "Everything in Premium, plus:",
                "Tax consultation",
                "Compliance calendar",
                "Ongoing support",
                "Priority service",
            ],
            cta: "Go Elite",
        },
    ],
    Canada: [
        {
            name: "Starter",
            price: "CAD $ 299",
            description: "Essential corporation formation.",
            features: [
                "Corporation formation",
                "Digital documents",
                "Basic compliance setup",
            ],
            cta: "Start Now",
        },
        {
            name: "Premium",
            price: "CAD $ 499",
            description: "Most Popular - Complete setup.",
            features: [
                "Everything in Starter",
                "Registered address",
                "Mail scanning",
                "Fintech support (Payoneer, Stripe)",
            ],
            cta: "Get Started",
            featured: true,
        },
        {
            name: "Elite",
            price: "CAD $ 899",
            description: "Premium full service package.",
            features: [
                "Everything in Prestige",
                "Full corporate minute book",
                "Accounting onboarding",
                "Priority incorporation",
            ],
            cta: "Become Elite",
        },
    ],
};

export default function Pricing() {
    const { selectedCountry, setSelectedCountry } = useCountry();
    const tiers = pricingData[selectedCountry];

    return (
        <section id="pricing" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="pricing-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Pricing Plans
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Country Selector */}
                <CountrySelector
                    selectedCountry={selectedCountry}
                    onCountryChange={setSelectedCountry}
                />

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`pricing-card group relative overflow-hidden rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${tier.featured
                                ? "border-[#d4af37] shadow-xl shadow-[#d4af37]/20 md:scale-105 md:py-12"
                                : "md:mt-8"
                                }`}
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Featured Badge */}
                            {tier.featured && (
                                <div className="absolute right-0 top-0 h-20 w-20 overflow-hidden">
                                    <div className="absolute right-[-30px] top-[20px] w-[140px] rotate-[45deg] bg-gradient-to-r from-[#d4af37] to-[#f3d066] py-1.5 text-center text-[10px] font-bold uppercase tracking-wide text-black shadow-lg">
                                        MOST POPULAR
                                    </div>
                                </div>
                            )}

                            {/* Card glow effect on hover */}
                            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                            </div>

                            {/* Tier Name */}
                            <h3 className="pricing-tier-name mb-2 text-2xl font-bold">
                                {tier.name}
                            </h3>

                            {/* Price */}
                            <div className="mb-4">
                                <span className="pricing-price text-4xl font-bold text-[#d4af37]">
                                    {tier.price}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="pricing-description mb-6 text-sm">
                                {tier.description}
                            </p>

                            {/* Features */}
                            <ul className="mb-8 space-y-3">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <FaCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d4af37]" />
                                        <span className="pricing-feature">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link
                                href="https://wa.me/447447488755"
                                className={`block w-full rounded-xl py-3 text-center text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${tier.featured
                                    ? "bg-gradient-to-r from-[#d4af37] to-[#f3d066] text-black shadow-lg shadow-[#d4af37]/30"
                                    : "border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                                    }`}
                            >
                                {tier.cta}
                            </Link>

                            {/* Decorative corner accent */}
                            <div className="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-[#d4af37]/10 blur-2xl transition-transform duration-300 group-hover:translate-x-5 group-hover:-translate-y-5"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
