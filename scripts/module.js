// import {sayHello, X} from './script.js';
// import asd from './script.js';

// console.log(asd('User'))

document.addEventListener("click", async () => {
  const {sayHello} = await import("./script.js");
  sayHello('User');
});

// sayHello('User');
// console.log(X);
