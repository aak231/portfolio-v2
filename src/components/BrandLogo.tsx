import bayutLogo from "@/assets/bayut_grey.png";
import dubizzleLogo from "@/assets/dubizzle_grey.png";

export type Brand = "bayut" | "dubizzle";

// The source PNGs have different built-in padding, so each brand needs its own height.
const BRANDS: Record<Brand, { src: string; alt: string; size: string }> = {
  bayut: { src: bayutLogo, alt: "Bayut", size: "h-9" },
  dubizzle: { src: dubizzleLogo, alt: "dubizzle", size: "h-7" },
};

export default function BrandLogo({
  brand,
  className = "",
}: {
  brand: Brand;
  className?: string;
}) {
  const { src, alt, size } = BRANDS[brand];
  return (
    <img
      src={src}
      alt={alt}
      className={`${size} w-auto shrink-0 opacity-70 ${className}`}
    />
  );
}
