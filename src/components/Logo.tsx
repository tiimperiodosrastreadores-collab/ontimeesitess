import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  href?: string;
  priority?: boolean;
}

export function Logo({ className, href = "#inicio", priority = false }: LogoProps) {
  const image = (
    <Image
      src="/logo.png"
      alt="OnTime Tracker"
      width={180}
      height={56}
      priority={priority}
      className={cn("h-10 w-auto object-contain sm:h-11", className)}
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0 transition-opacity hover:opacity-90">
        {image}
      </Link>
    );
  }

  return image;
}
