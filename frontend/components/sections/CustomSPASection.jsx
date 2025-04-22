"use client";

import CloudImage from "@/components/ui/CloudImage";
import { spaSection } from "@/constants/content";
import SectionWrapper from "../ui/SectionWrapper";
import {
  LuCode,
  LuMonitorSmartphone,
  LuPalette,
  LuZap,
  LuLock,
  LuDatabase,
  LuWrench,
  LuRocket,
} from "react-icons/lu";

const featureIcons = [LuCode, LuMonitorSmartphone, LuPalette, LuZap];
const inclusionIcons = [LuLock, LuDatabase, LuWrench, LuRocket];

export default function CustomSPASection() {
  const {
    label,
    title,
    subtitle,
    description,
    features,
    inclusions,
    imagePublicId,
  } = spaSection;

  // Ensure feature count is 4 for balanced layout
  const balancedFeatures = [...features];
  while (balancedFeatures.length < 4) {
    balancedFeatures.push({
      title: "Coming Soon",
      description: "More features are on the way. Stay tuned!",
    });
  }

  const iconStyle = "min-w-[2rem] min-h-[2rem] w-8 h-8 text-accent";

  return (
    <SectionWrapper className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Column */}
        <div>
          <span className="text-sm font-semibold uppercase text-primary tracking-wide">
            {label}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-accent">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-prose">
            {description}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 text-center">
            {balancedFeatures.map(
              ({ title: featTitle, description: featDesc }, idx) => {
                const Icon = featureIcons[idx % featureIcons.length];
                return (
                  <div>
                    <div
                      key={featTitle + idx}
                      className="flex justify-center gap-x-3"
                    >
                      <Icon className={iconStyle} />
                      <h3 className="text-base sm:text-lg font-semibold text-primary">
                        {featTitle}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{featDesc}</p>
                  </div>
                );
              }
            )}
          </div>

          <h3 className="mt-10 text-lg sm:text-xl text-center font-bold text-[color:var(--color-text)]">
            {subtitle}
          </h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 text-center">
            {inclusions.map(
              ({ title: incTitle, description: incDesc }, idx) => {
                const Icon = inclusionIcons[idx % inclusionIcons.length];
                return (
                  <div>
                    <div
                      key={incTitle + idx}
                      className="flex justify-center gap-x-3"
                    >
                      <Icon className={iconStyle} />
                      <h4 className="text-base sm:text-lg font-semibold text-primary">
                        {incTitle}
                      </h4>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{incDesc}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* Image Column */}
        {imagePublicId && (
          <div className="relative w-full aspect-[4/3] sm:aspect-[5/3] lg:aspect-square">
            <CloudImage
              publicId={imagePublicId}
              alt="Custom SPA Screenshot"
              fill
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
