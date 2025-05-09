// components/sections/CTASection.jsx

import Link from "next/link";
import CloudImage from "@/components/ui/CloudImage";
import { ctaSection } from "@/constants/content";

export default function CTASection() {
  const {
    heading,
    subheading,
    primaryAction,
    secondaryAction,
    imagePublicId,
    imageAlt,
  } = ctaSection;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-primary px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#cta-gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="cta-gradient">
                <stop stopColor="#8050dc" />
                <stop offset={1} stopColor="#f97316" />
              </radialGradient>
            </defs>
          </svg>

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {heading}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80">{subheading}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href={primaryAction.href}
                className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100"
              >
                {primaryAction.label}
              </Link>
              <Link
                href={secondaryAction.href}
                className="text-sm font-semibold text-white"
              >
                {secondaryAction.label} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative mt-16 h-80 lg:mt-8">
            <CloudImage
              publicId={imagePublicId}
              alt={imageAlt}
              width={912}
              height={540}
              className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
