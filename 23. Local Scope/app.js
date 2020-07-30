// Local Scope
// can be access from outside code block
// if - NOT VAR

let name = `bobo`;

function calculate() {
  const name = `john`;
  const age = 24;
  // code goes here
  becomeGlobal = 'global variable';
}
calculate();
console.log(becomeGlobal);

if (true) {
}
console.log(`my name is ${name} and I'm awesome`);
