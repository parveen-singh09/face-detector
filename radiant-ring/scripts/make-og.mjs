/**
 * Generates public/og.png — the 1200×630 social-share card.
 * Brand: Vercel-inspired (near-white canvas, ink text, mesh-gradient glow).
 * Re-run with: node scripts/make-og.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "..", "public", "og.png");

const W = 1200;
const H = 630;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g1" cx="78%" cy="18%" r="70%">
      <stop offset="0%" stop-color="#7928ca" stop-opacity="0.55"/>
      <stop offset="45%" stop-color="#ff0080" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="92%" cy="62%" r="60%">
      <stop offset="0%" stop-color="#007cf0" stop-opacity="0.45"/>
      <stop offset="50%" stop-color="#00dfd8" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ink" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#171717"/>
      <stop offset="100%" stop-color="#3a3a3a"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#fafafa"/>
  <rect width="${W}" height="${H}" fill="url(#g1)"/>
  <rect width="${W}" height="${H}" fill="url(#g2)"/>

  <!-- mono eyebrow -->
  <text x="80" y="150" font-family="JetBrains Mono, Consolas, monospace" font-size="26" letter-spacing="2" fill="#4d4d4d">AIFACESHAPEANALYZER.COM</text>

  <!-- headline -->
  <text x="78" y="290" font-family="Inter, Arial, sans-serif" font-size="92" font-weight="700" letter-spacing="-3" fill="url(#ink)">AI Face Shape</text>
  <text x="78" y="392" font-family="Inter, Arial, sans-serif" font-size="92" font-weight="700" letter-spacing="-3" fill="url(#ink)">Analyzer</text>

  <!-- sub -->
  <text x="80" y="470" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="400" fill="#4d4d4d">Find your face shape free — a full breakdown across</text>
  <text x="80" y="514" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="400" fill="#4d4d4d">all 6 shapes, with a live 478-point face mesh.</text>

  <!-- trust pills -->
  <g font-family="Inter, Arial, sans-serif" font-size="24" fill="#171717">
    <rect x="80" y="556" width="180" height="46" rx="23" fill="#ffffff" stroke="#ebebeb"/>
    <text x="105" y="586">✓ Free</text>
    <rect x="276" y="556" width="232" height="46" rx="23" fill="#ffffff" stroke="#ebebeb"/>
    <text x="301" y="586">✓ No sign-up</text>
    <rect x="524" y="556" width="222" height="46" rx="23" fill="#ffffff" stroke="#ebebeb"/>
    <text x="549" y="586">✓ 6 shapes</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
