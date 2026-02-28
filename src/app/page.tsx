/* eslint-disable @next/next/no-img-element */
"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PhotoCarousel } from "@/components/PhotoCarousel";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f1ea]">
      <Header />

      <main className="flex-grow pt-20 md:pt-24">
        <HeroSection />

        <PhotoCarousel />


        <AboutSection />

        <ServicesSection />

        <TestimonialsSection />

        <ContactSection />

        <WhatsAppButton />
      </main>

      <Footer />
    </div>
  );
}
