// Generates the image widths listed in docs/design-system.md (section 11).
// Reads the originals from src-images/ and writes WebP files to public/assets/images/.
// Run from the tools folder: npm run images

import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(toolsDir, "..", "src-images");
const outputDir = path.join(toolsDir, "..", "public", "assets", "images");

// WebP quality, from 0 to 100.
const QUALITY = 75;

const IMAGES = [
  { name: "img-hero", widths: [480, 800, 1200, 1536] },
  { name: "img-services-1", widths: [480, 800, 1200] },
  { name: "img-services-2", widths: [480, 800, 1200] },
];

for (const image of IMAGES) {
  const source = path.join(sourceDir, `${image.name}.webp`);

  for (const width of image.widths) {
    const fileName = `${image.name}-${width}.webp`;

    // withoutEnlargement: never make an image wider than its original.
    const info = await sharp(source)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(path.join(outputDir, fileName));

    const sizeKb = (info.size / 1024).toFixed(1);
    console.log(`${fileName}  ${info.width}x${info.height}  ${sizeKb} KB`);
  }
}
