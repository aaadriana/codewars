/*
In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

Good luck!

Hint: watch out for side effects.
*/

function withoutLast(arr) {
  return arr.slice(0, arr.length - 1);
}

withoutLast([1, 2, 3, 4, 5]); // [1, 2, 3, 4]);
withoutLast([6, 7, 8, 9]); // [6, 7, 8];
