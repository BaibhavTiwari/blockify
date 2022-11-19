/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_CLUSTER: process.env.REACT_APP_CLUSTER,
  },
  images: {
    domains: [
      'kajabi-storefronts-production.kajabi-cdn.com',
      'kajabi-storefronts-production.kajabi-cd.com',
      'upload.wikimedia.org',
      'i.ytimg.com',
      'angartwork.akamaized.net'
    ],
  },
}

module.exports = nextConfig