import {
  LuLayoutDashboard,
  LuSearch,
  LuMousePointerClick,
  LuSettings,
} from "react-icons/lu";
import { HiLightningBolt, HiCheckCircle, HiPhone } from "react-icons/hi";

// Navigation items for SPA sections
export const navItems = [
  { label: "Home", key: "home" },
  { label: "Services", key: "services" },
  { label: "About", key: "about" },
  { label: "Pricing", key: "pricing" },
  { label: "Contact", key: "contact" },
];

// Hero content per section
export const heroContent = {
  home: {
    headline: "Design That Works as Hard as You Do",
    subheadline: "Websites built to convert and crafted to impress.",
    cta: { label: "Start a Project", href: "#contact" },
    secondaryCta: { label: "See Portfolio", href: "#portfolio" },
    announcement: {
      text: "Now accepting new clients for May 2025!",
      link: { label: "Book Now", href: "#contact" },
    },
    imagePublicId: "pixel-n-code/hero-images/home-bg",
  },
  services: {
    headline: "Our Web Design Services",
    subheadline: "From branding to launch—we handle it all.",
    cta: { label: "Get a Quote", href: "#contact" },
    secondaryCta: { label: "See Examples", href: "#portfolio" },
    announcement: {
      text: "Need something custom?",
      link: { label: "Let's Talk", href: "#contact" },
    },
    imagePublicId: "pixel-n-code/hero/services-bg",
  },
  portfolio: {
    headline: "Work That Speaks for Itself",
    subheadline: "A showcase of design solutions that delivered results.",
    cta: { label: "Request a Case Study", href: "#contact" },
    secondaryCta: { label: "See Services", href: "#services" },
    announcement: {
      text: "New projects just added to the portfolio!",
      link: { label: "Check them out", href: "#portfolio" },
    },
    imagePublicId: "pixel-n-code/hero/portfolio-bg",
  },
  contact: {
    headline: "Let's Build Something Great Together",
    subheadline: "Start your next project with a free consultation.",
    cta: { label: "Contact Us", href: "#contact" },
    secondaryCta: { label: "Learn More", href: "#services" },
    announcement: {
      text: "Limited spots available for June 2025.",
      link: { label: "Reserve Your Slot", href: "#contact" },
    },
    imagePublicId: "pixel-n-code/hero/contact-bg",
  },
};

// Section header for services overview
export const servicesSection = {
  title: "What We Offer",
  subtitle:
    "High-impact web design solutions built for service-based businesses.",
};

// Individual service cards (used in WhatWeOffer)
export const services = [
  {
    title: "Custom Web Design",
    description:
      "Mobile-first, responsive websites crafted for service-based businesses. Built to impress and convert.",
    icon: LuLayoutDashboard,
  },
  {
    title: "SEO Optimization",
    description:
      "We implement best practices to help your site rank on Google and attract organic traffic.",
    icon: LuSearch,
  },
  {
    title: "Lead Funnels & Booking",
    description:
      "Integrated funnels and booking tools that streamline client communication and increase conversions.",
    icon: LuMousePointerClick,
  },
  {
    title: "Ongoing Maintenance",
    description:
      "Updates, backups, and performance checks so your site stays fast, secure, and up-to-date.",
    icon: LuSettings,
  },
];

// SPA Section content
export const spaSection = {
  label: "Single-Page Applications",
  title: "Next-Gen SPAs Powered by Modern Tech",
  description:
    "We leverage cutting-edge frameworks and best practices to build SPA solutions that balance speed, scalability, and maintainability.",
  features: [
    {
      icon: HiLightningBolt,
      title: "Blazing-Fast Performance",
      description:
        "Pre-rendering with dynamic hydration delivers near-instant page loads.",
    },
    {
      icon: HiCheckCircle,
      title: "Seamless User Experience",
      description:
        "Fluid transitions and progressive enhancement on every device.",
    },
    {
      icon: HiLightningBolt,
      title: "Future-Ready Architecture",
      description:
        "Built with modern standards and scalable patterns for long-term growth.",
    },
  ],
  subtitle: "What’s Included",
  inclusions: [
    {
      icon: HiPhone,
      title: "Dedicated Experts",
      description:
        "In-house developers ensuring top-quality code and reliability.",
    },
    {
      icon: HiCheckCircle,
      title: "Mobile-First Design",
      description: "Responsive layouts optimized for all screen sizes.",
    },
    {
      icon: HiPhone,
      title: "Content Control",
      description: "User-friendly admin dashboard for self-service updates.",
    },
    {
      icon: HiCheckCircle,
      title: "Security & Ownership",
      description: "Complete code ownership, secure APIs, and SSL by default.",
    },
  ],
  imagePublicId: "pixel-n-code/illustrations/spa-architecture",
};

// Portfolio items displayed on the Portfolio page
export const portfolioItems = [
  {
    title: "MAD Pro Detailing Website",
    description:
      "A custom single-page web app for Mayes Auto Detailing (getmadpro.com), featuring subscription services, booking integration, and dynamic content powered by Next.js and Strapi.",
    imagePublicId: "pixel-n-code/portfolio/getmadpro-homepage",
    link: "https://www.getmadpro.com",
  },
  {
    title: "Agency Landing Page",
    description:
      "A clean, modern landing page for a digital marketing agency focused on lead generation.",
    imagePublicId: "pixel-n-code/portfolio/agency-landing",
    link: "#contact",
  },
  {
    title: "Service Provider Site",
    description:
      "Fully branded site for a local service business, complete with booking integration.",
    imagePublicId: "pixel-n-code/portfolio/service-provider",
    link: "#contact",
  },
];

