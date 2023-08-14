`23. grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90 o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan holatlarda 2 bahoni o'zlashtiring.(map)`

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


 let namePupils = pupils.map((el) => {
   if ((el.grade = el.protcent >= 90 ? 5 : 0)) {
      return el;
   } else if ((el.grade = el.protcent >= 80 ? 4 : 0)) {
      return el;
   } else if ((el.grade = el.protcent >= 70 ? 3 : 0)) {
      return el;
   }else if ((el.grade = el.protcent <= 70 ? 2 : 0)) {
      return el;
   }
   
});

console.log(namePupils);