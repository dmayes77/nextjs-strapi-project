// app/layout.jsx
import "@/styles/globals.css";
import { siteConfig } from "@/constants/siteConfig";

// Use the metadata object defined in siteConfig
export const metadata = siteConfig.metadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
