import { MetadataRoute } from 'next'

const baseUrl = 'https://getservicedone.com'
const lastmod = new Date().toISOString()

const routes = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/electrical_work', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/appliance_work', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/handyman_work', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/plumbing_work', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/schedule', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = []

    // root URL (redirect to /en)
    entries.push({
        url: baseUrl,
        lastModified: lastmod,
        changeFrequency: 'weekly',
        priority: 1,
        alternates: {
            languages: {
                'x-default': baseUrl,
                en: `${baseUrl}/en`,
                es: `${baseUrl}/es`,
            },
        },
    })

    // all pages for /en and /es
    for (const route of routes) {
        entries.push({
            url: `${baseUrl}/en${route.path}`,
            lastModified: lastmod,
            changeFrequency: route.changeFrequency,
            priority: route.priority,
            alternates: {
                languages: {
                    'x-default': `${baseUrl}/en${route.path}`,
                    en: `${baseUrl}/en${route.path}`,
                    es: `${baseUrl}/es${route.path}`,
                },
            },
        })

        entries.push({
            url: `${baseUrl}/es${route.path}`,
            lastModified: lastmod,
            changeFrequency: route.changeFrequency,
            priority: route.priority,
            alternates: {
                languages: {
                    'x-default': `${baseUrl}/en${route.path}`,
                    en: `${baseUrl}/en${route.path}`,
                    es: `${baseUrl}/es${route.path}`,
                },
            },
        })
    }

    return entries
}