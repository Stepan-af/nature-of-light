/*
 * Tiny Markdown → HTML renderer for short CMS fields (FAQ answers).
 * Supports paragraphs, bullet/numbered lists, **bold**, *italic*, [links](url)
 * and hard line breaks. All text is HTML-escaped; only safe URL schemes are linked.
 */

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const SAFE_URL = /^(https?:\/\/|mailto:|tel:|\/|#)/i;

const inline = (text: string) =>
  escapeHtml(text)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (match, label: string, url: string) =>
      SAFE_URL.test(url) ? `<a href="${url}">${label}</a>` : match,
    )
    .replace(/\*\*(.+?)\*\*|__(.+?)__/g, (_, a?: string, b?: string) => `<strong>${a ?? b}</strong>`)
    .replace(/(^|[^\w*])\*(?!\s)(.+?)\*(?!\w)/g, '$1<em>$2</em>')
    .replace(/(?: {2,}|\\)\n/g, '<br />')
    .replace(/\n/g, ' ');

const BULLET = /^\s*[-*+]\s+(.*)$/;
const NUMBERED = /^\s*\d+[.)]\s+(.*)$/;

export function renderMarkdown(source: string): string {
  const html: string[] = [];
  let paragraph: string[] = [];
  let list: { tag: 'ul' | 'ol'; items: string[] } | null = null;

  const flushParagraph = () => {
    if (paragraph.length) html.push(`<p>${inline(paragraph.join('\n'))}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (list) html.push(`<${list.tag}>${list.items.map((item) => `<li>${inline(item)}</li>`).join('')}</${list.tag}>`);
    list = null;
  };

  for (const line of source.replace(/\r\n?/g, '\n').split('\n')) {
    const bullet = BULLET.exec(line);
    const numbered = bullet ? null : NUMBERED.exec(line);
    const match = bullet ?? numbered;

    if (match) {
      const tag = bullet ? 'ul' : 'ol';
      flushParagraph();
      if (list && list.tag !== tag) flushList();
      list ??= { tag, items: [] };
      list.items.push(match[1]);
    } else if (!line.trim()) {
      flushParagraph();
      flushList();
    } else if (list && /^\s+/.test(line)) {
      // Indented continuation of the previous list item.
      list.items[list.items.length - 1] += `\n${line.trim()}`;
    } else {
      flushList();
      paragraph.push(line.replace(/^\s+/, ''));
    }
  }

  flushParagraph();
  flushList();
  return html.join('');
}
