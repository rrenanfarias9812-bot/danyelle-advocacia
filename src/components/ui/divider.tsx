import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  variant?: "default" | "gold" | "dashed";
  orientation?: "horizontal" | "vertical";
}

export function Divider({
  className,
  variant = "default",
  orientation = "horizontal",
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        className={cn(
          "w-px h-full",
          variant === "default" && "bg-border",
          variant === "gold" && "bg-gold-400",
          variant === "dashed" && "border-l border-dashed border-border",
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "w-full h-px",
        variant === "default" && "bg-border",
        variant === "gold" && "bg-gradient-to-r from-transparent via-gold-400 to-transparent",
        variant === "dashed" && "border-t border-dashed border-border",
        className
      )}
    />
  );
}
