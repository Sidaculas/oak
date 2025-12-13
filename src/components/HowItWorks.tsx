"use client";

import CountrySelector, { Country } from "./CountrySelector";
import { FaEdit, FaShieldAlt, FaRocket } from "react-icons/fa";
import { useCountry } from "@/contexts/CountryContext";

interface Step {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const howItWorksData: Record<Country, { steps: Step[]; footer: string }> = {
    UK: {
        steps: [
            {
                icon: <FaEdit className="h-10 w-10" />,
                title: "Submit Your Application",
                description: "Choose your package and provide basic details. We handle all filings, documents and SIC optimization for you.",
            },
            {
                icon: <FaShieldAlt className="h-10 w-10" />,
                title: "Fintech Compliance Check",
                description: "We prepare your company structure so your fintech accounts (Wise, Revolut, Airwallex, Payoneer, Stripe) approve smoothly.",
            },
            {
                icon: <FaRocket className="h-10 w-10" />,
                title: "Launch in 24 Hours",
                description: "Your UK LTD, registered office and documents are ready. Start operating globally with full privacy and compliance.",
            },
        ],
        footer: "Your UK company, professionally built — even while you sleep.",
    },
    USA: {
        steps: [
            {
                icon: <FaEdit className="h-10 w-10" />,
                title: "Submit Your Application",
                description: "Select your package and provide necessary information. We handle all Delaware filings and documentation.",
            },
            {
                icon: <FaShieldAlt className="h-10 w-10" />,
                title: "Compliance Setup",
                description: "We ensure your LLC meets all Delaware regulations and obtain your EIN without requiring an SSN.",
            },
            {
                icon: <FaRocket className="h-10 w-10" />,
                title: "Launch Your LLC",
                description: "Your Delaware LLC is formed with registered agent service. Start operating your US business.",
            },
        ],
        footer: "Your US LLC, ready to operate — hassle-free formation.",
    },
    Canada: {
        steps: [
            {
                icon: <FaEdit className="h-10 w-10" />,
                title: "Submit Your Application",
                description: "Choose your incorporation package and provide required details. We handle federal and provincial filings.",
            },
            {
                icon: <FaShieldAlt className="h-10 w-10" />,
                title: "Compliance & Registration",
                description: "We ensure full compliance with Canadian regulations and complete NUANS name search and registration.",
            },
            {
                icon: <FaRocket className="h-10 w-10" />,
                title: "Launch Your Corporation",
                description: "Your Canadian corporation is ready with registered office and all necessary documents.",
            },
        ],
        footer: "Your Canadian corporation, professionally established.",
    },
};

export default function HowItWorks() {
    const { selectedCountry, setSelectedCountry } = useCountry();
    const data = howItWorksData[selectedCountry];

    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-12 text-center lg:mb-16">
                    <h2 className="how-it-works-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        How It Works
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Country Selector */}
                <CountrySelector
                    selectedCountry={selectedCountry}
                    onCountryChange={setSelectedCountry}
                />

                {/* Steps Timeline */}
                <div className="relative mt-12">
                    {data.steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative pb-12 last:pb-0"
                            style={{
                                animationDelay: `${index * 150}ms`,
                            }}
                        >
                            {/* Vertical Line (except for last item) */}
                            {index < data.steps.length - 1 && (
                                <div className="absolute left-[30px] top-[80px] bottom-0 w-0.5 bg-gradient-to-b from-[#d4af37] to-[#d4af37]/20 sm:left-[35px] sm:top-[90px]"></div>
                            )}

                            <div className="flex items-start gap-6">
                                {/* Icon Circle */}
                                <div className="how-it-works-icon flex-shrink-0 rounded-full border-2 border-[#d4af37] bg-gradient-to-br from-[#d4af37]/20 to-[#f3d066]/10 p-4 text-[#d4af37] sm:p-5">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-2">
                                    <h3 className="how-it-works-title mb-3 text-xl font-bold sm:text-2xl">
                                        {step.title}
                                    </h3>
                                    <p className="how-it-works-description leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Text */}
                <div className="mt-12 text-center">
                    <p className="how-it-works-footer text-lg font-medium italic sm:text-xl">
                        {data.footer}
                    </p>
                </div>
            </div>
        </section>
    );
}
