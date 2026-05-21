// compute-aspect-ratios.js
// This script reads all poster image files in src/assets/posters/
// and generates a JSON file mapping each filename to its width, height, and aspect ratio.

const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

const postersDir = path.join(__dirname, '..', 'src', 'assets', 'css', 'posters');
const outputPath = path.join(__dirname, '..', 'src', 'constants', 'posterAspectRatios.json');

function isImageFile(file) {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'].includes(ext);
}

const files = fs.readdirSync(postersDir).filter(isImageFile);

const ratios = {};
files.forEach((file) => {
  const filePath = path.join(postersDir, file);
  const dimensions = sizeOf(filePath);
  const ratio = dimensions.width / dimensions.height;
  ratios[file] = {
    width: dimensions.width,
    height: dimensions.height,
    ratio: Number(ratio.toFixed(4)), // limit to 4 decimal places
  };
});

fs.writeFileSync(outputPath, JSON.stringify(ratios, null, 2));
console.log('Aspect ratios written to', outputPath);
