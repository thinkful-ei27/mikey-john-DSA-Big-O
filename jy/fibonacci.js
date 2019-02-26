'use strict';

function generateFib(num) {
  let result = [];
  let ticks=0;
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
    ticks++;
  }
  // once the for loop finishes
  // we return `result`.
  console.log('ticks is ', ticks);
  return result;
}

console.log(generateFib(4));
console.log(generateFib(5));
console.log(generateFib(6));

// Big O notation: O(n);
// Why: The size of the number determines the iterations of the function