function compareObjects(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

function check() {
  let obj1 = { name: "Arjun", age: 20 };
  let obj2 = { name: "arjun", age: 20 };

  let result = compareObjects(obj1, obj2);

  document.getElementById("result").innerHTML =
    result ? "Objects are Equal ✅" : "Objects are NOT Equal ❌";
}