import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'cdn.sanity.io', 
      'example.com', 
      'cdn.example.com', 
      'via.placeholder.com', 
      'sanity-nextjs-rouge.vercel.app', // ✅ Add this missing domain
    ],
  },

  reactStrictMode: true, // Keep this enabled if needed
};

export default nextConfig;
