const siteUrlComplete = require("./utils/siteUrlComplete");

module.exports = {
  siteUrl: siteUrlComplete,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [`${siteUrlComplete}/sitemap.xml`, `${siteUrlComplete}/server-sitemap.xml`],
  },
};
