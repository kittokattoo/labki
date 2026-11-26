const compose = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError(`compose: очікувалась функція, отримано ${typeof fn}`);
    }
  }
  const listeners = [];

  const composed = (...args) => {
    try {
      let result;
      for (let i = fns.length - 1; i >= 0; i--) {
        result = i === fns.length - 1 ? fns[i](...args) : fns[i](result);
      }
      return result;
    } catch (e) {
      for (const cb of listeners) cb(e);
      return undefined;
    }
  };
  composed.on = (name, cb) => {
    if (name === 'error' && typeof cb === 'function') listeners.push(cb);
    return composed;
  };
  return composed;
};
const inc = x => ++x;
const twice = x => x * 2;
const fail = () => { throw new Error('boom'); };
const f = compose(inc, twice);  // inc(twice(x))
console.log(f(5)); // 11
const g = compose(inc, fail, twice);
g.on('error', e => console.log('Піймано помилку:', e.message));
console.log(g(5));
const h = compose(inc, fail);
console.log(h(1)); 