//  Generator implementation:


  function* executeTasksGenerator() {     // defines a generator function called executeTasksGenerator.
    try {                                 // starts a try block for error handling
      const result1 = yield doTask1();    // Pause generator & wait7 for promise returned by doTask1() to be resolved, 
                                          // then assigns the result to result1.
      const result2 = yield doTask2();    // same as above
      const result3 = yield doTask3();    // same as above
      return [result1, result2, result3]; // returns an array of the results from the three tasks
    } catch (error) {                     // starts a catch block for error handling
      throw error;                        // throw an error that was caught in the try block
    }
  }
  
  function executeTasksWithGenerator() {  // defines a new function called executeTasksWithGenerator
    const gen = executeTasksGenerator();  // create a new instance of the executeTasksGenerator generator.
    const results = [];                   // create an empty array to hold the results of the tasks
  
    function handleResult(result) {       // Defines a new function called handleResult that takes a result parameter. 
      results.push(result);               // Pushe the result to the results array
      const next = gen.next();            // Call gen.next() to move to the next task. If there are more tasks, it calls then() on the promise returned by the next task and passes in handleResult as the callback function.
      if (!next.done) {                   // If there are no more tasks, resolve the promise with the results array
        next.value.then(handleResult).catch(handleError);
      } else {
        resolve(results);
      }
    }
  
    function handleError(error) {         // defines a new function called handleError that takes an error parameter. It throws the error in the executeTasksGenerator generator.
      gen.throw(error);
    }
  
    return new Promise((resolve, reject) => {   // creates and returns a new promise. It calls gen.next() to start the generator, then checks if there are any tasks to run. If there are tasks, it calls then() on the promise returned by the first task and passes in handleResult as the callback function. If there are no tasks, it resolves the promise with an empty array.
      const first = gen.next();
      if (!first.done) {
        first.value.then(handleResult).catch(handleError);
      } else {
        resolve([]);
      }
    });
  }
  
/* Both implementations will execute doTask1(), doTask2(), and doTask3() in sequence and return an array with their results. 
  They take care of all 3 states of a Promise and will execute without errors if the doTaskX() functions are correctly defined.
  The Async/Await implementation uses the await keyword to pause the execution of the function until each task is completed, 
  while the Generator implementation uses yield to pause the generator and waits for the next() function to be called.
  */
