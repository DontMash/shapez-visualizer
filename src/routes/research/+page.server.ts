import type { PageServerLoad } from './$types';

export const load = (({ url }) => {
    return {
        seo: {
            title: 'Research Overview',
            description: 'View a visual representation of the research tree.',
            keywords: ['Shapez', 'Shapez 2', 'Research', 'Overview', '3D', 'Visualization', 'Shape'],
            og: {
                title: 'Research Overview - View a visual representation of the research tree',
                type: 'website',
                image: `${url.origin}/favicon.png`,
                url: url.href,
            },
        },
    };
}) satisfies PageServerLoad;
