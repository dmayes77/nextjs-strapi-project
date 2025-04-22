// components/sections/FeaturedPortfolio.jsx
"use client";

import Link from "next/link";
import CloudImage from "@/components/ui/CloudImage";
import { portfolioItems } from "@/constants/content";

/**
 * FeaturedPortfolio renders a preview of recent work on the HomePage.
 */
export default function FeaturedPortfolio() {
  return (
    <section className="py-16 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Our Recent Work
        </h2>
        <p className="mt-2 text-lg text-gray-600 text-center">
          A glimpse into projects that helped our clients succeed.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map(item => (
            <article
              key={item.title}
              className="rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <CloudImage
                  publicId={item.imagePublicId}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
                {item.link && (
                  <Link
                    href={item.link}
                    className="mt-4 inline-block text-indigo-600 hover:underline"
                  >
                    Learn More →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
