import fs from 'fs';
import path from 'path';

const repoRoot = path.resolve('../../apps/frontend/public');
const targetDir = path.join(repoRoot, 'images', 'journey');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const sources = [
  repoRoot,
  path.join(repoRoot, 'screenshots')
];

let movedCount = 0;

for (const source of sources) {
  if (!fs.existsSync(source)) continue;
  
  const files = fs.readdirSync(source);
  
  for (const file of files) {
    if (file.match(/^(IMG|Picsart).*?\.(jpg|jpeg|png|webp)$/i)) {
      const oldPath = path.join(source, file);
      const newPath = path.join(targetDir, file);
      
      try {
        // Overwrite if it already exists in the destination
        if (oldPath !== newPath) {
          fs.renameSync(oldPath, newPath);
          movedCount++;
          console.log(`Moved: ${file}`);
        }
      } catch (e) {
        console.error(`Failed to move ${file}:`, e.message);
      }
    }
  }
}

console.log(`\nSuccessfully relocated ${movedCount} photos to: ${targetDir}`);
