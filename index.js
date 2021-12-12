function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  if (reversed === str) return true;

  return false;
  
}
isPalindrome('racecar');
    //return (word === reverseWord);


    //isPalindrome('racecar', 'racecar')
     

      



    
  // Write your algorithm here
  //write a function named isPalindrome that receives 1 argument, a string. 
  //This function should return true if the string is a Palindrome and false if it is not.

/* create function. Pass a string as an argument (Palindrome). If string is a palindrome, return true. If not return false.
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
