// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementByTagName('tagname');
// node-list = array-like object;
// index, length property but not array methods

const heading = document.getElementsByTagName('h2');
heading[0].style.color = 'red';
// console.log(heading.length);

const items = document.getElementsByTagName('li');

// items.forEach(function (item) {
//   console.log(item);
// });

items[1].style.color = 'orange';
const betterItems = [...items];

betterItems.forEach(function (item) {
  // console.log(item);
});
console.log(items);
console.log(betterItems);

// for (item in items) {
//  console.log(items[item]);
// }
