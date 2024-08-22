// Tablica students
const students = [
  { studentId: "1", name: "Jan Kowalski", age: 20 },
  { studentId: "2", name: "Arkadiusz Nowak", age: 22 },
  { studentId: "3", name: "Anna Pliszka", age: 19 },
];

// Funkcja setStudentName
function setStudentName(studentId, newName) {
  return students.map((student) =>
    student.studentId === studentId ? { ...student, name: newName } : student
  );
}

// Funkcja addStudent
function addStudent(newStudent) {
  students.push(newStudent);
  return students;
}

// Przykładowy input
console.log(setStudentName("2", "Krzysztof Menel"));
console.log(addStudent({ studentId: "4", name: "Michał Cebula", age: 23 }));
