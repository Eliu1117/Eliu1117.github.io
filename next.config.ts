import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  agentRules: false,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  // Vercel is the intended host. Do not set `output: "export"` —
  // this app uses the standard Next.js App Router runtime.
};

export default nextConfig;
