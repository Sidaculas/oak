'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/447447488755', '_blank');
    };

    return (
        <section id="contact" className="contact">
            {/* Part 1: Contact Information */}
            <div className="contact-info-section">
                <div className="contact-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        We're here to help you with all your company formation needs
                    </p>
                </div>

                <div className="contact-cards">
                    <div className="contact-card">
                        <div className="contact-icon">
                            <Mail size={28} />
                        </div>
                        <h3>Email Us</h3>
                        <a href="mailto:contact@sevenoakprestige.com" className="contact-link">
                            contact@sevenoakprestige.com
                        </a>
                        <p className="contact-description">
                            Send us an email anytime, we'll respond within 24 hours
                        </p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <FaWhatsapp size={28} />
                        </div>
                        <h3>WhatsApp</h3>
                        <a href="https://wa.me/447447488755" className="contact-link" target="_blank" rel="noopener noreferrer">
                            +44 7447 488755
                        </a>
                        <p className="contact-description">
                            Chat with us instantly for quick answers
                        </p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <MapPin size={28} />
                        </div>
                        <h3>Visit Us</h3>
                        <p className="contact-link">
                            124 City Road, London<br />
                            EC1V 2NX, United Kingdom
                        </p>
                        <p className="contact-description">
                            Our office is open Monday to Friday, 9 AM - 6 PM
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
