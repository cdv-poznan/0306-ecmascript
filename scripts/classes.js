function Person1(name) {
  this.name = name;
}

const p1 = new Person1("Adrian");

class Person2 {
  static counter = 0;
  #name;
  #lastname;

  constructor(name, lastname) {
    this.#name = name;
    this.#lastname = lastname;
    this.id = Person2.counter++;
  }

  sayHello() {
    return 'Hello ' + this.#name;
  }

  get fullName() {
    return `${this.#name} ${this.#lastname}`;
  }

  set fullName(fullName) {
    const [name, lastname] = fullName.split(' ');
    this.#name = name;
    this.#lastname = lastname;
  }
}

const p2 = new Person2("Adrian", "Juszczak");


class Person3 {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
}

const p3 = new Person3('John', 'Doe');

console.log(p3.name);


class Person4 {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Hello ${this.name}`;
  }
}

class Student extends Person4 {
  sayGoodbye() {
    return `Goodbye ${this.name}`;
  }
}

const student1 = new Student('John');

class FrontEndStudent extends Student {
  code() {
    return `<html>${this.name}</html>`;
  }
}

const student2 = new FrontEndStudent('Alice');

