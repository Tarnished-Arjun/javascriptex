function addItem() {
  let list = document.getElementById("myList");
  let option = document.createElement("option");

  option.text = "New Item";
  list.add(option);
}

function removeItem() {
  let list = document.getElementById("myList");
  if (list.length > 0) {
    list.remove(list.length - 1);
  }
}