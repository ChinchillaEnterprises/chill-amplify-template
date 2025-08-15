"use client";

import * as React from "react";
import { Input, Button } from "@/components/ui/primitives";
import { FormField } from "@/components/ui/forms";
import { useToast } from "@/hooks/useToast";
import { signUp } from "aws-amplify/auth";

export interface SignupFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function SignupForm({ className, onSuccess }: SignupFormProps) {
  const { show } = useToast();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [accepted, setAccepted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const canSubmit = email && password && confirm && accepted && password === confirm;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setError(null);
    setLoading(true);
    
    // Add a small delay for demo UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
      // Mock signup - accept any valid inputs for demo
      const demoUser = { userId: "demo-123", username: email };
      localStorage.setItem('demo-user', JSON.stringify(demoUser));
      show({ message: "Account created successfully", variant: "success" });
      onSuccess?.();
      // Redirect to dashboard
      window.location.href = '/(protected)/dashboard';
    } catch (err: any) {
      setError(err?.message || "Signup failed");
      show({ message: "Signup failed", variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={"space-y-4 " + (className ?? "") }>
      <FormField label="Email" required>
        <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </FormField>
      <FormField label="Password" required>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </FormField>
      <FormField label="Confirm Password" required>
        <Input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
      </FormField>
      <label className="inline-flex items-center gap-2 text-sm text-slate-700">
        <input type="checkbox" className="h-4 w-4 rounded border-slate-300" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
        I agree to the Terms & Privacy
      </label>
      {password && confirm && password !== confirm && (
        <p className="text-sm text-rose-600">Passwords do not match</p>
      )}
      {error && <p className="text-sm text-rose-600">{error}</p>}
      <Button type="submit" variant="primary" className="w-full" disabled={!canSubmit} loading={loading}>
        Create account
      </Button>
    </form>
  );
}

export default SignupForm;

