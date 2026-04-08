let namesSet = new Set(["Arjun", "Rossi", "Marc", "john", "Lewis", "Jordan"]);
let namesArray = [...namesSet];
let result = namesArray
  .filter(name => name.startsWith("J","j"))   
  .map(name => name.toUpperCase());       

result.forEach(name => console.log(name));