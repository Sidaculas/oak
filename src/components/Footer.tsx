'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Footer() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/447447488755', '_blank');
    };

    // Determine which logo to show
    const currentTheme = mounted ? (theme === 'system' ? resolvedTheme : theme) : 'dark';
    const logoSrc = currentTheme === 'dark'
        ? '/assets/logo/seven_oak_prestige_dark_mode.png'
        : '/assets/logo/seven_oak_prestige_light_mode.png';

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Left Section: Logo + Company Information */}
                <div className="footer-section footer-company">
                    {/* Logo and Company Name */}
                    <div className="flex items-center gap-3 mb-4">
                        {mounted && (
                            <Image
                                src={logoSrc}
                                alt="Seven Oak Prestige Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        )}
                        <span className="text-lg font-bold text-[#d4af37]">
                            SEVEN OAK PRESTIGE
                        </span>
                    </div>

                    {/* Company Details */}
                    <div className="text-sm text-muted-foreground space-y-1">
                        <p className="font-medium text-foreground">© 2025 Seven Oak Prestige Ltd</p>
                        <p>Company No. 16903092</p>
                        <p>124 City Road, London EC1V 2NX, United Kingdom</p>
                        <p className="italic">Visits by appointment only</p>
                    </div>
                </div>

                {/* Vertical Separator - Hidden on mobile */}
                <div className="footer-separator hidden md:block"></div>

                {/* Middle Section: Disclaimers */}
                <div className="footer-section space-y-4 lg:text-center">
                    <div className="text-sm text-muted-foreground">
                        <p className="mb-3">
                            Seven Oak Prestige Ltd is registered in England & Wales.
                            <br className="hidden md:block" />
                            We operate in full compliance with Companies House regulations and UK AML requirements.
                        </p>
                        <p>
                            Seven Oak Prestige Ltd is not a law firm.
                            <br className="hidden md:block" />
                            We provide company formation and administrative support services.
                        </p>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center gap-3 text-sm lg:justify-center">
                        <span className="flex items-center gap-1.5 text-muted-foreground font-medium">
                            🇬🇧 UK Registered
                        </span>
                        <span className="flex items-center gap-1.5 text-muted-foreground font-medium">
                            🏛️ Companies House
                        </span>
                        <span className="flex items-center gap-1.5 text-muted-foreground font-medium">
                            🔐 GDPR Compliant
                        </span>
                    </div>

                    {/* Legal Links */}
                    <div className="footer-links flex items-center gap-2 text-sm md:justify-left md:text-left">
                        <Link href="/terms" className="footer-link hover:text-[#d4af37] transition-colors">
                            Terms
                        </Link>
                        <span className="text-muted-foreground">•</span>
                        <Link href="/refund" className="footer-link hover:text-[#d4af37] transition-colors">
                            Refund
                        </Link>
                        <span className="text-muted-foreground">•</span>
                        <Link href="/privacy" className="footer-link hover:text-[#d4af37] transition-colors">
                            Privacy
                        </Link>
                    </div>
                </div>

                {/* Vertical Separator - Hidden on mobile */}
                <div className="footer-separator hidden md:block"></div>

                {/* Right Section: WhatsApp CTA */}
                <div className="footer-section footer-cta">
                    <p className="footer-cta-text mb-3">Still have questions?</p>
                    <button
                        onClick={handleWhatsAppClick}
                        className="footer-whatsapp-btn flex items-center justify-center gap-2 w-full md:w-auto"
                    >
                        <FaWhatsapp size={18} />
                        WhatsApp Now
                    </button>
                </div>
            </div>
        </footer>
    );
}
