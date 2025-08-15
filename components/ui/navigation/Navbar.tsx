"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  // Mock user for demo template
  const user = { username: "demo@example.com" };
  const signOut = () => console.log("Sign out clicked");
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-slate-900" />
          <Link href="/" className="text-sm font-semibold text-slate-900">Chill Amplify</Link>
        </div>
        <div className="relative">
          <button
            className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-slate-50"
            onClick={() => setOpen((o) => !o)}
            aria-haspopup="menu"
            aria-expanded={open}
          >
            <span className="inline-block h-6 w-6 rounded-full bg-slate-300" />
            <span className="hidden sm:inline text-slate-700">{user?.username}</span>
          </button>
          {open && (
            <div
              role="menu"
              className="absolute right-0 mt-2 min-w-40 rounded-md border border-slate-200 bg-white p-1 shadow-md"
            >
              <Link href="/(protected)/profile" className="block rounded px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50" role="menuitem">Profile</Link>
              <button onClick={() => signOut()} className="block w-full rounded px-2 py-1.5 text-left text-sm text-slate-700 hover:bg-slate-50" role="menuitem">Sign out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

