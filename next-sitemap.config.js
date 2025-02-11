/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://jptribe-landing-sass.vercel.app', // Replace with your actual domain
    generateRobotsTxt: true, // Generate `robots.txt` file
    sitemapSize: 7000, // Optional: limit sitemap entries
    exclude: ['/admin'], // Optional: exclude specific paths
};

module.exports = config;
