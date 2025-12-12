"use client";

import { useState } from "react";
import CountrySelector, { Country } from "./CountrySelector";
import { FaBuilding, FaMapMarkerAlt, FaUniversity, FaFileInvoiceDollar } from "react-icons/fa";

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
            description: "Non-resident LTD formation in 24 hours, SIC optimisation, full compliance setup.",
        },
        {
            icon: <FaMapMarkerAlt className="h-8 w-8" />,
            title: "Premium UK Addresses",
            description: "Registered office, director service address, mail scanning & privacy protection.",
        },
        {
            icon: <FaUniversity className="h-8 w-8" />,
            title: "Fintech Account Setup",
            description: "Approval guidance for Wise, Revolut, Airwallex, Payoneer & Stripe.",
        },
        {
            icon: <FaFileInvoiceDollar className="h-8 w-8" />,
            title: "Compliance & Accounting",
            description: "Annual filings, bookkeeping, VAT registration & ongoing advisory.",
        },
    ],
    USA: [
        {
            icon: <FaBuilding className="h-8 w-8" />,
            title: "Delaware LLC Formation",
            description: "Fast LLC formation in Delaware with registered agent service included.",
        },
        {
            icon: <FaMapMarkerAlt className="h-8 w-8" />,
            title: "US Business Address",
            description: "Professional Delaware business address with mail forwarding services.",
        },
        {
            icon: <FaUniversity className="h-8 w-8" />,
            title: "US Bank Account Setup",
            description: "Assistance with opening US business bank accounts and payment processors.",
        },
        {
            icon: <FaFileInvoiceDollar className="h-8 w-8" />,
            title: "Tax & Compliance",
            description: "EIN registration, annual reports, and ongoing compliance support.",
        },
    ],
    Canada: [
        {
            icon: <FaBuilding className="h-8 w-8" />,
            title: "Federal Corporation",
            description: "Canadian federal corporation registration with nationwide operations.",
        },
        {
            icon: <FaMapMarkerAlt className="h-8 w-8" />,
            title: "Canadian Address",
            description: "Professional registered office address in major Canadian cities.",
        },
        {
            icon: <FaUniversity className="h-8 w-8" />,
            title: "Banking Solutions",
            description: "Support for Canadian business bank accounts and payment systems.",
        },
        {
            icon: <FaFileInvoiceDollar className="h-8 w-8" />,
            title: "Compliance Services",
            description: "Annual filings, GST/HST registration, and corporate maintenance.",
        },
    ],
};

export default function Services() {
    const [selectedCountry, setSelectedCountry] = useState<Country>("UK");
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
