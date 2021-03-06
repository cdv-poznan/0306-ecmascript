const array1 = [8, 7, 6, 5, 4, 3];
const obj1 = { a: 1, b: 2, c: 3 };

/* for */
for (let i = 0; i < 0; i++) {
  // console.log(i);
}

for (let index = 0; index < array1.length; index++) {
  const value = array1[index];
  // console.log(index, value);
}

const objectKeys = Object.keys(obj1);
for (let index = 0; index < objectKeys.length; index++) {
  const key = objectKeys[index];
  const value = obj1[key];
  // console.log(index, key, value);
}


/* for in */
// console.log(obj1);
for (let key in obj1) {
  // console.log(key, obj1[key]);
}

/* for of */
// console.log(array1);
for (let value of array1) {
  // console.log(value);
}

const set2 = new Set([1, 2, 1, 4, 2, 4, 5]);

for (let value of set2) {
  console.log(value)
}

const map2 = new Map([
  [1, "a"],
  ["b", 2],
  [true, 5],
  [array1, 8],
]);

for (let value of map2.keys()) {
  console.log(value)
}

for (let value of map2.values()) {
  console.log(value)
}
