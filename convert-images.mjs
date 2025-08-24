import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { promises as fs } from 'fs';
import path from 'path';

const convertToWebp = async (inputDir) => {
  console.log(`Processing directory: ${inputDir}`);
  const files = await imagemin([`${inputDir}/*.{jpg,png}`], {
    plugins: [
      imageminWebp({ quality: 75 })
    ]
  });

  for (const file of files) {
    const sourcePath = file.sourcePath;
    const ext = path.extname(sourcePath);
    const webpPath = sourcePath.replace(new RegExp(`${ext}$`), '.webp');

    try {
      await fs.writeFile(webpPath, file.data);
      console.log(`Converted ${sourcePath} to ${webpPath}`);
    } catch (err) {
      console.error(`Error writing file ${webpPath}:`, err);
    }
  }
};

(async () => {
  await convertToWebp('public/images');
  await convertToWebp('public/icons');
})();
