/*

Given an array , implement a function which reduces nesting of the array

const arr = [1, [2], [3, [4]]];

flatten(arr) ->  [1, 2, 3, 4]

Try to implement both recursive and iterative version

*/

function flattenIterativeSimple(arr) {
  const result = [];

  //   arr.forEach((item) => {
  //     if (Array.isArray(item)) {
  //       result.push(...item);
  //     } else {
  //       result.push(item);
  //     }
  //   });

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }

  return result;
}

const arr = [1, [2], [3, [4]]];
const flattenedArray = flattenIterativeSimple(arr);
console.log(flattenedArray);
