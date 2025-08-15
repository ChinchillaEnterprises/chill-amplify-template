"use client";

import { useEffect, useRef } from "react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json" assert { type: "json" };
import { ToastProvider } from "@/hooks/useToast";

export function Providers({ children }: { children: React.ReactNode }) {
  const configured = useRef(false);

  useEffect(() => {
    if (!configured.current) {
      try {
        Amplify.configure(outputs);
        configured.current = true;
      } catch {
        // ignore configure errors in dev
      }
    }
  }, []);

  return <ToastProvider>{children}</ToastProvider>;
}

export default Providers;

