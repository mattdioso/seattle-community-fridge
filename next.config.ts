import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://storage.googleapis.com/seattle-community-fridge/home/**'),
      new URL('https://storage.googleapis.com/seattle-community-fridge/volunteer/**')],
  },
};

export default nextConfig;
