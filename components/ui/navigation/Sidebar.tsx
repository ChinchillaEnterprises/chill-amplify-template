"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

const items = [
  { href: "/(protected)/dashboard", label: "Dashboard" },
  { href: "/(protected)/profile", label: "Profile" },
  { href: "/(protected)/settings", label: "Settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden w-60 shrink-0 apple-surface p-3 md:block">
      <nav className="space-y-1">
        {items.map((it) => {
          const active = pathname?.startsWith(it.href);
          return (
            <Link
              key={it.href}
              href={it.href}
              className={cn(
                "block rounded-md px-3 py-2 text-sm font-semibold text-app transition-colors",
                active ? "bg-app/15 text-app ring-1 ring-app/20" : "hover:bg-app/10"
              )}
            >
              {it.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-6 text-xs text-appmuted">v0.1</div>
    </aside>
  );
}

export default Sidebar;
