/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.philadelphiacarlease.com',
    generateRobotsTxt: true,      // создаст robots.txt
    sitemapSize: 7000,            // лимит URL на один sitemap-файл
    changefreq: 'daily',          // <changefreq> для всех URL
    priority: 0.7,                // <priority> для всех URL
    exclude: ['/api/*', '/_next/*'],  // что не включать
    additionalPaths: async (config) => {
      try {
        // Получаем список всех автомобилей
        const dealsRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/get-deals.php?page=1&per_page=-1`);
        const dealsData = dealsRes.ok ? await dealsRes.json() : { cars: [] };
        const deals = Array.isArray(dealsData.cars) ? dealsData.cars : [];
        
        // Получаем список всех производителей
        const makesRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/get-makes.php`);
        const makesData = makesRes.ok ? await makesRes.json() : { data: [] };
        const makes = Array.isArray(makesData) ? makesData : (makesData.data || []);

        const paths = [];

        // Добавляем пути для всех автомобилей
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

        // Добавляем пути для всех производителей
        for (const make of makes) {
          if (make && make.slug) {
            paths.push({
              loc: `/car-lease-deals/${make.slug}-lease-specials`,
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
  // get-deals.php?page=1&per_page=-1 выведет список все авто "link": "/car-lease-deals/nissan-lease-specials/nissan-altima/",
  // /api/get-makes.php вывдет список всех производителей но линк должен быть такой slug: /car-lease-deals/[slug]-lease-specials