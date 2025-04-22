"use client";

import Link from "next/link";
import CloudImage from "@/components/ui/CloudImage";
import { theme } from "@/constants/theme";

export default function HeroSection({ content }) {
  if (!content) return null;

  const {
    headline,
    subheadline,
    cta,
    secondaryCta,
    imagePublicId,
    announcement,
  } = content;

  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Background Images */}

      <div className="absolute inset-0 -z-10 flex">
        <div className="relative flex-1">
          <CloudImage
            publicId={imagePublicId}
            alt={`Hero background`}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Overlay for better text legibility */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          {announcement && (
            <div className="mb-4 text-sm font-medium text-gray-100">
              <span>{announcement.text} </span>
              {announcement.link && (
                <Link href={announcement.link.href} className="link-accent">
                  {announcement.link.label}
                </Link>
              )}
            </div>
          )}

          <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100">{subheadline}</p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            {cta && (
              <Link
                href={cta.href}
                
                className="bg-accent hover:bg-accent-hover text-gray-100 rounded-md px-4 py-2.5 text-sm font-semibold shadow-sm"
              >
                {cta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="text-sm font-semibold text-gray-100"
              >
                {secondaryCta.label} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
