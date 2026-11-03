function PersonPrototype(fullName) {
  this.name = fullName;
}
PersonPrototype.prototype.showName = function () {
  console.log(`Name: ${this.name}`);
};
function StudentPrototype(name, division) {
  PersonPrototype.call(this, name);
  this.branch = division;
}
StudentPrototype.prototype = Object.create(PersonPrototype.prototype);
StudentPrototype.prototype.constructor = StudentPrototype;
StudentPrototype.prototype.showBranch = function () {
  console.log(`Branch: ${this.branch}`);
};
class Person {
  constructor(name) {
    this.name = name;
  }
  showName() {
    console.log(`Name: ${this.name}`);
  }
}
class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  showBranch() {
    console.log(`Branch: ${this.branch}`);
  }
}
console.log('Prototype version:');
const protoStudent = new StudentPrototype('Dev', 'Computer Science');
protoStudent.showName();
protoStudent.showBranch();
console.log('ES6 class version:');
const classBased = new Student('Dev', 'Computer Science');
classBased.showName();
classBased.showBranch();
