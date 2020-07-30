// Powerfull Array methods
// forEach, map, filter, find, reduce
// Iterate over array - no for loop required
// Accept CALLBACK function as an argument, calls Callback against each item in a array. Reference Item in the Callback Paramater.

const numbers = [0, 1, 2, 3, 4];

// show all numbers

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

/*--- forEach ---*/

// forEach
// does not return new array

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 22, position: 'designer' },
  { name: 'susy', age: 25, position: 'the boss' },
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
}

// people.forEach(showPerson);

people.forEach(function (item) {
  console.log(item.position.toUpperCase());
});

/*******  map  ********/

// map
// does return a new array
// does not change size of original array
// uses values from original array when making new one

const peoples = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 22, position: 'designer' },
  { name: 'susy', age: 25, position: 'the boss' },
  { name: 'anna', age: 35, position: 'the boss' },
];

const ages = peoples.map(function (persons) {
  // console.log(persons);
  return persons.age;
});

const newPeople = peoples.map(function (persons) {
  return {
    firstName: persons.name.toUpperCase(),
    oldAge: persons.age + 20,
  };
});

const names = peoples.map(function (persons) {
  return `<h1>${persons.name}</h1>`;
});

document.body.innerHTML = names.join('');
console.log(names);

console.log(newPeople);

console.log(ages);

/*********  Filter  **********/

// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

const ppls = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 22, position: 'designer' },
  { name: 'susy', age: 25, position: 'the boss' },
  { name: 'anna', age: 35, position: 'the boss' },
];

const youngPeople = ppls.filter(function (person) {
  return person.age <= 25;
});

const developers = ppls.filter(function (person) {
  return person.position === 'developer';
});

console.log(developers);
console.log(youngPeople);

/*********  find  *********/

// find
// return object
// return first match, if no match undefined
// great for getting unique value

const ppl = [
  { name: 'bob', age: 20, position: 'developer', id: 1 },
  { name: 'peter', age: 22, position: 'designer', id: 2 },
  { name: 'susy', age: 25, position: 'the boss', id: 3 },
  { name: 'anna', age: 35, position: 'the boss', id: 4 },
];

const name = [`bob`, `peter`, `susy`];
console.log(
  name.find(function (names) {
    return names === 'bob';
  })
);

const person = ppl.find(function (person) {
  return person.id === 2;
});

console.log(person);
console.log(person.name);

// difference between filter and find
// filter give result in array which is call by using there index.
const person2 = ppl.filter(function (person) {
  return person.id === 2;
});

console.log(person2[0].name);

/********  Reduce  ********/

// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculates
// 2 parameter ('curr') - current iterative/value

const ppl1 = [
  { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
  { name: 'peter', age: 22, position: 'designer', id: 2, salary: 300 },
  { name: 'susy', age: 25, position: 'the boss', id: 3, salary: 500 },
  { name: 'anna', age: 35, position: 'the boss', id: 4, salary: 500 },
];

const total = ppl1.reduce(function (acc, currItem) {
  console.log(`total ${acc}`);
  console.log(`current money:${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 0);

console.log(total);
