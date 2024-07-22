/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '/reaction',
  assetPrefix: '/reaction/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
