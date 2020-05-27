// software development is “the act of
// breaking a complex problem down into smaller problems, and composing simple solutions to form
// a complete solution to the complex problem.”

//1. What is function composition?

// Function composition is the process of applying a function to the output of another function.

const g = (n) => n + 1;
const f = (n) => n * 2;

let doStuff = (x) => {
  const afterG = g(x);
  const afterF = f(afterG);
  return afterF;
};

// console.log(doStuff(2));

// or in a better way

doStuff = (x) => f(g(x));

// console.log(doStuff(2));

// A common objection to this form is that it’s harder to debug. we can do something like this:

const trace = (label) => (value) => {
  console.log(`${label}: ${value}`);
  return value;
};

doStuff = (x) => {
  const afterG = g(x);
  trace("after g")(afterG);
  const afterF = f(afterG);
  trace("after f")(afterF);
  return afterF;
};

// doStuff(2);

// to make funcion composition easier we can create our compose funcion

const compose = (...fns) => (x) => fns.reduce((y, f) => f(y), x);

// point free style
const doStuffBetter = compose(g, trace("after g"), f, trace("after f"));

doStuffBetter(2);
