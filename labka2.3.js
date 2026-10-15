function sum(...args) {
    let result = 0;
    let i = 0;

    while (i < args.length) {
        result += args[i];
        i++;
    }

    return result;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum());        // 0