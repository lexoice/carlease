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
  async redirects() {
    return [
      // Перенаправляем дублированные URL на правильные
      {
        source: '/car-lease-deals/:make-lease-specials-lease-specials/:path*',
        destination: '/car-lease-deals/:make-lease-specials/:path*',
        permanent: true,
      },
      {
        source: '/car-lease-deals/:make-lease-specials-lease-specials',
        destination: '/car-lease-deals/:make-lease-specials',
        permanent: true,
      },
      // Обрабатываем множественные дублирования
      {
        source: '/car-lease-deals/:make-lease-specials-lease-specials-lease-specials/:path*',
        destination: '/car-lease-deals/:make-lease-specials/:path*',
        permanent: true,
      },
      {
        source: '/car-lease-deals/:make-lease-specials-lease-specials-lease-specials',
        destination: '/car-lease-deals/:make-lease-specials',
        permanent: true,
      },
    ]
  },
};