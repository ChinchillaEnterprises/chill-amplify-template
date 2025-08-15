"use client";

import Link from "next/link";
import { SignupForm } from "@/components/auth";

export default function SignupPage() {
  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-2 h-10 w-10 rounded-full bg-slate-900" />
          <h1 className="text-xl font-semibold text-slate-900">Create your account</h1>
          <p className="text-sm text-slate-600">Start building with Chill Amplify</p>
        </div>
        <SignupForm />
        <p className="mt-4 text-center text-sm text-slate-600">
          Already have an account? {" "}
          <Link className="underline" href="/login">Sign in</Link>
        </p>
        <footer className="mt-6 text-center text-xs text-slate-400">© {new Date().getFullYear()} Chill Amplify</footer>
      </div>
    </div>
  );
}