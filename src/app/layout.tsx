import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.sevenoakprestige.com"),
    title: {
        default: "Seven Oak Prestige – UK Company Formation for Non-Residents",
        template: "%s | Seven Oak Prestige",
    },
    description: "Premium UK company formation for non-residents. 24-hour manufacturing, privacy protection, and fintech account setup (Wise, Revolut, Stripe). Confidential & global.",
    keywords: [
        "UK company formation",
        "non-resident UK company",
        "UK business address",
        "London registered office",
        "fintech account setup",
        "Wise business account",
        "Revolut business",
        "Stripe UK",
        "US LLC formation",
        "UK limited company for foreigners",
    ],
    authors: [{ name: "Seven Oak Prestige" }],
    creator: "Seven Oak Prestige",
    publisher: "Seven Oak Prestige",
    openGraph: {
        type: "website",
        locale: "en_GB",
        url: "https://www.sevenoakprestige.com",
        title: "Seven Oak Prestige – UK Company Formation for Non-Residents",
        description: "Fast, confidential UK company formation for global entrepreneurs. Get your UK LTD and business bank account setup support in 24 hours.",
        siteName: "Seven Oak Prestige",
        images: [
            {
                url: "/assets/logo/seven_oak_prestige_dark_mode.png", // Using logo as primary image for now
                width: 1200,
                height: 630,
                alt: "Seven Oak Prestige - UK Company Formation",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Seven Oak Prestige – UK Company Formation",
        description: "Launch your UK business from anywhere. 24-hour setup, privacy protection, and fintech support.",
        images: ["/assets/logo/seven_oak_prestige_dark_mode.png"],
    },
    icons: {
        icon: "https://i.imgur.com/Bds5sAC.png",
        apple: "https://i.imgur.com/Bds5sAC.png",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    {children}
                    <CookieConsent />
                    <JsonLd />
                </ThemeProvider>
            </body>
        </html>
    );
}
