const eqArrays = (a1, a2) => {
  if (a1.length !== a2.length) {
    console.log("Arrays being compared must be of same length.");
    return;
  }
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = (a1, a2) => {
  eqArrays(a1, a2) ? console.log(`✅✅✅ ${a1} === ${a2}`) : console.log(`🔴🔴🔴 ${a1} !== ${a2}`);
};


const letterPositions = function (sentence) {
  let results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        //place it in the corresponding value of results
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};





/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (a1, a2) => {
  
  //handle arraylengths
  if (a1.length !== a2.length) {
    console.log("Arrays being compared must be of same length.");
    return;
  }

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }

  return true;
};
*/

//Test
console.log(letterPositions("hello"));

/*
assertArraysEqual(letterPositions("hello").e, [1]);
*/