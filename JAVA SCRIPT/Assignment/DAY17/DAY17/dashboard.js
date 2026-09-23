const welcome = document.querySelector("#welcome");

const name = document.querySelector("#name");

const email = document.querySelector("#email");

const logoutBtn = document.querySelector("#logoutbtn");


// Get user from LocalStorage
const storedUser = localStorage.getItem("user");


// Check if user exists
if (storedUser === null) {

    window.location.href = "login.html";

}
else {

    // Convert string into object
    const user = JSON.parse(storedUser);


    // Display user data
    welcome.textContent = "Welcome " + user.name;

    name.textContent = "Name: " + user.name;

    email.textContent = "Email: " + user.email;

}


// Logout
logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("user");

    window.location.href = "login.html";

});