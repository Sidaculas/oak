"use client";

import CountrySelector, { Country } from "./CountrySelector";
import { FaBuilding, FaMapMarkerAlt, FaUniversity, FaFileInvoiceDollar, FaBriefcase, FaShieldAlt } from "react-icons/fa";
import { useCountry } from "@/contexts/CountryContext";

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const servicesData: Record<Country, Service[]> = {
    UK: [
        {
            icon: <FaBuilding className="h-8 w-8" />,
            title: "UK Company Formation",
            description: "Non-resident LTD incorporation in 24 hours, including full compliance documents and a fintech-ready structure.",
        },
        {
            icon: <FaMapMarkerAlt className="h-8 w-8" />,
            title: "Premium UK Addresses",
            description: "Registered office and director service address to protect privacy and keep personal details confidential.",
        },
        {
            icon: <FaUniversity className="h-8 w-8" />,
            title: "Fintech Account Setup",
            description: "Guidance for approvals with Wise, Payoneer, Stripe, Revolut Business, and WorldFirst. (Final approval is always decided by the fintech provider.)",
        },
        {
            icon: <FaFileInvoiceDollar className="h-8 w-8" />,
            title: "Mail Scanning & Digital Documents",
            description: "Instant digital delivery of all official mail and company documents.",
        },
    ],
    USA: [
        {
            icon: <FaBuilding className="h-8 w-8" />,
            title: "USA LLC Formation",
            description: "Delaware LLC formation for international entrepreneurs with no US presence required. Fast setup, compliant structure, and documents delivered digitally.",
        },
        {
            icon: <FaShieldAlt className="h-8 w-8" />,
            title: "Registered Agent Service",
            description: "Annual US Registered Agent included for compliance and government correspondence.",
        },
        {
            icon: <FaMapMarkerAlt className="h-8 w-8" />,
            title: "US Mailing Address (Not a Virtual Office)",
            description: "Compliance-grade address for official state notices and Registered Agent communication.",
        },
        {
            icon: <FaUniversity className="h-8 w-8" />,
            title: "Fintech Account Setup (Guidance Only)",
            description: "Support for applying to US-friendly platforms such as Stripe Atlas, Payoneer, Mercury (LLC only), and PayPal Business.",
        },
        {
            icon: <FaFileInvoiceDollar className="h-8 w-8" />,
            title: "Operating Agreement & EIN",
            description: "Full LLC documents including Operating Agreement. EIN (Employer Identification Number) application handled on your behalf.",
        },
    ],
    Canada: [
        {
            icon: <FaBuilding className="h-8 w-8" />,
            title: "Canada Corporation Formation (Federal or Provincial)",
            description: "Incorporation available for non-residents without a Canadian address.",
        },
        {
            icon: <FaMapMarkerAlt className="h-8 w-8" />,
            title: "Registered Address + Digital Mail",
            description: "Compliance-ready address for government correspondence, with digital scanning and forwarding.",
        },
        {
            icon: <FaFileInvoiceDollar className="h-8 w-8" />,
            title: "Corporate Documents",
            description: "Articles of incorporation, share structure, minute book, and organizational resolutions included.",
        },
        {
            icon: <FaBriefcase className="h-8 w-8" />,
            title: "Virtual Office (Optional)",
            description: "Professional business presence without physical office requirements.",
        },
        {
            icon: <FaUniversity className="h-8 w-8" />,
            title: "Fintech Support",
            description: "Guidance for applying to platforms compatible with Canadian corporations such as Payoneer and Stripe.",
        },
    ],
};

export default function Services() {
    const { selectedCountry, setSelectedCountry } = useCountry();
    const services = servicesData[selectedCountry];

    return (
        <section id="services" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="services-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Our Core Services
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Country Selector */}
                <CountrySelector
                    selectedCountry={selectedCountry}
                    onCountryChange={setSelectedCountry}
                />

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card group relative overflow-hidden rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Card glow effect on hover */}
                            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                            </div>

                            {/* Icon */}
                            <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-[#d4af37]/20 to-[#f3d066]/10 p-3 text-[#d4af37]">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="service-title mb-3 text-xl font-bold">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="service-description text-sm leading-relaxed">
                                {service.description}
                            </p>

                            {/* Decorative corner accent */}
                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/10 blur-2xl transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
