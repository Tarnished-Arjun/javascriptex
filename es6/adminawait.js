const users = [
  { id: 1, username: 'Alice', role: 'admin' },
  { id: 2, username: 'Bob', role: 'user' },
  { id: 3, username: 'Charlie', role: 'editor' }
];

function fetchUsers() {
  return new Promise((resolve, reject) => {
    if (users.length === 0) reject("No users found");
    else resolve(users);
  });
}

function countAdmins(userData) {
  return new Promise((resolve) => {
    let count = userData.filter(u => u.role === "admin").length;
    resolve(count);
  });
}

async function main() {
  try {
    let data = await fetchUsers();
    console.log("Users:", data);

    let count = await countAdmins(data);
    console.log("Admin count:", count);
  } catch (err) {
    console.log(err);
  }
}

main();