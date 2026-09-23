// Task 4
let students = [
    { name: "Rajitha", mark: 85 },
    { name: "Priya", mark: 75 },
    { name: "Aswathi", mark: 90 },
    { name: "Anu", mark: 70 }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].mark > 80) {
        document.getElementById("task4").innerHTML += students[i].name + "<br>";
    }
}
