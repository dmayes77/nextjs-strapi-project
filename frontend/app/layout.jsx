// app/layout.jsx
import "@/styles/globals.css";
import { siteConfig } from "@/constants/siteConfig";

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.domain),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    images: [
      {
        url: `https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/${siteConfig.logoUrl}.png`,
        width: 800,
        height: 600,
        alt: siteConfig.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      `https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/${siteConfig.logoUrl}.png`,
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
