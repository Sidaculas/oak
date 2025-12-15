'use client';

import { useCountry } from '@/contexts/CountryContext';

export default function CTASection() {
    const { selectedCountry } = useCountry();

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Country-specific content
    const ctaContent = {
        UK: {
            title: 'START YOUR COMPANY',
            subtitle: 'UK LTD formed in 24 hours — fully compliant for non-residents.',
            buttonText: 'START YOUR UK COMPANY NOW',
        },
        USA: {
            title: 'START YOUR COMPANY',
            subtitle: 'Delaware LLC formed in 2-3 days — 0% U.S. tax for non-residents.',
            buttonText: 'START YOUR US COMPANY NOW',
        },
        Canada: {
            title: 'START YOUR COMPANY',
            subtitle: 'Canadian corporation formed in 1-2 weeks — 100% remote process.',
            buttonText: 'START YOUR CANADIAN COMPANY NOW',
        },
    };

    const content = ctaContent[selectedCountry];

    return (
        <section className="cta-section relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            {/* Background decoration - matching FAQ */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-4xl text-center">
                {/* Main Title */}
                <h2 className="cta-main-title mb-6 text-5xl font-normal tracking-wider sm:text-6xl lg:text-7xl">
                    {content.title}
                </h2>

                {/* Subtitle */}
                <p className="cta-subtitle mb-10 text-lg font-light sm:text-xl lg:text-2xl">
                    {content.subtitle}
                </p>

                {/* CTA Button */}
                <button
                    onClick={scrollToPricing}
                    className="cta-button group relative overflow-hidden border-3 px-8 py-4 text-lg font-semibold tracking-widest transition-all duration-300 sm:px-12 sm:py-5 sm:text-xl lg:text-2xl"
                >
                    <span className="relative z-10">{content.buttonText}</span>
                    {/* Hover effect background */}
                    <div className="cta-button-bg absolute inset-0 -z-0 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                </button>
            </div>
        </section>
    );
}
