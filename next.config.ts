import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kanjicapitalinvestments.com',
      },
    ],
  },
};

export default nextConfig;
