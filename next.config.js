/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
