/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.philadelphiacarlease.com',
    generateRobotsTxt: true,      // создаст robots.txt
    sitemapSize: 7000,            // лимит URL на один sitemap-файл
    changefreq: 'daily',          // <changefreq> для всех URL
    priority: 0.7,                // <priority> для всех URL
    exclude: ['/api/*', '/_next/*'],  // что не включать
    // Опционально: дополнительные пути
    // additionalPaths: async (config) => [
    //   await config.transform(config, '/custom-page'),
    // ],
  }
  