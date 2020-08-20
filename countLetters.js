const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let results = {};
for ( let i = 0; i < sentence.length; i++) {
//use sentence[i]
if (results[sentence[i]]) {
  results[sentence[i]] += 1;
} else {
  results[sentence[i]] = 1;
}
}
return results;
};

//Test
console.log(countLetters("lighthouse in the house"));


