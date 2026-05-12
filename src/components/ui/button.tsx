"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-250 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        // Primary — Navy sólido
        primary:
          "bg-navy-900 text-white shadow-md hover:bg-navy-800 hover:shadow-lg active:scale-[0.98] active:bg-navy-950",
        // Gold — CTA premium
        gold:
          "bg-gold-400 text-navy-900 shadow-md hover:bg-gold-300 hover:shadow-gold active:scale-[0.98] font-bold",
        // Outline Navy
        outline:
          "border-2 border-navy-900 text-navy-900 bg-transparent hover:bg-navy-900 hover:text-white active:scale-[0.98]",
        // Outline Gold
        "outline-gold":
          "border-2 border-gold-400 text-gold-500 bg-transparent hover:bg-gold-400 hover:text-navy-900 active:scale-[0.98]",
        // Ghost
        ghost:
          "text-navy-900 bg-transparent hover:bg-navy-50 active:scale-[0.98]",
        // Destructive
        destructive:
          "bg-error text-white shadow-sm hover:bg-red-700 active:scale-[0.98]",
        // Link
        link: "text-gold-500 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        xs:   "h-8  px-3   text-body-xs",
        sm:   "h-9  px-4   text-body-sm",
        md:   "h-11 px-6   text-body-md",
        lg:   "h-13 px-8   text-body-lg",
        xl:   "h-14 px-10  text-body-xl",
        icon: "h-10 w-10",
      },
      rounded: {
        default: "rounded-lg",
        full:    "rounded-full",
        none:    "rounded-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size:    "md",
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>{children}</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
