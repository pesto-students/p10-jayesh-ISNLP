function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log();



/*
The output is 'Count is 0'

This code defines a function called createIncrement that returns an array containing two functions, 
  - increment
  - log. 

When called, createIncrement 
    - sets a variable called count to 0,
    - defines a function called increment that increments count by 1 each time it is called, 
    - sets a variable called message to 'Count is $count' where $count is the current value of count and it is initialized to 'Count is 0'
    - defines a function called log that logs the message to the console.

The line const [increment, log] = createIncrement(); 
    - calls createIncrement and assigns the two functions it returns, increment and log, 
    to variables of the same names using destructuring assignment.

The following three lines call increment three times, which increments count to 3.

The const statement destructures the returned array from createIncrement, 
assigning the increment function to a variable named increment and the log function to a variable named log.

The increment function is called three times, which increments the count variable to 3.

When the log function is called, it logs the message stored in the message variable to the console. 
However, the message variable was initialized before the increment function was called, 
so it still contains the string "Count is 0" instead of the updated value "Count is 3". 
*/