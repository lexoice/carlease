/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.cdn.718autolease.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn2.718autolease.com'
      }
    ],
  },
};