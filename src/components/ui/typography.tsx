import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ─── Heading ─────────────────────────────────────────────────────────────────

const headingVariants = cva("font-serif font-bold tracking-tight text-navy-900", {
  variants: {
    size: {
      "2xl": "text-display-2xl",
      xl:    "text-display-xl",
      lg:    "text-display-lg",
      md:    "text-display-md",
      sm:    "text-display-sm",
    },
    align: {
      left:   "text-left",
      center: "text-center",
      right:  "text-right",
    },
  },
  defaultVariants: { size: "lg", align: "left" },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingTag;
}

function Heading({ as: Tag = "h2", className, size, align, ...props }: HeadingProps) {
  return <Tag className={cn(headingVariants({ size, align }), className)} {...props} />;
}

// ─── Section Label ───────────────────────────────────────────────────────────

interface SectionLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  accent?: boolean;
}

function SectionLabel({ className, accent = true, children, ...props }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-label-lg uppercase tracking-[0.18em]",
        accent ? "text-gold-500" : "text-muted-foreground",
        className
      )}
      {...props}
    >
      {accent && <span className="block h-px w-6 bg-gold-400" />}
      {children}
    </span>
  );
}

// ─── Lead ────────────────────────────────────────────────────────────────────

function Lead({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-body-xl text-slate-600 leading-relaxed max-w-2xl", className)}
      {...props}
    />
  );
}

// ─── Body ────────────────────────────────────────────────────────────────────

const bodyVariants = cva("text-slate-700", {
  variants: {
    size: {
      xl: "text-body-xl",
      lg: "text-body-lg",
      md: "text-body-md",
      sm: "text-body-sm",
      xs: "text-body-xs",
    },
  },
  defaultVariants: { size: "md" },
});

interface BodyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof bodyVariants> {}

function Body({ className, size, ...props }: BodyProps) {
  return <p className={cn(bodyVariants({ size }), className)} {...props} />;
}

// ─── Gold Text ───────────────────────────────────────────────────────────────

function GoldText({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("text-gold-400 font-bold", className)}
      {...props}
    />
  );
}

// ─── Section Header ──────────────────────────────────────────────────────────

interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleSize?: "2xl" | "xl" | "lg" | "md" | "sm";
}

function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
  titleSize = "lg",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        className
      )}
    >
      {label && <SectionLabel>{label}</SectionLabel>}
      <Heading as="h2" size={titleSize} align={align}>
        {title}
      </Heading>
      {description && (
        <Lead className={cn(align === "center" && "mx-auto")}>
          {description}
        </Lead>
      )}
    </div>
  );
}

export { Heading, SectionLabel, Lead, Body, GoldText, SectionHeader };
