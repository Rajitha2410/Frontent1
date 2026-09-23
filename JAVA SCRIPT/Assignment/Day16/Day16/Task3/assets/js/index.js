const card = document.getElementById("card");
const btn = document.getElementById("btn");

const style = document.createElement("style");

style.textContent = `
    #card {
        width: 250px;
        padding: 30px;
        background-color: white;
        color: black;
        border: 1px solid gray;
        text-align: center;
    }

    .dark {
        background-color: #222;
        color: white;
    }
`;

document.head.appendChild(style);

btn.addEventListener("click", () => {
    card.classList.toggle("dark");
});