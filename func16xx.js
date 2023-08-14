`16. Berilgan satrni faqatgina harflardan iborat ekanligiga tekshiring (split, every)`

const input = "Hello";
const isOnlyLetters = input.split("").every(el => el.match(/[a-zA-Z]/));

console.log(isOnlyLetters);