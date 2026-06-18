/**
 * fetch-shape-faces.mjs — one-off build helper.
 *
 * Pulls one portrait face photo per face shape from the Pexels API and saves
 * them to `public/shapes/{id}.jpg`, plus a `credits.json` with photographer
 * attribution (Pexels requires crediting the photographer + linking Pexels).
 *
 * The page then serves these LOCAL images — no third-party request on page load,
 * and the API key never ships to the browser. Re-run whenever you want to refresh
 * the set:
 *
 *   PEXELS_API_KEY=xxxx node scripts/fetch-shape-faces.mjs
 *
 * The key is read from the environment and is never written to disk.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const API_KEY = process.env.PEXELS_API_KEY;
if (!API_KEY) {
  console.error("Missing PEXELS_API_KEY env var. Aborting.");
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "public", "shapes");

// One query per shape, deliberately mixed male/female (3 + 3). Pexels search
// won't return geometrically shape-matched faces, so these are representative
// portraits, not literal examples of each shape.
const SHAPE_QUERIES = [
  { id: "oval", query: "woman face portrait" },
  { id: "round", query: "man face portrait" },
  { id: "square", query: "man face headshot" },
  { id: "rectangle", query: "woman face headshot" },
  { id: "heart", query: "woman portrait face" },
  { id: "diamond", query: "man portrait face" },
];

async function searchPhoto(query, pick) {
  const url = new URL("https://api.pexels.com/v1/search");
  url.searchParams.set("query", query);
  url.searchParams.set("orientation", "portrait");
  url.searchParams.set("per_page", "15");
  const res = await fetch(url, { headers: { Authorization: API_KEY } });
  if (!res.ok) {
    throw new Error(`Pexels search failed (${res.status}) for "${query}"`);
  }
  const data = await res.json();
  const photos = data.photos ?? [];
  if (photos.length === 0) throw new Error(`No photos for "${query}"`);
  return photos[pick % photos.length];
}

async function download(srcUrl) {
  const res = await fetch(srcUrl);
  if (!res.ok) throw new Error(`Download failed (${res.status}): ${srcUrl}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const credits = {};

  for (let i = 0; i < SHAPE_QUERIES.length; i++) {
    const { id, query } = SHAPE_QUERIES[i];
    // Vary the pick index so the six images don't collide.
    const photo = await searchPhoto(query, i * 2 + 1);
    const buf = await download(photo.src.portrait);
    const file = join(OUT_DIR, `${id}.jpg`);
    await writeFile(file, buf);
    credits[id] = {
      photographer: photo.photographer,
      photographer_url: photo.photographer_url,
      pexels_url: photo.url,
    };
    console.log(`✓ ${id} ← ${photo.photographer} (${photo.url})`);
  }

  await writeFile(
    join(OUT_DIR, "credits.json"),
    JSON.stringify(credits, null, 2) + "\n",
  );
  console.log(`\nSaved ${SHAPE_QUERIES.length} images + credits.json to ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
