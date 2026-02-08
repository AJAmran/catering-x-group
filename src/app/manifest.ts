import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'X-Group Catering & Convention',
        short_name: 'X-Group',
        description: "Dhaka's premier catering & convention services since 1992.",
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1e3a66',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '48x48',
                type: 'image/x-icon',
            },
            {
                src: '/catering-logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
