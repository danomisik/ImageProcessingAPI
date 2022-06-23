'use strict';
const __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
// Remove the 3rd item from an array
const cut3 = function (arr) {
  arr.splice(2, 1);
  return arr;
};
// Concatenate two arrays
const concatArr = function (arr1, arr2) {
  return __spreadArray(__spreadArray([], arr1, true), arr2, true);
};
module.exports = {
  concatArr: concatArr,
  cut3: cut3
};
