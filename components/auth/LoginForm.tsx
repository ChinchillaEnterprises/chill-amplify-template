"use client";

import * as React from "react";
import { Input, Button } from "@/components/ui/primitives";
import { FormField } from "@/components/ui/forms";
import { cn } from "@/utils/cn";
import { useToast } from "@/hooks/useToast";
import { signIn } from "aws-amplify/auth";

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function LoginForm({ className, onSuccess }: LoginFormProps) {
  const { show } = useToast();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    // Add a small delay for demo UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
      // Mock authentication - accept any email/password for demo
      if (email && password) {
        const demoUser = { userId: "demo-123", username: email };
        localStorage.setItem('demo-user', JSON.stringify(demoUser));
        show({ message: "Signed in successfully", variant: "success" });
        onSuccess?.();
        // Refresh page to update auth state
        window.location.href = '/(protected)/dashboard';
      } else {
        throw new Error("Please enter email and password");
      }
    } catch (err: any) {
      setError(err?.message || "Failed to sign in");
      show({ message: "Sign in failed", variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      <FormField label="Email" required>
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FormField>
      <FormField label="Password" required>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </FormField>
      <div className="flex items-center justify-between">
        <label className="inline-flex items-center gap-2 text-sm text-slate-700">
          <input type="checkbox" className="h-4 w-4 rounded border-slate-300" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
          Remember me
        </label>
        <a href="/(auth)/forgot-password" className="text-sm text-slate-700 underline">Forgot password?</a>
      </div>
      {error && <p className="text-sm text-rose-600">{error}</p>}
      <Button type="submit" variant="primary" className="w-full" loading={loading}>
        Sign in
      </Button>
    </form>
  );
}

export default LoginForm;

