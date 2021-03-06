const { threadId } = require("worker_threads");

// A Vector Type
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

// Groups
class Group {
    constructor() {
        this.group = [];
    }

    static from(array) {
        let grp = new Group();
        for(let i = 0; i <array.length; i++) {
            grp.add(array[i]);
        }
        return grp;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }

    add(val) {
        if (this.group.indexOf(val) === -1) {
            this.group.push(val);
        }
    }

    delete(val) {
        let val_index = this.group.indexOf(val);
        if (val_index != -1) {
            delete this.group[val_index];
        }
    }

    has(val) {
        let val_index = this.group.indexOf(val);
        if (val_index === -1) {
            return false;
        }
        return true;

    }

}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if(this.position >= this.group.group.length) {
            return {done: true};
        }
        else {
            let result = {value: this.group.group[this.position], done: false};
            this.position++;
            return result;
        }
    }

}

for (let value of Group.from(["a1", "b", "c", "112"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c