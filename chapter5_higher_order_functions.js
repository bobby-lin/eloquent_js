/*
Explore the higher order functions that are available for arrays
- reduce, filter, map, forEach etc.
*/

// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
//console.log(arrays.reduce((a, b) => a.concat(b),[])); // Initial array should be empty
//console.log(arrays.reduce((a, b) => a.concat(b),[0, 1, 2, 3, 4, 5, 6])); // You can add additional items initially

// Your Own Loop
function loop(cur_val, test, update, body) {
    while(test(cur_val)) {
        body(cur_val);
        cur_val = update(cur_val);
    }
}

// loop(3, n => n > 0, n => n - 1, console.log);

// Everything
function every(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if(!predicate(array[i])) {
            return false;
        }
    }
    return true;
}

function every_using_some(array, predicate) {
    // There is some element which does not meet predicate 
    // -> If some returns true, then we need to return false for every
    return !array.some(element => !predicate(element));
}

//console.log(every([1, 3, 5], n => n < 10));
//console.log(every([2, 4, 16], n => n < 10));
//console.log(every([], n => n < 10));

//Dominant Writing Direction
const SCRIPTS = require('./utils/script');

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } 
        else {
            counts[known].count++;
        }
    }
    return counts;
}

//console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

function dominantDirection(text) {
    let counted_items = countBy(text, n => {
        let script = characterScript(n.codePointAt(0));
        if(script != null) {
            return script;
        }
        return "none";
    }).filter(element => element.name != "none");

    return counted_items.reduce((a, b) => a.count > b.count ? a : b).name.direction;
}

console.log(dominantDirection("Hello!"));
// → ltr

console.log(dominantDirection("Hey, مساء الخير"));
 // → rtl

