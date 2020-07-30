// Reference Vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Arrays, Functions, Objects = object

// When assigning primitive data type value to a variable any changes are made directly to that valse, without affecting original valse

// When assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

let number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = { name: 'bob' };
let person2 = person;
// let person2 = { ...person }; // dose note affect the reference value
person2.name = 'anna';
console.log(`the name of first person is ${person.name}`);
console.log(`the name of second person is ${person2.name}`);
