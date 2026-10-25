import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const distAssets = path.resolve(distDir, 'assets');
const indexHtmlPath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(distAssets) || !fs.existsSync(indexHtmlPath)) {
  console.error('[Budget Check] dist/ output not found. Run `npm run build` first.');
  process.exit(1);
}

const files = fs.readdirSync(distAssets).filter((f) => f.endsWith('.js') || f.endsWith('.css'));
const report = [];

for (const file of files) {
  const fullPath = path.join(distAssets, file);
  const buf = fs.readFileSync(fullPath);
  const gz = zlib.gzipSync(buf);
  report.push({
    file,
    rawKB: +(buf.length / 1024).toFixed(2),
    gzKB: +(gz.length / 1024).toFixed(2),
  });
}

report.sort((a, b) => b.gzKB - a.gzKB);
console.table(report.slice(0, 20));

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
const entryMatch = indexHtml.match(/src="\/assets\/(index-[^"]+\.js)"/);
const entryFileName = entryMatch ? entryMatch[1] : null;

const entryChunk = report.find((r) => r.file === entryFileName) || report.find((r) => /^index-.*\.js$/.test(r.file));
const threeChunk = report.find((r) => /^three-.*\.js$/.test(r.file));
const hasMediaInInitialHtml = /hls|dash\.all|media-/.test(indexHtml);

let failed = false;

if (entryChunk && entryChunk.gzKB > 150) {
  console.error(`[FAIL] Entry index chunk ${entryChunk.file} (${entryChunk.gzKB} KB gz) exceeds 150 KB budget.`);
  failed = true;
} else if (entryChunk) {
  console.log(`[PASS] Entry index chunk (${entryChunk.file}): ${entryChunk.gzKB} KB gz (budget <= 150 KB gz)`);
}

if (threeChunk && threeChunk.gzKB > 250) {
  console.error(`[FAIL] 3D Three.js chunk (${threeChunk.gzKB} KB gz) exceeds 250 KB budget.`);
  failed = true;
} else if (threeChunk) {
  console.log(`[PASS] 3D Three.js chunk (${threeChunk.file}): ${threeChunk.gzKB} KB gz (budget <= 250 KB gz)`);
}

if (hasMediaInInitialHtml) {
  console.error('[FAIL] Media engine (hls/dash) is present in initial index.html preload graph.');
  failed = true;
} else {
  console.log('[PASS] Media engine (hls/dash) is 100% excluded from initial index.html preload graph.');
}

if (failed) {
  process.exit(1);
}
