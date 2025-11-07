// Base class
class Person {
 constructor(name, age) {
 this.name = name;
 this.age = age;
 }
 introduce() {
 return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
 }
}
// Subclass: Student
class Student extends Person {
 constructor(name, age, grade) {
 super(name, age); // call parent constructor
 this.grade = grade;
 }
 study() {
 return `${this.name} is studying in grade ${this.grade}.`;
 }
}
// Subclass: Teacher
class Teacher extends Person {
 constructor(name, age, subject) {
 super(name, age);
 this.subject = subject;
 }
 teach() {
 return `${this.name} is teaching ${this.subject}.`;
 }
}
// Example usage
const student1 = new Student("Alice", 15, "10th");
const teacher1 = new Teacher("Mr. Smith", 40, "Mathematics");
console.log(student1.introduce()); // Hi, I'm Alice and I'm 15 years old.
console.log(student1.study()); // Alice is studying in grade 10th.
console.log(teacher1.introduce()); // Hi, I'm Mr. Smith and I'm 40 years old.
console.log(teacher1.teach()); // Mr. Smith is teaching Mathematics