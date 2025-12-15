'use client';

import { useState, useEffect } from 'react';
import { FaCookie, FaTimes } from 'react-icons/fa';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            // Delay showing the banner slightly for better UX
            setTimeout(() => {
                setShowBanner(true);
                // Trigger animation after mounting
                setTimeout(() => setIsVisible(true), 100);
            }, 1000);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        handleClose();
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        handleClose();
    };

    const handleClose = () => {
        setIsVisible(false);
        // Wait for animation to complete before removing from DOM
        setTimeout(() => setShowBanner(false), 300);
    };

    if (!showBanner) return null;

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
        >
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-2xl dark:shadow-black/50">
                    {/* Gold accent line at top */}
                    <div className="h-1 w-full bg-gradient-to-r from-[#d4af37] via-[#f3d066] to-[#d4af37]"></div>

                    <div className="p-6 sm:p-8">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            {/* Content */}
                            <div className="flex flex-1 items-start gap-4">
                                {/* Cookie Icon */}
                                <div className="flex-shrink-0">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#f3d066] shadow-lg">
                                        <FaCookie className="h-6 w-6 text-black" />
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-foreground mb-2">
                                        Cookie Notice
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                                        By clicking "Accept", you consent to our use of cookies.
                                        <a
                                            href="/privacy"
                                            className="ml-1 underline hover:text-[#d4af37] transition-colors"
                                        >
                                            Learn more
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                {/* Reject Button */}
                                <button
                                    onClick={handleReject}
                                    className="rounded-lg border border-border/60 bg-background/50 px-6 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-black/5 dark:hover:bg-white/5 hover:border-border active:scale-95"
                                >
                                    Reject
                                </button>

                                {/* Accept Button */}
                                <button
                                    onClick={handleAccept}
                                    className="rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-6 py-2.5 text-sm font-bold text-black shadow-lg shadow-[#d4af37]/20 transition-all hover:shadow-xl hover:shadow-[#d4af37]/30 hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    Accept Cookies
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Close button (optional) */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Close cookie notice"
                    >
                        <FaTimes className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
