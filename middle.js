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


const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if ((array.length) % 2 !== 0) {
    return [array[Math.floor((array.length) / 2)]];
  } else if ((array.length) % 2 === 0) {
    return [array[Math.floor((array.length) / 2)], array[(Math.floor((array.length) / 2)) - 1]];
  }
}


//Test

middle([1]) // => []
middle([1, 2])
middle([1]) // => []
middle([1, 2])
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6])



