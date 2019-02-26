'use strict';

function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

console.log(areYouHere([1, 2, 3], [4, 5, 3]));

// Big O notation: O(n^2)
// Why: Worst case scenario would loop entirely through both arrays, thus using quadratic 