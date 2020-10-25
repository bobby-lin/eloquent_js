// Looping Triangle
let output = "#";

while (output.length < 7) {
    console.log(output);
    output += "#";
}

// FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i%3 == 0) {
        console.log("Fizz");
    } else if(i%5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Chessboard
let odd_row = " ";
let even_row = "#";
let size = 100;

for (let i = 0; i < size - 1; i++) {
    if (i%2 == 0) {
        odd_row += "#";
        even_row += " ";
    } else {
        odd_row += " ";
        even_row += "#";
    }
}

let chessboard = "";

for (let i = 0; i < size; i++) {
    if (i%2 == 0) {
        chessboard += odd_row;
    }  else {
        chessboard += even_row;
    }

    if (i + 1 < size) {
        chessboard += "\n";
    }
}

console.log(chessboard);
console.log("==========End=============")