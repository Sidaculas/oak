"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Country = "UK" | "USA" | "Canada";

interface CountryContextType {
    selectedCountry: Country;
    setSelectedCountry: (country: Country) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

interface CountryProviderProps {
    children: ReactNode;
}

export function CountryProvider({ children }: CountryProviderProps) {
    const [selectedCountry, setSelectedCountry] = useState<Country>("UK");

    return (
        <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
            {children}
        </CountryContext.Provider>
    );
}

export function useCountry() {
    const context = useContext(CountryContext);
    if (context === undefined) {
        throw new Error("useCountry must be used within a CountryProvider");
    }
    return context;
}
