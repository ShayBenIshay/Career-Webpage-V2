const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
  output: isProduction ? "export" : undefined,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@react-pdf/renderer": "@react-pdf/renderer/lib/react-pdf.js",
    };
    return config;
  },
};

module.exports = nextConfig;
