`19. Satrni bo'sh joy bor yoki yo'qligini tekshiring. (split, some)
Input: "Men Abdulaziz Programmerman"
Output: true`

let input = "Men Abdulaziz Programmerman";
let output = input.split(" ").some(el => " ");

console.log(output);