import { cn } from "@/lib/utils";

export function StatusChip({
  label,
  tone = "neutral",
  className,
}: {
  label: string;
  tone?: "neutral" | "live" | "accent";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-label uppercase tracking-[0.1em]",
        tone === "neutral" &&
          "border-line-subtle bg-surface-2 text-ink-2",
        tone === "live" &&
          "border-accent-line bg-accent-soft text-accent",
        tone === "accent" &&
          "border-accent-line bg-accent-soft text-accent",
        className,
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          tone === "neutral" ? "bg-ink-3" : "bg-accent",
          tone !== "neutral" && "animate-pulse",
        )}
      />
      {label}
    </span>
  );
}
