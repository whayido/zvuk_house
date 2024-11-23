import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /*  experimental: {
    optimizePackageImports: true,
  }, */
  output: "export",
  /* basePath: "/zvuk_house", */
  images: { unoptimized: true },
  reactStrictMode: false,
  webpack: (config, { dev, isServer }) => {
    if (!isServer && !dev) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
    return config;
  },
};

export default nextConfig;
