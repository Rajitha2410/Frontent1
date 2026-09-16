const heading = document.getElementById("heading");
const btn = document.getElementById("btn");

const style = document.createElement("style");

style.textContent = `
    .heading-style {
        font-size: 40px;
        font-weight: bold;
        text-align: center;
    }
`;

document.head.appendChild(style);

btn.addEventListener("click", () => {
    heading.textContent = "Welcome to JavaScript";
    heading.style.color = "blue";

    heading.classList.add("heading-style");
});