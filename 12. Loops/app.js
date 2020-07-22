// Loops
// repeatedly run a block of code while condition is true
// while loop
// TURN OFF AUTOSAVE

let amount = 10;

while (amount > 0) {
  console.log('I have ' + amount + " dollars and I'm going to the mall");
  // if (amount == 10) {
  //   break;
  // }
  amount--;
}

// Loops
// repeatedly run a block of code while condition is true
// do while loop
// code block first, condition second
// runs at least

let money = 12;

do {
  console.log('You have ' + money + ' $');
  money++;
} while (money < 10);

// Loops
// repeatedly run a block of code while condition is true
//for loop

let i;
for (i = 0; i < 10; i++) {
  console.log('and the number is : ' + i);
}

for (let number = 11; number >= 0; number--) {
  console.log('and the number is : ' + number);
}
