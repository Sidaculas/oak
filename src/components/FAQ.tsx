"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSection {
    title: string;
    flag: string;
    items: FAQItem[];
}

const faqData: FAQSection[] = [
    {
        title: "UK",
        flag: "🇬🇧",
        items: [
            {
                question: "Can a non-resident form a UK LTD company?",
                answer: "Yes, non-residents can form a UK LTD company without needing to live in the UK. The process can be completed entirely online.",
            },
            {
                question: "What information is required to register a UK LTD?",
                answer: "You'll need a unique company name, a UK registered office address, a director, and a shareholder. You don't need to be a UK citizen.",
            },
            {
                question: "How long does incorporation take?",
                answer: "The incorporation process typically takes 24 hours once all documents are submitted and approved by Companies House.",
            },
            {
                question: "Do I need a UK address?",
                answer: "You need a UK registered office address for official correspondence. A professional service can provide this for non-residents.",
            },
            {
                question: "Can I open a UK bank account as a non-resident?",
                answer: "Yes, non-residents can open a UK business bank account. Requirements vary, check with individual banks for specifics.",
            },
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
        title: "USA",
        flag: "🇺🇸",
        items: [
            {
                question: "Can a non-U.S. resident form a Delaware LLC?",
                answer: "Yes — you don't need to live in the U.S. or have a Social Security Number. We guide you through the entire process seamlessly.",
            },
            {
                question: "How long does it take to form my Delaware LLC?",
                answer: "Your Delaware LLC is usually formed within 2-3 business days. A 24-hour expedited filing option is available if you need it faster.",
            },
            {
                question: "Will I pay taxes in the United States?",
                answer: "No — a Delaware LLC typically pays 0% U.S. income tax when owned by a non-U.S. resident.",
            },
            {
                question: "How long does it take to receive the EIN?",
                answer: "For non-U.S. residents, EIN approvals typically take 3-7 business days. Standard IRS processing may take up to 4-6 weeks, but we handle the fast route for you.",
            },
            {
                question: "Do I need a U.S. address or a U.S. phone number?",
                answer: "No. We provide a registered agent address and support all required filings.",
            },
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
        title: "Canada",
        flag: "🇨🇦",
        items: [
            {
                question: "Can a non-Canadian resident start a company in Canada?",
                answer: "Yes, non-Canadian residents can form a corporation or a partnership in Canada. We manage the entire incorporation process for you.",
            },
            {
                question: "Do I need a Canadian address?",
                answer: "Your company must have a registered office address in Canada. We provide this service if you don't have one.",
            },
            {
                question: "How long does it take to form my company?",
                answer: "Incorporation is typically completed in 1-2 weeks depending on province. We ensure all paperwork is filed promptly.",
            },
            {
                question: "Will I pay taxes in Canada?",
                answer: "Yes, income earned by your Canadian corporation is subject to Canadian taxes. You may also owe taxes in your home country depending on your residency.",
            },
            {
                question: "Do I need a Canadian director for my company?",
                answer: "Some provinces require at least 25% of directors to be Canadian residents. Others (British Columbia, Quebec, New Brunswick, PEI) allow 100% foreign ownership.",
            },
            {
                question: "Do I need to visit Canada to incorporate?",
                answer: "No. The entire process can be completed remotely.",
            },
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
    const [activeTab, setActiveTab] = useState(0);
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());

    const toggleItem = (itemIndex: number) => {
        const key = `${activeTab}-${itemIndex}`;
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

                {/* Tabs */}
                <div className="mb-8 flex justify-center gap-2 sm:gap-4">
                    {faqData.map((section, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveTab(index);
                                setOpenItems(new Set()); // Clear open items when switching tabs
                            }}
                            className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all sm:px-6 sm:text-base ${activeTab === index
                                    ? "bg-gradient-to-r from-[#d4af37] to-[#f3d066] text-black shadow-lg shadow-[#d4af37]/30"
                                    : "border border-border/40 bg-background/50 text-foreground/70 hover:border-[#d4af37]/50 hover:text-foreground"
                                }`}
                        >
                            <span className="text-xl sm:text-2xl">{section.flag}</span>
                            <span>{section.title}</span>
                        </button>
                    ))}
                </div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqData[activeTab].items.map((item, itemIndex) => {
                        const key = `${activeTab}-${itemIndex}`;
                        const isOpen = openItems.has(key);

                        return (
                            <div
                                key={itemIndex}
                                className="faq-item overflow-hidden rounded-lg border transition-all duration-300"
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleItem(itemIndex)}
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
        </section>
    );
}
