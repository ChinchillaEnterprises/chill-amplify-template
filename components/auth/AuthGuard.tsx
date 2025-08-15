"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/(auth)/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="grid min-h-[50vh] place-items-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-300 border-t-transparent" />
      </div>
    );
  }

  if (!user) return null; // Redirecting

  return <>{children}</>;
}

export default AuthGuard;

