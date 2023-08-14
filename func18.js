`18. Satr berilgan. 
Satrdagi so'zlar uzunligidan iborat bo'lgan massiv qaytaring. (split, map)
Input: "Men Abdulaziz Programmerman"
Outpu: [3, 9, 12]
`
let input = "Men Abdulaziz Programmerman";
let output = input.split(" ").map(el => el.length);

console.log(output);