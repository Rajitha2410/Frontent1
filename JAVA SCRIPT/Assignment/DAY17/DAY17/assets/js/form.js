const userName = document.querySelector("#username");

const userEmail = document.querySelector("#useremail");

const userPassword = document.querySelector("#userpassword");

const registerBtn = document.querySelector("#registerbtn");

const myform = document.getElementById("myform");

const message = document.querySelector("#message");


myform.addEventListener("submit", (event) => {

    event.preventDefault();

    // Get input values
    const name = userName.value;
    const email = userEmail.value;
    const password = userPassword.value;


    // Check empty fields
    if (name === "" || email === "" || password === "") {

        message.textContent = "Please fill all fields";

        return;
    }


    // Create user object
    const user = {

        name: name,
        email: email,
        password: password

    };


    // Store user in LocalStorage
    localStorage.setItem("user", JSON.stringify(user));


    message.textContent = "Registration successful!";


    // Go to login page
    setTimeout(() => {

        window.location.href = "login.html";

    }, 1000);

});