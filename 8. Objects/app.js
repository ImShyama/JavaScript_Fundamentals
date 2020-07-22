// Arrays, Functions and Objects
// Objects - key/value pairs methods
// dot notation

const person = {
  firstName: 'john',
  lastName: 'peter',
  age: 34,
  education: false,
  married: true,
  siblings: ['anna', 'susan', 'peter'],
  greeting: function () {
    console.log('Hello my name is ' + person.firstName);
  },
  // another method of function greeting
  greeting() {
    console.log('Hello my name is ' + person.firstName + ' ' + person.lastName);
  },
};
const age = person.age;
console.log(age);

person.firstName = 'bob';
console.log(person.firstName);

console.log(person.siblings[2]);

person.greeting();
