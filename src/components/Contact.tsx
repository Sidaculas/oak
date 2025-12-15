'use client';

import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-info-section">
                {/* Header */}
                <div className="contact-header">
                    <h2 className="contact-main-title">GET IN TOUCH</h2>
                    <p className="contact-main-subtitle">
                        We're here to help you with all your company formation needs.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="contact-cards-wrapper">
                    {/* Email Card */}
                    <div className="contact-card-new">
                        <div className="contact-icon-wrapper">
                            <div className="contact-icon-box">
                                <Image src="/email.png" alt="Email" width={40} height={40} className="w-7 h-7 md:w-10 md:h-10 lg:w-10 lg:h-10" />
                            </div>
                        </div>
                        <div className="contact-card-content">
                            <h3 className="contact-card-heading">EMAIL US</h3>
                            <a
                                href="mailto:contact@sevenoakprestige.com"
                                className="contact-card-link"
                            >
                                contact@sevenoakprestige.com
                            </a>
                            <p className="contact-card-desc">
                                Send us an email anytime — our team will respond within 24 hours.
                            </p>
                        </div>
                    </div>

                    {/* WhatsApp Card */}
                    <div className="contact-card-new">
                        <div className="contact-icon-wrapper">
                            <div className="contact-icon-box">
                                <FaWhatsapp className="w-7 h-7 md:w-10 md:h-10 lg:w-10 lg:h-10" />
                            </div>
                        </div>
                        <div className="contact-card-content">
                            <h3 className="contact-card-heading">WHATSAPP</h3>
                            <a
                                href="https://wa.me/447447488755"
                                className="contact-card-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                +44 7447 488755
                            </a>
                            <p className="contact-card-desc">
                                Chat with our team instantly for quick guidance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
