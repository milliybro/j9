`25. Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham hisoblang. (reduce)`;

const pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];
const result = pupils.reduce((acc, el) => {
   if (el.protcent >= 70) {
     acc.passed++;
   } else {
     acc.failed++;
   }
   return acc;
 }, { passed: 0, failed: 0 });
 
 console.log("Passed:", result.passed);
 console.log("Failed:", result.failed); 
