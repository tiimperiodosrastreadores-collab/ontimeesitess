import { cn } from "@/lib/utils";
import { BRAND_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  href?: string;
  priority?: boolean;
  size?: "default" | "large";
  onDark?: boolean;
}

export function Logo({
  className,
  href = "#inicio",
  priority = false,
  size = "default",
  onDark = false,
}: LogoProps) {
  const imageSizes = {
    default: "h-14 w-auto sm:h-16",
    large: "h-[3.25rem] w-auto sm:h-[4.25rem] md:h-[5rem] lg:h-[5.5rem]",
  };

  const image = (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-xl transition-all",
        onDark &&
          "bg-white px-5 py-3 shadow-xl shadow-black/50 ring-2 ring-white/25",
        !onDark && "bg-white px-4 py-2.5 shadow-md ring-1 ring-slate-200/80"
      )}
    >
      <Image
        src="/logo.png"
        alt={BRAND_NAME}
        width={320}
        height={100}
        priority={priority}
        className={cn(imageSizes[size], "object-contain", className)}
      />
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex shrink-0 transition-opacity hover:opacity-90"
      >
        {image}
      </Link>
    );
  }

  return image;
}
