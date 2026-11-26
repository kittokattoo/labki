const contract = (fn, ...types) => {
  const resultType = types[types.length - 1];
  const argTypes = types.slice(0, -1);
  const isOfType = (value, type) =>
    value?.constructor === type || value instanceof type;
  const typeName = value =>
    value === null || value === undefined ? String(value) : value.constructor.name;
  return (...args) => {
    argTypes.forEach((type, i) => {
      if (!isOfType(args[i], type)) {
        throw new TypeError(
          `Аргумент #${i + 1}: очікувався ${type.name}, отримано ${typeName(args[i])}`
        );
      }
    });
    const result = fn(...args);
    if (!isOfType(result, resultType)) {
      throw new TypeError(
        `Результат: очікувався ${resultType.name}, отримано ${typeName(result)}`
      );
    }
    return result;
  };
};
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.dir(addNumbers(2, 3)); // 5
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.dir(concatStrings('Hello ', 'world!')); // Hello world!
try {
  addNumbers(2, '3'); // TypeError: Аргумент #2: очікувався Number, отримано String
} catch (e) {
  console.log(e.message);
}
try {
  contract(add, Number, Number, String)(2, 3); // TypeError: Результат: очікувався String, отримано Number
} catch (e) {
  console.log(e.message);
}