"use client";

import { services, servicesSection } from "@/constants/content";
import * as Icons from "react-icons/lu";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="text-lg font-semibold text-indigo-600 uppercase tracking-wide">
          {servicesSection.title}
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {servicesSection.subtitle}
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon }, index) => {
            const Icon = Icons[icon] || Icons.LuCode2; // fallback icon

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-6">
                  <Icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
