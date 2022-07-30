/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['png.pngtree.com'],
  },
}

module.exports = nextConfig
