'use strict';

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(findRandomElement([1, 2, 3, 4, 5, 6]));

// Big O notation: O(1)
// Why: The size of the array will not increase the amount of operations since the array
// length remains constant from the start. 