`21. Sonning raqamlari yig'indisini hisoblab beradigan digitSum() funksiya yozing. (rekursiv funksiya)`;

let number = 12345;

function digitSum(number) {

  let lastDigit = number % 10;

  let remainingSum = digitSum(Math.floor(number / 10));

  return lastDigit + remainingSum;
}


let sum = digitSum(number);

console.log(sum);
