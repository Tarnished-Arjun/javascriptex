const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3"
];

async function fetchData() {
  try {
    let responses = await Promise.all(urls.map(url => fetch(url)));
    let data = await Promise.all(responses.map(res => res.json()));

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();