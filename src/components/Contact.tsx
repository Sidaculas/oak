'use client';

import { Mail } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="contact">
            {/* Part 1: Contact Information */}
            <div className="contact-info-section">
                <div className="contact-header">
                    <h2 className="contact-main-title">GET IN TOUCH</h2>
                    <p className="contact-main-subtitle">
                        We're here to help you with all your company formation needs.
                    </p>
                </div>

                <div className="contact-cards">
                    <div className="contact-card">
                        <div className="contact-icon">
                            <Mail size={32} />
                        </div>
                        <h3 className="contact-card-title">EMAIL US</h3>
                        <a href="mailto:contact@sevenoakprestige.com" className="contact-link">
                            contact@sevenoakprestige.com
                        </a>
                        <p className="contact-description">
                            Send us an email anytime — our team will respond within 24 hours.
                        </p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <FaWhatsapp size={32} />
                        </div>
                        <h3 className="contact-card-title">WHATSAPP</h3>
                        <a href="https://wa.me/447447488755" className="contact-link" target="_blank" rel="noopener noreferrer">
                            +44 7447 488755
                        </a>
                        <p className="contact-description">
                            Chat with our team instantly for quick guidance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
