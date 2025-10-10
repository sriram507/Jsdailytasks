// Array to store users
let users = [];

// Get DOM elements
const addUserBtn = document.getElementById("addUser");
const showUsersBtn = document.getElementById("showUsers");
const clearUsersBtn = document.getElementById("clearUsers");
const userList = document.getElementById("userList");

// Function to display users
function showUserList() {
  userList.innerHTML = "";
  if (users.length === 0) {
    userList.innerHTML = "<p>No users found.</p>";
  } else {
    users.forEach(function(user, index) {
      const div = document.createElement("div");
      div.innerText = `${index + 1}. ${user.name} (${user.email})`;
      userList.appendChild(div);
    });
  }
}

// Add New User
addUserBtn.addEventListener("click", function() {
  let name = prompt("Enter user name:");
  if (!name || name.trim() === "") {
    alert("Please enter a valid name!");
    return;
  }

  // Use string methods
  name = name.trim().toUpperCase();
  const email = `${name.toLowerCase()}@example.com`;

  // Create object
  const user = {
    id: users.length + 1,
    name: name,
    email: email
  };

  users.push(user); // Array method
  alert("User added successfully!");
  showUserList();
});

// Show Users
showUsersBtn.addEventListener("click", function() {
  if (users.length === 0) {
    alert("No users to display!");
  } else {
    console.log("Users:", users); // Log in console
    showUserList();
  }
});

// Clear Users
clearUsersBtn.addEventListener("click", function() {
  if (users.length === 0) {
    alert("No users to clear!");
    return;
  }
  users = [];
  alert("All users cleared!");
  showUserList();
});
