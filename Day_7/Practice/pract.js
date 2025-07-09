//HOF higher order function
//map
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8]

// forEach
let number = [1, 2, 3, 4];
number.forEach(function(n) {
  console.log(n * 2);
});

// filter
let numb = [1, 2, 3, 4, 5];
let even = numb.filter(function(m) {
  return m % 2 === 0;
});
console.log(even); // [2, 4]

// reduce
let no = [1, 2, 3, 4];
let sum = no.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 10 