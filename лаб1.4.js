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

const count = {};

for (const item of arr) {
    const type = typeof item;

    if (!(type in count)) {
        count[type] = 0;
    }

    count[type]++;
}

console.log(count);