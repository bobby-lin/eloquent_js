// Recursion
function isEven(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw "Please input a positive whole number";
    }
    if(n == 0) {
        return true;
    }
    else if(n == 1) {
        return false;
    }
    else {
        return isEven(n -2);
    }
}

console.log("50 is " + isEven(50));
console.log("75 is " + isEven(75));
//console.log(isEven(-1)); // The function will not end

// Bean Counting
function countBs(string) {
    return countChar(string, "B")
}

function countChar(string, count_char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == count_char) {
            count++;
        }
    }
    return count;
}

console.log(countBs("BoBByBaaaaB"));