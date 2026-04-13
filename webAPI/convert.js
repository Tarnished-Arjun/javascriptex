var array = ['a', 1, 'b', 2, 'c', 3];

let obj = {};

for (let i = 0; i < array.length; i += 2) {
  obj[array[i]] = array[i + 1];
}

console.log(obj);