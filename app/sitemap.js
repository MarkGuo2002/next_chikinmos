// app/sitemap.ts


export default async function getSitemap() {
  // List of your routes
  const pages = [
    { url: '/', lastModified: new Date() },
    { url: '/contact', lastModified: new Date() },
    { url: '/faq', lastModified: new Date() },
    { url: '/legal-notice', lastModified: new Date() },
    { url: '/privacy-policy', lastModified: new Date() },
    // Add more pages as needed
  ];

  const sitemap = 
        pages.map(({ url, lastModified }) => (
            {
              url: process.env.WEBSITE_URL + url,
              lastModified: lastModified.toISOString()
            }

        ))


  return [
    ...sitemap
  ]
}

