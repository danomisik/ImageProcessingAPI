// Remove the 3rd item from an array
const cut3 = (arr: (string | number)[]): (string | number)[] => {
  arr.splice(2, 1);
  return arr;
};

// Concatenate two arrays

const concatArr = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  return [...arr1, ...arr2];
};

export = {
  concatArr,
  cut3
};
