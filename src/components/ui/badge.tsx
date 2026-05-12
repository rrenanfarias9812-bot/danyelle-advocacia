import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:    "bg-navy-900 text-white",
        gold:       "bg-gold-400 text-navy-900",
        outline:    "border border-navy-900 text-navy-900 bg-transparent",
        "gold-outline": "border border-gold-400 text-gold-500 bg-transparent",
        muted:      "bg-slate-100 text-slate-700",
        success:    "bg-green-100 text-green-700",
        warning:    "bg-amber-100 text-amber-700",
        error:      "bg-red-100 text-red-700",
      },
      size: {
        sm: "px-2 py-0.5 text-label-sm",
        md: "px-2.5 py-1 text-label-md",
        lg: "px-3 py-1.5 text-label-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size:    "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
