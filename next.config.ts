import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    // Any of the following will trigger the regression:
    viewTransition: true,
    // ppr: true,
    // taint: true,
  },
};

export default nextConfig;
