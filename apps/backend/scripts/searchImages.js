import fs from 'fs';
import path from 'path';

const repoRoot = path.resolve('../../'); // from apps/backend/scripts
const ignoreDirs = new Set(['node_modules', '.git', '.next', 'dist', 'build', '.cache']);
const imageExts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

let allImages = [];

function scanDir(currentPath) {
  try {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (!ignoreDirs.has(entry.name)) {
          scanDir(path.join(currentPath, entry.name));
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (imageExts.has(ext)) {
          allImages.push(path.join(currentPath, entry.name));
        }
      }
    }
  } catch (err) {
    // Ignore permissions errors on windows
  }
}

console.log(`Scanning repository root: ${repoRoot}`);
const startTime = Date.now();
scanDir(repoRoot);
const endTime = Date.now();

console.log(`\nScan completed in ${endTime - startTime}ms`);
console.log(`Total image files found: ${allImages.length}`);

// Group by directory to provide a helpful summary to the user
const grouped = {};
for (const file of allImages) {
  const dir = path.dirname(file).replace(repoRoot, '');
  if (!grouped[dir]) grouped[dir] = [];
  grouped[dir].push(path.basename(file));
}

for (const [dir, files] of Object.entries(grouped)) {
  console.log(`\n[Directory: ${dir || '/'}] - ${files.length} images`);
  // Only print individual files if it looks like real photos rather than massive icon dumps
  const realPhotos = files.filter(f => f.match(/^(IMG|Picsart)/i));
  if (realPhotos.length > 0) {
    console.log(`  -> Contains ${realPhotos.length} real 'IMG-/Picsart_' photos.`);
  } else if (files.length <= 5) {
    files.forEach(f => console.log(`  - ${f}`));
  } else {
    console.log(`  - Includes: ${files.slice(0, 5).join(', ')} ... and ${files.length - 5} more.`);
  }
}
