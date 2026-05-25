import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Если репозиторий называется не username.github.io, раскомментируй:
  // basePath: "/mint-and-coffee",
  images: {
    unoptimized: true, // обязательно для статического экспорта
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
