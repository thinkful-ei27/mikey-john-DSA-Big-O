'use strict';

function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// Big O notation: O(n)
// Why: Worst case scenario will always be the length of the array