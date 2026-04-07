let bookstore = new Map();

bookstore.set("Atomic Habits", true);
bookstore.set("Ikigai", false);

for (let [book, available] of bookstore) {
  console.log(book, ":", available);
}
console.log(bookstore.get("Atomic Habits") ? "Available" : "Not Available");

let count = 0;
for (let val of bookstore.values()) {
  if (val) count++;
}
console.log("Total Available Books:", count);

bookstore.delete("Ikigai");
console.log(bookstore);