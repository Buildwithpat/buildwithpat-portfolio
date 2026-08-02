import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function GlassPanel({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line-subtle bg-surface-1/70 backdrop-blur-xl",
        "shadow-[var(--shadow-elevation-2)]",
        "dark:bg-surface-2/60",
        className,
      )}
      {...props}
    />
  );
}
