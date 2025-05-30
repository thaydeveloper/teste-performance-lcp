/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    additionalSitemaps: [`${process.env.SITE_URL}/sitemap.xml`],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },

  changefreq: 'weekly',
  priority: 0.7,
};
