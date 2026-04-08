
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let result = numbers
  .filter(num => num % 2 === 0) 
  .map(num => num * num);        

console.log(result);