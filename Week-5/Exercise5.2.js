/*
Exercise5.2:
Write a function called vowelCount which accepts a string and returns a map where the keys arenumbers 
and the values are the count of the vowels in the string.
Guidelines:
1.JS function should have Map API implemented.
2.Map’s set functionality should have been used.
3.Bonus - if space and time complexity is taken care.4.Reference:


function isVowel(char) {
    return "aeiou".includes(char);
  }
  
  function vowelCount(str) {
    const vowelMap = new Map();
    for (let char of str) {
      let lowerCaseChar = char.toLowerCase();
      if (isVowel(lowerCaseChar)) {
        if (vowelMap.has(lowerCaseChar)) {
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }
*/


function vowelCount(str) {                // Define a function vowelCount to accept a string
  const vowelMap = new Map();             // Map API is used to create a new Map object called vowelMap. 
                                          // The vowelMap object is used to store the count of each vowel in the input string.
  const vowels = 'aeiou';                 // The vowels object defines the vowels
  for (let char of str.toLowerCase()) {   // Loop through each character of input string using a for...of loop. 
                                          // Convert each character to lowercase using the toLowerCase() method.
    if (vowels.includes(char)) {          // Check if the character is a vowel by using the includes() method of the vowels string. 
      vowelMap.set(char, (vowelMap.get(char) || 0) + 1);// If the character is a vowel, check if it already exists as a key in the vowelMap. 
                                          // If it does, increment the value associated with that key by 1 using the get() method and set() method. 
                                          // If it doesn't exist, create a new key-value pair with a value of 1 using the set() method.
    }
  }

  return vowelMap;                        // return the vowelMap object which contains the count of each vowel in the input string.
}  


/* 
This implementation ensures a time complexity of O(n) and space complexity of O(k),
 where n is the length of the input string and k is the number of unique vowels in the input string.
 */


