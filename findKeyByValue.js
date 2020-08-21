const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

/* with callback
const findKeyByValue = function(object, value) {
return Object.keys(object).find(key => object[key] === value);
};
*/

const findKeyByValue = (object, value) => {
  let results;
  const allKeys = Object.keys(object);
  for (let key of allKeys) {
    if (object[key] === value) {
      results = key;
    }
  }
  return results;
};



//Test
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);