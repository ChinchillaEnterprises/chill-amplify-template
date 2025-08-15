"use client";

import * as React from "react";
import { cn } from "@/utils/cn";

export interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md";
  label?: string;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked: checkedProp, onCheckedChange, disabled, size = "md", className, label, ...props }, ref) => {
    const [internal, setInternal] = React.useState(!!checkedProp);
    const controlled = typeof checkedProp === "boolean";
    const checked = controlled ? checkedProp! : internal;

    const toggle = () => {
      const next = !checked;
      if (!controlled) setInternal(next);
      onCheckedChange?.(next);
    };

    const trackClass = size === "sm" ? "w-8 h-4" : "w-10 h-5";
    const dotSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";
    const dotTranslate = checked ? (size === "sm" ? "translate-x-4" : "translate-x-5") : "translate-x-0";

    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        ref={ref}
        disabled={disabled}
        onClick={toggle}
        className={cn(
          "relative inline-flex items-center rounded-full transition-colors",
          trackClass,
          checked ? "bg-slate-900" : "bg-slate-200",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "absolute left-0.5 top-1/2 -translate-y-1/2 transform rounded-full bg-white shadow transition",
            dotTranslate,
            dotSize
          )}
        />
      </button>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
