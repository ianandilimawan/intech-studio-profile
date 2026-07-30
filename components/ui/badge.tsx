import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10",
        className
      )}
    >
      {children}
    </div>
  );
}
