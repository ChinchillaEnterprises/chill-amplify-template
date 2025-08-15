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
    const [value, setValue] = React.useState<string | number | readonly string[] | undefined>(props.value as any);
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
          {leftIcon && <span className="absolute left-3 text-appmuted">{leftIcon}</span>}
          <input
            id={id}
            ref={ref}
            type={type}
            className={cn(
              "w-full appearance-none rounded-xl field-premium bg-surface px-3 py-2 text-sm text-app outline-none transition duration-medium ease-premium",
              error ? "border-rose-300" : "border-app",
              !!leftIcon && "pl-9",
              (!!rightIcon || showClear) && "pr-9"
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
              className="absolute right-2 rounded p-1 text-appmuted hover:bg-app/70 hover:text-app"
              onClick={() => {
                setValue("");
                const target = { ...(({} as unknown) as EventTarget), value: "" } as HTMLInputElement;
                props.onChange?.({ target } as any);
              }}
            >
              <span className="block h-4 w-4">×</span>
            </button>
          )}
          {!showClear && rightIcon && <span className="absolute right-3 text-appmuted">{rightIcon}</span>}
        </div>
        {helperText && !error && (
          <p id={`${id}-help`} className="mt-1 text-xs text-appmuted">
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
