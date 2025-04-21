// frontend/app/page.jsx

import ServicesSection from "@/components/sections/ServicesSection";
import HeroSection from "@/components/sections/HeroSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      {/* Add more sections as needed */}
    </main>
  );
}
