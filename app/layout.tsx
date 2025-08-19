import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { MockModeBanner } from "@/components/layout/MockModeBanner";

export const metadata: Metadata = {
  title: "Chill Amplify Template",
  description: "A modern full-stack application template powered by AWS Amplify Gen 2 and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MockModeBanner />
          {children}
        </Providers>
      </body>
    </html>
  );
}
