function sum(...args) {
    let result = 0;

    for (const num of args) {
        result += num;
    }

    return result;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum());        // 0
