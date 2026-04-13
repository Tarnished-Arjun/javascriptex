let count = 0;

let interval = setInterval(() => {
  count++;
  console.log("Count:", count);

  if (count === 5) {
    clearInterval(interval);
  }
}, 1000);