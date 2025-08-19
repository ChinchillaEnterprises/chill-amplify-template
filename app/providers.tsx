"use client";

import { useEffect, useRef } from "react";
import { ToastProvider } from "@/hooks/useToast";
import { isMockMode, getAmplifyStatus } from "@/lib/amplify-config";

export function Providers({ children }: { children: React.ReactNode }) {
  const configured = useRef(false);

  useEffect(() => {
    if (!configured.current) {
      // Import and configure Amplify is now handled in amplify-config.ts
      // This prevents errors when in mock mode
      const status = getAmplifyStatus();
      console.log(status.message);
      configured.current = true;
    }
  }, []);

  return <ToastProvider>{children}</ToastProvider>;
}

export default Providers;

