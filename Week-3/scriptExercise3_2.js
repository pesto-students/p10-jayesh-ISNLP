// Example 1: Using Call

const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  const person2 = {
    firstName: 'Jane',
    lastName: 'Smith'
  };
  
  // Using call to invoke person1's fullName method with person2's context
  const fullName = person1.fullName.call(person2);
  console.log(fullName); // Output: "Jane Smith"
  
  
  // Example 2: Using Bind
  
  function greeting(message) {
    console.log(`${message}, ${this.name}!`);
  }
  
  const person = {
    name: 'John'
  };
  
  // Using bind to create a new function with the person object bound to 'this'
  const helloJohn = greeting.bind(person, 'Hello');
  helloJohn(); // Output: "Hello, John!"
  
  
  // Example 3: Using Apply
  
  function sum(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  
  // Using apply to pass the numbers array as individual arguments to the sum function
  const result = sum.apply(null, numbers);
  console.log(result); // Output: 6
  