`20. Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat massiv qaytaring. (Object.entries, map, join)


Input: {a: 2, b: 5, c: 7}
Output: ['a2', 'b5', 'c7']`

const input = {a: 2, b: 5, c: 7};
const output = Object.entries(input).map(([a, b]) => a + b);

console.log(output); 