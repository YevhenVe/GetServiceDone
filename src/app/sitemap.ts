import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const base = 'https://getservicedone.com'
    return [
        { url: base, lastModified: new Date() },
        { url: `${base}/appliance_work`, lastModified: new Date() },
        { url: `${base}/electrical_work`, lastModified: new Date() },
        { url: `${base}/handyman_work`, lastModified: new Date() },
        { url: `${base}/plumbing_work`, lastModified: new Date() },
    ]
}