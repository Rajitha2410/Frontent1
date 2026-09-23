const box = document.getElementById("box");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    box.classList.add("active");
});

const style = document.createElement("style");

style.textContent = `
    #box {
        width: 250px;
        padding: 30px;
        background-color: lightgray;
        color: black;
        text-align: center;
    }

    .active {
        background-color: purple;
        color: white;
    }
`;

document.head.appendChild(style);