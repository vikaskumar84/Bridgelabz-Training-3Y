function Person(fullName) {
  this.name = fullName;
}
Person.prototype.showName = function () {
  console.log(`Name: ${this.name}`);
};
function Student(name, division) {
  Person.call(this, name);
  this.branch = division;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.showBranch = function () {
  console.log(`Branch: ${this.branch}`);
};
const learner = new Student('Dev', 'Computer Science');
learner.showName();
learner.showBranch();
console.log(learner instanceof Student);
console.log(learner instanceof Person);
