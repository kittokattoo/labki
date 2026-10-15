'use strict';

function max(matrix) {
    let maximum = matrix[0][0];

    for (const row of matrix) {
        for (const num of row) {
            if (num > maximum) {
                maximum = num;
            }
        }
    }

    return maximum;
}

const m = max([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);

console.log(m); // 9
