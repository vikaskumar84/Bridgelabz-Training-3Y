function Person(fullName) {
  this.name = fullName;
}
Person.prototype.introduce = function () {
  console.log(`Person: ${this.name}`);
};
function Faculty(name, dept) {
  Person.call(this, name);
  this.department = dept;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function () {
  console.log(`Department: ${this.department}`);
};
function Professor(name, department, course) {
  Faculty.call(this, name, department);
  this.subject = course;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showSubject = function () {
  console.log(`Subject: ${this.subject}`);
};
const lecturer = new Professor('Dr. Sharma', 'Computer Science', 'JavaScript');
lecturer.introduce();
lecturer.showDepartment();
lecturer.showSubject();
console.log(lecturer instanceof Professor);
console.log(lecturer instanceof Faculty);
console.log(lecturer instanceof Person);
