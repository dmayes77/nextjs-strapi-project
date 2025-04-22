// components/sections/HomeSection.jsx
"use client";

import { servicesSection, services } from "@/constants/content";
import Icon from "@/components/ui/Icon";

// Map icon keys to React Icon components
import {
  LuLayoutDashboard,
  LuSearch,
  LuMousePointerClick,
  LuSettings,
} from "react-icons/lu";
import SectionWrapper from "../ui/SectionWrapper";
const iconMap = {
  LuLayoutDashboard,
  LuSearch,
  LuMousePointerClick,
  LuSettings,
};

/**
 * HomeSection displays the "What We Offer" section on the homepage.
 * It uses content defined in constants and an Icon component for flexible icon rendering.
 */
export default function WhatWeOffer() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <p className="text-base font-semibold text-primary">
          {servicesSection.title}
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-accent sm:text-5xl">
          {servicesSection.subtitle}
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, description, icon }) => {
          return (
            <div
              key={title}
              className="rounded-lg bg-gray-50 p-6 text-center shadow"
            >
              {icon && (
                <Icon icon={icon} className="mx-auto h-8 w-8 text-primary" />
              )}
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
