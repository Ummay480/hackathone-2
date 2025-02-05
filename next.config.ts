import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'cdn.sanity.io', // Existing domains
      'example.com', // Existing domains
      'cdn.example.com', // Existing domains
      'via.placeholder.com', // Added via.placeholder.com for placeholder images
    ],
  },

  // Other configuration options can go here, like React Strict Mode, etc.
  reactStrictMode: true, // Example of enabling React Strict Mode
};

export default nextConfig;
