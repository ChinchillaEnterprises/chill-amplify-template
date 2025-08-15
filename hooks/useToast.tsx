"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type ToastVariant = "info" | "success" | "warning" | "error";

export type Toast = {
  id: string;
  title?: string;
  message: string;
  variant?: ToastVariant;
  duration?: number; // ms
};

type ToastContextValue = {
  toasts: Toast[];
  show: (toast: Omit<Toast, "id">) => string;
  dismiss: (id: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  const show = useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).slice(2);
    const next: Toast = { id, variant: "info", duration: 3000, ...toast };
    setToasts((t) => [...t, next]);
    if (next.duration && next.duration > 0) {
      setTimeout(() => dismiss(id), next.duration);
    }
    return id;
  }, [dismiss]);

  const value = useMemo(() => ({ toasts, show, dismiss }), [toasts, show, dismiss]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {/* Simple toast viewport */}
      <div className="fixed z-50 bottom-4 right-4 flex flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={
              "min-w-[260px] rounded-md border px-4 py-3 shadow-md bg-white/90 backdrop-blur " +
              (t.variant === "success"
                ? "border-emerald-200"
                : t.variant === "warning"
                ? "border-amber-200"
                : t.variant === "error"
                ? "border-rose-200"
                : "border-slate-200")
            }
          >
            {t.title && <div className="text-sm font-medium text-slate-900">{t.title}</div>}
            <div className="text-sm text-slate-700">{t.message}</div>
            <button
              aria-label="Dismiss notification"
              className="mt-2 text-xs text-slate-500 hover:text-slate-700"
              onClick={() => dismiss(t.id)}
            >
              Dismiss
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}

export default useToast;

