import markdownit from 'markdown-it';
import rubyPlugin from 'markdown-it-ruby';
import type { PageServerLoad } from './$types';
import { getRenderedBigFour } from '$lib/server/services/bias';

export const load = (async ({ params }) => {
    const bigFour  = await getRenderedBigFour();
    
    return {
        bigFour
    };
}) satisfies PageServerLoad;
