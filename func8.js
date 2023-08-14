`8.  N ta elementdan iborat massiv berilgan.
Massiv elementlari orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur tuzilsin.
Faqat birinchi uchragani qoldirilsin. (reduce)`

const numbers = [2, 4, 6, 8, 14,10, 2, 6, 8];
const deleteNumbers = numbers.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(deleteNumbers);