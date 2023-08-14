`4.  Massivdagi musbat sonlar yig’indisini hisoblang. (filter va reduce)


Input: [ 1, -4, 12, 0, -3, 29, -150]
Output: 42`;
const input = [1, -4, 12, 0, -3, 29, -150];
const arr = input.filter((num) => num > 0);

const sum = arr.reduce((acc, el) => acc + el, 0);

console.log(sum);
