// Array Properties and Methods
let names = ['john', 'bobo', 'barry', 'olga', 'ben'];

// Length
console.log(names.length);
console.log(names[4]);
console.log(names[names.length - 1]);

// Concat
const lastName = ['pepper', 'onion', 'banana'];
const allName = names.concat(lastName);
console.log(allName);
// reverse
console.log(allName.reverse());

// unshift
allName.unshift('susy');
allName.unshift('anna');
console.log(allName);
// shift
allName.shift();
allName.shift();
allName.shift();
allName.shift();
console.log(allName);
// unshift
allName.unshift('susy');
allName.unshift('anna');
console.log(allName);
// push
allName.push('susy');
console.log(allName);
// pop
allName.pop();
allName.pop();
allName.pop();
allName.pop();
console.log(allName);

// Slice - mutates original array
const specificNames = allName.slice(1, 4);
console.log(specificNames);
console.log(allName);
