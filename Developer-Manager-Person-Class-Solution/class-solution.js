// class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`I'm ${this.name}, ${this.age} years old.`);
    }
}
class Developer extends Person {
    constructor(name, age, skills) {
        // call the parent constructor:
        super(name, age)
        this.skills = skills
    }

    greet() {
        // call the parent greet() method
        super.greet();
        console.log(`My skills are: ${this.skills.join(', ')}`);
    }
}

class Manager extends Person {
    constructor(name, age, managees) {
        // call the parent constructor:
        super(name, age)
        this.managees = managees;

    }

    greet() {
        // call the parent greet() method

        let devs = '';
        let devsArr = this.managees;

        for (var i = 0, length = devsArr.length; i < length; i++) {
            devs += devsArr[i].name + ', ';
        }
        let result = `I manage  ${devs} `;
        result = result.replace(/,\s*$/, "");

        super.greet();
        console.log(`${result}`);
    }
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