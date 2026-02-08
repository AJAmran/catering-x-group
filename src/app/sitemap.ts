import { SITE_DATA } from '@/lib/constants';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://x-group-catering.com';

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/menu',
        '/halls',
        '/gallery',
        '/contact',
        '/book-hall',
        '/terms-conditions',
        '/refund-policy',
        '/privacy-policy',
        '/delivery-policy',
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic hall routes
    const hallRoutes = SITE_DATA.halls.map(hall => ({
        url: `${baseUrl}/halls/${hall.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...hallRoutes];
}
