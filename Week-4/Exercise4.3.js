function* fibonacci() {
    let current = 0;
    let next = 1;
  
    while (true) {
      yield current;
      [current, next] = [next, current + next];
    }
  }
  
  const fib = fibonacci();
  
  console.log(fib.next().value); // Output: 0
  console.log(fib.next().value); // Output: 1
  console.log(fib.next().value); // Output: 1
  console.log(fib.next().value); // Output: 2
  console.log(fib.next().value); // Output: 3
  console.log(fib.next().value); // Output: 5
  