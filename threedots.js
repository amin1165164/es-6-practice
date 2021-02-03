const age = [10, 11, 12, 13];
const age1 = [14, 15, 16, 17];
const age2 = [18, 19, 20, 21];
const allAges = age.concat(age1).concat(age2);
const allAges2 = [age, age1, age2];
const allAges3 = [...age, ...age1, ...age2];
console.log(allAges);
console.log(allAges2);
console.log(allAges3);

const x = 10;
const y = 20;
const z = 15;
const largest = [650, 452, 985, 632];
const largestNumber = Math.max(...largest);
const greatestNumber = Math.max(x, y, z);
console.log(greatestNumber);
console.log(largestNumber);


