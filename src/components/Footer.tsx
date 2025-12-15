'use client';

import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/447447488755', '_blank');
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Company Information */}
                <div className="footer-section footer-company">
                    <p className="footer-copyright">© 2025 Seven Oak Prestige Ltd</p>
                    <p className="footer-company-number">Company No. 16903092</p>
                    <p className="footer-company-address" style={{ marginBottom: '16px' }}>
                        124 City Road, London EC1V 2NX, United Kingdom<br />
                        Visits by appointment only
                    </p>




                </div>

                {/* Vertical Separator */}
                <div className="footer-separator hidden md:block"></div>

                {/* Page Links */}
                <div className="flex flex-col">
                    <div className="footer-section footer-links">
                        <Link href="/terms" className="footer-link">Terms</Link>
                        <span className="text-gray-400">•</span>
                        <Link href="/refund" className="footer-link">Refund</Link>
                        <span className="text-gray-400">•</span>
                        <Link href="/privacy" className="footer-link">Privacy</Link>
                    </div>
                    <div className="footer-section footer-links">
                        <span className="footer-link">• UK Registered</span>
                        <span className="footer-link">• Companies House</span>
                        <span className="footer-link">• GDPR Compliant</span>

                    </div>
                </div>

                {/* Vertical Separator */}
                <div className="footer-separator hidden md:block"></div>

                {/* Still Have Questions CTA */}
                <div className="footer-section footer-cta">
                    <p className="footer-cta-text">Still have questions?</p>
                    <button onClick={handleWhatsAppClick} className="footer-whatsapp-btn flex items-center gap-2">
                        <FaWhatsapp size={18} />
                        WhatsApp Now
                    </button>
                </div>
                <p className="footer-disclaimer text-center">
                    Seven Oak Prestige Ltd is registered in England & Wales.
                    We operate in full compliance with Companies House regulations and UK AML requirements. Seven Oak Prestige Ltd is not a law firm.
                    We provide company formation and administrative support services.
                </p>

            </div>




        </footer>
    );
}
