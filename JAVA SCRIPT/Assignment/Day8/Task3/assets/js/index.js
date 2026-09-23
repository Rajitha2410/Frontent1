// Task 3
let nums = [11, 20, 35, 42, 50, 63, 78];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        document.getElementById("task3").innerHTML += nums[i] + "<br>";
    }
}

