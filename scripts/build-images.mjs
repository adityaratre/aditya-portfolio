// Builds optimized portrait assets from the canonical Aditya portrait in the project root.
// The same portrait is used across the responsive site assets so the personal brand stays consistent.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });
const source = sharp('pic1.jpeg').removeAlpha();
const meta = await source.metadata();
if (!meta.width || !meta.height) throw new Error('Could not read pic1.jpeg');
for (const w of [1100, 720, 420]) {
  await sharp('pic1.jpeg').removeAlpha().resize({ width: w }).webp({ quality: 90 }).toFile(`${OUT}/portrait-${w}.webp`);
}
console.log('Aditya portrait assets built');
