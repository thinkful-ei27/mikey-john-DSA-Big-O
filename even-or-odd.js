'use strict';

function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}

// Big O notation: O(1)
// Why: The function only ever needs 1 operation, no matter the size of the value