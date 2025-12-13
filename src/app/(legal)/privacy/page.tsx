'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function PrivacyPolicy() {
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
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-foreground/70">GDPR Compliant</p>
                        <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    {/* Company Info */}
                    <div className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                        <p className="font-semibold text-foreground">Seven Oak Prestige Ltd</p>
                        <p className="text-sm text-foreground/70">Last Updated: 2025</p>
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
                                This Privacy Policy explains how we collect, use, store, and protect your personal data in
                                compliance with UK GDPR, Data Protection Act 2018, and EU GDPR where applicable.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">2. Data We Collect</h2>
                            <p className="leading-relaxed text-foreground/80">
                                We may collect personal and business information including identification documents for
                                compliance purposes.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">3. How We Use Your Data</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Your data is used to provide services, verify identity, process payments, and improve our website.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">4. Legal Basis for Processing</h2>
                            <p className="leading-relaxed text-foreground/80">
                                We process data based on contract necessity, legal obligations, legitimate interests, and consent.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">5. Data Sharing</h2>
                            <p className="leading-relaxed text-foreground/80">
                                We may share data with authorities, payment processors, and compliance partners. We never sell
                                data.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">6. International Transfers</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Data transfers outside the UK/EU are secured and GDPR-compliant.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">7. Data Security</h2>
                            <p className="leading-relaxed text-foreground/80">
                                We apply encryption, secure servers, and access controls.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">8. Data Retention</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Data is retained for a minimum of 5 years or as legally required.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">9. Your Rights</h2>
                            <p className="leading-relaxed text-foreground/80">
                                You may access, correct, delete, or object to processing of your data.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">10. Cookies</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Cookies are used for analytics and website functionality.
                            </p>
                        </section>

                        {/* Section 11 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">11. Minimum Age</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Services are intended for individuals aged 18 or older.
                            </p>
                        </section>

                        {/* Section 12 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">12. Changes to This Policy</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Updates will be published on this page.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="rounded-xl border border-[#d4af37]/40 bg-gradient-to-br from-[#d4af37]/5 to-transparent p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">Contact</h2>
                            <p className="leading-relaxed text-foreground/80">
                                For any questions regarding this Privacy Policy, please contact us at:{' '}
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
