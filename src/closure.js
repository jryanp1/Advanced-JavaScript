// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  return () => {
    return ++count;
  };
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => { return ++count; },
    decrement: () => { return --count; },
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  return (...args) => {
    if (count === n) return null;
    count += 1;
    return cb(...args);
  };
};

/* Extra Credit */
const cacheFunction = (cb) => {
  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  /* return (args) => {
    const cacheKey = args.toString();
    if (!(cacheKey in cache)) {
      cache[cacheKey] = cb(args);
    }
    return cache[cacheKey];
  };
}; */
  return (input) => {
    // if input is already cached, don't do it
    if (Object.prototype.hasOwnProperty.call(cache, input)) return cache[input];
    // const something = Object.prototype.hasOwnProperty.call( , );
    // if (something) return cache[input];
    cache[input] = cb(input);
    return cache[input];
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount
};
