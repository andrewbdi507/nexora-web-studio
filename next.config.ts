import type { Config } from "next";

const nextConfig: Config = {
  eslint {
    ignoreDuringBuilds: true,
  },
  typescript {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["images.unsplash.com", "picsum.photos"],
  },
};

export default nextConfig;