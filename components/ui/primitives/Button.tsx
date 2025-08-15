"use client";

import * as React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth,
      loading,
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const base = "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

    const sizes = {
      sm: "text-sm px-3 h-8",
      md: "text-sm px-4 h-10",
      lg: "text-base px-5 h-12",
    } as const;

    const variants = {
      primary:
        "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-400",
      secondary:
        "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus-visible:ring-slate-300",
      danger:
        "bg-rose-600 text-white hover:bg-rose-500 focus-visible:ring-rose-300",
      ghost:
        "bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-300",
      link: "bg-transparent text-slate-900 underline underline-offset-2 hover:text-slate-700 focus-visible:ring-transparent",
    } as const;

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          base,
          sizes[size],
          variants[variant],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {leftIcon && <span className="-ml-0.5">{leftIcon}</span>}
        <span className={cn("inline-flex items-center", loading && "opacity-0")}>{children}</span>
        {rightIcon && <span className="-mr-0.5">{rightIcon}</span>}
        {loading && (
          <span className="absolute inline-flex">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-transparent" />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

