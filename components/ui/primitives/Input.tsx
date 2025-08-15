"use client";

import * as React from "react";
import { cn } from "@/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  clearable?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, label, helperText, error, leftIcon, rightIcon, clearable, type = "text", ...props },
    ref
  ) => {
    const id = React.useId();
    const [value, setValue] = React.useState<string | number | readonly string | undefined>(props.value);
    React.useEffect(() => setValue(props.value), [props.value]);

    const showClear = clearable && typeof value === "string" && value.length > 0;

    return (
      <div className={cn("w-full", className)}>
        {label && (
          <label htmlFor={id} className="mb-1 block text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <div className={cn("relative flex items-center")}> 
          {leftIcon && <span className="absolute left-3 text-slate-400">{leftIcon}</span>}
          <input
            id={id}
            ref={ref}
            type={type}
            className={cn(
              "w-full appearance-none rounded-md border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:ring-2 focus:ring-slate-300",
              error ? "border-rose-300" : "border-slate-200",
              leftIcon && "pl-9",
              (rightIcon || showClear) && "pr-9"
            )}
            aria-invalid={!!error}
            aria-describedby={helperText ? `${id}-help` : undefined}
            onChange={(e) => {
              setValue(e.target.value);
              props.onChange?.(e);
            }}
            {...props}
          />
          {showClear && (
            <button
              type="button"
              aria-label="Clear input"
              className="absolute right-2 rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              onClick={() => {
                setValue("");
                const target = { ...(({} as unknown) as EventTarget), value: "" } as HTMLInputElement;
                props.onChange?.({ target } as any);
              }}
            >
              <span className="block h-4 w-4">×</span>
            </button>
          )}
          {!showClear && rightIcon && <span className="absolute right-3 text-slate-400">{rightIcon}</span>}
        </div>
        {helperText && !error && (
          <p id={`${id}-help`} className="mt-1 text-xs text-slate-500">
            {helperText}
          </p>
        )}
        {error && <p className="mt-1 text-xs text-rose-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

