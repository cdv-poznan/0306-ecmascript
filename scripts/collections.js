const array1 = [1, 2, 3];
const array2 = new Array(1, 2, 3);

// console.log(array1, array2);

/* MAP */

const map1 = new Map();

// console.log(map1);

const map2 = new Map([
  [1, "a"],
  ["b", 2],
  [true, 5],
  [map1, 7],
  [array1, 8],
]);

// console.log(map2);
// console.log(map2.size);

map1.set(1, "a");
map1.set(2, "b");
map1.set(3, "c");

// console.log(map1);

const map3 = new Map();

map3.set(1, "b").set(2, "b").set(3, "c");

// console.log(map3);

// console.log(map3.get(2))
// console.log(map2.get(array1));

// console.log(map3.has(1));
// console.log(map3.has(1123));

map2.forEach((value, key) => {
  // console.log(key, ':', value);
});

/* SET */

const set1 = new Set();

const set2 = new Set([1, 2, 1, 4, 2, 4, 5]);

set2.add(6);
set2.add(6);
set2.add(2).add(7);

const array3 = [2, 4, 4, 4, 5, 6, 4, 3, 3, 4, 4, 5, 4, 4, 4, 4, 5, 5];

const unique1 = [...new Set(array3)];
const unique2 = new Array(...new Set(array3));
const unique3 = Array.from(new Set(array3));
