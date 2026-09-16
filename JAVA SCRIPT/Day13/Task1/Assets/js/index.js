const heading = document.getElementById("heading");

heading.textContent = "Welcome to JavaScript";

const paragraphs = document.querySelectorAll(".para");

paragraphs.forEach((para, index) => {
    para.textContent = "This is Paragraph " + (index + 1);
});