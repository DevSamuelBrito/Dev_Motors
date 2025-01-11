import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cdn.cosmicjs.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
