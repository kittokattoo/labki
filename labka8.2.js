const store = value => () => value;

const read = store(4);
const value = read();
console.log(value);