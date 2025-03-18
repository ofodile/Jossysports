import client from './contentfulClient';

export const revalidate = 30;

export default async function sitemap() {
  const res = await client.getEntries({
    content_type: 'jossysports',
  });
  const data = res.items;

  const post = data.map((item) => ({
    url: `https://www.jossysports.com.ng/${item.fields.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.5,
  }));

  return [
    {
      url: 'https://www.jossysports.com.ng',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://www.jossysports.com.ng/premier-league',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: 'https://www.jossysports.com.ng/la-liga',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: 'https://www.jossysports.com.ng/serie-a',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: 'https://www.jossysports.com.ng/transfer-news',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: 'https://www.jossysports.com.ng/others',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    ...post,
  ];
}