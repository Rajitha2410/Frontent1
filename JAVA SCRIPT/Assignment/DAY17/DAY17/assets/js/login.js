const loginEmail = document.querySelector("#loginemail");

const loginPassword = document.querySelector("#loginpassword");

const loginForm = document.querySelector("#loginform");

const message = document.querySelector("#message");


loginForm.addEventListener("submit", (event) => {

    event.preventDefault();


    // Get entered values
    const email = loginEmail.value;

    const password = loginPassword.value;


    // Get user from LocalStorage
    const storedUser = localStorage.getItem("user");


    // Check if user exists
    if (storedUser === null) {

        message.textContent = "User not registered";

        return;
    }


    // Convert string into object
    const user = JSON.parse(storedUser);


    // Check email and password
    if (
        email === user.email &&
        password === user.password
    ) {

        message.textContent = "Login successful!";


        // Go to dashboard
        setTimeout(() => {

            window.location.href = "dashboard.html";

        }, 1000);

    } 
    else {

        message.textContent = "Invalid email or password";

    }

});