"use strict";

/* block scope */
if (true) {
  var x = 1;
  let y = 1;
  const z = 1;
}

function fn1() {
  console.log(a);
  var a = 1;
  console.log(a);
  a = 2;
  console.log(a);
}

function fn2() {
  let a;
  console.log(a);
  a = 1;
  console.log(a);
  a = 2;
  console.log(a);
}

function fn3() {
  const a = 1;
  console.log(a);
  a = 2;
  console.log(a);
}

// fn1();
// fn2();
// fn3();

const person = {
  name: "Adrian",
  age: 13,
  x: true,
  y: false,
};

Object.freeze(person); // zablokowanie możliwości edycji obiektu

const p2 = person; // ten sam obiekt (też freezed)

const p3 = Object.assign({}, person); // nowy obiekt (takie same klucze i wartości)

// HOISTING: tylko var!
