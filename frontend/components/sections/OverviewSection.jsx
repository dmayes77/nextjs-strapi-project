"use client";

import { overviewSection } from "@/constants/content";
import SectionWrapper from "../ui/SectionWrapper";
import Logo from "../ui/Logo";

export default function OverviewSection() {
  const { title, description, tagline } = overviewSection;

  return (
    <SectionWrapper>
      <div className="flex items-center justify-center mb-8">
        <Logo />
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center text-accent">
        {title}
      </h2>
      <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-8">
        {description}
      </p>
      <p className="mt-6 text-base sm:text-lg text-center md:text-xl font-semibold text-primary leading-8">
        {tagline}
      </p>
    </SectionWrapper>
  );
}
