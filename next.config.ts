import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io', "example.com", "cdn.example.com"],
  },

  // Add other configuration options here
};

export default nextConfig;
