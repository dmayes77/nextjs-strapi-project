// app/page.js - Main entry point for Pixel & Code SPA

"use client";

import { useState } from "react";
import Navigation from "@/components/ui/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import CustomSPASection from "@/components/sections/CustomSPASection";
import ProcessSection from "@/components/sections/ProcessSection";
import PricingSection from "@/components/sections/PricingSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/ui/Footer";
import { heroContent } from "@/constants/content";
import SimpleForm from "@/components/ui/Form";

export default function MainPage() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen w-full scroll-smooth">
      <Navigation onNavigate={setActiveSection} activeSection={activeSection} />

      <section id="home">
        <HeroSection content={heroContent.home} />
      </section>

      <main className=" px-4 md:px-8">
        <OverviewSection />
        <section id="services">
          <WhatWeOffer />
        </section>

        <section id="process">
          <ProcessSection />
        </section>

        <section id="spa">
          <CustomSPASection />
        </section>

        <section id="pricing">
          <PricingSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <CTASection />
        <section id="contact">
          <SimpleForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
