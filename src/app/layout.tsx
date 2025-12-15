import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Seven Oak Prestige – UK Company Formation for Non-Residents",
    description: "UK company formation for non-residents. Premium address, privacy protection, fintech account setup (Wise, Revolut, WorldFirst). Fast, confidential, global.",
    keywords: ["UK company formation", "non resident UK company", "UK business address", "fintech account setup", "Wise business", "Revolut business", "WorldFirst UK", "Stripe UK"],
    icons: {
        icon: "https://i.imgur.com/Bds5sAC.png",
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
                </ThemeProvider>
            </body>
        </html>
    );
}
