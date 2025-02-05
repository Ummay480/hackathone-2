import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'example.com', 'cdn.example.com'],
  },

  // Other configuration options can go here, like React Strict Mode, etc.
};

export default nextConfig;
