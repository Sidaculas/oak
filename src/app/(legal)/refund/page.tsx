'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function RefundPolicy() {
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
                            Refund Policy
                        </h1>
                        <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    {/* Company Info */}
                    <div className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                        <p className="font-semibold text-foreground">Seven Oak Prestige Ltd</p>
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
                            <h2 className="mb-3 text-2xl font-bold text-foreground">1. General Refund Terms</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Refunds are only issued under the conditions below. By purchasing any service, you agree to these
                                terms.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">2. Non-Refundable Services</h2>
                            <p className="mb-4 leading-relaxed text-foreground/80">
                                The following services are strictly non-refundable once started:
                            </p>
                            <ul className="ml-6 space-y-2 text-foreground/80">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span>
                                    <span>Company incorporation (UK, USA, Canada)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span>
                                    <span>Registered office or director address</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span>
                                    <span>Filing submissions to government agencies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span>
                                    <span>EIN / Tax ID applications</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span>
                                    <span>Fintech application support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span>
                                    <span>Compliance checks / KYC reviews</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span>
                                    <span>Digital documents already generated</span>
                                </li>
                            </ul>
                            <p className="mt-4 leading-relaxed text-foreground/80">
                                If any filing has been submitted or address service activated, no refund is possible.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">3. Refund Eligibility (Before Work Begins)</h2>
                            <p className="mb-4 leading-relaxed text-foreground/80">
                                A partial refund may be issued only if:
                            </p>
                            <ul className="ml-6 space-y-2 text-foreground/80">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span>
                                    <span>Work has not started</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span>
                                    <span>No filings or documents prepared</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span>
                                    <span>No address service activated</span>
                                </li>
                            </ul>
                            <p className="mt-4 leading-relaxed text-foreground/80">
                                Administration fees may apply.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">4. Service Denial</h2>
                            <p className="leading-relaxed text-foreground/80">
                                If we decline your application before work begins, a full refund may be issued.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">5. Fintech Approvals</h2>
                            <p className="leading-relaxed text-foreground/80">
                                No refunds are issued for third-party rejections including Wise, Payoneer, Stripe, Revolut, or
                                Mercury. Our role is guidance only.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">6. Chargebacks</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Fraudulent chargebacks may result in service termination, reporting to fraud databases, and legal
                                action.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="rounded-xl border border-[#d4af37]/40 bg-gradient-to-br from-[#d4af37]/5 to-transparent p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">7. Contact</h2>
                            <p className="leading-relaxed text-foreground/80">
                                For any questions regarding this Refund Policy, please contact us at:{' '}
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
