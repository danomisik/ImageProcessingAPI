'use strict';
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const arrays_1 = __importDefault(require('../utilities/arrays'));
describe('Array test suite', function () {
  it('expect concat array [1,2] and [2,3] to equal [1,2,2,3]', function () {
    expect(arrays_1.default.concatArr([1, 2], [2, 3])).toEqual([1, 2, 2, 3]);
  });
});
