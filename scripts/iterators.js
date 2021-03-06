const iterableObject = {
  items1: [5, 6, 7],
  items2: [3, 4, 5],
  [Symbol.iterator]() {
    const items = [...this.items1, ...this.items2];
    let index = 0;

    const iterator = {
      next() {
        return {
          value: items[index++],
          done: index > items.length,
        };
      },
    };
    return iterator;
  },
};

for (let item of iterableObject) {
  console.log(item);
}
