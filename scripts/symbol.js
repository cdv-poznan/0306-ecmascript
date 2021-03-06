const bool1 = Boolean("bool");
const num1 = Number("12");
const str1 = String("true");

const symbol1 = Symbol("symbol1");
const symbol2 = Symbol("symbol1");

console.log(bool1, num1, str1, symbol1);

console.log(symbol1 === symbol2);

const obj = {
  x: 1,
  y: 2,
  [symbol1]: 3,
  [symbol2]: 4,
  [Symbol()]: 5,
};

console.log(obj.x, obj.y, obj.symbol1, obj[symbol1]);
