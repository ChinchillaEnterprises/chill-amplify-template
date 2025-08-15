"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useMediaQuery } from "./useMediaQuery";

export type Theme = "light" | "dark" | "system";

export function useTheme() {
  const { value: storedTheme, set: setStoredTheme, isHydrated } = useLocalStorage<Theme>(
    "theme",
    "system"
  );
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const resolvedTheme: "light" | "dark" = useMemo(() => {
    if (storedTheme === "system") return prefersDark ? "dark" : "light";
    return storedTheme;
  }, [storedTheme, prefersDark]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement; // <html>
    if (resolvedTheme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [resolvedTheme]);

  return {
    theme: storedTheme,
    resolvedTheme,
    setTheme: setStoredTheme,
    isHydrated,
  } as const;
}

export default useTheme;

