'use client';

import './globals.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import CompanyChecker from '../components/CompanyChecker';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <TrustSection />
            <Services />
            <WhyChooseUs />
            <HowItWorks />
            <CompanyChecker />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
        </>
    );
}
