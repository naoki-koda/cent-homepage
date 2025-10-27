import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // 静的HTMLを出力
  assetPrefix: './',       // file://直開き対応
  trailingSlash: true,
  images: { unoptimized: true }, // next/image対策
};

export default nextConfig;
