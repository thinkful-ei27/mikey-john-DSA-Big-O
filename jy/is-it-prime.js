'use strict';

function isPrime(n) {
  let ticks = 0;
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    ticks++;
    if (n % i == 0) return false;
  }
  console.log(ticks);
  return true;
}

console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(11));

// Big O notation: O(n);
// Why: Operations increase by exactly the amount of the number 
// vs. the previous prime number if it is a prime;