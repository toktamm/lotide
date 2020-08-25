// const assertEqual = require('../assertEqual.js');

const assert = require('chai').assert;
const tail = require('../tail.js');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns '[]' for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });
});


/*
// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");
*/