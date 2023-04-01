
/*function createStack() {
   return{
      items:[],
      push(item) {
      this.items.push(item);
      },
   pop(){
      return this.items.pop();
      }
   };
}
const stack=createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5
console.log(stack.items);// => [10]
console.log(stack.items= [10,100,1000]);// Encapsulation broken!
*/

 /*
The above code gives an o/p as follows
5
[ 10 ]
[ 10, 100, 1000 ]

Defines a function createStack that returns an object with two methods: push and pop. 
- The push method adds an item to an internal items array, 
- The pop method removes the last item from the same items array and returns it.

The code then creates a stack object using the createStack function, 
- It calls the push method twice to add the numbers 10 and 5 to the stack.
- It then calls the pop method, which removes and returns the last item in the items array, which is 5.

Finally, the code attempts to modify the items array directly by assigning a new array [10,100,1000] to stack.items, 
- This bypasses the push and pop methods. 
- This breaks encapsulation as it allows external code to modify the internal state of the stack object without going through its methods.

 */

// Refactored Code

function createStack() {
    let items = [];
    
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }
  
  const stack = createStack();
  
  stack.push(10);
  stack.push(5);
  console.log(stack.pop()); // => 5
  console.log(stack.items); // => undefined

/*
The difference is in the implementation details.

Code 1 uses an object literal to create a stack object with two methods: push and pop. 
- When push is called, it adds the item to the items array using this.items, and
- when pop is called it removes the last item from the items array and returns it. 
- The items array is stored as a property of the object, and is accessed using this.items.

Code 2 uses a closure to create a stack object with two methods: push and pop. 
- When push is called, it adds the item to the items array, which is stored in the closure scope, and 
- when pop is called it removes the last item from the items array and returns it. 
- The items array is stored as a local variable of the createStack function, and is accessed directly without using this.

Code 1 creates a stack object using an object literal. 
- The createStack function returns an object that has two methods, push and pop, and a property items. 
- The push method uses this to refer to the items property of the object and adds an item to the end of the items array. 
- The pop method also uses this to refer to the items property and removes the last item from the items array.

Code 2 creates a stack object using a closure. 
- The createStack function returns an object that has two methods, push and pop, and a local variable items. 
- The push method adds an item to the end of the items array, which is a local variable. 
- The pop method removes the last item from the items array, which is also a local variable.
*/