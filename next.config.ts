import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // This line is crucial for static HTML export
  // Optional: Add a trailing slash to all URLs for consistent static hosting
  // trailingSlash: true,
  // Optional: Configure base path if your site is hosted in a subdirectory (e.g., yourdomain.com/portfolio)
  // basePath: '/portfolio',
  // images: {
  //   unoptimized: true, // Recommended for static export if you use Next/image component
  // },
};

export default nextConfig;