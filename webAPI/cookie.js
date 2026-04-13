// Set Cookie
function setCookie(name, value, days) {
  let d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}


function getCookie(name) {
  let cname = name + "=";
  let decodedCookie = document.cookie;
  let arr = decodedCookie.split(";");

  for (let i = 0; i < arr.length; i++) {
    let c = arr[i].trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}


function login() {
  let user = document.getElementById("username").value;

  if (user === "") {
    alert("Please enter username");
    return;
  }

  setCookie("username", user, 1);
  document.getElementById("message").innerHTML =
    "Logged in successfully as " + user;
}


window.onload = function () {
  let user = getCookie("username");

  if (user !== "") {
    document.getElementById("message").innerHTML =
      "You are already logged in as " + user;
  }
};