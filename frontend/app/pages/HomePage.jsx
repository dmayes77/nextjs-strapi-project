// app/pages/HomePage.jsx

import AboutSection from "@/components/sections/AboutSection";
import CustomSPASection from "@/components/sections/CustomSPASection";
import OverviewSection from "@/components/sections/OverviewSection";
import PricingSection from "@/components/sections/PricingSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import CTASection from "@/components/sections/CTASection";
import Form from "@/components/ui/Form";

export default function HomePage() {
  return (
    <section className="space-y-4 text-center">
      <OverviewSection />
      <section id="services">
        <WhatWeOffer />
      </section>
      <ProcessSection />
      <CustomSPASection />
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <CTASection />
      <section id="contact">
        <Form />
      </section>
    </section>
  );
}
