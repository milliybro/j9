`24. isPassed propertyga protcent 70 dan o'tsa true, aks holda false qiymat o'zlashtirilsin. (map)`

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
   el.isPassed = el.protcent >= 70;
   return el;
 });
 
 console.log(namePupils);