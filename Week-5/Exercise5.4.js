/*
Exercise5.4:
Create a simple Javascript function code for addition, subtraction, and multiplication of 2 numbers and
write the corresponding Jest based tests for it.

const mathOperations = {
  sum: function(a,b) {
    return a + b;
  },
  
  diff: function(a,b) {
    return a - b;
  },
  product: function(a,b) {
    return a * b
  }
}
module.exports = mathOperations

Guidelines:
1.Jest should’ve been installed.
2.Package.json file should have the config for running test cases.
3.Test case file should’ve been created. 
For example: calculator.test.js
4.BDD style tests for each function should’ve been created for the same.
5.All test cases should pass.
6.Reference: https://www.softwaretestinghelp.com/jest-testing-tutorial/

Outcome:
1.Understanding the importance of writing test cases.
2.How BDD works.
3.What are the packages required for writing test cases?
4.How to configure test cases in package.json file.
*/

// mathOperations.js
const mathOperations = {      // Defines an object called mathOperations with three functions: sum, diff, and product. 
  sum: function(a, b) {       // Each function takes two parameters and returns the result of the operation.
    return a + b;
  },
  diff: function(a, b) {
    return a - b;
  },
  product: function(a, b) {
    return a * b;
  },
};

module.exports = mathOperations;  // Allow mathOperations object to be used in other files by exporting it as a module.

// mathOperations.test.js
const mathOperations = require('./mathOperations'); // Define a test file called mathOperations.test.js. 
                                                    // Import the mathOperations module using require('./mathOperations').
describe('mathOperations', () => {                  // Describe function describes the test suite and  groups together related tests.
                                                    // Here, it describes the mathOperations object and its functions.
  test('adds 1 + 2 to equal 3', () => {             // test function defines individual tests with a description and an assertion. 
                                                    // The first test checks if calling mathOperations.sum(1, 2) returns 3.
    expect(mathOperations.sum(1, 2)).toBe(3);       // expect function is used for making assertions in Jest. In each test, we use the toBe method to check if the result of the math operation matches the expected value.
  });

  test('subtracts 2 from 4 to equal 2', () => {     // The second test checks if calling mathOperations.diff(4, 2) returns 2.
    expect(mathOperations.diff(4, 2)).toBe(2);
  });

  test('multiplies 3 by 4 to equal 12', () => {     // The third test checks if calling mathOperations.product(3, 4) returns 12.
    expect(mathOperations.product(3, 4)).toBe(12);   

  });
});




The second part of the code is a 

The describe function 

The 

The 
Overall, this code defines an object containing mathematical operations and tests each operation to ensure that it returns the expected result. This demonstrates how to use Jest to write automated tests for JavaScript code.









/*
In the above code, we added a multiplication function and wrote Jest based tests to ensure that all three functions are working correctly.
The Jest based tests check whether the output of each function is equal to the expected result.
The space and time complexity of these functions are constant (O(1)) as they are performing simple arithmetic operations on a small number of inputs. 
*/

/*
Jest is required to be installed to run the JS tests.

Install Jest, using the following command in the terminal:
npm install --save-dev jest
*/

/*
The package.json file should have the configuration for running test cases. 
The following lines are added to the package.json file to configure Jest:

"scripts": {
  "test": "jest"
},

This tells Jest to look for test files with a .test.js extension in the __tests__ directory, 
or any directory that matches the pattern **__tests__**  *.test.js
*/ 

/* 
These tests use the BDD style describe and it functions to define the behavior of each function. 
The expect function is used to make assertions about the output of each function.

Once the tests are written, you can run them using the following command in the terminal:
npm test

If all the test cases pass, you should see a message like "Test Suites: 1 passed, 1 total" in the terminal.
*/

