`22. Quyidagi pupils massividagi barcha o'quvchilarni protcentlarining o'rtacha qiymatini toping. (reduce)`

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
let sumAge = pupils.reduce((acc, el) => (acc + el.protcent), 0);

let res= parseInt(sumAge/pupils.length)
console.log(res);