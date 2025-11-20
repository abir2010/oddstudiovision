'use client';

import HeroSection from '@/components/shared/hero-section';
import ServicesTabs from '@/components/services/services-tabs';
import Reveal from '@/components/shared/reveal';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Craft"
        subtitle="We offer a comprehensive suite of creative and strategic services designed to build, grow, and elevate your brand in a noisy world."
        className="bg-background"
      />
      
      {/* Floating decorative elements */}
      <div className="fixed top-1/3 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="fixed bottom-1/3 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

      <section className="container pb-32">
        <Reveal>
            <div className="relative">
                {/* Background accent for tabs area */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent -z-10 rounded-3xl" />
                
                <ServicesTabs />
            </div>
        </Reveal>
      </section>
      
      <section className="py-24 bg-foreground text-background">
        <div className="container text-center">
            <Reveal>
                <h2 className="text-3xl md:text-5xl font-bold font-headline mb-8">Not seeing what you need?</h2>
                <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
                    We customize our solutions to fit unique challenges. If you have a specific requirement, let's talk about it.
                </p>
                <motion.a 
                    href="/contact" 
                    className="inline-block border-b-2 border-primary text-2xl font-bold hover:text-primary transition-colors pb-1"
                    whileHover={{ x: 10 }}
                >
                    Contact Custom Support &rarr;
                </motion.a>
            </Reveal>
        </div>
      </section>
    </>
  );
}
