//import arrays from './utilities/arrays.js';

const myFunc = (num: number): number => {
  return num * num;
};

export default myFunc;

//const numArr = [3, 4, 5, 6];
//const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
//const mixArr = arrays.concatArr(numArr, wordArr);

//console.log(arrays.cut3(mixArr));

import express from 'express';
import routes from './routes/images';


const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
