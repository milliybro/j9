`6.  Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).


Input: [
      {name: 'John', age: 13},
      {name: 'Mark', age: 56},
 {name: 'Rachel', age: 45},
      {name: 'Nate', age: 67},
      {name: 'Jeniffer', age: 65}
  ];
Output: 54
`;
function compare(a, b) {
  return b.age - a.age;
}

let students = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];

students.sort((a, b) => a.age - b.age);
console.log(students);

