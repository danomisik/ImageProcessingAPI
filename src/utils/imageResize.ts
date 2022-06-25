import sharp from "sharp";
import { existsSync } from 'node:fs';

const imageResize = async (
  filename: string,
  weight: number,
  height: number
): Promise<boolean> => {
  if (!existsSync(`src/assets/full/${filename}.jpg`)) {
    console.log("File does not exist.");
    return false;
  }
  if (isNaN(weight) || isNaN(height)) {
    console.log("Weight and height isn't number.");
    return false;
  }
  if (!existsSync(`src/assets/thumb/${filename}-${weight}-${height}.jpg`)){
    await sharp(`src/assets/full/${filename}.jpg`)
      .resize(weight, height)
      .toFile(`src/assets/thumb/${filename}-${weight}-${height}.jpg`);
  }
  return true;
};

export default imageResize;