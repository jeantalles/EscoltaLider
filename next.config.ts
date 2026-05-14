import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
