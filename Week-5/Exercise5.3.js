const hasDuplicate = arr => new Set(arr).size !== arr.length;

/* Write a function called hasDuplicate which accepts an array and returns true or false if that arraycontains a duplicate
Guidelines:
1.ReferencehasDuplicate([1,5,-1,4])// false
const hasDuplicate = arr => new Set(arr).size!==arr.length
2.JS function should have Set API implemented.
3.Bonus - if space and time complexity is taken care.
*/

const hasDuplicate = arr => {
    const set = new Set(arr);
    return set.size !== arr.length;
  }

/* The function creates a new Set object from the input array arr, which automatically removes any duplicates.
It then compares the size of the set with the length of the array, and 
if they are not equal, it means there was at least one duplicate element in the array, so the function returns true. 
Otherwise, it returns false.

The time complexity of this function is O(n) because it needs to iterate over the input array once to create the set, 
and the set operations (such as checking its size) are constant time O(1) operations. 
The space complexity is also O(n), because the worst-case scenario is when all the elements in the array are unique and need to be stored in the set.
*/