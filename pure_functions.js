// What is a function?
// A function is a process which takes some input, called arguments, and produces some output called
// a return value

// A function should be:
//1. Total
//"For every input the is a correspoding output"
//2. Deterministic
//"Aways receive the same output for a given input"
//3. No Observable Side-Effects
//"No observable effects besides computing a value"

// is a function
const double = (x) => x * 2;

// Tiny, recursive autocurry
const curry = (f, arr = []) => (...args) =>
  ((a) => (a.length === f.length ? f(...a) : curry(f, a)))([...arr, ...args]);
