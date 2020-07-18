/* 
// Numbers
// Loosely typed = don't declare type

const number = 34;
// let pants = 2.456;
// pants = 'are great';
const number2 = 2.456;
const number3 = '2.456';

const add = number + number2;
const sub = number - number2;
const mul = number * number2;
const div = number / number2;

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);

// Numbers
// +=, -=, /=, *=, ++, --, %
// Modulus (%) operator returns the remainder after integer division

let number = 40;
number += 5;
number -= 5;
number++;
number--;
number %= 5;

console.log(number);

// Implicit type Conversion

const name = 'john';
const lastName = 'jordan';
const fullName = name + ' ' + lastName;
console.log(fullName);

const number = 4;
const number2 = 10;
const result = number + number2;
console.log(result);

const value = name - lastName;
console.log(value);

// let number3 = '10';
// let number4 = '13';
// const result2 = number3 - number4; //implicit type convesion here
// console.log(result2);

let number3 = 10;
let number4 = '13';
const result3 = number3 + number4; //implicit type convesion here
console.log(result3);

const randomNumber = 13;
document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault();
  let value = document.getElementById('amount').value;
  // value = parseInt(value);
  console.log('Input Value type');
  console.log(value);
  console.log('sum of two values');
  console.log(randomNumber + value);
});
 */
