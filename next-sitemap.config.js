/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.philadelphiacarlease.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    trailingSlash: true,
    exclude: ['/api/*', '/_next/*'],
    additionalPaths: async (config) => {
      try {

        const dealsRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/get-deals.php?page=1&per_page=-1`);
        const dealsData = dealsRes.ok ? await dealsRes.json() : { cars: [] };
        const deals = Array.isArray(dealsData.cars) ? dealsData.cars : [];
        

        const makesRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/get-makes.php`);
        const makesData = makesRes.ok ? await makesRes.json() : { data: [] };
        const makes = Array.isArray(makesData) ? makesData : (makesData.data || []);

        const paths = [];


        for (const deal of deals) {
          if (deal && deal.link) {
            paths.push({
              loc: deal.link,
              changefreq: 'daily',
              priority: 0.8,
              lastmod: new Date().toISOString()
            });
          }
        }


        for (const make of makes) {
          if (make && make.slug) {
            paths.push({
              loc: `/car-lease-deals/${make.slug}-lease-specials/`,
              changefreq: 'daily',
              priority: 0.7,
              lastmod: new Date().toISOString()
            });
          }
        }

        console.log(`Generated ${paths.length} paths for sitemap`);
        return paths;
      } catch (error) {
        console.error('Error generating sitemap paths:', error);
        return [];
      }
    },
  }