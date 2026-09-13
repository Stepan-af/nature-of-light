#!/usr/bin/env node
/**
 * Regenerates public/og-default.jpg (1200×630) and the favicons/app icons from
 * design/assets/photos/home-portfolio-raw-7.jpg and src/assets/brand/logo-mark.jpg.
 *
 *   node docs/generate-brand-assets.mjs
 *
 * The outputs are committed; this script is only needed when the logo or the
 * OG photo changes. Text in the OG image is rendered by librsvg with system
 * fonts (Georgia / Helvetica Neue on macOS) — check the result visually.
 */
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
const root = new URL('../', import.meta.url).pathname;
// ---- OG image
const W = 1200, H = 630;
const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#10111a" stop-opacity="0.15"/>
      <stop offset="0.45" stop-color="#10111a" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#10111a" stop-opacity="0.88"/>
    </linearGradient>
  </defs>
  <linearGradient id="h" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#10111a" stop-opacity="0.55"/><stop offset="0.6" stop-color="#10111a" stop-opacity="0"/></linearGradient><rect width="100%" height="100%" fill="url(#g)"/><rect width="100%" height="100%" fill="url(#h)"/>
  <text x="64" y="500" font-family="Georgia, 'Times New Roman', serif" font-size="68" fill="#ffffff">Природа Света</text>
  <text x="66" y="560" font-family="'Helvetica Neue', Arial, sans-serif" font-size="30" fill="#ffffff" fill-opacity="0.85">Козырьки · Навесы · Зимние сады</text>
</svg>`;
await sharp(root + 'design/assets/photos/home-portfolio-raw-7.jpg')
  .rotate()
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .composite([{ input: Buffer.from(overlay) }])
  .jpeg({ quality: 82, mozjpeg: true, progressive: true })
  .toFile(root + 'public/og-default.jpg');
// ---- icons: square crop of the building mark (without the wordmark)
const mark = () => sharp(root + 'src/assets/brand/logo-mark.jpg').extract({ left: 118, top: 352, width: 324, height: 324 });
const markBuf = await mark().png().toBuffer();
const icon = (size, pad = 0) =>
  sharp(markBuf).resize(size - pad * 2, size - pad * 2).extend({ top: pad, bottom: pad, left: pad, right: pad, background: '#ffffff' }).flatten({ background: '#ffffff' });
await icon(180, 12).png().toFile(root + 'public/apple-touch-icon.png');
await icon(192, 0).png().toFile(root + 'public/icon-192.png');
await icon(512, 0).png().toFile(root + 'public/icon-512.png');
await icon(512, 64).png().toFile(root + 'public/icon-maskable-512.png');
// favicon.ico with a single 32x32 PNG entry (PNG-in-ICO is supported by all current browsers)
const png32 = await icon(32, 0).png().toBuffer();
const header = Buffer.alloc(6); header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0); entry.writeUInt8(32, 1); entry.writeUInt8(0, 2); entry.writeUInt8(0, 3);
entry.writeUInt16LE(1, 4); entry.writeUInt16LE(32, 6); entry.writeUInt32LE(png32.length, 8); entry.writeUInt32LE(22, 12);
writeFileSync(root + 'public/favicon.ico', Buffer.concat([header, entry, png32]));
console.log('done');
