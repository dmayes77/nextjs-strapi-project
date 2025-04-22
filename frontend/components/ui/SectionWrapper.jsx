"use client";

export default function SectionWrapper({ children, className = "" }) {
  return (
    <section className={`px-6 py-16 sm:py-24 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
