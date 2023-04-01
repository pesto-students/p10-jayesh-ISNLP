function memoizeAdd(reducer) {
    const cache = {};
    return function(...args) {
      if (args.length < reducer.length) {
        throw new Error(`Expected ${reducer.length} arguments, but received ${args.length}`);
      }
      const key = args.join(',');
      if (cache.hasOwnProperty(key)) {
        console.log('Result from cache');
        console.log(`The sum of the given numbers [ ${args.join(', ')} ] is ${cache[key]}`); // add this line
        return cache[key];
      } else {
        console.log('Computing result');
        const result = reducer(...args);
        cache[key] = result;
        console.log(`The sum of the given numbers [ ${args.join(', ')} ] is ${result}`); // add this line
        return result;
      }
    }
  }
  
  function add(...nums) {
    return nums.reduce((acc, curr) => acc + curr);
  }
  
  const memoizeAdd1 = memoizeAdd(add);
  
  console.log(memoizeAdd1(100, 100)); // returns 200 (computed)
  console.log(memoizeAdd1(100)); // returns 100 (computed)
  console.log(memoizeAdd1(100, 200)); // returns 300 (computed)
  console.log(memoizeAdd1(100, 100)); // returns 200 (from cache)
  console.log(memoizeAdd1(100, 100, 200)); // returns 200 (from cache)
  