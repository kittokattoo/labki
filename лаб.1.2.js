'use strict';

function inc(num){
    num.n = num.n + 9
}
const obj ={n: 10}
inc(obj);

console.dir(obj)

