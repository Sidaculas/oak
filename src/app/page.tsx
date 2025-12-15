'use client';

import './globals.css';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import CompanyChecker from '../components/CompanyChecker';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import SuccessStories from '../components/SuccessStories';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { CountryProvider } from '@/contexts/CountryContext';

export default function Home() {
    return (
        <CountryProvider>
            <Hero />
            <TrustSection />
            <Services />
            <WhyChooseUs />
            <HowItWorks />
            <CompanyChecker />
            <Pricing />
            <Testimonials />
            <SuccessStories />
            <FAQ />
            <CTASection />
            <Contact />
            <Footer />
        </CountryProvider>
    );
}
