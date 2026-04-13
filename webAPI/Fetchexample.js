async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();

    console.log("Title:", data.title);
    console.log("Completed:", data.completed);
  } catch (error) {
    console.log(error);
  }
}

getData();