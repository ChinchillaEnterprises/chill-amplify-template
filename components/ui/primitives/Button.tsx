"use client";

import * as React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary" // Apple CTA Blue
    | "secondary" // Apple glass/white
    | "danger"
    | "ghost"
    | "link"
    | "titaniumBlue"
    | "titaniumDesert"
    | "titaniumNatural";
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
    const base = "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all ease-premium disabled:opacity-50 disabled:cursor-not-allowed select-none animation-premium focus-ring-premium";

    const sizes = {
      sm: "text-sm px-3 h-8",
      md: "text-sm px-4 h-10",
      lg: "text-base px-5 h-12",
    } as const;

    const variants = {
      primary: "btn-apple-cta",
      secondary: "apple-surface text-app",
      danger: "btn-danger-flagship text-white",
      ghost: "bg-transparent text-app hover:bg-app/60",
      link: "bg-transparent text-app underline underline-offset-2 hover:text-app/80",
      titaniumBlue: "btn-titanium-blue",
      titaniumDesert: "btn-titanium-desert",
      titaniumNatural: "btn-titanium-natural",
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
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-cyansoft/70 border-t-transparent" />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
