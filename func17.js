`17. Massiv truthy va falsy elementlardan tuzilgan. O’sha massivdagi truthy va falsy elementlarni alohida massivlarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)
Input: [false, 1, 10, "", null, "abdulaziz", 1.13, 0]
Output: {truthy: [1, 10, "abdulaziz", 1.13], falsy: [false, "", null, 0]}
`;
let Arr = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];

function getTruthyFalsy(array) {
  let truthyArray = [];
  let falsyArray = [];
  
  array.forEach(function(element) {
    if (element) {
      truthyArray.push(element);
    } else {
      falsyArray.push(element);
    }
  });
  
  return {
    truthy: truthyArray,
    falsy: falsyArray
  };
}

let result = getTruthyFalsy(Arr);
console.log(result);
