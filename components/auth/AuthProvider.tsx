"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getCurrentUser, signOut } from "aws-amplify/auth";

type User = {
  userId: string;
  username: string;
};

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  refresh: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      // Mock auth check using localStorage for demo
      const savedUser = localStorage.getItem('demo-user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      } else {
        // Try Amplify auth as fallback
        const current = await getCurrentUser();
        setUser({ userId: current.userId, username: current.username });
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const doSignOut = useCallback(async () => {
    try {
      await signOut();
    } catch {
      // Ignore Amplify errors for demo
    }
    localStorage.removeItem('demo-user');
    setUser(null);
  }, []);

  const value = useMemo(() => ({ user, loading, refresh, signOut: doSignOut }), [user, loading, refresh, doSignOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export default AuthProvider;

