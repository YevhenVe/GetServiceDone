import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const base = 'https://getservicedone.com'
    return [
        { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
        { url: `${base}/electrical_work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${base}/appliance_work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${base}/handyman_work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${base}/plumbing_work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${base}/schedule`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
        { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ]
}