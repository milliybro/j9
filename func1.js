`1.  Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNames(baho) funksiya tuzing. (map, filter)


5 baho - (85 - 100)
4 baho - (70 - 85)
3 baho – (60 - 70)




Output


const students = [
   { name: "Quincy", percent: 96, grade: 5 },
   { name: "Jason", percent: 84, grade: 4 },
   { name: "Alexis", percent: 100, grade: 5 },
   { name: "Sam", percent: 65, grade: 3 },
   { name: "Katie", percent: 90, grade: 5 },
   { name: "Anna", percent: 75, grade: 4 },
];


Input: getNamesWithGrade(5)
Output: ['Quincy', 'Alexis', 'Katie']
`;
const students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
];


let nameStudents = students.map((el) => {
   if ((el.grade = el.percent >= 85 ? 5 : 0)) {
      return el;
   } else if ((el.grade = el.percent >= 70 ? 4 : 0)) {
      return el;
   } else if ((el.grade = el.percent <= 70 ? 3 : 0)) {
      return el;
   }
});


let newStudents = students.filter((el) => el.grade == 5);

console.log(newStudents);