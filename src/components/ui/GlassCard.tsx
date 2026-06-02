import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function GlassCard({ children, className, dark = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300 hover:shadow-lg",
        dark ? "glass-card-dark" : "glass-card shadow-sm hover:shadow-accent/5",
        className
      )}
    >
      {children}
    </div>
  );
}
