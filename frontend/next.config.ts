import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-expect-error - Recommended by Next.js terminal logs for LAN usage
  allowedDevOrigins: ['192.168.0.53', 'localhost'],
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
