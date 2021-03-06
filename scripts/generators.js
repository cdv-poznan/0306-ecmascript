function* generator() {
  yield "Hello!";
  yield "World!";
  yield 123;
}

const results = generator();

for (let element of results) {
  console.log(element);
}

// console.log(generator);
// console.log(results.next());
// console.log(results.next());

function* naturalNumbers() {
  let num = 0;
  while (true) {
    yield num++;
  }
}

const numbers = naturalNumbers();
for (let num of numbers) {
  if (num > 13) break;
  console.log(num);
}
