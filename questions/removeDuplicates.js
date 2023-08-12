/*
    Create a function which takes a string and return string without duplicates

    removeDuplicates('aabbcc') -> abc
*/

function removeDuplicates(inputString) {
  const set = new Set(inputString);
  const result = Array.from(set).join("");
  return result;
}

console.log(removeDuplicates("aabbcc"));
