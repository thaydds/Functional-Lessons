//Propriedades Funcoes
const add = (x, y) => x + y;
const mult = (x, y) => x * y;

const x = 1;
const y = 2;
const z = 3;

//Associative
add(add(x, y), z) === add(x, add(y, z));

//Commutative
add(x, y) === add(y, x);

//indentity
add(x, 0) === x;

// distributiva
add(mult(x, y), mult(x, z) === mult(x, add(y, z)));

//curry

// A curried function is a function that takes multiple parameters one at a time: It takes a parameter,
// and returns a function that takes the next parameter, and so on until all parameters have been
// supplied, at which point, the application is completed and the final value returned.

const curry = (f) => (x) => (y) => f(x, y);

const curriedAdd = curry(add);
const increment = curriedAdd(1);

// const result = increment(4);

const modulo = curry((x, y) => y % x);

const isOdd = modulo(2);

// const result = isOdd(2);

const filter = curry((f, xs) => xs.filter(f));

const getOdds = filter(isOdd);

const oddsArray = getOdds([1, 3, 4, 5, 6, 7, 8, 9]);

// console.log(oddsArray);

const highest = (x, y) => (x >= y ? x : y);

const max = (arr) => arr.reduce(highest, 0);

const result = max([2, 4, 1, 9, 7]);

console.log(result);

// Point-free style is a style of programming where function definitions do not make reference to the
// function’s arguments. Let’s look at function definitions in JavaScript:
