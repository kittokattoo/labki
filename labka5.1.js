function seq(...fns) {
  return (...args) => {
    const [arg] = args;
    if (typeof arg === 'number') {
      return fns.reduceRight((acc, fn) => fn(acc), arg);
    }
    return seq(...fns, ...args);
  };
}
console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));
module.exports = { seq };