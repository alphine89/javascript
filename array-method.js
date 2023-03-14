const students = ["alphine", "andrew", "joice", "albert"];
function addNewStudent(array, name) {
  array.push(name);
}
/*addNewStudent(students, "benjamin"); //added benjamin to students
console.log(students);
addNewStudent(students, "benard"); //added benjamin
console.log(students);*/
students.push("audrine");
students.pop(); //removes last element of the array
console.log(students);

