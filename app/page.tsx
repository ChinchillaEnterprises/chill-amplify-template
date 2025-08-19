"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/primitives";

function AuthCta() {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  
  useEffect(() => {
    async function check() {
      try {
        const { getCurrentUser } = await import("aws-amplify/auth");
        await getCurrentUser();
        setSignedIn(true);
      } catch {
        setSignedIn(false);
      }
    }
    check();
  }, []);
  
  return (
    <div className="flex items-center gap-3">
      <Link href="/signup">
        <Button variant="primary" size="lg">Get Started</Button>
      </Link>
      <Link href="/login">
        <Button variant="secondary" size="lg">Sign In</Button>
      </Link>
      <Link href="/dashboard">
        <Button variant="secondary" size="lg">View Dashboard</Button>
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-slate-900" />
          <span className="text-sm font-semibold" style={{ color: 'rgb(29, 29, 31)' }}>Chill Amplify</span>
        </div>
        <nav className="flex items-center gap-3">
          <Link href="/login" className="text-sm hover:underline" style={{ color: 'rgb(51, 51, 54)' }}>Login</Link>
          <Link href="/signup">
            <Button size="sm">Sign up</Button>
          </Link>
          <Link href="/dashboard">
            <Button size="sm" variant="secondary">Dashboard</Button>
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4">
        {/* Hero */}
        <section className="relative grid place-items-center py-20">
          <div className="text-center">
            <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl" style={{ color: 'rgb(29, 29, 31)' }}>
              Build modern apps with Amplify Gen 2 and Next.js
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg" style={{ color: 'rgb(51, 51, 54)' }}>
              A clean, opinionated template with an elegant UI library, authentication,
              and ready-to-use dashboard components. Focus on features, not boilerplate.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <AuthCta />
            </div>
            <p className="mt-3 text-xs" style={{ color: 'rgb(71, 71, 74)' }}>Includes Tailwind v4, TypeScript, and AWS Amplify</p>
          </div>
        </section>

        {/* Feature grid */}
        <section className="pb-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="h-8 w-8 rounded-md bg-slate-900" />
              <h3 className="mt-3 text-sm font-semibold" style={{ color: 'rgb(29, 29, 31)' }}>Auth-ready</h3>
              <p className="mt-1 text-sm" style={{ color: 'rgb(51, 51, 54)' }}>Cognito-backed flows for signup, login, MFA, and password reset.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="h-8 w-8 rounded-md bg-slate-900" />
              <h3 className="mt-3 text-sm font-semibold" style={{ color: 'rgb(29, 29, 31)' }}>UI Library</h3>
              <p className="mt-1 text-sm" style={{ color: 'rgb(51, 51, 54)' }}>Polished primitives and forms, built with accessibility in mind.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="h-8 w-8 rounded-md bg-slate-900" />
              <h3 className="mt-3 text-sm font-semibold" style={{ color: 'rgb(29, 29, 31)' }}>Dashboard</h3>
              <p className="mt-1 text-sm" style={{ color: 'rgb(51, 51, 54)' }}>Responsive layout with navbar, sidebar, and production-ready patterns.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="h-8 w-8 rounded-md bg-slate-900" />
              <h3 className="mt-3 text-sm font-semibold" style={{ color: 'rgb(29, 29, 31)' }}>Amplify Gen 2</h3>
              <p className="mt-1 text-sm" style={{ color: 'rgb(51, 51, 54)' }}>Easy data, storage, and hosting integration for full-stack apps.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 text-xs" style={{ color: 'rgb(71, 71, 74)' }}>
          <span>© {new Date().getFullYear()} Chill Amplify</span>
          <span>Next.js + AWS Amplify</span>
        </div>
      </footer>
    </div>
  );
}