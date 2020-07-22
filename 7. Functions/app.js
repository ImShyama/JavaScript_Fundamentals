// Arrays, Functions and Objects
// Functions - declare, invoke

function hello() {
  console.log('hello there bob');
  console.log('hello there marle');
  console.log('hello there john');
}

hello();
hello();

// Arrays, Functions and Objects
// params - when declare/define
// placeholders, local vars
//arguments - when invike/call/run
// use vars/values, multiple params, undefined

function greet(name) {
  console.log('Hello there ' + name);
}

greet();
greet(4);
// greet bob
greet('bob');
// greet anna
greet('anna');
// greet susy
greet('susy');

// Array, Function and Objects
// return
// defult undefined, shortcuts, ignores after
// 1 inch 2.54cm
const wallHeight = 80;

function calculate(value) {
  // console.log('The value in cm is : ' + value * 2.54 + ' cm');
  return value * 2.54;
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimension = [width, height];
console.log(dimension);

// Array, Functions and Objects
// expressions - another way define a function
// create a variable, assign to FUNCTION (not value), use var
// diff - hoisting, use - arrow func, libraries,

//function definitions/declaration
function addValue(num1, num2) {
  return num1 + num2;
}

const firstvalue = addValue(2, 3);
const secondvalue = addValue(12, 34);
// function expersssion
const add = function (num1, num2) {
  return num1 + num2;
};
const thirdValue = add(5, 6);

const values = [firstvalue, secondvalue, thirdValue, 12, add(4, 5)];
console.log(values);

const multiply = (num1, num2) => num1 * num2;
