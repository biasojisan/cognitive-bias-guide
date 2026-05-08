import { getBigFourSummary } from '$lib/server/db/queries';
import markdownit from 'markdown-it';
import rubyPlugin from 'markdown-it-ruby';

const md = markdownit().use(rubyPlugin);

export async function getRenderedBigFour() {
    const rawBiases = await getBigFourSummary();
    
    return rawBiases.map((item) => ({
        ...item,
        nameJa: md.render(item.nameJa ?? ''),
        summary: md.render(item.summary ?? ''),
        thumbnail: item.thumbnail ?? "",
    }));
}