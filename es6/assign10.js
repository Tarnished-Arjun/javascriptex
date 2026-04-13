let namesSet = new Set(["Arjun", "Rossi", "Marc", "John", "Lewis", "Jordan"]);
let namesArray = [...namesSet];
let result = namesArray
  .filter(name => name.startsWith("J"))   
  .map(name => name.toUpperCase());       

result.forEach(name => console.log(name));