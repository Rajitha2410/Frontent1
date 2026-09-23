const content = document.getElementById("content");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    content.classList.toggle("show");

    if (content.classList.contains("show")) {
        button.textContent = "Hide Details";
    } else {
        button.textContent = "Show Details";
    }
});