"use client";

import { useState } from "react";
import CountrySelector, { Country } from "./CountrySelector";
import { FaShieldAlt, FaClock, FaDollarSign, FaHeadset, FaUserTie, FaCheckCircle } from "react-icons/fa";

interface Reason {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const whyChooseData: Record<Country, { subtitle: string; icon: React.ReactNode; reasons: Reason[] }> = {
    UK: {
        subtitle: "FOR YOUR UK COMPANY",
        icon: <span className="text-5xl">🇬🇧</span>,
        reasons: [
            {
                icon: <FaUserTie className="h-8 w-8" />,
                title: "UK Experts for Non-Residents",
                description: "We specialise exclusively in UK company formation for international clients, providing clear guidance even if you have no UK documents.",
            },
            {
                icon: <FaClock className="h-8 w-8" />,
                title: "Fast 24-Hour Incorporation",
                description: "Your LTD is formed within 24 hours, fully compliant, with the correct SIC, shareholders structure & legal documents.",
            },
            {
                icon: <FaShieldAlt className="h-8 w-8" />,
                title: "Premium Confidential Addresses",
                description: "Protect your privacy with a registered office + director service address that keeps your residential information completely hidden.",
            },
            {
                icon: <FaCheckCircle className="h-8 w-8" />,
                title: "Fintech-Ready Structures",
                description: "We optimise your company so fintechs like Wise, Revolut, Airwallex, Payoneer & Stripe approve your application without issues.",
            },
        ],
    },
    USA: {
        subtitle: "FOR YOUR USA COMPANY",
        icon: <span className="text-5xl">🇺🇸</span>,
        reasons: [
            {
                icon: <FaUserTie className="h-8 w-8" />,
                title: "Support for Non-US Residents",
                description: "Expertise in forming Delaware LLCs for global clients.",
            },
            {
                icon: <FaShieldAlt className="h-8 w-8" />,
                title: "Full Compliance Handled",
                description: "We ensure your LLC meets all Delaware regulations.",
            },
            {
                icon: <FaDollarSign className="h-8 w-8" />,
                title: "No Hidden Fees",
                description: "Transparent pricing. No surprises.",
            },
            {
                icon: <FaHeadset className="h-8 w-8" />,
                title: "Priority Support",
                description: "Fast, responsive assistance anytime.",
            },
        ],
    },
    Canada: {
        subtitle: "FOR YOUR CANADIAN COMPANY",
        icon: <span className="text-5xl">🇨🇦</span>,
        reasons: [
            {
                icon: <FaShieldAlt className="h-8 w-8" />,
                title: "Compliance",
                description: "Guarantee federal and provincial compliance.",
            },
            {
                icon: <FaClock className="h-8 w-8" />,
                title: "Fast Processing",
                description: "Quick and efficient LLC formation in Canada.",
            },
            {
                icon: <FaHeadset className="h-8 w-8" />,
                title: "Premium Support",
                description: "Expert assistance throughout the process.",
            },
            {
                icon: <FaUserTie className="h-8 w-8" />,
                title: "Trusted by Entrepreneurs",
                description: "Supporting businesses across various industries.",
            },
        ],
    },
};

export default function WhyChooseUs() {
    const [selectedCountry, setSelectedCountry] = useState<Country>("UK");
    const data = whyChooseData[selectedCountry];

    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="why-choose-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Why Choose Us
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Country Selector */}
                <CountrySelector
                    selectedCountry={selectedCountry}
                    onCountryChange={setSelectedCountry}
                />

                {/* Subtitle with Icon */}
                {data.subtitle && (
                    <div className="mb-8 flex items-center justify-center gap-4">
                        {data.icon}
                        <p className="why-choose-subtitle text-lg font-semibold sm:text-xl">
                            {data.subtitle}
                        </p>
                    </div>
                )}

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                    {data.reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="why-choose-card group relative overflow-hidden rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl sm:p-8"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Card glow effect on hover */}
                            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                            </div>

                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="flex-shrink-0 rounded-lg bg-gradient-to-br from-[#d4af37]/20 to-[#f3d066]/10 p-3 text-[#d4af37]">
                                    {reason.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="why-choose-title mb-2 text-lg font-bold sm:text-xl">
                                        {reason.title}
                                    </h3>
                                    <p className="why-choose-description text-sm leading-relaxed sm:text-base">
                                        {reason.description}
                                    </p>
                                </div>
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
