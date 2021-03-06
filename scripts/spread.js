const array = [7, 6, 5, 4, 3, 2, 1];

function sum(a, b, c) {
  // console.log(a, b, c);
  return a + b + c;
}

const value1 = sum(array[0], array[1], array[2]);

const [first, second, third] = array;
const value2 = sum(first, second, third);

const value3 = sum(...array);

// console.log(value1, value2, value3);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const array4 = array1.concat(array2).concat(array3);

const array5 = [...array1, ...array2, ...array3];

const array6 = [ array1, array2, array3 ];

const array5_5 = [...array3, ...array1, ...array2];
// console.log(array5_5);

// console.log('array5', array5);
// console.log('array6', array6);

const array7 = array1;
const array8 = [...array1];

/*
const person = {name: 'Adrian', pesel: '0000'};
const company = {nip: '1111'}

const entity = {...person, ...company};
*/

const p1 = {name: 'Adrian', age: 23};
const p2 = {name: 'Paweł', nip: 321};

const p3 = {...p1, ...p2};
const p4 = {...p2, ...p1};

// console.log('p3', p3);
// console.log('p4', p4);

const array9 = [1, 2, 3, 4, 5, 6, 7];

const [a, b, ...rest] = array9;

console.log(a, b);
console.log(rest);


const {name, ...remaining} = p4;
console.log('name', name);
console.log('->', remaining);

