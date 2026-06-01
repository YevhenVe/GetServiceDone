import { MetadataRoute } from 'next'

const host = 'https://getservicedone.com';
const locales = ['en', 'es'];

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        { path: '', priority: 1.0, freq: 'weekly' as const },
        { path: '/electrical_work', priority: 0.8, freq: 'monthly' as const },
        { path: '/appliance_work', priority: 0.8, freq: 'monthly' as const },
        { path: '/handyman_work', priority: 0.8, freq: 'monthly' as const },
        { path: '/plumbing_work', priority: 0.8, freq: 'monthly' as const },
        { path: '/schedule', priority: 0.7, freq: 'monthly' as const },
        { path: '/privacy', priority: 0.3, freq: 'yearly' as const },
        { path: '/terms', priority: 0.3, freq: 'yearly' as const },
    ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    routes.forEach(({ path, priority, freq }) => {
        locales.forEach((locale) => {
            sitemapEntries.push({
                url: `${host}/${locale}${path}`,
                lastModified: new Date(),
                changeFrequency: freq,
                priority: priority,
            });
        });
    });

    return sitemapEntries;
}