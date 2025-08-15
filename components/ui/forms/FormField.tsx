"use client";

import * as React from "react";
import { cn } from "@/utils/cn";

export interface FormFieldProps {
  label?: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({ label, required, helperText, error, children, className }: FormFieldProps) {
  return (
    <div className={cn("w-full", className)}>
      {(label || required) && (
        <div className="mb-1 flex items-center gap-1 text-sm font-medium text-slate-700">
          {label && <span>{label}</span>}
          {required && <span className="text-rose-600">*</span>}
        </div>
      )}
      {children}
      <div className="mt-1">
        {helperText && !error && <p className="text-xs text-slate-500">{helperText}</p>}
        {error && <p className="text-xs text-rose-600">{error}</p>}
      </div>
    </div>
  );
}

export default FormField;

