import sharp from "sharp";

const imageResize = async (
  filename: string,
  weight: number,
  height: number
): Promise<boolean> => {
  try {
    await sharp(`src/assets/full/${filename}.jpg`)
      .resize(weight, height)
      .toFile(`src/assets/thumb/${filename}.jpg`);
    return true;
  } catch (error) {
    console.log(`Error in sharp transformation: ${error}`);
    return false;
  }
};

export default imageResize;