"use client";

import { processSection } from "@/constants/content";
import SectionWrapper from "../ui/SectionWrapper";
import { LuLightbulb, LuBrush, LuCode, LuRocket } from "react-icons/lu";

const icons = [LuLightbulb, LuBrush, LuCode, LuRocket];

export default function ProcessSection() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-accent">
          {processSection.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-700">
          {processSection.description}
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {processSection.steps.map(({ title, description }, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div
              key={title}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-primary">
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
