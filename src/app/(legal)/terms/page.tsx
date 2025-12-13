'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b border-border/20 bg-background/80 backdrop-blur-xl">
                <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-[#d4af37]"
                    >
                        <FaArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    {/* Title */}
                    <div className="text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            Terms & Conditions
                        </h1>
                        <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    {/* Company Info */}
                    <div className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                        <p className="text-sm text-foreground/70">Last Updated: 2025</p>
                        <p className="font-semibold text-foreground">Seven Oak Prestige Ltd</p>
                        <p className="text-sm text-foreground/70">Company Number: 16903092</p>
                        <p className="text-sm text-foreground/70">
                            Registered Address: 124 City Road, London EC1V 2NX, United Kingdom
                        </p>
                        <p className="text-sm text-foreground/70">
                            Email:{' '}
                            <a href="mailto:contact@sevenoakprestige.com" className="text-[#d4af37] hover:underline">
                                contact@sevenoakprestige.com
                            </a>
                        </p>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-6">
                        {/* Section 1 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">1. Introduction</h2>
                            <p className="leading-relaxed text-foreground/80">
                                These Terms & Conditions govern your use of the Seven Oak Prestige website and services. By
                                accessing or purchasing any service from Seven Oak Prestige Ltd ("we", "us", "our"), you agree to
                                be bound by these Terms. If you do not agree, please discontinue use of the website and services.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">2. Services Provided</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Seven Oak Prestige Ltd provides international business services, including company formation,
                                registered office solutions, director service address, mail scanning, fintech compliance support and
                                consultation services. We are not a law firm, financial institution, or tax advisor.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">3. Customer Responsibilities</h2>
                            <p className="leading-relaxed text-foreground/80">
                                You agree to provide accurate information, use services lawfully, and comply with all applicable
                                laws. We reserve the right to refuse service to any client.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">4. Fintech & Bank Approvals</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Seven Oak Prestige does not guarantee approval from banks or fintech institutions. Approval
                                decisions belong solely to third-party institutions.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">5. Registered Office & Address Services</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Address services are strictly for business use. Misuse may result in service termination.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">6. Compliance & KYC Requirements</h2>
                            <p className="leading-relaxed text-foreground/80">
                                We may request identification and due diligence documents. Services may be paused until compliance
                                is completed.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">7. Payments</h2>
                            <p className="leading-relaxed text-foreground/80">
                                All services require upfront payment. Services begin only after successful payment.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">8. Refunds</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Refunds are governed by our Refund Policy. No refunds once services are activated.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">9. Intellectual Property</h2>
                            <p className="leading-relaxed text-foreground/80">
                                All website content is the property of Seven Oak Prestige Ltd.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">10. Limitation of Liability</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Our liability is limited to the amount paid for the service.
                            </p>
                        </section>

                        {/* Section 11 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">11. Termination</h2>
                            <p className="leading-relaxed text-foreground/80">
                                We may terminate services for false information or illegal activity.
                            </p>
                        </section>

                        {/* Section 12 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">12. Governing Law</h2>
                            <p className="leading-relaxed text-foreground/80">
                                These Terms are governed by the laws of England and Wales.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="rounded-xl border border-[#d4af37]/40 bg-gradient-to-br from-[#d4af37]/5 to-transparent p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">Contact</h2>
                            <p className="leading-relaxed text-foreground/80">
                                For questions, contact:{' '}
                                <a href="mailto:contact@sevenoakprestige.com" className="font-semibold text-[#d4af37] hover:underline">
                                    contact@sevenoakprestige.com
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
