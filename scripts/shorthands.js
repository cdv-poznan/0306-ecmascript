const name = 'Adrian';
const age = 123;
const status = true;

const person1 = {
  name: name,
  age: age,
  status: status
}

const person2 = { name, age, status };

console.log(person1);
console.log(person2);

function createPerson(name, age) {
  return {name, age};
}

const person3 = createPerson();
console.log(person3);

