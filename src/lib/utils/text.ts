export function stripRubyTags(html:string) {
    if (!html) return '';
    
    // 1. <rt>...</rt> タグとその中身を削除
    const noRubyText = html.replace(/<rt>[\s\S]*?<\/rt>/gi, '');
    
    // 2. 残りのHTMLタグ（<ruby>, <rp> など）を除去してテキストのみ抽出
    return noRubyText.replace(/<[^>]*>/g, '').trim();
}

export function decorateParagraphs(html: string, start: string, end: string) {
    // <p> または <p class="..."> などの開始タグの直後に start を挿入
    // </p> の直前に end を挿入
    return html
      .replace(/(<p[^>]*>)/g, `$1${start}`)
      .replace(/(<\/p>)/g, `${end}$1`);
}