// components/ui/Logo.jsx

import CloudImage from "@/components/ui/CloudImage";
import { siteConfig } from "@/constants/siteConfig";

export default function Logo({ className = "h-50 w-auto", ...props }) {
  return (
    <CloudImage
      publicId={siteConfig.logoPublicId}
      alt="Pixel + Code Logo"
      width={800}
      height={400}
      className={className}
      {...props}
    />
  );
}
