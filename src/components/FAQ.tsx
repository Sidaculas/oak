"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSection {
    title: string;
    items: FAQItem[];
}

const faqData: FAQSection[] = [
    {
        title: "UK Company Formation",
        items: [
            {
                question: "Can I create a UK company for someone else?",
                answer: "Yes, as long as you have their consent. You can act as an authorized representative and receive all documents in your name.",
            },
            {
                question: "What identity documents are required?",
                answer: "Valid passport or ID card. Translation provided if necessary.",
            },
            {
                question: "Can I use the address for banks and fintechs?",
                answer: "Yes. Compatible with Wise, Revolut, Airwallex, Payoneer, Stripe.",
            },
        ],
    },
    {
        title: "USA LLC (Delaware)",
        items: [
            {
                question: "Can I create a US LLC even if I don't live in the United States?",
                answer: "Yes. 100% of non-residents can create an LLC without ever traveling to the USA.",
            },
            {
                question: "Do you need my SSN?",
                answer: "No. Not necessary. We obtain your EIN even without an SSN.",
            },
        ],
    },
    {
        title: "Canada (Ontario / British Columbia)",
        items: [
            {
                question: "Can I incorporate a company in Canada as a non-resident?",
                answer: "Yes, with a Canadian director or through our representation services.",
            },
            {
                question: "What are the benefits of federal incorporation?",
                answer: "Nationwide name protection and the ability to operate in all provinces.",
            },
        ],
    },
];

export default function FAQ() {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());

    const toggleItem = (sectionIndex: number, itemIndex: number) => {
        const key = `${sectionIndex}-${itemIndex}`;
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(key)) {
            newOpenItems.delete(key);
        } else {
            newOpenItems.add(key);
        }
        setOpenItems(newOpenItems);
    };

    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-12 text-center lg:mb-16">
                    <h2 className="faq-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        FAQ
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* FAQ Sections */}
                <div className="space-y-8">
                    {faqData.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="faq-section">
                            {/* Section Title */}
                            <h3 className="faq-section-title mb-4 border-b border-[#d4af37]/30 pb-3 text-xl font-bold sm:text-2xl">
                                {section.title}
                            </h3>

                            {/* FAQ Items */}
                            <div className="space-y-3">
                                {section.items.map((item, itemIndex) => {
                                    const key = `${sectionIndex}-${itemIndex}`;
                                    const isOpen = openItems.has(key);

                                    return (
                                        <div
                                            key={itemIndex}
                                            className="faq-item overflow-hidden rounded-lg border transition-all duration-300"
                                        >
                                            {/* Question Button */}
                                            <button
                                                onClick={() => toggleItem(sectionIndex, itemIndex)}
                                                className="faq-question flex w-full items-start justify-between gap-4 p-4 text-left transition-colors hover:bg-[#d4af37]/5 sm:p-5"
                                            >
                                                <span className="flex-1 font-semibold">
                                                    {item.question}
                                                </span>
                                                <span className="flex-shrink-0 text-[#d4af37]">
                                                    {isOpen ? (
                                                        <FaMinus className="h-4 w-4" />
                                                    ) : (
                                                        <FaPlus className="h-4 w-4" />
                                                    )}
                                                </span>
                                            </button>

                                            {/* Answer */}
                                            <div
                                                className={`faq-answer overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                                    }`}
                                            >
                                                <div className="border-t border-border/40 p-4 sm:p-5">
                                                    <p className="leading-relaxed">{item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
