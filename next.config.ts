import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // Skip linting during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip type checking during builds (optional)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
