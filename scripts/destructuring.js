/* destructurying */

const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const first = array[0];
// const second = array[1];
// const third = array[2];

const [first, second, third] = array;
const {length} = array;

console.log(first, second, third, length);

// const name = person.name;
// const age = person.age;
// const y = person.y;

const {name: firstName, y, age = 0, z = 'default value'} = person;

console.log(firstName, age, y, z);


let a = 5;
let b = 7;

console.log(a, b);

[a, b] = [b, a];

console.log(a, b);

