// constants/siteConfig.js

export const siteConfig = {
  // Basic site info
  name: "Pixel and Code Client",
  shortName: "Pixel & Code",
  tagline: "A modern website for a modern business",
  description:
    "Pixel & Code creates modern, responsive, and SEO-friendly websites for service-based businesses.",
  domain: "https://clientdomain.com",
  defaultLocale: "en_US",
  author: "Pixel & Code",

  // Contact and social links
  contact: {
    email: "info@clientdomain.com",
    phone: "+1 (123) 456-7890",
  },
  social: {
    twitter: "@pixelandcode",
    facebook: "pixelandcode",
    linkedin: "company/pixel-and-code",
    instagram: "pixel.and.code",
  },

  // Cloudinary asset
  logoPublicId: "pixel-n-code/logo-images/pixel-n-code-logo",

  // Metadata for SEO/Open Graph/Twitter
  metadata: {
    title: "Pixel & Code — A modern website for a modern business",
    description:
      "We build fast, modern websites tailored for service-based businesses, focusing on performance, accessibility, and SEO.",
    openGraph: {
      title: "Pixel & Code",
      description: "Modern, responsive websites for service-based businesses.",
      url: "https://clientdomain.com",
      type: "website",
      images: [
        {
          url: `https://res.cloudinary.com/your-cloud-name/image/upload/v1/${"pixel-n-code/logo-images/pixel-n-code-logo"}.png`,
          alt: "Pixel & Code Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pixelandcode",
      creator: "@pixelandcode",
    },
    robots: "index, follow",
  },
};
