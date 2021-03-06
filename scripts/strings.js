const val1 = 'Hello!';
const val2 = true;

const str1 = val1 + ' can\'t ' + val2 + ' "World!" ';

const str2 = val1 + " can't " + val2 + " \"World\"! ";

const str3 = `${val1.toUpperCase()} can't ${val2 ? 'A' : 'B'} "World" `;

// console.log(str1);
// console.log(str2);
// console.log(str3);

const str4 = '1.\n2.\n3.';

const str5 = `1.
2.
  3.
    4.
      5.
`

console.log(str4);
console.log(str5);
