"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { TbMenu3 } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes";

const links = [
    { href: "#services", label: "Services" },
    { href: "#checker", label: "Company Checker" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const { theme, resolvedTheme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full px-4 pt-3 transition-transform duration-300 md:px-6",
                isVisible ? "translate-y-0" : "-translate-y-full"
            )}
        >
            <div className="mx-auto max-w-7xl rounded-xl border border-border/20 bg-background/80 px-4 py-2 backdrop-blur-xl shadow-lg shadow-black/5 supports-[backdrop-filter]:bg-background/60 md:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo Section */}
                    <Link
                        href="/"
                        className="transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <div className="flex items-center">
                            <Image
                                src={
                                    mounted && (resolvedTheme === "dark" || theme === "dark")
                                        ? "/assets/logo/seven_oak_prestige_dark_mode.png"
                                        : "/assets/logo/seven_oak_prestige_light_mode.png"
                                }
                                alt="Seven Oak Prestige Logo"
                                width={70}
                                height={70}
                                priority
                            />

                            <span className="bg-gradient-to-r from-[#d4af37] to-[#f3d066] bg-clip-text text-sm font-bold text-transparent md:inline-block md:text-base lg:text-lg">
                                SEVEN OAK PRESTIGE
                            </span>
                        </div>

                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-1">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group relative block px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                        <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#d4af37] to-[#f3d066] transition-transform group-hover:scale-x-100" />
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="https://wa.me/447447488755"
                                    className="ml-2 flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-4 py-2 text-sm font-bold text-black shadow-lg shadow-[#d4af37]/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#d4af37]/30 active:scale-95"
                                >
                                    <FaWhatsapp className="h-4 w-4" />
                                    <span>WhatsApp</span>
                                </Link>
                            </li>
                            <li className="ml-4">
                                <ModeToggle />
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Navigation */}
                    <div className="flex items-center gap-4 lg:hidden">
                        <Link
                            href="https://wa.me/447447488755"
                            className="flex items-center justify-center rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f3d066] p-2 text-black shadow-md shadow-[#d4af37]/20 transition-all hover:scale-105 active:scale-95"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp className="h-4 w-4" />
                        </Link>
                        <ModeToggle />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button
                                    className="rounded-lg p-2 text-foreground transition-colors hover:bg-foreground/5 hover:text-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20"
                                    aria-label="Toggle menu"
                                >
                                    <TbMenu3 size={22} />
                                </button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="border-l border-[#d4af37]/20 bg-background/95 backdrop-blur-xl"
                            >
                                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                                <nav className="mt-8 flex flex-col gap-1">
                                    {links.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="group relative overflow-hidden rounded-lg px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="relative z-10">{link.label}</span>
                                            <span className="absolute inset-y-0 left-0 w-1 origin-left scale-y-0 bg-gradient-to-b from-[#d4af37] to-[#f3d066] transition-transform group-hover:scale-y-100" />
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}