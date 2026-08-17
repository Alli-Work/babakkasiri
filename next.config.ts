import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/babakkasiri",
  assetPrefix:"/babakkasiri",
    images: {
    unoptimized: true,
  },

};

export default nextConfig;
