// compute-aspect-ratios.cjs
// This script reads all poster image files in src/assets/css/posters/
// and generates a JSON file mapping each filename to its width, height, and aspect ratio.

const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size').default || require('image-size');

const postersDir = path.join(__dirname, '..', 'src', 'assets', 'css', 'posters');
const outputPath = path.join(__dirname, '..', 'src', 'constants', 'posterAspectRatios.json');

function isImageFile(file) {
  const ext = path.extname(file).toLowerCase();
  // Exclude SVG files as image-size does not support them reliably
  return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
}

const files = fs.readdirSync(postersDir).filter(isImageFile);

const ratios = {};
files.forEach((file) => {
  const filePath = path.join(postersDir, file);
  try {
    const data = fs.readFileSync(filePath);
    const dimensions = sizeOf(data);
    const ratio = dimensions.width / dimensions.height;
    ratios[file] = {
      width: dimensions.width,
      height: dimensions.height,
      ratio: Number(ratio.toFixed(4)), // limit to 4 decimal places
    };
  } catch (e) {
    console.warn(`Failed to process ${file}: ${e.message}`);
  }});

fs.writeFileSync(outputPath, JSON.stringify(ratios, null, 2));
console.log('Aspect ratios written to', outputPath);
