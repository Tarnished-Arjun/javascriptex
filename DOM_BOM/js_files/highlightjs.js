function highlight() {
  let text = document.getElementById("para").innerHTML;
  let word = "Arjun";

  let newText = text.replace(word, `<span style="color:blue">${word}</span>`);
  document.getElementById("para").innerHTML = newText;
}