// Contact page configuration
export const contactPage = {
  title: "Get in Touch",
  subtitle: "Have a project in mind? We'd love to hear from you.",
  address: {
    street: "123 Web Ave",
    city: "Webtown, WT 12345",
  },
  phone: "+1 (123) 456-7890",
  email: "info@clientdomain.com",
  formFields: [
    { name: "name", label: "Your Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    {
      name: "project",
      label: "Project Details",
      type: "textarea",
      required: true,
    },
  ],
};
export const capabilities = [
  "Custom In-House Design",
  "Fully Responsive Display",
  "Easy-to-Use Back-End Access",
  "Full Ownership of Your Website",
  "Enhanced Security and Maintenance",
];

export const overviewSection = {
  title: "Custom Website Design & Development",
  description: `Ready to elevate your online presence with a website built just for your business? Pixel & Code has you covered! Whether you're looking for a fully custom site with sleek designs and expertly crafted code or focused landing pages designed to maximize your ad conversions, our experienced team delivers. We handle both front-end design and robust back-end development, ensuring your digital platform is both visually compelling and functionally seamless.`,
  tagline:
    "At Pixel & Code, we craft digital solutions that grow with your business.",
};
export const processSection = {
  title: "Our Process",
  description:
    "We don’t just build websites—we engineer tailored digital experiences from the ground up, using your vision as our blueprint.",
  steps: [
    {
      title: "1. Strategy & Discovery",
      description:
        "We begin with a collaborative session to understand your business, goals, audience, and brand voice. This lays the foundation for every design and development decision to follow.",
    },
    {
      title: "2. Content Architecture",
      description:
        "Before we design a single pixel, we craft the structure and messaging. Our team handles everything from copywriting to keyword strategy, ensuring your content is clear, compelling, and conversion-focused.",
    },
    {
      title: "3. Visual Design & UX",
      description:
        "With content and structure in place, we bring your site to life with a modern, user-first design. We blend creativity with UX best practices to make every interaction meaningful.",
    },
    {
      title: "4. Development & Deployment",
      description:
        "Using scalable and secure technologies, we transform the design into a high-performance web app. Our builds are responsive, SEO-friendly, and optimized for future growth.",
    },
  ],
};
export const aboutSection = {
  title: "Who We Are",
  description:
    "Pixel & Code is a team of designers, developers, and digital strategists who believe great websites aren’t just built—they’re crafted. From branding to backend, we bring years of experience to every project, blending creative insight with technical precision. We’re not a factory—we’re a creative partner invested in your long-term success.",
  imagePublicIds: [
    "pixel-n-code/about-images/team-collab",
    "pixel-n-code/about-images/work-sample",
  ],
};
// content.js

export const pricingTiers = [
  {
    name: "Starter Site",
    id: "starter-site",
    href: "#contact",
    priceMonthly: "$497 One-Time",
    description:
      "Perfect for Solopreneurs & Local Shops. A clean, fast single-page application (SPA) designed for performance and conversions.",
    features: [
      "Custom SPA with Hero, About, Services, Contact",
      "Mobile-optimized layout",
      "SEO meta setup + OpenGraph",
      "Google Analytics + Contact Form",
      "1 round of revisions",
      "Delivered in 7–10 business days",
    ],
    featured: false,
  },
  {
    name: "Pro Presence",
    id: "pro-presence",
    href: "#contact",
    priceMonthly: "$997 One-Time",
    description:
      "Best for Growing Businesses & Service Brands. A multi-page website with blog support and built-in scalability.",
    features: [
      "Everything in Starter",
      "Multi-page structure: Home, About, Services, Blog, Contact",
      "Blog setup (Markdown or CMS-ready)",
      "Enhanced styling and transitions",
      "Up to 3 revisions",
      "Delivered in 10–14 business days",
    ],
    featured: true,
  },
  {
    name: "ClientFlow CRM",
    id: "clientflow-crm",
    href: "#contact",
    priceMonthly: "$197–$497/mo",
    description:
      "Add automation, pipelines, and smart CRM tools to any website package. Choose a monthly plan that fits your business.",
    features: [
      "Lead pipeline + client dashboard",
      "Automated SMS/Email follow-ups",
      "Calendar booking + quote forms",
      "Review requests & lead tagging",
      "Advanced workflows (Pro Only)",
      "Funnel pages, branded dashboard (Pro Only)",
    ],
    featured: false,
  },
];
// constants/content.js

export const ctaSection = {
  heading: "Let’s build your next-gen website together.",
  subheading:
    "Whether you're launching a new brand or leveling up your online presence, we'll help you make it real — fast.",
  primaryAction: {
    label: "Get Started",
    href: "#contact",
  },
  secondaryAction: {
    label: "View Our Work",
    href: "/portfolio",
  },
  imagePublicId: "pixel-n-code/illustrations/website-example",
  imageAlt: "Website example on laptop",
};
