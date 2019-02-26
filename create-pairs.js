'use strict';

function createPairs(arr) {
  let tick = 0;
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      tick++;
      // console.log(arr[i] + ', ' +  arr[j] );
    }
  }
  console.log('tick is ', tick);
}

console.log(createPairs([1, 2, 3]));
console.log(createPairs([1, 2, 3, 4]));
console.log(createPairs([1, 2, 3, 4, 5]));

// Big O notation: O(logn);
// Why: 