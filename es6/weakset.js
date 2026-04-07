let weakSet = new WeakSet();

let p1 = { name: "Arjun", age: 20, email: "aarjunkrishna0081@mail.com" };
let p2 = { name: "Rossi", age: 42, email: "valentinorossi@mail.com" };

weakSet.add(p1);
weakSet.add(p2);

console.log(weakSet.has(p1)); 

weakSet.delete(p1);
console.log(weakSet.has(p1)); 