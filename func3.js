`3.  Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)


Input: [1, 2, 3, 4, 5]
Output: [1, 4, 9, 16, 25]`;

let arr = [1, 2, 3, 4, 5];

let newArr = arr.map((el) => el ** 2);

console.log(newArr);