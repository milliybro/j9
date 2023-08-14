`7.  N ta elementdan iborat massiv berilgan.
Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)`

let numbers = [10, 5, 7, 105, 30];

let oddNumbers = numbers.filter((el) => el % 2);
let evenNumbers = numbers.filter((el) => !(el % 2));


console.log(oddNumbers,' toq sonlar');
console.log(evenNumbers, ' juft sonlar');