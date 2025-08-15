import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Keep builds stable across environments */
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
