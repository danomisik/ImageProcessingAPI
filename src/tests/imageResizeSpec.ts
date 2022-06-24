import imageResize from '../utils/imageResize';

describe('Image transform function should resolve or reject', () => {
  it('Expect transform to not throw error', async () => {
    const result = await imageResize(String('fjord'), 200, 200);
    expect(result).toEqual(true);
  });
  it('Expect transform to throw error', async () => {
    const result = await imageResize(String('fjords'), 200, 200);
    expect(result).toEqual(false);
  });
});
