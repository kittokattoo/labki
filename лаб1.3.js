'use strict';

const arr = [
    true,
    "hello",
    52,
    12,
    -200,
    false,
    "word",
    2.17,
    true,
    "JavaScript",
    100,
    false
];

const count = {
    number: 0,
    string: 0,
    boolean: 0
};

for (const item of arr) {
    const type = typeof item;
    count[type]++;
}

console.log(count);