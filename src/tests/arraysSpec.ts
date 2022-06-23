import myArray from '../utilities/arrays';

describe('Array test suite', () => {
  it('expect concat array [1,2] and [2,3] to equal [1,2,2,3]', () => {
    expect(myArray.concatArr([1, 2], [2, 3])).toEqual([1, 2, 2, 3]);
  });
});
