// Date

const months = [
  `January`,
  `Februry`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

const days = [
  `Sunday`,
  `monday`,
  `tuesday`,
  `Wednesday`,
  `Thuresday`,
  `Friday`,
  `Saturday`,
];

// const date = new Date();
const date = new Date(`1/12/2004`);

const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const Sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;

document.body.innerHTML = Sentence;
