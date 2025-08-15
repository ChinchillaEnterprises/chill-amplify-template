"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme, theme, isHydrated } = useTheme();
  // Mock user for demo template
  const user = { username: "demo@example.com" };
  const signOut = () => console.log("Sign out clicked");
  return (
    <header className="sticky top-0 z-40 w-full nav-premium">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full" style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(127,239,255,0.6), rgba(0,0,0,0)) , linear-gradient(180deg, #243A66, #121C34)'
          }} />
          <Link href="/" className="text-sm font-semibold text-white">Chill Amplify</Link>
        </div>
        <div className="relative">
          <button
            className="flex items-center gap-2 rounded-md btn-glass px-3 py-1.5 text-sm"
            onClick={() => setOpen((o) => !o)}
            aria-haspopup="menu"
            aria-expanded={open}
          >
            <span className="inline-block h-6 w-6 rounded-full" style={{ background: 'linear-gradient(180deg, #A1B5D8, #6B7C93)' }} />
            <span className="hidden sm:inline text-app">{user?.username}</span>
          </button>
          {/* Theme toggle */}
          <div className="absolute -left-28 top-1/2 -translate-y-1/2 hidden sm:block">
            {isHydrated && (
              <div className="flex items-center gap-2">
                <button
                  aria-label="Use light theme"
                  className={`h-8 w-8 rounded-md border border-app flex items-center justify-center text-xs ${resolvedTheme === 'light' ? 'glow-cyan' : ''}`}
                  onClick={() => setTheme('light')}
                >
                  L
                </button>
                <button
                  aria-label="Use dark theme"
                  className={`h-8 w-8 rounded-md border border-app flex items-center justify-center text-xs ${resolvedTheme === 'dark' ? 'glow-cyan' : ''}`}
                  onClick={() => setTheme('dark')}
                >
                  D
                </button>
                <button
                  aria-label="Use system theme"
                  className={`h-8 w-8 rounded-md border border-app flex items-center justify-center text-xs ${theme === 'system' ? 'glow-cyan' : ''}`}
                  onClick={() => setTheme('system')}
                >
                  S
                </button>
              </div>
            )}
          </div>
          {open && (
            <div
              role="menu"
              className="absolute right-0 mt-2 min-w-40 rounded-md border border-app bg-surface p-1 shadow-elevated"
            >
              <Link href="/(protected)/profile" className="block rounded px-2 py-1.5 text-sm text-app hover:bg-app/60" role="menuitem">Profile</Link>
              <button onClick={() => signOut()} className="block w-full rounded px-2 py-1.5 text-left text-sm text-app hover:bg-app/60" role="menuitem">Sign out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
