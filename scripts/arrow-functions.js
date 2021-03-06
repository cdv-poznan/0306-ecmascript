function add1(a, b) {
  return a + b;
}

const add2 = function (a, b) {
  return a + b;
};

const add3 = (a, b) => {
  return a + b;
};

const add4 = (a, b) => a + b;

console.log(add1(1, 2), add2(1, 2), add3(1, 2), add4(1, 2));

const double1 = function (n) {
  return n * 2;
};

const double2 = (n) => n * 2;

const double3 = (n) => n * 2;

console.log(double1(5), double2(5), double3(5));

document.addEventListener("click", function () {
  console.log(this.title);
});

document.addEventListener("click", () => {
  console.log(this.title);
});

const obj = {
  p1: "Hello!",
  p2: function () {
    console.log(this);
  },
  p3: () => {
    console.log(this);
  },
};

