'use strict';

function countSheep(num) {
  //stopping condition of base case
  if (num === 0) {
    console.log('All sheep jumped over the fence');
  }
  //this is the recursive case
  //this will be executed until it reaches base case
  else {
    console.log(`${num}: Another sheep jump over the fence`);
    countSheep(num - 1);
  }
}

/* 
O(n)- linear;
function counts down to zero
ticks of problem directly relate to input num size
*/

function double_all(arr) {
  if (!arr.length) {
    return [];
  }
  return [arr[0] * 2, ...double_all(arr.slice(1))];
}

/**
 O(n) - linear
 this problem recursively reduces the array by one index until complete
 */

function reverseString(str) {
  if (str.length < 2) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}


/**
O(n)- linear, recursive reduce string til gone
 */

function triangle(n) {
  if (n < 2)
    return n;
  return n + triangle(n - 1);
}

/* linear - O(n)
*/
function split(str, sep) {
  var idx = str.indexOf(sep);
  if (idx == -1)
    return [str];
  //you don't have to return an array, you can return a string as an array of 
  //character 
  //return str;
  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
  //all these are valid syntax
  //return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
  //return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}

/*linear - O(n)

*/


function convertToBinary(num) {
  if (num > 0) {
    let binary = Math.floor(num % 2); //save the reminder in binary
    //divide the number by 2 and send that to the function again
    //carry the reminder to the next recursion call
    return (convertToBinary(Math.floor(num / 2)) + binary);
  } else {
    return ''; //base case - at some point the divisions will lead to 0
  }
}

/**
 * 
 O(log(n)) - input is divided by 2 until there is no remainder
 / until the desired value is achieved
 ideal cases when n = 2^x where x is any whole number value
 */

function factorial(n) {
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

/* 
O(n) -linear subtract by 1 until n = 0
*/


function fibonacci(n) {
  // Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/* O(n^2) polynomial? the double call i do not understand */


function anagrams(prefix, str) {
  if (str.length <= 1) {
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for (let i = 0; i < str.length; i++) {
      let currentLetter = str.substring(i, i + 1);
      let previousLetters = str.substring(0, i);
      let afterLetters = str.substring(i + 1);
      anagrams(prefix + currentLetter, previousLetters + afterLetters);
    }
  }
}
function printAnagram(word) {
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

  /** O(n!)- factorial
   * 
   * lots of complexity very quickly
   */

  const animalHierarchy = [
    { id: 'Animals', parent: null },
    { id: 'Mammals', parent: 'Animals' },
    { id: 'Dogs', parent: 'Mammals' },
    { id: 'Cats', parent: 'Mammals' },
    { id: 'Golden Retriever', parent: 'Dogs' },
    { id: 'Husky', parent: 'Dogs' },
    { id: 'Bengal', parent: 'Cats' }
  ]

  // ==============================
  function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
      .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;
  }



  /* O(2^n) exponential 
    the amount of nesting the heirarchy has also probably plays a roll?
  */

  let organization = {
    "Zuckerberg": {
      "Schroepfer": {
        "Bosworth": {
          "Steve": {},
          "Kyle": {},
          "Andra": {}
        },
        "Zhao": {
          "Richie": {},
          "Sofia": {},
          "Jen": {}
        },
        "Badros": {
          "John": {},
          "Mike": {},
          "Pat": {}
        },
        "Parikh": {
          "Zach": {},
          "Ryan": {},
          "Tes": {}
        }
      },
      "Schrage": {
        "VanDyck": {
          "Sabrina": {},
          "Michelle": {},
          "Josh": {}
        },
        "Swain": {
          "Blanch": {},
          "Tom": {},
          "Joe": {}
        },
        "Frankovsky": {
          "Jasee": {},
          "Brian": {},
          "Margaret": {}
        }
      },
      "Sandberg": {
        "Goler": {
          "Eddie": {},
          "Julie": {},
          "Annie": {}
        },
        "Hernandez": {
          "Rowi": {},
          "Inga": {},
          "Morgan": {}
        },
        "Moissinac": {
          "Amy": {},
          "Chuck": {},
          "Vinni": {}
        },
        "Kelley": {
          "Eric": {},
          "Ana": {},
          "Wes": {}
        }
      }
    }
  };

  function traverseA(data, depth = 0) {
    let indent = " ".repeat(depth * 4);
    Object.keys(data).forEach(key => {
      console.log(indent + key);
      traverseA(data[key], depth + 1)
    });
  }

  function traverseB(node, indent = 0) {
    for (var key in node) {
      console.log(" ".repeat(indent), key);
      traverseB(node[key], indent + 4);
    }
  }

/* polynomial O(n^2)- for each level of the heiarchy (loop A), loop and intent each item( loop B)
*/