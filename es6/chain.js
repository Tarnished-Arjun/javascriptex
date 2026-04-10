
const users = [
  { id: 1, username: 'Alice', role: 'admin' },
  { id: 2, username: 'Bob', role: 'user' },
  { id: 3, username: 'Charlie', role: 'editor' }
];

function fetchUsers() {
  return new Promise((resolve, reject) => {
    if (users.length === 0) {
      reject("No users found");
    } else {
      resolve(users);
    }
  });
}

function countAdmins(userData) {
  return new Promise((resolve) => {
    let count = 0;

    for (let i = 0; i < userData.length; i++) {
      if (userData[i].role === "admin") {
        count++;
      }
    }

    resolve(count);
  });
}

fetchUsers()
  .then(data => {
    console.log("Users:", data);
    return countAdmins(data);
  })
  .then(count => {
    console.log("Admin count:", count);
  })
  .catch(error => {
    console.log(error);
  });