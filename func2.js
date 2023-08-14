`2.  Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating. (reduce)


Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
Output: {
    dog: 2,
    chicken: 3,
    cat: 1,
    rabbit: 1
 }`;

const animals = [
  "dog",
  "chicken",
  "cat",
  "dog",
  "chicken",
  "chicken",
  "rabbit",
];

const animalName = animals.reduce((acc, el) => {
   if (acc[el]) {
     acc[el] += 1;
   } else {
     acc[el] = 1;
   }
   
   return acc;
 }, {});

 console.log(animalName);