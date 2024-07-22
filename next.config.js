/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/reaction',
  assetPrefix: '/reaction/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
