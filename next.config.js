/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
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
  async redirects() {
    return [

      {
        source: '/car-lease-deals/:make-lease-specials-lease-specials/:path*',
        destination: '/car-lease-deals/:make-lease-specials/:path*/',
        permanent: true,
      },
      {
        source: '/car-lease-deals/:make-lease-specials-lease-specials',
        destination: '/car-lease-deals/:make-lease-specials/',
        permanent: true,
      },

      {
        source: '/car-lease-deals/:make-lease-specials-lease-specials-lease-specials/:path*',
        destination: '/car-lease-deals/:make-lease-specials/:path*/',
        permanent: true,
      },
      {
        source: '/car-lease-deals/:make-lease-specials-lease-specials-lease-specials',
        destination: '/car-lease-deals/:make-lease-specials/',
        permanent: true,
      },
    ]
  },
};