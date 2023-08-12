/* Implement your own Array.prototype.filter().
    Usage -> [1, 2, 3, 4, 5, 6, 7].myFilter(num => num % 2 === 0);
    Output -> [2,4,6]
*/

Array.prototype.myFilter = function (callback) {
  const filteredArray = [];

  this.forEach((element) => {
    if (callback(element)) {
      filteredArray.push(element);
    }
  });

  return filteredArray;
};

const originalArray = [1, 2, 3, 4, 5, 6, 7];
const filteredArray = originalArray.myFilter((num) => num % 2 === 0);
console.log(filteredArray);
