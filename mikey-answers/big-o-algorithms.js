'use strict';


function isEven(value) {
  if (value % 2 == 0) {
    return true;
  }
  else
    return false;
}

/* O(1) constant
no matter the value passed as an argument, 
only one calculation is performed.
*/

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

/*
O(n^2) quadratic
  The nested loops is cause for this desigination
  the algorithm iterates over array one , and for each of those elements, 
  compares that element to every item in array two)
 */

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

/*
O(n) linear
  The abouve problem iterates over the array one time,
  and performs a single operation to it.
  the number of ticks is directly related to the number of elements in the array
*/


function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

/*
O(n) linear
This is algorithm is similar to the above, computing a single operation on 
each item in the array
you will begin to get answers as early as the first element, however, the loop
will still continue to completion, so number of ticks is still dictated 
by the length of the array
*/

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}
const ans = createPairs([1, 2, 3, 4, 5]);
console.log(ans);


/*
O(n^2) quadratic
  this problem is a nested loop, so it most closely resembles an quadratic equation
  however, since the inner loop only iterates over the remaining elements in the array after 
  the current position of the parent loop, the algorithm 'speeds up' as it aproaches completion
  (like finishing a roll of tape)
*/


function generateFib(num) {
  let result = [];
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
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

/*
O(n) linear
  a single loop that adds two numbers together
*/

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

/*
O(log(n))
  because the array is sorted by increasing numerical value, 
  this efficient search can discard half of the data with each iteration
  of the loop. thus, increasing the size of the data linearly will have little effect on the
  runtime, and the algorthim will be resillient to even exponential increses in the amount of data

  best case secenario: desired item is exactly in the middle of the data on the first loop
  worst case senario: data will have to be paired down to one single item.
*/


function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/*
O(1) constant 
  This algorithm randomly selects a number to use as the index, and returns that 
  single value.

*/

function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

/*
O(n) -linear
  checking if a single number is prime, the number is divided by 
  every number that is not 2 and smaller than itself. 
  best case scenario: is less than two or a decimal
  average case: the number is divisable by a small number, such as a digit
  worst case. number is prime, 
  must check ever number smaller than it for modality
*/