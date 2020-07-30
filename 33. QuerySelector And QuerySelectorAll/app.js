// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css'); - selects all

const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';

const items = document.querySelector('.special');
console.log(items);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

const list = document.querySelectorAll('.special');

list.forEach(function (item) {
  console.log(item);
  item.style.color = 'white';
});
