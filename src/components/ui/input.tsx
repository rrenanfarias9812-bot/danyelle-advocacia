import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, hint, icon, iconRight, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-label-lg text-navy-900 uppercase tracking-widest"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {icon && (
            <span className="absolute left-3.5 text-slate-400 pointer-events-none">
              {icon}
            </span>
          )}
          <input
            id={inputId}
            type={type}
            ref={ref}
            className={cn(
              "w-full h-12 rounded-xl border bg-white px-4 text-body-md text-navy-900",
              "placeholder:text-slate-400",
              "border-border",
              "transition-all duration-250 ease-premium",
              "focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400",
              "hover:border-slate-400",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50",
              error && "border-error focus:ring-error",
              icon && "pl-10",
              iconRight && "pr-10",
              className
            )}
            {...props}
          />
          {iconRight && (
            <span className="absolute right-3.5 text-slate-400">
              {iconRight}
            </span>
          )}
        </div>
        {hint && !error && (
          <p className="text-body-xs text-muted-foreground">{hint}</p>
        )}
        {error && (
          <p className="text-body-xs text-error font-medium">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-label-lg text-navy-900 uppercase tracking-widest"
          >
            {label}
          </label>
        )}
        <textarea
          id={inputId}
          ref={ref}
          className={cn(
            "w-full rounded-xl border bg-white px-4 py-3 text-body-md text-navy-900 resize-none",
            "placeholder:text-slate-400",
            "border-border",
            "transition-all duration-250 ease-premium",
            "focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400",
            "hover:border-slate-400",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-error focus:ring-error",
            className
          )}
          {...props}
        />
        {hint && !error && (
          <p className="text-body-xs text-muted-foreground">{hint}</p>
        )}
        {error && (
          <p className="text-body-xs text-error font-medium">{error}</p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Input, Textarea };
