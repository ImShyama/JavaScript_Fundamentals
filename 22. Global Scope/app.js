// Global Scope
// any variable outside code block {} is said to be in Global Scope
// can be access anywhere in the program
// Gotchas : name collisions, modify by mistake

let name = `bobo`;
name = `peter`;

function calculate() {
  // some other code...
  console.log(name);
  name = `orange`;
}
calculate();

if (true) {
  // some other code...
  console.log(name);
  name = `pants`;
}
console.log(`my name is ${name} and I'm awesome`);
