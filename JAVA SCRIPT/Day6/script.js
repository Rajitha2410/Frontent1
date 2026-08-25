// Task 6 – Count Even Numbers from 1 to 100
let evenCount = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenCount++;
    }
}

console.log("Even Count: " + evenCount);


// Task 7 – Find Number 73 from 1 to 100 using for loop and break
for (let i = 1; i <= 100; i++) {
    if (i === 73) {
        console.log("Found: " + i);
        break;
    }
}


// Task 8 – Reverse Number
let number = 12345;
let reverseNumber = "";

let numString = number.toString();

for (let i = numString.length - 1; i >= 0; i--) {
    reverseNumber += numString[i];
}

console.log(reverseNumber);


// Task 9 – Reverse String
let text = "javascript";
let reverseText = "";

for (let i = text.length - 1; i >= 0; i--) {
    reverseText += text[i];
}

console.log(reverseText);


// Task 10 – Find Character
let text2 = "javascript";
let target = "s";

for (let i = 0; i < text2.length; i++) {
    if (text2[i] === target) {
        console.log("Character Found: " + target);
        break;
    }
}
