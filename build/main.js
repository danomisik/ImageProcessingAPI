'use strict';
//import arrays from './utilities/arrays.js';
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const myFunc = function (num) {
  return num * num;
};
exports.default = myFunc;
//const numArr = [3, 4, 5, 6];
//const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
//const mixArr = arrays.concatArr(numArr, wordArr);
//console.log(arrays.cut3(mixArr));
const express_1 = __importDefault(require('express'));
const app = (0, express_1.default)();
const port = 3000;
app.get('/api', function (req, res) {
  res.send('Hello, world!');
});
app.listen(port, function () {
  console.log('server started at localhost:'.concat(port));
});
