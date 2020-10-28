// The Sum of a Range
function range(start, end, step) {
    let arr = [];
    if (step == undefined) {
        step = 1;   
    }

    if (start < end) {
        for(let i = start; i <= end; i+= step) {
            arr.push(i);
        }
    } else {
        for(let i = start; i >= end; i+= step) {
            arr.push(i);
        }
    }

    return arr;
}

function sum(arr) {
    let final_value = 0;
    for (let i = 0; i < arr.length; i++) {
        final_value += parseInt(arr[i]);
    }
    return final_value;
}

//console.log(sum(range(1, 10)))
//console.log(range(1, 10, 2))
//console.log(range(5, 2, -1))

// Reversing an Array
function reverse(arr) {
    let new_arr = [];
    while(arr.length > 0) {
        new_arr.push(arr.pop());
    }
    return new_arr
}

function reverseArrayInPlace(arr) {
    let num_swaps = Math.floor(arr.length / 2);
    let arr_len = arr.length;
    let temp = 0;
    for (let i = 0; i < num_swaps; i++) {
        temp = arr[i];
        arr[i] = arr[arr_len - (i + 1)];
        arr[arr_len - (i + 1)] = temp;
    }
    return arr;
}

//onsole.log(reverse([1,2,3,4,5]))
//console.log(reverse([10,8,6,4,2]))
//console.log(reverseArrayInPlace([1,2,3,4,5]))
//console.log(reverseArrayInPlace([1,2,3,4,5,6]))

// A List
function arrayToList(arr) {
    let list = {}
    list.value = arr[arr.length - 1];
    list.rest = null;

    for (let i = arr.length - 2; i >= 0; i--) {
        let cur_obj = {}
        cur_obj.value = arr[i];
        cur_obj.rest = list;
        list = cur_obj;
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    while (list.rest != null) {
        arr.push(list.value);
        list = list.rest;
    }
    arr.push(list.value);
}

//let str = JSON.stringify(arrayToList([1, 2, 3]), null, 2);
//console.log(str);

function prepend(value, list) {
    return {value, rest: list};
}

//listToArray(input_list)
//It wasn't clear what does element means!
//console.log(prepend(0, arrayToList([10, 20, 30])))
//console.log(prepend(10, prepend(20, null)));

function nth(list, position) {
    if (list.rest == null) {
        return undefined;
    }
    if (position == 0) {
        return list.value;
    }

    return nth(list.rest, position - 1);
}

//console.log(nth(arrayToList([10, 20, 30]), 0));
//console.log(nth(arrayToList([10, 20, 30, 35, 11, 99]), 6));

// Deep Comparison - Compare their properties
// If both values are object, we perform deep comparison

function deepEqual(value1, value2) {
    if (value1 === value2) {
        return true;
    }

    let type1 = typeof value1, type2 = typeof value2;

    // Check for null and type of value
    if (value1 === null || value2 === null || type1!="object" || type2!="object") {
        return false;
    }

    //Do deep comparison
    let value1_keys = Object.keys(value1), value2_keys = Object.keys(value2);
    for (let key of value1_keys) {
        if(!value2_keys.includes(key) || !deepEqual(value1[key], value2[key])) {            
            return false;
        }
    }
    
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true