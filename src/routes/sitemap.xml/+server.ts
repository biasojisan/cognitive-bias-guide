import { db } from '$lib/server/db';
import type { RequestHandler } from '@sveltejs/kit';
import { DOMAIN } from '$lib/constants/common-metadata';

export const prerender = true;

export const GET: RequestHandler = async () => {
    // DBから公開されている全バイアスのIDのみを取得
    const biases = await db.query.biases.findMany({
        columns: {
            id: true
        }
    });

    // 固定ページと動的ページを組み合わせてXMLを作成
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://sitemaps.org">
  <url>
    <loc>${DOMAIN}/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${DOMAIN}/bias</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${DOMAIN}/about</loc>
    <priority>0.5</priority>
  </url>${biases
    .map((bias) => `
  <url>
    <loc>${DOMAIN}/bias/${bias.id}</loc>
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