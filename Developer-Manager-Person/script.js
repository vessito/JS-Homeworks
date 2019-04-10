// Person constructor
let Person = function (name, age) {
  this.name = name;
  this.age = age;
}
// Person methods
Person.prototype.greet = function () {
  console.log(`I am ${this.name} and I am  ${this.age} years old`);
}

// Manager constructor
let Manager = function (name, age, managees) {
  Person.call(this, name, age);
  this.managees = managees;
}

// Manager objects should inherit all methods from Person:
Manager.prototype = Object.create(Person.prototype);
Manager.prototype.greet = function () {
  Person.prototype.greet.call(this);
  let devs = '';
  let devsArr = this.managees;
  for (var i = 0, length=devsArr.length; i <  length; i++) {
    devs += devsArr[i].name + ', ';
  }
  let result = `I manage  ${devs} `;
  result = result.replace(/,\s*$/, "");
  console.log(result);
}

// Developer constructor
let Developer = function (name, age, skillset) {
  Person.call(this, name, age);
  this.skillset = skillset;
}

// Developer objects should inherit all methods from Person:
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.greet = function () {
  Person.prototype.greet.call(this);
  console.log(`I know ${this.skillset.join(', ')} `);
}

// Developer instance
let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

// Manager instance
let gates = new Manager('Bill Gates', 43, [maria, pesho]);

// use the objects:
maria.greet();
pesho.greet();
gates.greet();