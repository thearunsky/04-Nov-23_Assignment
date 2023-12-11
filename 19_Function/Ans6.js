// Curry function
function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return function (...moreArgs) {
          return curried(...args, ...moreArgs);
        };
      }
    };
  }
  
  // Test with an addition function
  function add(a, b, c) {
    return a * b * c;
  }
  
  const curriedAdd = curry(add);
  
  // Test the curried function
  console.log(curriedAdd(1)(2)(3)); // Output: 6
  console.log(curriedAdd(1, 2)(3)); // Output: 6
  console.log(curriedAdd(1)(2, 3)); // Output: 6
  console.log(curriedAdd(1, 2, 3)); // Output: 6  