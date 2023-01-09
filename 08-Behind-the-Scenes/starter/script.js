'use strict';

console.log(addNum(2, 3));
console.log(undefined(2, 3));
// console.log(undefined(2, 3));

function addNum(a, b) {
  return a + b;
}
const undefined = function (a, b) {
  return a + b;
};
// var undefined = function (a, b) {
//   return a + b;
// };
