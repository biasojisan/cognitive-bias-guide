import { db } from '$lib/server/db';
import type { RequestHandler } from '@sveltejs/kit';
import type { EntryGenerator } from '../bias/[id]/$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
    // 1. DBから公開されている全バイアスのIDのみを取得
    const biases = await db.query.biases.findMany({
        columns: {
            id: true
        }
    });

    const domain = 'https://bias-dictionary.vercel.app';

    // 2. 固定ページと動的ページを組み合わせてXMLを作成
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://sitemaps.org">
  <url><loc>${domain}/</loc><priority>1.0</priority></url>
  <url><loc>${domain}/bias</loc><priority>0.8</priority></url>
  <url><loc>${domain}/about</loc><priority>0.5</priority></url>
  ${biases
    .map((bias) => `
  <url>
    <loc>${domain}/bias/${bias.id}</loc>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`.trim();

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            // 検索エンジンにキャッシュを許可しつつ、古くなりすぎないように設定
            'Cache-Control': 'max-age=0, s-maxage=3600'
        }
    });
};