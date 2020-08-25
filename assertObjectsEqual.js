const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
    const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`);
  }
};

