let result = "";

for (let i = 1; i <= 20; i++) {
    result += i + " ";
}

console.log(result);

console.log("Even number single Line:");
let result = "";

for (let i = 1; i <= 50; i++) {

    if (i % 2 === 0) {
        result = result + i + " ";
    }

}

console.log(result);

console.log("Odd  number single Line:");
let result = "";

for (let i = 1; i <= 50; i++) {

    if (i % 2 !== 0) {
        result = result + i + " ";
    }

}

console.log(result);

console.log("sum");
let sum =0
for (let i = 0; i <=20; i++) {
    sum +=i
    
}
console.log(sum);


let sum = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(sum);

// TASK 1 – Print 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// TASK 2 – Print 10 to 1

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// TASK 3 – Odd Numbers 1 to 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// TASK 4 – Sum 1 to 20

let sum = 0;

for (let i = 1; i <= 20; i++) {
    sum += i;
}

console.log("Sum:", sum);


// TASK 5 – Even Sum 1 to 50

let evenSum = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
}

console.log("Even Sum:", evenSum);


// TASK 6 – Count Even Numbers

let evenCount = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenCount++;
    }
}

console.log("Even Count:", evenCount);


// TASK 7 – Find Number 73

for (let i = 1; i <= 100; i++) {
    if (i === 73) {
        console.log("Found:", i);
        break;
    }
}


// TASK 8 – Reverse Number

let number = 12345;
let reverseNumber = "";

let numString = number.toString();

for (let i = numString.length - 1; i >= 0; i--) {
    reverseNumber += numString[i];
}

console.log("Reverse Number:", reverseNumber);


// TASK 9 – Reverse String

let text = "javascript";
let reverseText = "";

for (let i = text.length - 1; i >= 0; i--) {
    reverseText += text[i];
}

console.log("Reverse String:", reverseText);


// TASK 10 – Find Character

let text2 = "javascript";
let target = "s";

for (let i = 0; i < text2.length; i++) {
    if (text2[i] === target) {
        console.log("Character Found:", target);
        break;
    }
}