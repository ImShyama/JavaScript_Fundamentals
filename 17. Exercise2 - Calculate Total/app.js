// Functions, return, if, arrays, for loop

const gas = [20, 40, 100];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 400, 500, 1]);

// Objects
console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});
