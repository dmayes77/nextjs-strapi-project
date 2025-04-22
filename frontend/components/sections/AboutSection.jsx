"use client";

import { aboutSection } from "@/constants/content";
import SectionWrapper from "../ui/SectionWrapper";
import CloudImage from "@/components/ui/CloudImage";

export default function AboutSection() {
  return (
    <SectionWrapper className="bg-white">
      <div className="grid gap-16 lg:grid-cols-2 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-accent">
            {aboutSection.title}
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-700 leading-8">
            {aboutSection.description}
          </p>
        </div>

        {/* Image(s) */}
        <div className="grid gap-4 sm:grid-cols-2">
          {aboutSection.imagePublicIds.map((id, idx) => (
            <div key={idx} className="relative aspect-[4/3] w-full">
              <CloudImage
                publicId={id}
                alt={`About image ${idx + 1}`}
                fill
                className="rounded-xl object-cover shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
