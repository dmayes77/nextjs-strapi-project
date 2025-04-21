"use client";

import { CldImage } from "next-cloudinary";

export default function CloudImage({
  publicId,
  alt,
  width,
  height,
  fill = false,
  className = "",
  ...props
}) {
  if (!publicId) {
    console.warn("[CloudImage] Missing publicId");
    return null;
  }

  // Error guard: CldImage requires width/height or fill
  if (!fill && (!width || !height)) {
    console.warn("[CloudImage] Missing width or height for non-fill image:", {
      publicId,
    });
    return null;
  }

  return (
    <CldImage
      src={publicId}
      alt={alt}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      fill={fill}
      className={className}
      {...props}
    />
  );
}
