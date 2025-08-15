"use client";

import * as React from "react";
import { cn } from "@/utils/cn";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  autoResize?: boolean;
  maxLengthDisplay?: boolean; // show character counter
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, helperText, error, autoResize, maxLength, maxLengthDisplay, ...props }, ref) => {
    const id = React.useId();
    const innerRef = React.useRef<HTMLTextAreaElement | null>(null);

    React.useImperativeHandle(ref, () => innerRef.current as HTMLTextAreaElement);

    const resize = React.useCallback(() => {
      if (!autoResize || !innerRef.current) return;
      innerRef.current.style.height = "auto";
      innerRef.current.style.height = `${innerRef.current.scrollHeight}px`;
    }, [autoResize]);

    React.useEffect(() => {
      resize();
    }, [resize, props.value, props.defaultValue]);

    const count = typeof props.value === "string" ? props.value.length : undefined;

    return (
      <div className={cn("w-full", className)}>
        {label && (
          <label htmlFor={id} className="mb-1 block text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={innerRef}
          className={cn(
            "w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:ring-2 focus:ring-slate-300",
            error ? "border-rose-300" : "border-slate-200",
            autoResize && "overflow-hidden"
          )}
          maxLength={maxLength}
          {...props}
        />
        <div className="mt-1 flex items-center justify-between">
          {helperText && !error && <p className="text-xs text-slate-500">{helperText}</p>}
          {error && <p className="text-xs text-rose-600">{error}</p>}
          {maxLengthDisplay && maxLength && (
            <p className="ml-auto text-xs text-slate-400">{count ?? 0}/{maxLength}</p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;

