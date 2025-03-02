function fetchUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.responseText);
        displayUsers(users);
      } else {
        console.error("Failed to fetch users");
      }
    };
    xhr.send();
}
  
function displayUsers(users) {
    const ul = document.createElement("ul");
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

fetchUsers();