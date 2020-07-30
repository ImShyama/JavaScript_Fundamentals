function morning(name) {
  return `Good morning ${name}`;
}
function afternoon(name) {
  return `Good afternoon ${name}`;
}

function greet(name, cb) {
  const myname = 'john';
  console.log(`${cb(name)}, my name is ${myname}`);
}

greet('bobo', morning);
greet('peter', afternoon);
// Callback functions, Higher Order Functions, Functions as First Class Object/Citizens
// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// Higher Order function - accepts another function as an argument or return another as a result

// Callback Function - passed to a another function as an argument and executed inside that function

// function greetMorning(name) {
//   const myname = 'john';
//   console.log(`Good morning ${name}, my name is ${myname}`);
// }

// function greetAfternoon(name) {
//   const myname = 'john';
//   console.log(`Good afternoon ${name}, my name is ${myname}`);
// }
