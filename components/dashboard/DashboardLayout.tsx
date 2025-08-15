"use client";

import React from "react";
import Navbar from "@/components/ui/navigation/Navbar";
import Sidebar from "@/components/ui/navigation/Sidebar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6">
        <Sidebar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;

