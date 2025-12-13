'use client';

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
                    <p className="footer-copyright">© {currentYear} Seven Oak Prestige Ltd</p>
                    <p className="footer-company-number">Company No. 16903092</p>
                    <p className="footer-company-address">124 City Road, London
                        EC1V 2NX, United Kingdom</p>
                </div>

                {/* Vertical Separator */}
                <div className="footer-separator"></div>

                {/* Page Links */}
                <div className="footer-section footer-links">
                    <a href="/terms" className="footer-link">Terms</a>
                    <a href="/refund" className="footer-link">Refund</a>
                    <a href="/privacy" className="footer-link">Privacy</a>
                </div>

                {/* Vertical Separator */}
                <div className="footer-separator"></div>

                {/* Still Have Questions CTA */}
                <div className="footer-section footer-cta">
                    <p className="footer-cta-text">Still have questions?</p>
                    <button onClick={handleWhatsAppClick} className="footer-whatsapp-btn">
                        WhatsApp Now
                    </button>
                </div>
            </div>
        </footer>
    );
}
