// Conditional Statements
// >, <, >=, <=, ==, ===, !=, !===

const value = true;
const value1 = 2 > 1;
const value2 = 1 > 2;

if (false) {
  console.log('Hello World');
}

if (value) {
  console.log('Hello World');
}

if (value1) {
  console.log('Hello World');
}

if (value2) {
  console.log('Hello World');
} else {
  console.log('Hello world, This is a false statements');
}

// Conditional Statements
// Comparison Operators
// >, <, >=, <=, ==, ===, !=, !===
// else if and !

const num1 = 6;
const num2 = 6;
const result = num1 >= num2;

const val = false;

if (!val) {
  console.log('value is false');
}

if (num1 > num2) {
  console.log('first number is bigger then second');
} else if (result) {
  console.log('First number is equal to Second number');
} else {
  console.log('Second number is bigger then first');
}

// Conditional Statements
// Comparison Operators
// >, <, >=, <=, ==, ===, !=, !===
// == check only value
// === check value and type

// const num3 = 6;
// const num4 = '6';

// const val1 = num3 == num4;
// const val2 = num3 === num4; // check value and type

const num3 = 6;
const num4 = '6';

const val1 = num3 != num4;
const val2 = num3 !== num4; // check only value

console.log(val1);
console.log(val2);
