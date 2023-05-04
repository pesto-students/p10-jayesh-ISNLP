// Async/Await implementation:

function executeTasksAsync() {                        // Define a function called executeTasksAsync.
    return new Promise(async (resolve, reject) => {   // Returns new Promise (that takes args resolve & reject) created using the Promise constructor function. 
                                                      // async keyword => Promise constructor is being passed an async function as an argument.
      try {                                           // Begin a try-catch block that will handle any errors
        const result1 = await doTask1();              // Call doTask1 fn and wait for it to complete before assigning the result to a variable result1.
                                                      // await keyword is used here to pause the execution of the Promise until doTask1 is complete
        const result2 = await doTask2();              // Call doTask2 fn and wait for it to complete before assigning the result to a variable result2
        const result3 = await doTask3();              // Call doTask3 fn and wait for it to complete before assigning the result to a variable result3
        resolve([result1, result2, result3]);         // If all 3 tasks complete successfully => call resolve fn of Promise and pass it an array containing the results of each task
      } catch (error) {
        reject(error);                                // If any of the tasks throws an error => catch block will catch the error and call the reject fn, passing it the error
      }
    });
  }