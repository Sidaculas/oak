"use client";

import { useState } from "react";

type Country = "UK" | "USA" | "Canada";

interface CountrySelectorProps {
    selectedCountry: Country;
    onCountryChange: (country: Country) => void;
}

const countries: { value: Country; label: string; flag: string }[] = [
    { value: "UK", label: "United Kingdom", flag: "🇬🇧" },
    { value: "USA", label: "United States", flag: "🇺🇸" },
    { value: "Canada", label: "Canada", flag: "🇨🇦" },
];

export default function CountrySelector({ selectedCountry, onCountryChange }: CountrySelectorProps) {
    return (
        <div className="mb-12 flex justify-center lg:mb-16">
            <div className="inline-flex rounded-xl border border-border/40 bg-card/50 p-1.5 backdrop-blur-sm">
                {countries.map((country) => (
                    <button
                        key={country.value}
                        onClick={() => onCountryChange(country.value)}
                        className={`
                            relative px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300
                            ${selectedCountry === country.value
                                ? "bg-gradient-to-r from-[#d4af37] to-[#f3d066] text-black shadow-lg"
                                : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                            }
                        `}
                    >
                        <span className="mr-2">{country.flag}</span>
                        <span className="hidden sm:inline">{country.label}</span>
                        <span className="sm:hidden">{country.value}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export type { Country };
