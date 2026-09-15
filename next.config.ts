import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Set Turbopack root to the project directory to avoid warnings about package-lock.json location
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
