import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Placeholder({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border border-dashed border-zinc-300 bg-zinc-50 px-1.5 py-0.5 font-mono text-xs font-medium text-zinc-600",
        className,
      )}
    >
      Placeholder — {children}
    </span>
  );
}
